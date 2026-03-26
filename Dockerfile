# ----- Stage 1: Build Frontend -----
FROM node:20-alpine AS build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

# ----- Stage 2: App and PHP -----
FROM richarvey/nginx-php-fpm:latest AS prod
WORKDIR /var/www/html

# Copy app code
COPY . .
# Copy built assets from Stage 1
COPY --from=build-stage /app/public/build ./public/build

# Set correct permissions for Laravel
RUN touch /var/www/html/database/database.sqlite && \
    chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/database && \
    chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/database

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Environment cleanup (Optional, depends on how you handle secrets)
# RUN php artisan config:cache && php artisan route:cache && php artisan view:cache

# Expose port 80
EXPOSE 80

# Environment variables for the image
ENV SKIP_COMPOSER=1
ENV PHP_ERRORS_STDERR=1
ENV RUN_SCRIPTS=1
ENV REAL_IP_HEADER=1

# Application configuration
ENV APP_ENV=production
ENV APP_DEBUG=false
ENV WEBROOT=/var/www/html/public

# Start the server
CMD ["/start.sh"]
