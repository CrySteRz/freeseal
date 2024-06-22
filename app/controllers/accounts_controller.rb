class AccountsController < ApplicationController
  LOCALE_OPTIONS = {
    'en-US' => 'English (United States)',
    'en-GB' => 'English (United Kingdom)',
    'fr-FR' => 'French (France)',
    'es-ES' => 'Spanish (Spain)',
    'pt-PT' => 'Portuguese (Portugal)',
    'de-DE' => 'German (Germany)'
  }.freeze

  before_action :load_account
  authorize_resource :account

  def show; end

  def update
    if current_account.update(account_params)
      Uvtsign.refresh_default_url_options!
      redirect_to settings_account_path, notice: 'Account information has been updated'
    else
      render :show, status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordInvalid
    render :show, status: :unprocessable_entity
  end

  def destroy
    authorize!(:manage, current_account)

    true_user.update!(locked_at: Time.current)

    render turbo_stream: turbo_stream.replace(
      :account_delete_button,
      html: helpers.tag.p('Your account removal request will be processed within 2 weeks. ' \
                          'Please contact us if you want to keep your account.')
    )
  end

  private

  def load_account
    @account = current_account
  end

  def account_params
    params.require(:account).permit(:name, :timezone, :locale)
  end
end
