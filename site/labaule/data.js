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

  practical: [
    {
      icon: "🎒", title: "Valise Alban", check: true,
      list: [
        "6 t-shirts",
        "4 shorts / 1 pantalon léger",
        "6 slips",
        "6 paires de chaussettes",
        "2 maillots de bain",
        "1 sweat / veste légère pour le soir",
        "2 pyjamas",
        "1 paire de baskets + 1 paire de tongs/sandales",
        "Trousse de toilette (brosse à dents, gel douche, déodorant)",
        "Casquette + lunettes de soleil + crème solaire",
        "Chargeur de téléphone",
        "Livre / jeux pour la route"
      ]
    },
    {
      icon: "🎒", title: "Valise Vianney", check: true, warn: true,
      list: [
        "⚠️ Ventoline — toujours en cabine/sac à main, jamais en soute",
        "6 t-shirts",
        "4 shorts / 1 pantalon léger",
        "6 slips",
        "6 paires de chaussettes",
        "2 maillots de bain",
        "1 sweat / veste légère pour le soir",
        "2 pyjamas",
        "1 paire de baskets + 1 paire de tongs/sandales",
        "Trousse de toilette (brosse à dents, gel douche, déodorant)",
        "Casquette + lunettes de soleil + crème solaire",
        "Doudou / jeux pour la route"
      ]
    },
    {
      icon: "🧳", title: "Valise Maman", check: true,
      list: [
        "6 hauts",
        "3 pantalons/shorts + 1 tenue habillée",
        "6 sous-vêtements",
        "6 paires de chaussettes",
        "2 maillots de bain + paréo/sortie de bain",
        "1 pyjama",
        "Trousse de toilette + maquillage",
        "Crème solaire + après-soleil",
        "Médicaments habituels + ordonnances",
        "Carnet de santé des enfants",
        "Chargeurs (téléphone, montre…)",
        "Livre / de quoi lire à la plage"
      ]
    },
    {
      icon: "🧳", title: "Valise Papa", check: true,
      list: [
        "6 t-shirts/chemises",
        "3 pantalons/shorts + 1 tenue habillée",
        "6 sous-vêtements",
        "6 paires de chaussettes",
        "2 maillots de bain",
        "1 pyjama",
        "Trousse de toilette + rasoir",
        "Crème solaire",
        "Médicaments habituels",
        "Papiers de la voiture (carte grise, permis, assurance)",
        "Chargeurs + adaptateurs",
        "Appareil photo / batterie externe"
      ]
    }
  ],

  places: {},
};

TRIP.dayPlaces = {};

/* Photos de vacances (GPS+date EXIF), mode Souvenir. Fichiers : labaule/photos/full|thumb/<id>.webp */
TRIP.photos = [];
