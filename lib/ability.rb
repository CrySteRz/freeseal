# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)

    if user.admin?
      can :manage, :all
      can :read, :all
    elsif user.editor?
      can :update, User, id: user.id # Editors can update their own profile
      can :manage, Template, account_id: user.account_id
      can :manage, TemplateFolder, account_id: user.account_id
      can :manage, Submission, account_id: user.account_id
      can :manage, Submitter, submission: { account_id: user.account_id }
    elsif user.viewer?
      can :read, Submission, account_id: user.account_id
      can :read, Template, account_id: user.account_id
      can :read, TemplateFolder, account_id: user.account_id
      can :read, Submitter, submission: { account_id: user.account_id }
      can :update, User, id: user.id
    else
      cannot :read, :all
    end

    # Only admins can manage other users
    can :create, User if user.admin?
    can :destroy, User if user.admin?
    can :update, User, account_id: user.account_id if user.admin? || user.editor?
  end
end
