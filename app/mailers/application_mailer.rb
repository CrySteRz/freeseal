# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: 'UVTSign <info@uvtsign.co>'
  layout 'mailer'

  register_interceptor ActionMailerConfigsInterceptor

  before_action do
    ActiveStorage::Current.url_options = Uvtsign.default_url_options
  end

  def default_url_options
    Uvtsign.default_url_options
  end
end
