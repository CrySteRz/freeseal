# frozen_string_literal: true

class SubmitterMailer < ApplicationMailer
  MAX_ATTACHMENTS_SIZE = 10.megabytes
  SIGN_TTL = 1.hour + 20.minutes

  DEFAULT_INVITATION_SUBJECT = 'You are invited to submit a form'

  def invitation_email(submitter)
    @current_account = submitter.submission.account
    @submitter = submitter

    if submitter.preferences['email_message_uuid']
      @email_message = submitter.account.email_messages.find_by(uuid: submitter.preferences['email_message_uuid'])
    end

    @body = @email_message&.body.presence || @submitter.template.preferences['request_email_body'].presence
    @subject = @email_message&.subject.presence || @submitter.template.preferences['request_email_subject'].presence

    @email_config = AccountConfigs.find_for_account(@current_account, AccountConfig::SUBMITTER_INVITATION_EMAIL_KEY)

    subject =
      if @email_config || @subject
        ReplaceEmailVariables.call(@subject || @email_config.value['subject'], submitter:)
      else
        DEFAULT_INVITATION_SUBJECT
      end

      assign_message_metadata('submitter_invitation', @submitter)

    mail(
      to: @submitter.friendly_name,
      from: from_address_for_submitter(submitter),
      subject:,
      reply_to: submitter.preferences['reply_to'].presence ||
                (submitter.submission.created_by_user || submitter.template.author)&.friendly_name&.sub(/\+\w+@/, '@')
    )
  end

  def completed_email(submitter, user, to: nil)
    @current_account = submitter.submission.account
    @submitter = submitter
    @submission = submitter.submission
    @user = user

    Submissions::EnsureResultGenerated.call(submitter)

    @email_config = AccountConfigs.find_for_account(@current_account, AccountConfig::SUBMITTER_COMPLETED_EMAIL_KEY)

    add_completed_email_attachments!(
      submitter, with_audit_log: @email_config.nil? || @email_config.value['attach_audit_log'] != false
    )

    subject =
      if @email_config
        ReplaceEmailVariables.call(@email_config.value['subject'], submitter:)
      else
        submitters = submitter.submission.submitters.order(:completed_at)
                              .map { |e| e.name || e.email || e.phone }.join(', ')
        %(#{submitter.submission.template.name} has been completed by #{submitters})
      end

    assign_message_metadata('submitter_completed', @submitter)

    mail(from: from_address_for_submitter(submitter),
         to: to || (user.role == 'integration' ? user.friendly_name.sub(/\+\w+@/, '@') : user.friendly_name),
         subject:)
  end

  def documents_copy_email(submitter, to: nil, sig: false)
    @current_account = submitter.submission.account
    @submitter = submitter
    @sig = submitter.signed_id(expires_in: SIGN_TTL, purpose: :download_completed) if sig

    Submissions::EnsureResultGenerated.call(@submitter)

    @email_config = AccountConfigs.find_for_account(@current_account, AccountConfig::SUBMITTER_DOCUMENTS_COPY_EMAIL_KEY)

    @documents = add_completed_email_attachments!(
      submitter, with_audit_log: @email_config.nil? || @email_config.value['attach_audit_log'] != false
    )

    @subject = @submitter.template.preferences['documents_copy_email_subject'].presence
    @subject ||= @email_config.value['subject'] if @email_config

    @body = @submitter.template.preferences['documents_copy_email_body'].presence
    @body ||= @email_config.value['body'] if @email_config

    subject =
      if @subject.present?
        ReplaceEmailVariables.call(@subject, submitter:)
      else
        'Your document copy'
      end

    assign_message_metadata('submitter_documents_copy', @submitter)

    mail(from: from_address_for_submitter(submitter),
         to: to || @submitter.friendly_name,
         reply_to: @submitter.preferences['reply_to'].presence ||
                   (@submitter.submission.created_by_user ||
                    @submitter.template.author)&.friendly_name&.sub(/\+\w+@/, '@'),
         subject:)
  end

  private

  def add_completed_email_attachments!(submitter, with_audit_log: true)
    documents = Submitters.select_attachments_for_download(submitter)

    total_size = 0
    audit_trail_data = nil

    if with_audit_log && submitter.submission.audit_trail.present?
      audit_trail_data = submitter.submission.audit_trail.download

      total_size = audit_trail_data.size
    end

    total_size = add_attachments_with_size_limit(documents, total_size)

    attachments[submitter.submission.audit_trail.filename.to_s] = audit_trail_data if audit_trail_data

    file_fields = submitter.submission.template_fields.select { |e| e['type'].in?(%w[file payment]) }

    if file_fields.pluck('submitter_uuid').uniq.size == 1
      storage_attachments =
        submitter.attachments.where(uuid: submitter.values.values_at(*file_fields.pluck('uuid')).flatten)

      add_attachments_with_size_limit(storage_attachments, total_size)
    end

    documents
  end

  def add_attachments_with_size_limit(storage_attachments, current_size)
    total_size = current_size

    storage_attachments.each do |attachment|
      total_size += attachment.byte_size

      break if total_size >= MAX_ATTACHMENTS_SIZE

      attachments[attachment.filename.to_s] = attachment.download
    end

    total_size
  end

  def from_address_for_submitter(submitter)
    if submitter.submission.source.in?(%w[api embed]) &&
       (from_email = AccountConfig.find_by(account: submitter.account, key: 'integration_from_email')&.value.presence)
      from_email
    else
      (submitter.submission.created_by_user || submitter.submission.template.author).friendly_name
    end
  end
end
