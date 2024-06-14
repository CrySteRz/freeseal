# frozen_string_literal: true

module Embed
  class EmbedsController < ApplicationController
    protect_from_forgery with: :null_session # To handle CSRF protection for API requests
    skip_before_action :authenticate_user!
    skip_before_action :verify_authenticity_token
    skip_authorization_check
    before_action :load_template, only: %i[forms_create]

    def forms_create
      email = params[:email]
      slug = params[:slug]
      resubmit = params[:resubmit]

      submission = find_submission(slug, email)

      if submission.nil?
        submission = create_submission(email, @template)
        render json: new_submission_response(submission)
      elsif resubmit
        submission = create_submission(email, @template)
        render json: new_submission_response(submission)
      elsif submission_completed?(submission)
        render json: completed_submission_response(submission)
      else
        render json: new_submission_response(submission)
      end
    end

    private

    def load_template
      @template = Template.find_by(slug: params[:slug])
      render json: { status: 'error', message: 'Template not found' }, status: :not_found unless @template
    end

    def find_submission(slug, email)
      Submission.joins(:submitters, :template)
                .where(templates: { slug: slug }, submitters: { email: email })
                .where.not(submitters: { completed_at: nil })
                .where(archived_at: nil)
                .first
    end

    def submission_completed?(submission)
      submission.submitters.where(completed_at: nil).empty?
    end

    def c_user(template)
      User.find_by(account_id: Template.find(template.id).account_id)
    end

    def create_submission(email, template)
      submission = Submissions.create_from_emails(
        template: template,
        user: c_user(template),
        emails: [email],
        source: 'embed',
        mark_as_sent: false,
        params: {}
      ).first

      Submissions.update_template_fields!(submission)
      Submissions.preload_with_pages(submission)

      submission
    end

    def completed_submission_response(submission)
      {
        sandbox: false,
        template: {
          id: submission.template.id,
          slug: submission.template.slug,
          name: submission.template.name
        },
        submission: nil,
        submitter: nil,
        values: {},
        documents: nil,
        attachments: nil,
        logo: nil,
        completed_submitter: {
          id: submission.submitters.first.id,
          submission_id: submission.id,
          email: submission.submitters.first.email,
          completed_at: submission.submitters.first.completed_at
        }
      }
    end

    def new_submission_response(submission)
      submitter = submission.submitters.first

      {
        sandbox: false,
        template: {
          id: submission.template.id,
          slug: submission.template.slug,
          name: submission.template.name
        },
        submission: {
          id: submission.id,
          template_fields: serialize_template_fields(submission.template_fields),
          template_schema: submission.template_schema,
          template_submitters: submission.template_submitters
        },
        submitter: {
          id: submitter.id,
          uuid: submitter.uuid,
          email: submitter.email,
          slug: submitter.slug,
          values: submitter.values,
          name: submitter.name,
          phone: submitter.phone,
          external_id: submitter.external_id,
          preferences: {
            send_email: true,
            send_sms: false
          },
          application_key: submitter.application_key
        },
        values: {},
        documents: serialize_documents(submission.template_schema_documents),
        attachments: [],
        logo: nil,
        completed_submitter: nil
      }
    end

    def serialize_documents(documents)
      documents.map do |document|
        {
          id: document.id,
          name: document.name,
          uuid: document.uuid,
          record_type: 'Template',
          record_id: document.record_id,
          blob_id: document.blob_id,
          created_at: document.created_at,
          metadata: {
            analyzed: document.analyzed,
            pdf: {},
          },
          signed_uuid: document.signed_uuid,
          preview_images: serialize_preview_images(document.preview_images)
        }
      end
    end

    def serialize_template_fields(template_fields)
      template_fields.map do |field|
        {
          uuid: field['uuid'],
          submitter_uuid: field['submitter_uuid'],
          name: field['name'],
          type: field['type'],
          required: field['required'],
          areas: field['areas']
        }
      end
    end

    def serialize_preview_images(preview_images)
      preview_images.map do |image|
        {
          id: image.id,
          name: image.name,
          uuid: image.uuid,
          url: image.url,
          metadata: image.metadata,
          filename: image.filename
        }
      end
    end
  end
end
