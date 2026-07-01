# Déploiement instantané via webhook GitHub

Le cron (toutes les 5 min) reste en place comme filet de sécurité, mais un
webhook GitHub déclenche `deploy.sh` immédiatement à chaque push sur `main`.

## Installation sur le Raspberry Pi (une seule fois)

1. Installer le serveur webhook (le paquet Debian fournit déjà un service
   systemd `/lib/systemd/system/webhook.service`, activé automatiquement,
   qui charge sa config depuis `/etc/webhook.conf`) :
   ```
   apt-get update -qq && apt-get install -y webhook
   ```

2. Copier `hooks.json.example` vers `/etc/webhook.conf` en remplaçant
   `REPLACE_WITH_SECRET` par un secret généré (`openssl rand -hex 24`), puis
   `chmod 600 /etc/webhook.conf`. Ne jamais committer ce fichier avec le
   vrai secret.

3. Copier `override.conf.example` vers
   `/etc/systemd/system/webhook.service.d/override.conf` (surcharge le
   service du paquet pour n'écouter que sur 127.0.0.1), puis :
   ```
   systemctl daemon-reload && systemctl restart webhook
   ```

4. Ajouter le contenu de `nginx-hooks.conf.example` dans le `server{}` actif
   (avant le `location /` existant). Attention : faire la sauvegarde du
   fichier en dehors de `sites-enabled/` (ce dossier est inclus en
   wildcard par nginx — un `.bak` laissé dedans crée un conflit de
   "duplicate default server"). Puis :
   ```
   nginx -t && systemctl restart nginx
   ```
   (`systemctl restart`, pas `nginx -s reload` — ce dernier ne s'applique
   pas de façon fiable sur ce système.)

5. Sur GitHub : Settings → Webhooks → Add webhook
   - Payload URL : `http://<domaine>/hooks/deploy`
   - Content type : `application/json`
   - Secret : le même secret qu'à l'étape 2
   - Events : "Just the push event"

Vérification : `journalctl -u webhook -n 20` doit montrer les requêtes
reçues. Un push réel sur `main` doit déclencher `deploy.sh` en quelques
secondes, sans attendre le cron.
