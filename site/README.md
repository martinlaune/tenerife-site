# Tenerife 2026 — site mobile de la famille

Petit site web (sans base de données, tout en fichiers) à héberger sur le Raspberry Pi.
Il fonctionne sur iPhone, s'ajoute à l'écran d'accueil comme une appli, et propose une
recherche dans tout le programme.

## Contenu

```
tenerife-site/
├── index.html          page principale
├── styles.css          mise en page
├── data.js             ← TOUT le contenu du voyage (modifiable facilement)
├── app.js              affichage, recherche, compte à rebours, illustrations
├── manifest.webmanifest  (pour l'installation type appli)
├── sw.js               mode hors-ligne (HTTPS uniquement, voir plus bas)
└── icons/              icônes de l'appli
```

Pour modifier un horaire, un resto, un texte : édite **data.js**, c'est tout.

## Héberger sur le Raspberry Pi (le plus simple)

### Option A — nginx (recommandé)
```bash
sudo apt update && sudo apt install -y nginx
sudo rm -rf /var/www/html/*
sudo cp -r ~/tenerife-site/* /var/www/html/
sudo systemctl restart nginx
```
Puis sur l'iPhone, sur le **même Wi-Fi** que le Pi, ouvre dans Safari :
```
http://ADRESSE-IP-DU-PI/        (ex : http://192.168.1.42/ )
```
(Trouver l'IP du Pi : `hostname -I`)

### Option B — test rapide sans rien installer
```bash
cd ~/tenerife-site
python3 -m http.server 8080
```
Puis : `http://ADRESSE-IP-DU-PI:8080/`

## Ajouter à l'écran d'accueil (iPhone)
1. Ouvrir l'adresse ci-dessus dans **Safari**.
2. Bouton **Partager** → **Sur l'écran d'accueil** → **Ajouter**.
3. L'icône « Tenerife » apparaît et s'ouvre en plein écran.

> Sur une adresse `http://` du réseau local, l'ajout à l'écran d'accueil et le
> plein écran fonctionnent. Le **cache hors-ligne** (service worker), lui, ne
> s'active qu'en **HTTPS** ou sur `localhost` — voir ci-dessous.

## Mode hors-ligne + accès depuis Tenerife (optionnel)
Tant que l'iPhone est sur le Wi-Fi de la maison, tout marche. Pour consulter le
site **hors connexion** ou **depuis l'étranger**, deux pistes propres :

- **Tailscale** (le plus simple) : installe Tailscale sur le Pi et sur l'iPhone,
  puis `tailscale serve` expose le site en HTTPS sur ton réseau privé. Tu y accèdes
  de partout, et le cache hors-ligne s'active grâce au HTTPS.
- **Caddy** : `caddy file-server` fournit du HTTPS automatique (avec un nom de
  domaine ou un certificat local).

Si tu veux juste un accès hors-ligne pendant le séjour sans serveur, le fichier
unique « carnet » que tu as déjà reste la solution de secours (il s'ouvre depuis
l'app Fichiers, sans réseau).

Bon voyage ! 🏝️
