# frozen_string_literal: true

module Api
    
    class SubmissionsDownloadController < ApiBaseController
      load_and_authorize_resource :submission
      

      TTL = 40.minutes
      FILES_TTL = 5.minutes

      def download
        submitter = Submitter.find_by!(slug: params[:slug])

        Submissions::EnsureResultGenerated.call(submitter)

        last_submitter = submitter.submission.submitters.where.not(completed_at: nil).order(:completed_at).last

        Submissions::EnsureResultGenerated.call(last_submitter)

        return head :not_found unless last_submitter.completed_at?

        if last_submitter.completed_at < TTL.ago && !current_user_submitter?(last_submitter)
          Rollbar.info("TTL: #{last_submitter.id}") if defined?(Rollbar)
          return head :not_found
        end

        render json: build_urls(last_submitter)
      end

      private

      def current_user_submitter?(submitter)
        current_user && current_user.account.submitters.exists?(id: submitter.id)
      end

      def build_urls(submitter)
        Submitters.select_attachments_for_download(submitter).map do |attachment|
          ActiveStorage::Blob.proxy_url(attachment.blob, expires_at: FILES_TTL.from_now.to_i)
        end
      end
    end
end
