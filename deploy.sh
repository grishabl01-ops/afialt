#!/usr/bin/env bash
# One-command deploy: pull latest code, rebuild, refresh standalone assets, restart.
# Usage on the server:  cd /var/www/afialt && ./deploy.sh
set -euo pipefail

cd /var/www/afialt

echo "→ Pulling latest code..."
git pull

echo "→ Installing dependencies..."
npm ci

echo "→ Building..."
npm run build

echo "→ Refreshing standalone assets..."
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public

echo "→ Restarting service..."
systemctl restart afialt

echo "✅ Deployed. Service status:"
systemctl is-active afialt
