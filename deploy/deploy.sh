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

echo "$(date '+%F %T') : site déployé"
