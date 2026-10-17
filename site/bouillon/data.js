/* ============================================================
   Bouillon 2026 — données du voyage
   Séjour en famille du 17 au 21 octobre 2026, gîte Le P'tit Nid
   à Poupehan. Points marqués « à confirmer » dans les notes :
   horaires château (source en image), heure exacte de la nocturne
   du 19/10, dates de battues de chasse 2026 (non publiées au
   30/08/2026), et météo (fiable seulement à partir du 10-14/10).
   ============================================================ */

const TRIP = {
  meta: {
    title: "Bouillon",
    start: "2026-10-17T08:30:00",
    end:   "2026-10-21T13:30:00",
    gite: "Le P'tit Nid — 27-29 rue des Lavandières, Poupehan",
    subtitle: "17 → 21 octobre 2026"
  },

  days: [
    { id:"b1", scene:"sunset", emoji:"🚗", dow:"Samedi 17 octobre", title:"Route & Odyssée de Lumière",
      sum:"Installation au P'tit Nid, puis spectacle nocturne au château.",
      obj:"Journée 100 % logistique : arriver, s'installer, dîner, puis le spectacle de lumière le soir si tout va bien.",
      resa:"Odyssée de Lumière 19h15 (obligatoire, City Pass+)",
      sched:[
        ["08h30","Départ de Sailly-lez-Lannoy","Trajet non revérifié cette session (≈2h à 2h30 selon l'itinéraire réel) — à confirmer sur GPS le jour même"],
        ["≈10h45","Arrivée région de Bouillon"],
        ["11h00","Pause déjeuner / pique-nique"],
        ["12h00","Rochehaut / panorama sur Frahan","≈5-6 min du gîte, 20-30 min sur place — avant les courses, tant que le coffre est encore vide"],
        ["14h30","Courses ALDI Bouillon/Noirefontaine","Rue de la Sentinelle 66 · ouvert samedi 8h30-19h"],
        ["15h15","Complément Carrefour Market (100 m à côté)","Ouverture réelle probablement 9h00, pas 8h30 — à confirmer au 061 61 42 01"],
        ["16h00","Check-in — Le P'tit Nid, Poupehan","Direct après les courses, pour limiter le temps du frais dans le coffre"],
        ["16h15","Installation, rangement des courses au frigo"],
        ["17h30","Dîner léger et rapide au gîte"],
        ["18h30","Départ vers le château (parking centre-ville)"],
        ["19h15","Odyssée de Lumière","Présence 30 min avant conseillée · horaire confirmé pour la période 15/10-11/11 · réservation obligatoire, accessible uniquement via le City Pass+"],
        ["≈20h30","Retour au gîte, coucher"]
      ],
      notes:["Les courses sont volontairement calées juste avant le check-in (et non juste après l'arrivée) pour que le frais reste le moins longtemps possible dans le coffre — prévoir un sac isotherme/glacière si le timing venait à glisser","Si le trajet a pris du retard ou que l'installation traîne : annulez l'Odyssée sans remords, soirée calme au gîte à la place","Trajet Sailly-lez-Lannoy ↔ Poupehan non vérifié par un routage réel cette session — comptez large"] },

    { id:"b2", scene:"town", emoji:"🏰", dow:"Dimanche 18 octobre", title:"Fauconnerie, Belvédère et les Nutons",
      sum:"Spectacle de fauconnerie, Belvédère d'Auclin et chasse aux Nutons en forêt, sans visite complète du château.",
      obj:"Le château se revit en profondeur lundi soir à la nocturne — dimanche, on garde la fauconnerie et le Belvédère, sans refaire toute la visite libre du fort.",
      lunch:{name:"Brasserie/sandwicherie à Bouillon", planB:"Pique-nique", budget:"—", note:"selon l'envie du moment"},
      sched:[
        ["09h45","Départ vers Bouillon","≈10-15 min depuis Poupehan, estimation non routée en direct"],
        ["10h45","Arrivée, parking, retrait des City Pass+"],
        ["11h30","Spectacle de fauconnerie","≈30 min, inclus dans le City Pass+ — confirmé pour la saison en cours en octobre"],
        ["12h00","Déjeuner à Bouillon"],
        ["13h30","Belvédère de Bouillon / d'Auclin","Côte d'Auclin, accès voiture direct, 161 marches, panorama sur Bouillon et la Semois — 30-45 min"],
        ["14h15","Luna et les Gardiens — parcours Bouillon","Départ Arboretum de Bouillon, rue de la Ramonette · 2,1 km / +92 m, facile · énigme des Nutons/Faudlou · appli gratuite"],
        ["15h30","Fin du parcours Luna, retour au gîte"],
        ["16h00","Temps calme : lecture pour Alban, jeux vidéo foot pour Vianney"]
      ],
      notes:["La fauconnerie peut être annulée par grand vent ou forte pluie (règle officielle, bien-être des rapaces) — dans ce cas, remplacer Luna Bouillon par le Musée Ducal + Bouillon Medieval Experience, intérieurs et inclus dans le City Pass+"] },

    { id:"b3", scene:"forest", emoji:"🌲", dow:"Lundi 19 octobre", title:"Nafraiture et la nocturne aux flambeaux",
      sum:"Parcours Luna en forêt, puis visite nocturne du château.",
      obj:"Une seule sortie à pied dans la journée, pour garder Vianney frais avant la nocturne du soir.",
      resa:"Nocturne aux flambeaux — RÉSERVÉE (lundi 19 octobre, 20h00)",
      sched:[
        ["09h00","Réveil, petit-déjeuner","Boulangerie fermée le lundi — pain acheté la veille"],
        ["09h30","Départ vers Nafraiture","≈20-22 min"],
        ["09h50","Luna et les Gardiens — parcours Vresse/Nafraiture","≈2,2 km / +55 m (chiffre plausible mais non confirmé par une fiche officielle dédiée) · personnage Pépé Crochet, forêt + eau"],
        ["11h00","Point de vue du Jambon (Membre-Bohan)","Même secteur que Nafraiture, ≈10 min de route · nouvelle plateforme en acier Corten (rénovée 2025/2026) en porte-à-faux sur le méandre, parking juste à côté, aucune marche nécessaire · ≈15-20 min sur place"],
        ["11h30","Retour vers le gîte"],
        ["13h00","Après-midi libre : jeux, lecture, repos","Volontairement sans deuxième balade, pour ne pas cumuler deux sorties à pied avant la nocturne"],
        ["18h00","Dîner avancé au gîte","Horaire à ajuster une fois l'heure exacte de la nocturne connue"],
        ["18h45","Départ vers le château","Nuit déjà tombée — coucher du soleil 18h42 ce jour-là"],
        ["20h00","Visite nocturne aux flambeaux","Date confirmée (19 et 20 octobre sont les deux seules dates de la fenêtre) mais heure de départ précise non publiée en clair — à obtenir en réservant. Comptez ≈1h de visite"],
        ["≈21h00","Retour au gîte, coucher"]
      ],
      notes:["Aucune date de battue 2026 n'est publiée à ce jour pour Nafraiture — si le sentier est fermé, basculer sur le Luna d'Herbeumont, déjà identifié comme repli","La nocturne se déroule en grande partie à l'abri dans les tours et logis du fort — prévoir des vêtements de pluie plutôt qu'envisager une annulation","Ne pas ajouter la Promenade des Légendes de Laforêt ce jour-là","En option si le temps le permet : le Pont de Claies de Laforêt (≈10 min du Jambon) est une passerelle en bois saisonnière, démontée à l'automne selon le niveau de l'eau — pas de date fixe, elle est peut-être déjà démontée à ces dates. Vérifier par téléphone avant de s'y arrêter (Centre Touristique de Vresse-sur-Semois, +32 61 29 28 27)"] },

    { id:"b4", scene:"cliffs", emoji:"🪨", dow:"Mardi 20 octobre", title:"Rochehaut, le Géant, la passerelle et les fées",
      sum:"Boucle de points de vue et légendes autour du gîte, peu de marche.",
      obj:"Vue, légende, pont suspendu : trois objectifs concrets pour Vianney en une matinée, sans grande randonnée.",
      sched:[
        ["09h00","Départ vers Rochehaut — pain du jour chez Pom' de Pain","Place Marie Howet 6 · ≈5-6 min du gîte · exceptionnellement ouverte le mardi (vacances de Toussaint) — à reconfirmer au 061 46 03 49"],
        ["09h20","Panorama sur Frahan et la boucle de la Semois","Vue depuis la route, pas de rando complète"],
        ["09h50","Départ vers Botassart","≈15-20 min, estimation non routée en direct"],
        ["10h10","Tombeau du Géant","Rue de Châteaumont, Botassart · accessible directement par la route, très courte marche, gratuit · légende du Géant"],
        ["10h40","Départ vers la passerelle du Moulin de l'Épine (via Cordemois)","≈10 min"],
        ["10h50","Passerelle du Moulin de l'Épine","Parking Pont de Cordemois, rue de la Poulie · route accessible jusqu'au pont, pas la boucle complète de 8 km · traversée du pont suspendu de 55 m"],
        ["12h00","Déjeuner (gîte ou pique-nique)"],
        ["14h00","Roche des Fées, Corbion","Boucle courte n°14 depuis la place du village · 2 km / 30 min officielles, prévoir 45 min à 1h avec pauses et la légende des fées/nutons — pas la grande boucle « Sur les pas de Verlaine »"],
        ["15h00","Retour au gîte, temps calme"]
      ],
      notes:["Si Botassart, Cordemois ou Corbion sont concernés par une battue ce jour : basculer sur le Rocher du Corps de Garde ou les Crêtes de Chairière, déjà identifiés en repli","Vianney fatigué : supprimer la Roche des Fées de l'après-midi et rentrer directement après la boucle du matin"] },

    { id:"b5", scene:"departure", emoji:"🚗", dow:"Mercredi 21 octobre", title:"Rangement et retour",
      sum:"Check-out et route retour vers Sailly-lez-Lannoy.",
      obj:"Jour de route, aucune activité extérieure imposée.",
      sched:[
        ["09h00","Rangement, vaisselle, poubelles"],
        ["09h30","Chargement de la voiture"],
        ["10h00","Vérification du gîte avant l'état des lieux","Draps, torchons, poubelles — la caution de 125 € en dépend"],
        ["10h30","Check-out","Officiellement avant 11h00"],
        ["11h00","Départ vers Sailly-lez-Lannoy","≈2h à 2h30, estimation non routée en direct cette session"],
        ["≈13h15","Arrivée estimée à Sailly-lez-Lannoy"]
      ],
      notes:["Micro-arrêt à Bouillon possible seulement s'il reste sur le trajet et qu'une activité validée n'a pas été faite avant"] },
  ],

  highlights: [
    { day:"2026-10-17", cls:"h-violet", scene:"sunset", emoji:"🌌", when:"Samedi soir", title:"Odyssée de Lumière",
      text:"Un spectacle nocturne son et lumière dans les cours du château, à la tombée de la nuit.",
      list:["19h15, arrivée 30 min avant","Réservation obligatoire, via le City Pass+","Sacrifiable en dernier recours si fatigue du trajet"] },
    { day:"2026-10-18", cls:"h-gold", scene:"town", emoji:"🦅", when:"Dimanche", title:"Fauconnerie",
      text:"Un vrai ballet de rapaces dans la cour du château — la visite complète du château, elle, se fait lundi soir à la nocturne.",
      list:["Spectacles à 11h30, 14h00 et 15h30","Inclus dans le City Pass+","Annulable par grand vent/forte pluie"] },
    { day:"2026-10-19", cls:"h-coral", scene:"forest", emoji:"🔥", when:"Lundi soir", title:"Nocturne aux flambeaux",
      text:"Une visite du château à la lueur des flambeaux, dans le noir tombé dès 18h42.",
      list:["Réservation effectuée","Départ à 20h00","≈1h de visite, en grande partie à l'abri"] },
  ],

  practical: [
    { icon:"💶", title:"Budget — billetterie château",
      kv:[["City Pass+ (2 adultes + Alban + Vianney)","60,00 €"],["Nocturne (2 adultes + Alban + Vianney)","49,50 €"],["Total billetterie","109,50 €"]],
      text:"Alban (13 ans) est hors tranche enfant (qui s'arrête à 12 ans) et compte au tarif adulte, sauf tarif « étudiant » à confirmer sur place (-8 € au total si applicable). Vérifier aussi si un seul City Pass+ par personne couvre bien le samedi soir et le dimanche, ou s'il faut deux passages." },
    { icon:"🛒", title:"Budget — vie quotidienne (estimation)",
      kv:[["Courses ALDI/Carrefour (4 j.)","150-200 €"],["Boulangerie (4 des 5 jours)","15-20 €"],["Repas extérieurs","40-60 €"]],
      text:"Luna et les Gardiens (Bouillon + Vresse) : gratuit sur toutes les pages officielles consultées. Belvédère, Tombeau du Géant, passerelle, Rochehaut, Roche des Fées : accès libre et gratuit. Ménage (60 €) et caution (125 €, remboursable) du gîte, déjà connus, hors budget activités." },
    { icon:"🧳", title:"Checklist — linge & vêtements", check:true,
      list:["Draps pour tous les lits (rien fourni par le gîte)","Serviettes de toilette","Torchons de cuisine","Vêtements chauds superposables (nuits ≈5,5°C en moyenne)","Vêtements de pluie / coupe-vent","Chaussures fermées, adhérentes","Bonnet léger pour les sorties du soir"] },
    { icon:"🔋", title:"Checklist — électronique & divers", check:true,
      list:["Smartphones/tablette chargés","App « Luna et les Gardiens » installée avant le départ","Chargeurs","Batterie externe","Billets château en PDF/écran (réseau faible en forêt)","Un peu de liquide (petits commerces ruraux)"] },
    { icon:"📌", title:"Réservations à faire", check:true,
      list:["Odyssée de Lumière — samedi 17, 19h15","Nocturne aux flambeaux — lundi 19 à 20h00 — RÉSERVÉE","City Pass+ ×4","Gîte Le P'tit Nid (Elloha, si pas déjà finalisé)","Bouillon Medieval Experience (si prévu en option)"],
      contacts:[{n:"Château de Bouillon", sub:"Horaires, fauconnerie, nocturne", tel:"+3261464202"},{n:"Bouillon Medieval Experience", sub:"reservation@bouillonmedievalexperience.be", tel:"+3261468303"}] },
    { icon:"🔍", title:"Vérifications de dernière minute (48-72h avant)",
      list:["Battues de chasse : bouillon.be/actualites (Bouillon-Corbion-Poupehan, Arboretum), vresse-sur-semois.be (Nafraiture, Laforêt), chasseonweb.be (carte régionale) — sur place, seuls les panneaux physiques à l'entrée des bois font foi","Météo : meteo.be/fr/bouillon — signal fiable seulement à partir d'environ 10-14 octobre 2026","Horaires château / fauconnerie / Medieval Experience : reconfirmer par téléphone, les horaires publiés en ligne le sont en image","Carrefour Market Noirefontaine, ouverture réelle le samedi (8h30 supposé vs 9h00 selon les annuaires)","Boulangerie Pom' de Pain ouverte le mardi 20 (exception vacances scolaires)"] },
    { icon:"⚠️", title:"Plans B météo & chasse", warn:true,
      list:["Sam 17 : Odyssée sacrifiable en dernier recours si fatigue/retard","Dim 18 : fauconnerie annulable par grand vent/forte pluie → Musée Ducal + Medieval Experience en repli","Lun 19 : chasse à Nafraiture → Luna Herbeumont ; pluie → la nocturne se tient à l'abri dans le fort","Mar 20 : chasse à Botassart/Corbion → Rocher du Corps de Garde ou Crêtes de Chairière ; pluie → concentrer sur les points de vue accessibles en voiture","Mer 21 : jour de route, peu d'impact météo/chasse"] },
    { icon:"🙂", title:"Si Vianney en a marre", warn:true,
      list:["La fauconnerie et le Belvédère restent les deux blocs fixes du dimanche — seul Luna Bouillon est écourtable si besoin","Sam 17 : sauter l'Odyssée entièrement si besoin","Dim 18 : écourter Luna Bouillon avant la fin s'il faut gagner du temps","Lun 19 : ne jamais ajouter Laforêt ce jour-là, écourter le Luna de Nafraiture si besoin","Mar 20 : supprimer la Roche des Fées de l'après-midi, rentrer après la boucle du matin"] },
  ],

  places: {
    chateau:    { n:"Château de Bouillon", a:"Esplanade Godefroid, 6830 Bouillon", ll:"49.7943,5.0470", tel:"+3261464202", h:"Oct 2026 : semaine 10h-17h, week-end 10h-18h (à reconfirmer)",
      d:"Forteresse médiévale sur un éperon rocheux dominant la Semois, l'une des plus anciennes d'Europe encore debout — donjon, oubliettes, remparts et galeries souterraines, en visite libre (numéros affichés) ou audioguidée. Comptez 1h30 à 2h pour l'ensemble du site en prenant son temps (nous ne ferons que la fauconnerie ce dimanche, voir le programme). Nombreux escaliers et passages étroits : chaussures fermées conseillées, une petite veste utile (fraîcheur en sous-sol). Parking à proximité de l'esplanade, à l'entrée du château (emplacement précis non vérifié — se fier au fléchage sur place).",
      url:"https://www.chateaudebouillon.com/", urlLabel:"Site officiel" },
    arboretum:  { n:"Arboretum de Bouillon", a:"Rue de la Ramonette, 6830 Bouillon", ll:"49.78752,5.05961",
      d:"Parcours en réalité augmentée sur smartphone/tablette (appli gratuite « Luna et les Gardiens ») autour de l'énigme des Nutons et de Faudlou, dans l'arboretum de Bouillon. 2,1 km, +92 m de dénivelé, facile, ≈1h à 1h30 de jeu. Parking et point de départ sur place.", url:"https://www.lunaetlesgardiens.be/bouillon", urlLabel:"App Luna (Bouillon)" },
    belvedere:  { n:"Belvédère de Bouillon / d'Auclin", a:"Côte d'Auclin, 6830 Bouillon", ll:"49.80016,5.06525", h:"Accès libre, gratuit",
      d:"Tour d'observation de 31,6 m (161 marches) construite sur la Côte d'Auclin, panorama à 385 m d'altitude sur Bouillon et la boucle de la Semois. Montée en ≈10 min ; comptez 30-45 min sur place montée/descente comprises. Accès libre et gratuit, parking directement au pied de la tour.", url:"https://www.paysdebouillon.be/details/LOD-01-0AVJ-1AMK&type=11", urlLabel:"Infos site" },
    botassart:  { n:"Tombeau du Géant", a:"Rue de Châteaumont, 6833 Botassart", ll:"49.82068,5.04328", h:"Accès libre, gratuit",
      d:"Point de vue emblématique associé à la légende du Géant enterré sous ce rocher, accessible directement par la route (quelques mètres à pied depuis le parking, pas de rando nécessaire). Gratuit, comptez 20-25 min sur place. Des sentiers de randonnée plus longs partent aussi d'ici, mais ce n'est pas ce qu'on emprunte cette fois.", url:"https://www.paysdebouillon.be/details/LOD-01-0AVJ-75QQ&type=11", urlLabel:"Infos site" },
    cordemois:  { n:"Passerelle du Moulin de l'Épine — parking", a:"Pont de Cordemois, Rue de la Poulie, 6830 Bouillon", ll:"49.7943,5.0640",
      d:"Passerelle suspendue de 55 m au-dessus de la Semois, l'une des plus longues de Wallonie (2020). Depuis le parking de Cordemois, on y accède par une route accessible même aux poussettes/PMR (pas la boucle complète officielle de 8 km / 2h45) : comptez 20-30 min aller-retour pour la traverser et repartir, terrain plat.", url:"https://www.semois-parcnational.be/la-passerelle-epine-bouillon", urlLabel:"Infos rando" },
    rochehaut:  { n:"Rochehaut — panorama sur Frahan", a:"Rte de Alle, 6830 Bouillon (≈2 km du centre de Rochehaut)", ll:"49.7758,4.9963",
      d:"Point de vue classé « patrimoine exceptionnel de Wallonie » sur le méandre de la Semois qui encercle le hameau de Frahan (toits d'ardoise, chapelle, anciens séchoirs à tabac). Accessible directement en voiture le long d'un tronçon de route aménagé (≈300 m), parking sur place — pas de marche nécessaire pour voir le panorama. Comptez 20-30 min sur place. Possibilité de prolonger par une balade de 1,5 km à travers bois qui descend jusqu'à Frahan, si l'envie et le temps sont là (facultatif, non prévu au programme).", url:"https://www.semois-parcnational.be/point-de-vue-frahan", urlLabel:"Infos site" },
    corbion:    { n:"Roche des Fées", a:"Place du village, 6830 Corbion", ll:"49.7727,5.0234",
      d:"Rocher et cavité associés aux légendes locales de fées, de diables et de nutons, avec un petit ruisseau qui marque la frontière franco-belge. Boucle courte n°14 depuis la place du village : 2 km, 30 min officielles (prévoir 45 min à 1h avec pauses), facile. Ne pas confondre avec la grande randonnée « Sur les pas de Verlaine », plus longue. Parking sur la place du village, point de départ de la boucle.", url:"https://corbionsursemois.be/walk/la-roche-des-fees/", urlLabel:"Voir le tracé" },
    nafraiture: { n:"Nafraiture", a:"6830 Nafraiture", ll:"49.91182,4.92589",
      d:"Parcours en réalité augmentée (appli gratuite « Luna et les Gardiens ») avec le personnage Pépé Crochet, à travers forêt et cours d'eau. ≈2,2 km / +55 m (chiffres plausibles mais non confirmés par une fiche officielle dédiée), facile, ≈1h à 1h30 de jeu. Départ et parking dans le village.", url:"https://www.lunaetlesgardiens.be/vresse-1", urlLabel:"App Luna (Vresse)" },
    jambon:     { n:"Point de vue du Jambon", a:"Entre Membre et Bohan, 5550 Vresse-sur-Semois", ll:"49.9057,4.8697",
      d:"L'un des points de vue les plus réputés du parc : une boucle de la Semois en forme de « jambon » vue d'en haut. Entièrement rénové en 2025/2026 avec une nouvelle plateforme en acier Corten en porte-à-faux au-dessus du vide. Parking directement à côté de la plateforme, pensé pour un accès rapide et facile (y compris à mobilité réduite) — aucune marche nécessaire, comptez 15-20 min sur place. Deux sentiers balisés plus longs partent aussi d'ici pour qui veut prolonger.", url:"https://www.semois-parcnational.be/le-point-de-vue-du-jambon", urlLabel:"Infos site" },
    claies:     { n:"Pont de Claies de Laforêt (en option)", a:"Rue du Pont de Claies, 5550 Laforêt (Vresse-sur-Semois)", ll:"49.8890,4.8886", tel:"+3261292827",
      d:"Passerelle en bois tressé (branches d'aulne/charme/chêne sur pieux), 80 m de long, unique en Belgique — héritage des anciens planteurs de tabac. ⚠️ Structure saisonnière : montée en juin, démontée à l'automne selon le niveau de l'eau, sans date fixe (déjà démontée dès le 16 octobre certaines années). Rien ne garantit qu'elle soit encore en place le 19 octobre 2026 — appeler avant de s'y arrêter. Si elle y est : quelques pas depuis le parking jusqu'au pont, ou boucle balisée de 3,5 km/50 min si vous voulez en faire une vraie balade.", url:"https://www.semois-parcnational.be/pont-de-claies-laforet", urlLabel:"Infos site" },
    gite:       { n:"Le P'tit Nid", a:"27-29 rue des Lavandières, 6830 Poupehan", ll:"49.7835,5.0281", h:"Check-in 16h, check-out 11h" },
    aldi:       { n:"ALDI Bouillon/Noirefontaine", a:"Rue de la Sentinelle 66, 6831 Noirefontaine", ll:"49.7965,5.0140", h:"Lun-Sam 8h30-19h, fermé dimanche",
      d:"Parking sur place, devant le magasin." },
    carrefour:  { n:"Carrefour Market Noirefontaine", a:"Rue de la Sentinelle 68, 6831 Noirefontaine", ll:"49.7963,5.0143", h:"Probablement 9h-19h (à confirmer)",
      d:"Parking sur place, à ~100 m de l'ALDI." },
    boulangerie:{ n:"Pom' de Pain", a:"Place Marie Howet 6, 6830 Rochehaut", ll:"49.7758,4.9963", tel:"+3261460349", h:"Mer-Dim 7h-18h, fermé lundi, fermé mardi sauf vacances scolaires",
      d:"Parking sur la place du village." },
  },
};

TRIP.dayPlaces = {
  b1: ["gite","aldi","carrefour","rochehaut","chateau"],
  b2: ["chateau","arboretum","belvedere"],
  b3: ["nafraiture","jambon","claies","chateau"],
  b4: ["rochehaut","boulangerie","botassart","cordemois","corbion"],
  b5: ["gite"],
};

/* Photos de vacances (GPS+date EXIF), mode Souvenir. Vide tant que le séjour n'a pas eu lieu. */
TRIP.photos = [];
