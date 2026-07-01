# Déploiement instantané via webhook GitHub

Le cron (toutes les 5 min) reste en place comme filet de sécurité, mais un
webhook GitHub déclenche `deploy.sh` immédiatement à chaque push sur `main`.

## Installation sur le Raspberry Pi (une seule fois)

1. Installer le serveur webhook :
   ```
   apt-get update -qq && apt-get install -y webhook
   ```

2. Copier `hooks.json.example` vers `/etc/webhook/hooks.json` en remplaçant
   `REPLACE_WITH_SECRET` par un secret généré (`openssl rand -hex 24`).
   Ne jamais committer ce fichier avec le vrai secret.

3. Copier `webhook.service.example` vers `/etc/systemd/system/webhook.service`,
   puis :
   ```
   systemctl daemon-reload && systemctl enable --now webhook
   ```

4. Ajouter le contenu de `nginx-hooks.conf.example` dans le `server{}` actif
   (avant le `location /` existant), puis :
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
