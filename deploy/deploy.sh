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

# En-têtes no-cache : empêche iOS Safari de servir une version périmée.
# Fichier conf.d au niveau http → s'applique à toutes les réponses, quel
# que soit le bloc serveur actif.
NOCACHE="/etc/nginx/conf.d/no-cache.conf"
rm -f /etc/nginx/conf.d/tenerife-no-cache.conf   # nettoie l'ancienne config cassée
if ! diff -q "$REPO/deploy/no-cache.conf" "$NOCACHE" >/dev/null 2>&1; then
  cp "$REPO/deploy/no-cache.conf" "$NOCACHE"
  if nginx -t 2>/dev/null; then
    # systemctl restart, pas « nginx -s reload » : ce dernier ne s'applique
    # pas quand nginx est géré par systemd.
    systemctl restart nginx
    echo "$(date '+%F %T') : en-têtes no-cache nginx installés"
  else
    rm -f "$NOCACHE"
    echo "$(date '+%F %T') : ERREUR config nginx invalide, annulée"
  fi
fi

echo "$(date '+%F %T') : site déployé"
