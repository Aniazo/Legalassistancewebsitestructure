#!/bin/sh

# Fail on error
set -e

echo "🚀 Running migrations..."
php artisan migrate --force

echo "✅ Migrations complete!"
