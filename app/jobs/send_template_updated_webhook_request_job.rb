# frozen_string_literal: true

class SendTemplateUpdatedWebhookRequestJob < ApplicationJob
  queue_as :webhooks

  USER_AGENT = 'UVTSign.co Webhook'

  MAX_ATTEMPTS = 10

  def perform(template, params = {})
    attempt = params[:attempt].to_i
    url = Accounts.load_webhook_url(template.account)

    return if url.blank?

    preferences = Accounts.load_webhook_preferences(template.account)

    return if preferences['template.updated'].blank?

    resp = begin
      Faraday.post(url,
                   {
                     event_type: 'template.updated',
                     timestamp: Time.current,
                     data: Templates::SerializeForApi.call(template)
                   }.to_json,
                   'Content-Type' => 'application/json',
                   'User-Agent' => USER_AGENT)
    rescue Faraday::Error
      nil
    end

    if (resp.nil? || resp.status.to_i >= 400) && attempt <= MAX_ATTEMPTS &&
       template.account.account_configs.exists?(key: :plan)
      SendTemplateUpdatedWebhookRequestJob.set(wait: (2**attempt).minutes)
                                          .perform_later(template, {
                                                           attempt: attempt + 1,
                                                           last_status: resp&.status.to_i
                                                         })
    end
  end
end
