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

# Nettoie l'ancienne config cassée si elle existe
rm -f /etc/nginx/conf.d/tenerife-no-cache.conf

# Installe la config nginx complète avec headers no-cache
SITE_CONF="/etc/nginx/sites-available/tenerife"
if [ ! -f "$SITE_CONF" ] || ! diff -q "$REPO/deploy/tenerife-site.conf" "$SITE_CONF" >/dev/null 2>&1; then
  cp "$REPO/deploy/tenerife-site.conf" "$SITE_CONF"
  ln -sf "$SITE_CONF" /etc/nginx/sites-enabled/tenerife
  rm -f /etc/nginx/sites-enabled/default
  if nginx -t 2>/dev/null; then
    nginx -s reload
    echo "$(date '+%F %T') : config nginx mise à jour et rechargée"
  else
    # Rollback si la config est invalide
    rm -f /etc/nginx/sites-enabled/tenerife
    ln -sf /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default
    echo "$(date '+%F %T') : ERREUR config nginx invalide, rollback"
  fi
fi

echo "$(date '+%F %T') : site déployé"
