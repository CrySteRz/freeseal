# frozen_string_literal: true

class DashboardController < ApplicationController
  before_action :redirect_unauthenticated_user
  before_action :maybe_redirect_mfa_setup, if: :signed_in?
  skip_authorization_check

  def index
    if cookies.permanent[:dashboard_view] == 'submissions'
      SubmissionsDashboardController.dispatch(:index, request, response)
    else
      TemplatesDashboardController.dispatch(:index, request, response)
    end
  end

  private

  def redirect_unauthenticated_user
    return if signed_in?

    redirect_to new_user_session_path
  end

  def maybe_redirect_mfa_setup
    return if current_user.otp_required_for_login

    return unless AccountConfig.exists?(value: true, account_id: current_user.account_id, key: AccountConfig::FORCE_MFA)

    redirect_to mfa_setup_path, notice: 'Setup 2FA to continue'
  end
end
