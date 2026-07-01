# Instructions pour Claude — dépôt tenerife-site

## Auto-merge des pull requests

Le propriétaire (martinlaune) a explicitement autorisé le merge automatique
de **toutes** les pull requests sur ce dépôt, y compris celles touchant
l'infrastructure (nginx, deploy.sh, webhook, config système), sans attendre
de confirmation.

Règle : après avoir créé une PR sur ce dépôt, la merger immédiatement soi-même
(merge_pull_request), sauf si l'utilisateur demande explicitement de ne pas
merger pour cette fois (ex : "n'active pas encore", "attends avant de merger").

Contexte important : il n'y a **aucune CI ni relecture obligatoire** sur ce
dépôt. Un merge sur `main` déclenche un déploiement quasi instantané sur le
site en production (webhook GitHub → Raspberry Pi → nginx), donc chaque
commit doit être validé (`node --check`, relecture du diff) avant merge,
puisqu'il n'y a pas de filet de sécurité après coup.

## Contexte du dépôt

- Site du carnet de voyage familial (Tenerife, 27 juin → 9 juillet 2026)
- `site/` : le site statique (data.js = contenu du planning, app.js = rendu,
  styles.css, sw.js)
- `deploy/deploy.sh` : script exécuté sur le Raspberry Pi (git pull + copie
  vers /var/www/html + installation des en-têtes no-cache nginx)
- `deploy/webhook/` : config du déploiement instantané par webhook GitHub
  (déclenche deploy.sh en quelques secondes après un push sur main ; le cron
  toutes les 5 min reste un filet de sécurité en cas de panne du webhook)
- Toujours vérifier `node --check site/data.js` et `node --check site/app.js`
  avant de commit
