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

- Site "Souvenirs de Vacances" de la famille : carnet de voyage + album photo
  (mode Souvenir), multi-voyages. Un dossier par voyage, page d'accueil pour
  choisir (`site/index.html`) :
  - `site/tenerife/` — Tenerife, 27 juin → 9 juillet 2026 (5 onglets : Souvenirs,
    Carte, Jours, Forts, Pratique)
  - `site/labaule/` — La Baule, 12 → 17 juillet 2026, chez les grands-parents
    (Dadou & Nanou), pas de planning fixé à l'avance : seulement 2 onglets
    (Souvenirs, Carte), le contenu s'enrichit au fil du séjour
  - Chaque dossier de voyage a son propre `data.js` (contenu : `TRIP.days`,
    `TRIP.highlights`, `TRIP.photos`, `TRIP.places`, ...) et son `index.html`
    (structure de tabs propre à ce voyage)
  - `site/app.js`, `site/styles.css`, `site/manifest.webmanifest`, `site/sw.js`,
    `site/icons/` sont **partagés** entre tous les voyages (un seul mode
    Souvenir, pas de duplication de code) — les fonctions de rendu
    (`renderDays`, `renderHighlights`, `renderPractical`, `renderMap`,
    `renderSouvenirs`) se protègent avec `if(!root) return;` pour tolérer les
    onglets absents d'un voyage donné
  - Photos : converties en WebP (full 1800px q88 + thumb 500px q78,
    redimensionnement sur le grand côté) dans `<voyage>/photos/full|thumb/`,
    jamais les fichiers HEIC originaux — voir l'historique de session pour le
    pipeline exact (`heif-convert` puis `cwebp`)
- `deploy/deploy.sh` : script exécuté sur le Raspberry Pi (git pull + copie
  vers /var/www/html + installation des en-têtes cache nginx)
- `deploy/no-cache.conf` : no-cache pour HTML/JS/CSS (bug iOS Safari), mais
  cache long (`immutable`, 1 an) pour les images (`.webp/.jpg/.png`) via un
  `map` conditionnel — ne pas revenir à un simple no-cache global, ça
  retéléchargerait toutes les photos à chaque visite
- `deploy/webhook/` : config du déploiement instantané par webhook GitHub
  (déclenche deploy.sh en quelques secondes après un push sur main ; le cron
  toutes les 5 min reste un filet de sécurité en cas de panne du webhook)
- Toujours vérifier `node --check` sur chaque `data.js` modifié et sur
  `site/app.js` avant de commit
