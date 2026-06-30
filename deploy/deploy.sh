#!/usr/bin/env bash
# Déploie le site depuis GitHub vers nginx (/var/www/html).
# Tire toujours le dépôt et écrase le contenu — conçu pour tourner via cron toutes les 5 min.
set -euo pipefail

REPO="/opt/tenerife-site"
WEBROOT="/var/www/html"
SUBDIR="site"

cd "$REPO"

git pull --ff-only --quiet

rm -rf "${WEBROOT:?}/"*
cp -a "$REPO/$SUBDIR/." "$WEBROOT/"

chown -R www-data:www-data "$WEBROOT"
chmod -R a+rX "$WEBROOT"

# Installe la config nginx no-cache si pas encore fait
NGINX_CONF="/etc/nginx/conf.d/tenerife-no-cache.conf"
if [ ! -f "$NGINX_CONF" ] && [ -f "$REPO/deploy/no-cache.conf" ]; then
  cp "$REPO/deploy/no-cache.conf" "$NGINX_CONF"
  nginx -t && nginx -s reload
  echo "$(date '+%F %T') : config nginx no-cache installée"
fi

echo "$(date '+%F %T') : site déployé"
