/* ============================================================
   La Baule 2026 — souvenirs de vacances
   Séjour chez Dadou & Nanou, sans planning fixé à l'avance.
   Ce fichier s'enrichit au fil du séjour : ajoute des entrées à
   TRIP.photos et des moments à TRIP.highlights à mesure des envois.
   ============================================================ */

const TRIP = {
  meta: {
    title: "La Baule",
    start: "2026-07-12T00:00:00",
    end:   "2026-07-17T23:59:00",
    subtitle: "12 → 17 juillet 2026"
  },

  days: [],

  highlights: [],

  practical: [],

  places: {},
};

TRIP.dayPlaces = {};

/* Photos de vacances (GPS+date EXIF), mode Souvenir. Fichiers : labaule/photos/full|thumb/<id>.webp */
TRIP.photos = [];
