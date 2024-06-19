# Stage 1: Download and merge fonts
FROM ruby:3.3.1-alpine3.18 as fonts

WORKDIR /fonts

RUN apk --no-cache add fontforge wget \
    && wget https://github.com/satbyy/go-noto-universal/releases/download/v7.0/GoNotoKurrent-Regular.ttf \
    && wget https://github.com/satbyy/go-noto-universal/releases/download/v7.0/GoNotoKurrent-Bold.ttf \
    && wget https://github.com/impallari/DancingScript/raw/master/fonts/v2031/DancingScript-Regular.otf \
    && wget https://cdn.jsdelivr.net/gh/notofonts/notofonts.github.io/fonts/NotoSansSymbols2/hinted/ttf/NotoSansSymbols2-Regular.ttf \
    && wget https://github.com/Maxattax97/gnu-freefont/raw/master/ttf/FreeSans.ttf \
    && wget https://github.com/impallari/DancingScript/raw/master/OFL.txt \
    && fontforge -lang=py -c 'font1 = fontforge.open("FreeSans.ttf"); font2 = fontforge.open("NotoSansSymbols2-Regular.ttf"); font1.mergeFonts(font2); font1.generate("FreeSans.ttf")'

# Stage 2: Install dependencies and build assets with Webpack
FROM ruby:3.3.1-alpine3.18 as webpack

ENV RAILS_ENV=production
ENV NODE_ENV=production

WORKDIR /app

RUN apk add --no-cache nodejs yarn git build-base \
    && gem install shakapacker

COPY ./package.json ./yarn.lock ./

RUN yarn install --network-timeout 1000000

COPY ./bin/shakapacker ./bin/shakapacker
COPY ./config/webpack ./config/webpack
COPY ./config/shakapacker.yml ./config/shakapacker.yml
COPY ./postcss.config.js ./postcss.config.js
COPY ./tailwind.config.js ./tailwind.config.js
COPY ./tailwind.form.config.js ./tailwind.form.config.js
COPY ./tailwind.application.config.js ./tailwind.application.config.js
COPY ./app/javascript ./app/javascript
COPY ./app/views ./app/views

RUN echo "gem 'shakapacker'" > Gemfile && ./bin/shakapacker

# Stage 3: Setup the final application
FROM ruby:3.3.1-alpine3.18 as app

ENV RAILS_ENV=production
ENV BUNDLE_WITHOUT="development:test"
ENV LD_PRELOAD=/lib/libgcompat.so.0
ENV OPENSSL_CONF=/app/openssl_legacy.cnf

WORKDIR /app

RUN apk add --no-cache sqlite-dev libpq-dev mariadb-dev vips-dev vips-poppler poppler-utils vips-heif gcompat ttf-freefont \
    && mkdir /fonts && rm /usr/share/fonts/freefont/FreeSans.otf

# Use HEREDOC for the configuration file
RUN cat <<EOF > /app/openssl_legacy.cnf
.include = /etc/ssl/openssl.cnf

[provider_sect]
default = default_sect
legacy = legacy_sect

[default_sect]
activate = 1

[legacy_sect]
activate = 1
EOF

COPY ./Gemfile ./Gemfile.lock ./

RUN apk add --no-cache build-base \
    && bundle install \
    && apk del build-base \
    && rm -rf ~/.bundle /usr/local/bundle/cache

COPY ./bin ./bin
COPY ./app ./app
COPY ./config ./config
COPY ./db ./db
COPY ./lib ./lib
COPY ./public ./public
COPY LICENSE README.md Rakefile config.ru .version ./

COPY --from=fonts /fonts/GoNotoKurrent-Regular.ttf /fonts/GoNotoKurrent-Bold.ttf /fonts/DancingScript-Regular.otf /fonts/OFL.txt /fonts/
COPY --from=fonts /fonts/FreeSans.ttf /usr/share/fonts/freefont
COPY --from=webpack /app/public/packs ./public/packs

RUN ln -s /fonts /app/public/fonts \
    && bundle exec bootsnap precompile --gemfile app/ lib/

WORKDIR /data/uvtsign
ENV WORKDIR=/data/uvtsign

EXPOSE 3000
CMD ["/app/bin/bundle", "exec", "puma", "-C", "/app/config/puma.rb", "--dir", "/app"]
