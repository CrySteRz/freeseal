# frozen_string_literal: true

class SendFormStartedWebhookRequestJob < ApplicationJob
  queue_as :webhooks

  USER_AGENT = 'UVTSign.co Webhook'

  MAX_ATTEMPTS = 10

  def perform(submitter, params = {})
    attempt = params[:attempt].to_i
    url = Accounts.load_webhook_url(submitter.submission.account)

    return if url.blank?

    preferences = Accounts.load_webhook_preferences(submitter.submission.account)

    return if preferences['form.started'] == false

    ActiveStorage::Current.url_options = Uvtsign.default_url_options

    resp = begin
      Faraday.post(url,
                   {
                     event_type: 'form.started',
                     timestamp: Time.current,
                     data: Submitters::SerializeForWebhook.call(submitter)
                   }.to_json,
                   'Content-Type' => 'application/json',
                   'User-Agent' => USER_AGENT)
    rescue Faraday::Error
      nil
    end

    if (resp.nil? || resp.status.to_i >= 400) && attempt <= MAX_ATTEMPTS &&
       submitter.account.account_configs.exists?(key: :plan)
      SendFormStartedWebhookRequestJob.set(wait: (2**attempt).minutes)
                                      .perform_later(submitter, {
                                                       attempt: attempt + 1,
                                                       last_status: resp&.status.to_i
                                                     })
    end
  end
end
