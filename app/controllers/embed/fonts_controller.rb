# frozen_string_literal: true

module Embed
  class FontsController < ApplicationController
    skip_before_action :authenticate_user!
    skip_authorization_check

    def dancing_script_regular
      send_file Rails.root.join('public', 'fonts', 'DancingScript-Regular.ttf'),
                type: 'font/ttf',
                disposition: 'inline'
    end
  end
end
