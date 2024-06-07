# database.yml

default: &default
user: postgres
password: postgres
adapter: postgresql
encoding: unicode
pool: <%= ENV.fetch('RAILS_MAX_THREADS', 15) %>
host: <%= ENV['DATABASE_HOST'] || 'localhost' %>

development:
<<: \*default
database: uvtsign_dev

test:
<<: \*default
database: uvtsign_test

production:
<% if !ENV['DATABASE_HOST'].to_s.empty? %>
<<: *default
host: <%= ENV['DATABASE_HOST'] %>
port: <%= ENV['DATABASE_PORT'] %>
username: <%= ENV['DATABASE_USER'] %>
password: <%= ENV['DATABASE_PASSWORD'] %>
database: <%= ENV['DATABASE_NAME'] %>
<% elsif ENV['DATABASE_URL'].to_s.empty? %>
adapter: sqlite3
database: <%= ENV['WORKDIR'] || '.' %>/db.sqlite3
<% elsif ENV['DATABASE_URL'].match?(/\Apostgres/) %>
<<: *default
url: <%= ENV['DATABASE_URL'] %>
<% elsif ENV['DATABASE_URL'].match?(/\Amysql/) %>
adapter: mysql2
encoding: utf8mb4
pool: <%= ENV.fetch('RAILS_MAX_THREADS', 15) %>
url: <%= ENV['DATABASE_URL'] %>
<% end %>

`bundle exec rake db:create`
`bundle exec rake db:migrate`

# install nvm, and put this in the root .nvmrc

20.9.0

`npm install -g yarn`
`bundle exec yarn install`
`bundle exec rake assets:precompile`
