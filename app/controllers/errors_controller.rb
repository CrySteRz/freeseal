# frozen_string_literal: true

class ErrorsController < ActionController::Base
  SAFE_ERROR_MESSAGE_CLASSES = [
    ActionDispatch::Http::Parameters::ParseError,
    JSON::ParserError
  ].freeze

  def show
    respond_to do |format|
      format.json do
        set_cors_headers

        exception = request.env['action_dispatch.exception']
        error = exception.message if exception.class.in?(SAFE_ERROR_MESSAGE_CLASSES)

        render json: { status: error_status_code, error: error }.compact, status: error_status_code
      end

      format.html do
        render template: "errors/#{error_status_code}", status: error_status_code
      end
    end
  end

  private

  def set_cors_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, PATCH, DELETE, OPTIONS'
    headers['Access-Control-Allow-Headers'] = '*'
    headers['Access-Control-Max-Age'] = '1728000'
    headers['Access-Control-Allow-Credentials'] = true
  end

  def error_status_code
    @error_status_code ||=
      ActionDispatch::ExceptionWrapper.new(request.env, request.env['action_dispatch.exception']).status_code
  end
end
