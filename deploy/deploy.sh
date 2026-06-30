#!/usr/bin/env bash
# Déploie le site depuis le dépôt GitHub vers nginx (/var/www/html).
# Ne fait rien s'il n'y a aucune nouveauté. Conçu pour tourner via cron toutes les 5 min.
set -euo pipefail

REPO="/opt/tenerife-site"     # emplacement du clone sur le Pi
WEBROOT="/var/www/html"       # dossier servi par nginx
SUBDIR="site"                 # sous-dossier du dépôt qui contient le site

cd "$REPO"

# Récupère l'état distant sans rien appliquer
git fetch --quiet origin

LOCAL="$(git rev-parse @)"
REMOTE="$(git rev-parse '@{u}')"

# Rien de neuf -> on sort immédiatement
if [ "$LOCAL" = "$REMOTE" ]; then
  exit 0
fi

# Applique la mise à jour (avance rapide uniquement)
git pull --ff-only --quiet

# Publie : on nettoie puis on copie le contenu de site/
rm -rf "${WEBROOT:?}/"*
cp -a "$REPO/$SUBDIR/." "$WEBROOT/"

# Droits pour nginx
chown -R www-data:www-data "$WEBROOT"
chmod -R a+rX "$WEBROOT"

echo "$(date '+%F %T') : site mis à jour ($REMOTE)"
