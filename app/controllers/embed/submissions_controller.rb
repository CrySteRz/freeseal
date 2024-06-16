# frozen_string_literal: true

module Embed
    class SubmissionsController < ApplicationController
      protect_from_forgery with: :null_session
      skip_before_action :authenticate_user!
      skip_authorization_check
      before_action :find_submitter, only: :send_email
  
      def send_email
        return render json: { error: 'Submitter not found' }, status: :not_found unless @submitter
  
        SubmitterMailer.documents_copy_email(@submitter).deliver_later
  
        @submitter.sent_at ||= Time.current
        @submitter.save!
  
        render json: { message: 'Email has been sent' }, status: :ok
      end
  
      private
  
      def find_submitter
        if params[:submitter_slug]
          @submitter = Submitter.find_by(slug: params[:submitter_slug])
        elsif params[:template_slug] && params[:email]
          submission = find_submission(params[:template_slug], params[:email])
          @submitter = submission&.submitters&.find_by(email: params[:email]) if submission
        end
      end
  
      def find_submission(slug, email)
        Submission.joins(:submitters, :template)
                  .where(templates: { slug: slug }, submitters: { email: email })
                  .where.not(submitters: { completed_at: nil })
                  .where(archived_at: nil)
                  .first
      end
    end
  end
  