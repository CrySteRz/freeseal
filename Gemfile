# frozen_string_literal: true

source 'https://rubygems.org'

ruby '3.3.1'

gem 'arabic-letter-connector', require: 'arabic-letter-connector/logic'
gem 'aws-sdk-s3', require: false
gem 'azure-storage-blob', require: false
gem 'bootsnap', require: false
gem 'cancancan'
gem 'csv'
gem 'devise'
gem 'devise-two-factor'
gem 'dotenv'
gem 'email_typo'
gem 'faraday'
gem 'faraday-follow_redirects'
gem 'google-cloud-storage', require: false
gem 'hexapdf'
gem 'image_processing'
gem 'jwt'
gem 'lograge'
gem 'mysql2', require: false
gem 'oj'
gem 'pagy'
gem 'pg', require: false
gem 'premailer-rails'
gem 'pretender'
gem 'puma'
gem 'rack'
gem 'rails'
gem 'rails_autolink'
gem 'rails-i18n'
gem 'rotp'
gem 'rqrcode'
gem 'ruby-vips'
gem 'rubyXL'
gem 'shakapacker'
gem 'sidekiq', require: ENV.key?('REDIS_URL')
gem 'sqlite3', require: false, force_ruby_platform: true
gem 'strip_attributes'
gem 'turbo-rails'
gem 'twitter_cldr', require: false
gem 'tzinfo-data'
gem 'rack-cors' 

group :development, :test do
  gem 'annotate'
  gem 'better_html'
  gem 'bullet'
  gem 'debug'
  gem 'erb_lint', require: false
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'pry-rails'
  gem 'rspec-rails'
  gem 'rubocop', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
  gem 'rubocop-rspec', require: false
  gem 'simplecov', require: false
end

group :development do
  gem 'letter_opener_web'
  gem 'web-console'
end

group :test do
  gem 'capybara'
  gem 'cuprite'
  gem 'webmock'
end
