# frozen_string_literal: true

class PasswordsController < Devise::PasswordsController
  around_action :with_browser_locale
  class Current < ActiveSupport::CurrentAttributes
    attribute :user
  end

  def create
    super do |resource|
      resource.errors.clear
    end
  end

  def update
    super do |resource|
      Current.user = resource
    end
  end
end
