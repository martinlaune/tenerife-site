# Site Tenerife — déploiement auto sur Raspberry Pi (DietPi)

Principe : le site vit sur **GitHub**. Le **Raspberry va chercher** les mises à jour
tout seul toutes les 5 min (`git pull`) et les publie dans nginx (`/var/www/html`).
👉 Aucun port à ouvrir, aucun mot de passe à partager.

```
tenerife-site/        (le dépôt GitHub)
├── site/             ← le site (index.html, app.js, data.js, icons/, …)
├── deploy/deploy.sh  ← script lancé par le Pi (pull + publication)
└── README.md         ← ce fichier
```

---

## 1) Créer le dépôt GitHub (depuis le navigateur du téléphone)

1. github.com → **New repository** → nom : `tenerife-site` → **Public** → *Create*.
2. **Add file → Upload files** → glisser le **contenu** de ce dossier
   (les dossiers `site/` et `deploy/` + ce `README.md`) → *Commit changes*.

Ton dépôt est à l'adresse :
`https://github.com/<TON_USER>/tenerife-site`

---

## 2) Préparer le Pi — UNE SEULE FOIS (via Termius en SSH)

> DietPi se connecte en général en **root**. Si ce n'est pas ton cas, ajoute `sudo ` devant les commandes.
> Remplace `<TON_USER>` par ton identifiant GitHub.

```bash
# git installé ?
apt-get update && apt-get install -y git

# cloner le dépôt à un endroit fixe
git clone https://github.com/<TON_USER>/tenerife-site.git /opt/tenerife-site

# rendre le script exécutable
chmod +x /opt/tenerife-site/deploy/deploy.sh

# première publication (vérifie que ça marche)
/opt/tenerife-site/deploy/deploy.sh
```

Ouvre `http://chtiroubaix.ddns.net/` : le site doit s'afficher.

### Programmer la vérif automatique toutes les 5 min
```bash
( crontab -l 2>/dev/null; \
  echo "*/5 * * * * /opt/tenerife-site/deploy/deploy.sh >> /var/log/tenerife-deploy.log 2>&1" ) \
  | crontab -

# vérifier que la ligne est bien là
crontab -l
```

C'est tout. Le Pi est désormais autonome.

---

## 3) Au quotidien — mettre à jour le site

Depuis le **navigateur** (téléphone ou PC), sur GitHub :
- ouvre le fichier à changer dans `site/` (ex. `site/data.js`) → ✏️ **Edit** → *Commit*,
- ou **Add file → Upload files** pour remplacer/ajouter des fichiers.

⏱️ Dans les 5 minutes, le Pi récupère et publie tout seul. Rafraîchis la page.

> Astuce : pour forcer tout de suite sans attendre, lance dans Termius :
> `/opt/tenerife-site/deploy/deploy.sh`

---

## Dépannage rapide
- **Rien ne change** : `tail -n 20 /var/log/tenerife-deploy.log` pour voir les messages.
- **Conflit git** (tu aurais modifié des fichiers à la main sur le Pi) :
  `cd /opt/tenerife-site && git reset --hard origin/main` puis relancer `deploy.sh`.
  (selon ton dépôt, la branche peut s'appeler `master` au lieu de `main`.)
- **Droits** : le script remet `www-data` + lecture pour tous à chaque publication.
- **Page blanche / 403** : vérifie que `site/index.html` existe bien dans le dépôt.
