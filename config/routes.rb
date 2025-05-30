# frozen_string_literal: true

Rails.application.routes.draw do
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
  mount Sidekiq::Web => '/sidekiq' if defined?(Sidekiq)

  root 'dashboard#index'

  get 'up' => 'rails/health#show'

  devise_for :users,
             path: '/', only: %i[sessions passwords registrations omniauth_callbacks],
             controllers: begin
               options = { sessions: 'sessions', passwords: 'passwords', registrations: 'registrations' }
               options[:omniauth_callbacks] = 'omniauth_callbacks' if User.devise_modules.include?(:omniauthable)
               options
             end

  devise_scope :user do
    resource :invitation, only: %i[update] do
      get '' => :edit
    end
  end

  namespace :embed do
    post 'forms', to: 'embeds#forms_create'

    resources :submit_form, only: %i[show update], path: 's', param: 'slug' do
      resources :values, only: %i[index], controller: 'submit_form_values'
    end

    resources :submitters, only: %i[], param: 'slug' do
      resources :download, only: %i[index], controller: 'submissions_download'
    end

    get 'fonts/DancingScript-Regular.otf', to: 'fonts#dancing_script_regular'

    namespace :api do
      post 'submitter_form_views', to: 'submitter_form_views#create'
      post 'attachments', to: 'attachments#create'
    end

    post 'send_submission_email', to: 'submissions#send_email', defaults: { format: :json }
  end

  mount Rswag::Ui::Engine => '/docs/api'
  mount Rswag::Api::Engine => '/docs/api'

  namespace :api, defaults: { format: :json } do
    get 'submissions/:slug/download', to: 'submissions_download#download'
    resources :attachments, only: %i[create]
    resources :submitter_email_clicks, only: %i[create]
    resources :submitter_form_views, only: %i[create]
    resources :submitters, only: %i[index show update]
    resources :submissions, only: %i[index show create destroy] do
      collection do
        resources :emails, only: %i[create], controller: 'submissions', as: :submissions_emails
      end
    end
    resources :templates, only: %i[update show index destroy] do
      resources :clone, only: %i[create], controller: 'templates_clone'
      resources :submissions, only: %i[index create]
    end
  end

  resources :verify_pdf_signature, only: %i[create]
  resource :mfa_setup, only: %i[show new edit create destroy], controller: 'mfa_setup'
  resources :account_configs, only: %i[create]
  resources :user_configs, only: %i[create]
  resources :encrypted_user_configs, only: %i[destroy]
  resources :timestamp_server, only: %i[create]
  resources :dashboard, only: %i[index]
  resources :users, only: %i[new create edit update destroy]
  resource :user_signature, only: %i[edit update destroy]
  resource :user_initials, only: %i[edit update destroy]
  resources :submissions_archived, only: %i[index], path: 'submissions/archived'
  resources :submissions, only: %i[index], controller: 'submissions_dashboard'
  resources :submissions, only: %i[show destroy]
  # resources :console_redirect, only: %i[index]
  resources :upgrade, only: %i[index], controller: 'console_redirect'
  resources :manage, only: %i[index], controller: 'console_redirect'
  resource :testing_account, only: %i[show destroy]
  resources :testing_api_settings, only: %i[index]
  resources :submitters_autocomplete, only: %i[index]
  resources :template_folders_autocomplete, only: %i[index]
  resources :webhook_preferences, only: %i[create]
  resource :templates_upload, only: %i[create]
  authenticated do
    resource :templates_upload, only: %i[show], path: 'new'
  end
  resources :templates_archived, only: %i[index], path: 'templates/archived'
  resources :folders, only: %i[show edit update destroy], controller: 'template_folders'
  resources :template_sharings_testing, only: %i[create]
  resources :templates, only: %i[index], controller: 'templates_dashboard'
  resources :templates, only: %i[new create edit update show destroy] do
    resources :documents, only: %i[create], controller: 'template_documents'
    resources :restore, only: %i[create], controller: 'templates_restore'
    resources :archived, only: %i[index], controller: 'templates_archived_submissions'
    resources :submissions, only: %i[new create]
    resource :folder, only: %i[edit update], controller: 'templates_folders'
    resource :preview, only: %i[show], controller: 'templates_preview'
    resource :code_modal, only: %i[show], controller: 'templates_code_modal'
    resource :preferences, only: %i[show create], controller: 'templates_preferences'
    resources :submissions_export, only: %i[index new]
  end
  resources :preview_document_page, only: %i[show], path: '/preview/:signed_uuid'
  resource :blobs_proxy, only: %i[show], path: '/file/:signed_uuid/*filename',
                         controller: 'api/active_storage_blobs_proxy'
  resource :blobs_proxy, only: %i[show], path: '/blobs_proxy/:signed_uuid/*filename',
                         controller: 'api/active_storage_blobs_proxy'

  resources :start_form, only: %i[show update], path: 'd', param: 'slug' do
    get :completed
  end

  resources :submit_form, only: %i[], path: '' do
    get :success, on: :collection
  end

  resources :submit_form, only: %i[show update], path: 's', param: 'slug' do
    resources :values, only: %i[index], controller: 'submit_form_values'
    get :completed
  end

  resources :submit_form_draw_signature, only: %i[show], path: 'p', param: 'slug'

  resources :submissions_preview, only: %i[show], path: 'e', param: 'slug' do
    get :completed
  end

  resources :send_submission_email, only: %i[create] do
    get :success, on: :collection
  end

  resources :submitters, only: %i[], param: 'slug' do
    resources :download, only: %i[index], controller: 'submissions_download'
    resources :send_email, only: %i[create], controller: 'submitters_send_email'
    resources :debug, only: %i[index], controller: 'submissions_debug' if Rails.env.development?
  end

  scope '/settings', as: :settings do
    # resources :storage, only: %i[index create], controller: 'storage_settings'
    # resources :email, only: %i[index create], controller: 'email_smtp_settings'
    resource :esign, only: %i[show create new update destroy], controller: 'esign_settings'
    resources :users, only: %i[index]
    resources :archived_users, only: %i[index], path: 'users/:status', controller: 'users',
                               defaults: { status: :archived }
    resource :personalization, only: %i[show create], controller: 'personalization_settings'
    resources :api, only: %i[index create], controller: 'api_settings'
    resource :account, only: %i[show update destroy]
    resources :profile, only: %i[index] do
      collection do
        patch :update_contact
        patch :update_password
        patch :update_app_url
      end
    end
  end

  ActiveSupport.run_load_hooks(:routes, self)
end
