# frozen_string_literal: true

module Embed
  module Api
    class AttachmentsController < ApplicationController
      protect_from_forgery with: :null_session # To handle CSRF protection for API requests
      skip_before_action :authenticate_user!
      skip_before_action :verify_authenticity_token
      skip_authorization_check

      def create
        submitter = Submitter.find_by!(slug: params[:submitter_slug])

        attachment = Submitters.create_attachment!(submitter, params)

        render json: attachment.as_json(only: %i[uuid], methods: %i[url filename content_type])
      end
    end
  end
end
