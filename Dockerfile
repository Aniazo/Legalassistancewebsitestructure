# ----- Stage 1: Build Frontend -----
FROM node:20-alpine AS build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

# ----- Stage 2: Production (PHP & Nginx) -----
FROM serversideup/php:8.3-fpm-nginx AS prod

# Switch to root to set permissions
USER root

# Set the working directory
WORKDIR /var/www/html

# Copy the application code
COPY . .

# Copy built assets from Stage 1
COPY --from=build-stage /app/public/build ./public/build

# Create SQLite database file and set permissions
RUN touch /var/www/html/database/database.sqlite && \
    mkdir -p /var/www/html/storage/framework/sessions \
             /var/www/html/storage/framework/views \
             /var/www/html/storage/framework/cache && \
    chown -R www-data:www-data /var/www/html && \
    chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/database

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Switch back to the image default user
USER www-data

# Expose the default port for this image
EXPOSE 8080

# Configure the image for Laravel
ENV AUTORUN_LARAVEL_MIGRATIONS=true
ENV AUTORUN_LARAVEL_CONFIG_CACHE=true
ENV AUTORUN_LARAVEL_ROUTE_CACHE=true
ENV AUTORUN_LARAVEL_VIEW_CACHE=true
