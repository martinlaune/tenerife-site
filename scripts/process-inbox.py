#!/usr/bin/env python3
"""
Traite les photos déposées dans site/<voyage>/inbox/ :
  1. Conversion HEIC -> WebP (deux tailles : full 1800px q88, thumb 500px q78)
  2. Extraction GPS + date (EXIF)
  3. Rattachement au lieu le plus proche (TRIP.places) si assez précis
  4. Ajout à TRIP.photos et création/complément d'un "moment" (TRIP.highlights)
     par date, dans data.js
  5. Nettoyage de l'inbox une fois le traitement réussi

Dépendances système : heif-convert (libheif-examples), cwebp (webp),
exiftool (libimage-exiftool-perl), node (pour la validation finale).

Usage :
  python3 scripts/process-inbox.py --trip tenerife
  python3 scripts/process-inbox.py --all
"""
import argparse, json, math, re, shutil, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "site"

FULL_SIZE = 1800
FULL_QUALITY = 88
THUMB_SIZE = 500
THUMB_QUALITY = 78
MATCH_THRESHOLD_M = 800  # au-delà, on ne rattache pas à un lieu (place=null)

HIGHLIGHT_CLASSES = ["h-coral", "h-teal", "h-gold", "h-violet", "h-palm"]
FR_MOIS = ["janvier","février","mars","avril","mai","juin","juillet","août",
           "septembre","octobre","novembre","décembre"]


def sh(*args, **kw):
    return subprocess.run(args, capture_output=True, text=True, **kw)


def dms_to_dd(dms_str):
    m = re.match(r"(\d+) deg (\d+)' ([\d.]+)\" ([NSEW])", dms_str or "")
    if not m:
        return None
    deg, mn, sec, hemi = m.groups()
    dd = float(deg) + float(mn) / 60 + float(sec) / 3600
    if hemi in ("S", "W"):
        dd = -dd
    return dd


def haversine(lat1, lon1, lat2, lon2):
    R = 6371000
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dphi = math.radians(lat2 - lat1)
    dlmb = math.radians(lon2 - lon1)
    a = math.sin(dphi / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dlmb / 2) ** 2
    return 2 * R * math.asin(math.sqrt(a))


def extract_places(data_js_text):
    """Renvoie {key: (lat, lon)} pour les entrées TRIP.places à coordonnées numériques."""
    places = {}
    for m in re.finditer(r'^\s*(\w+):\s*\{\s*n:"[^"]*",\s*a:"[^"]*",\s*ll:"([^"]*)"', data_js_text, re.M):
        key, ll = m.groups()
        mll = re.match(r'^(-?\d+\.\d+),(-?\d+\.\d+)$', ll)
        if mll:
            places[key] = (float(mll.group(1)), float(mll.group(2)))
    return places


def extract_existing_photo_ids(data_js_text):
    return set(re.findall(r'\{id:"([^"]+)",day:', data_js_text))


def extract_highlights(data_js_text):
    """Renvoie (liste des ids 'hN' déjà utilisés, {day_iso: id_highlight})."""
    ids, by_day = [], {}
    for m in re.finditer(r'\{ id:"(h\d+)", day:"([^"]+)"', data_js_text):
        hid, day = m.groups()
        ids.append(hid)
        by_day[day] = hid
    return ids, by_day


def convert_photo(src, full_out, thumb_out, tmp_dir):
    """Convertit HEIC/JPEG source en deux WebP. Renvoie True si succès."""
    ext = src.suffix.lower()
    jpg_tmp = tmp_dir / (src.stem.lower() + ".jpg")
    if ext in (".heic", ".heif"):
        r = sh("heif-convert", "-q", "92", str(src), str(jpg_tmp))
        if r.returncode != 0 or not jpg_tmp.exists():
            print(f"  [ERREUR] heif-convert a échoué sur {src.name}: {r.stderr.strip()}")
            return False
    else:
        shutil.copy(src, jpg_tmp)

    w = sh("exiftool", "-s3", "-ImageWidth", str(jpg_tmp)).stdout.strip()
    h = sh("exiftool", "-s3", "-ImageHeight", str(jpg_tmp)).stdout.strip()
    try:
        landscape = int(w) >= int(h)
    except ValueError:
        landscape = True
    full_resize = f"{FULL_SIZE} 0" if landscape else f"0 {FULL_SIZE}"
    thumb_resize = f"{THUMB_SIZE} 0" if landscape else f"0 {THUMB_SIZE}"

    full_out.parent.mkdir(parents=True, exist_ok=True)
    thumb_out.parent.mkdir(parents=True, exist_ok=True)
    r1 = sh("cwebp", "-quiet", "-q", str(FULL_QUALITY), "-resize", *full_resize.split(), str(jpg_tmp), "-o", str(full_out))
    r2 = sh("cwebp", "-quiet", "-q", str(THUMB_QUALITY), "-resize", *thumb_resize.split(), str(jpg_tmp), "-o", str(thumb_out))
    jpg_tmp.unlink(missing_ok=True)
    if r1.returncode != 0 or r2.returncode != 0:
        print(f"  [ERREUR] cwebp a échoué sur {src.name}")
        return False
    return True


def get_exif(path):
    r = sh("exiftool", "-json", "-DateTimeOriginal", "-CreateDate", "-GPSLatitude", "-GPSLongitude", str(path))
    try:
        data = json.loads(r.stdout)[0]
    except (json.JSONDecodeError, IndexError):
        return None, None, None
    dt = data.get("DateTimeOriginal") or data.get("CreateDate")
    lat = dms_to_dd(data.get("GPSLatitude")) if data.get("GPSLatitude") else None
    lon = dms_to_dd(data.get("GPSLongitude")) if data.get("GPSLongitude") else None
    return dt, lat, lon


def process_trip(trip_dir: Path, tmp_dir: Path):
    inbox = trip_dir / "inbox"
    data_path = trip_dir / "data.js"
    if not inbox.exists():
        print(f"[{trip_dir.name}] pas de dossier inbox, rien à faire")
        return

    files = sorted(f for f in inbox.iterdir()
                    if f.is_file() and not f.name.startswith(".") and f.name.lower() != "readme.md")
    if not files:
        print(f"[{trip_dir.name}] inbox vide")
        return

    print(f"[{trip_dir.name}] {len(files)} fichier(s) dans l'inbox")
    data_text = data_path.read_text(encoding="utf-8")
    places = extract_places(data_text)
    existing_ids = extract_existing_photo_ids(data_text)
    used_hids, highlight_by_day = extract_highlights(data_text)

    new_photo_records = []
    by_date = {}
    processed_files = []

    for f in files:
        ext = f.suffix.lower()
        if ext in (".mov", ".mp4"):
            print(f"  [IGNORÉ] {f.name} : vidéo, non gérée par ce script pour l'instant")
            continue
        if ext not in (".heic", ".heif", ".jpg", ".jpeg", ".png"):
            print(f"  [IGNORÉ] {f.name} : type de fichier non reconnu")
            continue

        pid = f.stem.lower()
        if pid in existing_ids:
            print(f"  [IGNORÉ] {f.name} : id « {pid} » déjà présent dans TRIP.photos (doublon ?)")
            continue

        full_out = trip_dir / "photos" / "full" / f"{pid}.webp"
        thumb_out = trip_dir / "photos" / "thumb" / f"{pid}.webp"
        if not convert_photo(f, full_out, thumb_out, tmp_dir):
            continue

        dt, lat, lon = get_exif(f)
        if not dt:
            print(f"  [ATTENTION] {f.name} : pas de date EXIF, ignorée (vérifier manuellement)")
            full_out.unlink(missing_ok=True)
            thumb_out.unlink(missing_ok=True)
            continue

        date_part, time_part = dt.split(" ", 1)
        iso_date = date_part.replace(":", "-")
        ts = f"{iso_date} {time_part}"

        place, best_dist = None, None
        if lat is not None and lon is not None:
            for key, (plat, plon) in places.items():
                d = haversine(lat, lon, plat, plon)
                if best_dist is None or d < best_dist:
                    best_dist, place = d, key
            if best_dist is not None and best_dist > MATCH_THRESHOLD_M:
                place = None

        record = {
            "id": pid, "day": iso_date, "place": place,
            "lat": round(lat, 6) if lat is not None else None,
            "lon": round(lon, 6) if lon is not None else None,
            "ts": ts,
        }
        new_photo_records.append(record)
        by_date.setdefault(iso_date, []).append(pid)
        processed_files.append(f)
        dist_txt = f" (~{round(best_dist)}m de {place})" if place else " (pas de lieu proche)"
        print(f"  [OK] {f.name} -> {pid} · {iso_date}{dist_txt}")

    if not new_photo_records:
        print(f"[{trip_dir.name}] aucune nouvelle photo traitée")
        return

    # --- TRIP.photos : insertion avant le "];" de fin de tableau ---
    photo_lines = "\n".join(
        f'  {{id:"{r["id"]}",day:"{r["day"]}",place:{json.dumps(r["place"]) if r["place"] else "null"},'
        f'lat:{r["lat"]},lon:{r["lon"]},ts:"{r["ts"]}"}},'
        for r in sorted(new_photo_records, key=lambda r: r["ts"])
    )
    m = re.search(r'TRIP\.photos\s*=\s*\[', data_text)
    if m:
        insert_at = data_text.index("];", m.end())
        data_text = data_text[:insert_at] + photo_lines + "\n" + data_text[insert_at:]
    else:
        data_text += f'\n\n/* Photos ajoutées automatiquement */\nTRIP.photos = [\n{photo_lines}\n];\n'

    # --- TRIP.highlights : un moment par date, nouveau ou complété ---
    next_num = max([int(h[1:]) for h in used_hids], default=0) + 1
    new_highlight_lines = []
    for i, (date, pids) in enumerate(sorted(by_date.items())):
        ids_str = ",".join(f'"{p}"' for p in pids)
        if date in highlight_by_day:
            hid = highlight_by_day[date]
            pattern = re.compile(
                r'(\{ id:"' + re.escape(hid) + r'".*?photos:\[)([^\]]*)(\][^}]*\})', re.S)
            def append_photos(mm, ids_str=ids_str):
                existing = mm.group(2).strip()
                sep = "," if existing else ""
                return mm.group(1) + existing + sep + ids_str + mm.group(3)
            data_text, n = pattern.subn(append_photos, data_text, count=1)
            if n:
                print(f"  [MOMENT] photos ajoutées au moment existant {hid} ({date})")
                continue
            # pas de champ photos existant sur ce highlight -> on retombe sur la création ci-dessous
        d = date.split("-")
        label = f"{int(d[2])} {FR_MOIS[int(d[1]) - 1]} {d[0]}"
        cls = HIGHLIGHT_CLASSES[(next_num - 1) % len(HIGHLIGHT_CLASSES)]
        hid = f"h{next_num}"
        next_num += 1
        new_highlight_lines.append(
            f'    {{ id:"{hid}", day:"{date}", scene:"garden", cls:"{cls}", emoji:"📸", '
            f'when:"{label}", title:"{label}",\n'
            f'      text:"Photos du {label}.",\n'
            f'      list:[],\n'
            f'      photos:[{ids_str}] }},'
        )
        print(f"  [MOMENT] nouveau moment {hid} créé pour {date} ({len(pids)} photo(s))")

    if new_highlight_lines:
        block = "\n" + "\n".join(new_highlight_lines)
        empty_re = re.compile(r'highlights:\s*\[\s*\]')
        if empty_re.search(data_text):
            data_text = empty_re.sub("highlights: [" + block + "\n  ]", data_text, count=1)
        else:
            hm = re.search(r'highlights:\s*\[', data_text)
            if hm:
                insert_at = data_text.index("\n  ],", hm.end())
                data_text = data_text[:insert_at] + block + data_text[insert_at:]

    data_path.write_text(data_text, encoding="utf-8")

    check = sh("node", "--check", str(data_path))
    if check.returncode != 0:
        print(f"[{trip_dir.name}] [ERREUR] node --check a échoué après modification, ABANDON :")
        print(check.stderr)
        sys.exit(1)

    for f in processed_files:
        f.unlink()
    print(f"[{trip_dir.name}] {len(processed_files)} photo(s) intégrée(s), inbox nettoyée")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--trip", help="dossier du voyage (ex: tenerife)")
    ap.add_argument("--all", action="store_true", help="traiter tous les voyages sous site/")
    args = ap.parse_args()

    if not args.trip and not args.all:
        ap.error("préciser --trip <nom> ou --all")

    import tempfile
    with tempfile.TemporaryDirectory() as tmp:
        tmp_dir = Path(tmp)
        if args.all:
            trips = [d for d in SITE.iterdir() if d.is_dir() and (d / "data.js").exists()]
        else:
            trips = [SITE / args.trip]
        for trip_dir in trips:
            process_trip(trip_dir, tmp_dir)


if __name__ == "__main__":
    main()
