# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  archived_at            :datetime
#  consumed_timestep      :integer
#  current_sign_in_at     :datetime
#  current_sign_in_ip     :string
#  email                  :string           not null
#  encrypted_password     :string           not null
#  failed_attempts        :integer          default(0), not null
#  first_name             :string
#  last_name              :string
#  last_sign_in_at        :datetime
#  last_sign_in_ip        :string
#  locked_at              :datetime
#  otp_required_for_login :boolean          default(FALSE), not null
#  otp_secret             :string
#  provider               :string
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  role                   :string           not null
#  sign_in_count          :integer          default(0), not null
#  uid                    :string
#  unlock_token           :string
#  uuid                   :string           not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  account_id             :bigint           not null
#
# Indexes
#
#  index_users_on_account_id            (account_id)
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_unlock_token          (unlock_token) UNIQUE
#  index_users_on_uuid                  (uuid) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (account_id => accounts.id)
#
class User < ApplicationRecord
  ROLES = %w[admin editor viewer].freeze

  EMAIL_REGEXP = /[^@;,<>\s]+@[^@;,<>\s]+/

  has_one_attached :signature
  has_one_attached :initials

  belongs_to :account
  accepts_nested_attributes_for :account
  has_one :access_token, dependent: :destroy
  has_many :templates, dependent: :destroy, foreign_key: :author_id, inverse_of: :author
  has_many :template_folders, dependent: :destroy, foreign_key: :author_id, inverse_of: :author
  has_many :user_configs, dependent: :destroy
  has_many :encrypted_configs, dependent: :destroy, class_name: 'EncryptedUserConfig'
  has_many :email_messages, dependent: :destroy, foreign_key: :author_id, inverse_of: :author

  devise :two_factor_authenticatable, :recoverable, :rememberable, :validatable, :trackable, :lockable, :registerable,
         :omniauthable, omniauth_providers: [:google_oauth2]

  attribute :role, :string, default: 'admin'
  attribute :uuid, :string, default: -> { SecureRandom.uuid }

  scope :active, -> { where(archived_at: nil) }
  scope :archived, -> { where.not(archived_at: nil) }
  scope :admins, -> { where(role: 'admin') }

  def access_token
    super || build_access_token.tap(&:save!)
  end

  def active_for_authentication?
    super && !archived_at? && !account.archived_at?
  end

  def remember_me
    true
  end

  def self.from_google(auth)
    user = find_or_initialize_by(email: auth.info.email)
    user.uid = auth.uid
    user.provider = 'google'
    user.first_name = auth.info.first_name
    user.last_name = auth.info.last_name
    user.password = Devise.friendly_token[0, 20] if user.new_record?
    # TODO: FINISH THIS
    user.account = Account.find_or_create_by() do |account|
      account.name = auth.info.name
      account.timezone = 'UTC'
      account.locale = 'en-US'
    end

    user.save!
    user
  end

  def self.sign_in_after_reset_password
    if PasswordsController::Current.user.present?
      !PasswordsController::Current.user.otp_required_for_login
    else
      true
    end
  end

  def initials
    [first_name&.first, last_name&.first].compact_blank.join.upcase
  end

  def full_name
    [first_name, last_name].compact_blank.join(' ')
  end

  def friendly_name
    if full_name.present?
      %("#{full_name.delete('"')}" <#{email}>)
    else
      email
    end
  end

  def admin?
    role == 'admin'
  end

  def editor?
    role == 'editor'
  end

  def viewer?
    role == 'viewer'
  end
end
