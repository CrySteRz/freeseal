# frozen_string_literal: true
module Embed
  class SubmitFormController < ApplicationController
    layout 'form'
    protect_from_forgery with: :null_session
    around_action :with_browser_locale, only: %i[show completed success]
    skip_before_action :authenticate_user!
    skip_authorization_check

    PRELOAD_ALL_PAGES_AMOUNT = 200

    def show
      @submitter = Submitter.find_by!(slug: params[:slug])

      return redirect_to submit_form_completed_path(@submitter.slug) if @submitter.completed_at?

      ActiveRecord::Associations::Preloader.new(
        records: [@submitter],
        associations: [submission: [:template, { template_schema_documents: :blob }]]
      ).call

      total_pages =
        @submitter.submission.template_schema_documents.sum { |e| e.metadata.dig('pdf', 'number_of_pages').to_i }

      if total_pages < PRELOAD_ALL_PAGES_AMOUNT
        ActiveRecord::Associations::Preloader.new(
          records: @submitter.submission.template_schema_documents,
          associations: [:blob, { preview_images_attachments: :blob }]
        ).call
      end

      Submitters::MaybeUpdateDefaultValues.call(@submitter, current_user)

      render(@submitter.submission.template.archived_at? || @submitter.submission.archived_at? ? :archived : :show)
    end

    def update
      submitter = Submitter.find_by!(slug: params[:slug])

      if submitter.completed_at?
        return render json: { error: 'Form has been completed already.' }, status: :unprocessable_entity
      end

      if submitter.submission.template.archived_at? || submitter.submission.archived_at?
        Rollbar.info("Archived template: #{submitter.template.id}") if defined?(Rollbar)

        return render json: { error: 'Form has been archived.' }, status: :unprocessable_entity
      end

      Submitters::SubmitValues.call(submitter, params, request)

      if params[:completed] == 'true'
        submitter.update!(completed_at: Time.current)
        role = fetch_role_from_submission(submitter)
        submission_url = build_submission_url(submitter.submission.slug)
        download_url = build_download_url(submitter.slug)

        return render json: {
          completed_at: submitter.completed_at,
          download_url: download_url,
          ip: submitter.ip,
          ua: submitter.ua,
          id: submitter.id,
          submission_id: submitter.submission_id,
          email: submitter.email,
          sent_at: submitter.sent_at,
          opened_at: submitter.opened_at,
          created_at: submitter.created_at,
          updated_at: submitter.updated_at,
          name: submitter.name,
          phone: submitter.phone,
          external_id: submitter.external_id,
          metadata: submitter.metadata,
          status: 'completed',
          application_key: submitter.application_key,
          role: role,
          preferences: submitter.preferences,
          submission_url: submission_url,
          template: {
            id: submitter.submission.template.id,
            name: submitter.submission.template.name,
            created_at: submitter.submission.template.created_at,
            updated_at: submitter.submission.template.updated_at,
            external_id: submitter.submission.template.external_id,
            folder_name: submitter.submission.template.folder.name
          },
          submission: {
            id: submitter.submission.id,
            audit_log_url: submitter.submission.audit_log_url,
            created_at: submitter.submission.created_at,
            status: 'completed',
            url: submission_url
          }
        }
      end

      head :ok
    rescue Submitters::SubmitValues::ValidationError => e
      render json: { error: e.message }, status: :unprocessable_entity
    end

    def completed
      @submitter = Submitter.completed.find_by!(slug: params[:submit_form_slug])
    end

    def success; end

    private

    def fetch_role_from_submission(submitter)
      submitter_uuid = submitter.uuid
      submission = submitter.submission
      template_submitters = submission.template_submitters

      submitter_info = template_submitters.find { |s| s['uuid'] == submitter_uuid }
      submitter_info ? submitter_info['name'] : 'Unknown Role'
    end

    def build_submission_url(submission_slug)
      "#{ENV['FORCE_SSL'].present? ? 'https' : 'http'}://#{Uvtsign::HOST}/e/#{submission_slug}"
    end

    def build_download_url(submitter_slug)
      "#{ENV['FORCE_SSL'].present? ? 'https' : 'http'}://#{Uvtsign::HOST}/api/submissions/#{submitter_slug}/download"
    end
  end
end
