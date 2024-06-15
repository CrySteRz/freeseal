class RegistrationsController < Devise::RegistrationsController
  def new
    build_resource({})
    resource.build_account
    respond_with resource
  end

  private

  def sign_up_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, account_attributes: [:name])
  end

  def account_update_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :current_password)
  end

  def build_resource(hash = {})
    super
    return unless hash[:account_attributes]

    resource.account = Account.new(hash[:account_attributes])
  end
end
