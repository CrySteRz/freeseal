# frozen_string_literal: true
module Embed
  class SubmitFormValuesController < ApplicationController
    protect_from_forgery with: :null_session
    skip_before_action :authenticate_user!
    skip_authorization_check

    def index
      submitter = Submitter.find_by!(slug: params[:submit_form_slug])

      if submitter.completed_at? || submitter.submission.template.archived_at? || submitter.submission.archived_at?
        return render json: {}
      end

      value = submitter.values[params['field_uuid']]
      attachment = submitter.attachments.where(created_at: params[:after]..).find_by(uuid: value) if value.present?

      if params[:completed] == 'true'
        submitter.update(completed_at: Time.current)
      end

      render json: {
        value:,
        attachment: attachment&.as_json(only: %i[uuid], methods: %i[url filename content_type])
      }, head: :ok
    end
  end
end
