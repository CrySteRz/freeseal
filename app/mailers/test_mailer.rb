# app/mailers/test_mailer.rb
class TestMailer < ApplicationMailer
    def test_email
      mail(
        to: ENV.fetch('SMTP_USERNAME'),
        subject: 'Test Email',
        body: 'This is a test email to verify SMTP configuration.'
      )
    rescue StandardError => e
      Rails.logger.error("Failed to send test email: #{e.message}")
      raise
    end
  end
  