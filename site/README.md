# Souvenirs de Vacances — site mobile de la famille

Petit site web (sans base de données, tout en fichiers) à héberger sur le Raspberry Pi.
Il fonctionne sur iPhone, s'ajoute à l'écran d'accueil comme une appli, et couvre
plusieurs voyages : à l'ouverture, on choisit le voyage (Tenerife, La Baule, ...).

## Contenu

```
site/
├── index.html            page d'accueil : choix du voyage
├── styles.css            mise en page (partagée entre tous les voyages)
├── app.js                affichage, recherche, mode Souvenir, carte (partagé)
├── manifest.webmanifest  (pour l'installation type appli)
├── sw.js                 mode hors-ligne (HTTPS uniquement, voir plus bas)
├── icons/                icônes de l'appli
├── tenerife/
│   ├── index.html        page du voyage Tenerife (5 onglets)
│   ├── data.js            ← TOUT le contenu du voyage (modifiable facilement)
│   └── photos/full|thumb/ photos converties (WebP)
└── labaule/
    ├── index.html         page du voyage La Baule (Souvenirs + Carte)
    ├── data.js             contenu du voyage (s'enrichit au fil du séjour)
    └── photos/full|thumb/  photos converties (WebP)
```

Pour modifier un voyage : édite son **data.js** (`tenerife/data.js` ou
`labaule/data.js`), c'est tout. Pour ajouter un nouveau voyage : crée un
dossier `nom-du-voyage/` avec un `index.html` (copie d'un dossier existant,
adapter les onglets si besoin) et un `data.js`, puis ajoute une carte sur la
page d'accueil (`site/index.html`).

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
3. L'icône « Souvenirs » apparaît et s'ouvre en plein écran, sur la page de
   choix du voyage.

> Sur une adresse `http://` du réseau local, l'ajout à l'écran d'accueil et le
> plein écran fonctionnent. Le **cache hors-ligne** (service worker), lui, ne
> s'active qu'en **HTTPS** ou sur `localhost` — voir ci-dessous.

## Mode hors-ligne + accès à distance (optionnel)
Tant que l'iPhone est sur le Wi-Fi de la maison, tout marche. Pour consulter le
site **hors connexion** ou **depuis l'étranger**, deux pistes propres :

- **Tailscale** (le plus simple) : installe Tailscale sur le Pi et sur l'iPhone,
  puis `tailscale serve` expose le site en HTTPS sur ton réseau privé. Tu y accèdes
  de partout, et le cache hors-ligne s'active grâce au HTTPS.
- **Caddy** : `caddy file-server` fournit du HTTPS automatique (avec un nom de
  domaine ou un certificat local).

Bonnes vacances ! 🧳
