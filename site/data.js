/* ============================================================
   Tenerife 2026 — données du voyage
   Tu peux modifier ce fichier librement (textes, horaires...).
   ============================================================ */

const TRIP = {
  meta: {
    title: "Tenerife",
    start: "2026-06-27T17:10:00",
    end:   "2026-07-09T18:40:00",
    hotel: "Hotel Tigaiga — Puerto de la Cruz",
    subtitle: "27 juin → 9 juillet 2026"
  },

  days: [
    { id:"j1", scene:"arrival", emoji:"✈️", dow:"Samedi 27 juin", title:"On débarque !",
      sum:"Arrivée, voiture, route, installation.",
      obj:"Journée 100 % logistique : arriver, récupérer la voiture, s'installer, dîner, dormir.",
      sched:[["17h10","Atterrissage à Tenerife Sud (vol EasyJet EJU4575)"],["17h45","Bagages, toilettes"],["~18h","Comptoir Autoreisen : papiers, voiture, rehausseur de Vianney"],["~18h30","Route vers Puerto de la Cruz (~1h)"],["~19h35","Check-in à l'Hotel Tigaiga, installation rapide"],["20h–21h","Dîner à l'hôtel si l'horaire le permet, puis repos"]],
      notes:["Aucune visite ce jour-là","Vérifier le rehausseur de Vianney avant de quitter l'aéroport","Demander à l'hôtel l'heure limite du dîner le soir d'arrivée","Prévenir Autoreisen / l'hôtel en cas de gros retard","Ventoline accessible (jamais dans le coffre)"] },

    { id:"j2", scene:"garden", emoji:"🌿", dow:"Dimanche 28 juin", title:"Jardin botanique",
      sum:"Plantes exotiques + Puerto en douceur.",
      obj:"Première vraie journée, douce et végétale, pour prendre ses marques avant le Teide.",
      lunch:{name:"Restaurante Oliva", planB:"Casa Magnolia", budget:"45–70 €", note:"viser 13h · réserver le matin · quartier du jardin botanique"},
      sched:[["8h30–9h30","Petit-déjeuner tranquille au Tigaiga"],["10h15","Jardin botanique de Puerto (mission plantes exotiques pour Vianney)"],["11h45","Petite pause / quartier La Paz"],["13h","Déjeuner près du jardin"],["14h30","Retour hôtel : repos, lecture, piscine"],["16h30","Bonus léger : Plaza del Charco / La Ranilla / front de mer si en forme"],["Soir","Dîner hôtel · micro-balade Parque Taoro seulement si envie"]],
      notes:["Ne pas empiler jardin + Lago Martiánez + centre complet : on garde léger","Préparer le sac Teide ce soir : eau, casquettes, crème, chaussures, vestes légères, snacks, Ventoline"] },

    { id:"j3", scene:"volcano", emoji:"🌋", dow:"Lundi 29 juin", title:"Le volcan Teide",
      sum:"Roques de García, paysages de Mars, pique-nique.",
      obj:"Grande journée volcan, libre et sans téléphérique, centrée sur les paysages et de petites marches.",
      lunch:{name:"Bocadillos à emporter", planB:"La Casa del Panadero (ou Dulce Encuentro)", budget:"~25 €", note:"4 bocadillos + 4 à 6 L d'eau + fruits + snacks, achetés le matin"},
      sched:[["8h","Achat des bocadillos en bas (La Casa del Panadero)"],["8h45","Départ vers le parc national du Teide"],["~10h30","Roques de García / Mirador de La Ruleta"],["10h45–12h45","Roques de García : boucle complète si tout le monde est bien, sinon partielle"],["12h45","Pique-nique au pied des roches"],["13h45","Minas de San José : marche courte ou complète selon l'énergie"],["~14h45","Miradors selon météo (Llano de Ucanca, La Tarta…), puis retour"]],
      notes:["Pas de téléphérique : ~126 € pour peu de temps en haut, jugé pas rentable","Chaussures fermées, pas de sandales · casquettes, lunettes, crème","En cas de calima forte, gros vent ou mauvaise visibilité : réduire ou décaler","Pas de Chipeque ce soir-là (journée déjà bien remplie)"] },

    { id:"j4", scene:"cliffs", emoji:"🏘️", dow:"Mardi 30 juin", title:"Repos & Rambla de Castro ✓",
      sum:"Matinée tranquille, déjeuner au Bar El Parque, puis balade côtière.",
      obj:"Matin repos à l'hôtel, déjeuner au Bar Cafetería El Parque à Puerto, puis Rambla de Castro l'après-midi.",
      lunch:{name:"Bar Cafetería El Parque", planB:"—", budget:"€", note:"C. de Suiza 1, Puerto de la Cruz · déjeuner à 14h"},
      sched:[["Matin","Repos à l'hôtel — La Orotava non visitée ce jour"],["14h","Déjeuner — Bar Cafetería El Parque (Puerto de la Cruz) ✓"],["~15h","Route vers le Mirador de San Pedro (parking gratuit)"],["15h30–16h30","Rambla de Castro : San Pedro → Fortín → Gordejuela ✓"],["~17h","Retour, douche, repos"]],
      notes:["Rambla de Castro faite ✓ · El Lance pas fait","La Orotava non visitée : à envisager sur un autre jour si l'occasion se présente"] },

    { id:"j5", scene:"dragon", emoji:"🐉", dow:"Mercredi 1ᵉʳ juillet", title:"Drago, grotte de lave & Garachico",
      sum:"Arbre millénaire + Cueva del Viento + village.",
      obj:"Matinée tranquille à Icod, on protège la réservation de la grotte, puis Garachico en version courte.",
      resa:"Cueva del Viento · 12h30 (visite en français)",
      lunch:{name:"Bocadillos La Tentación (Icod)", planB:"La Casa del Drago", budget:"20–30 €", note:"déjeuner rapide avant la grotte"},
      sched:[["9h15","Départ vers Icod de los Vinos"],["10h","Icod : l'arbre Drago (vu de l'extérieur), place & ruelles"],["11h","Bocadillos à emporter (La Tentación)"],["12h15","Arrivée au centre visiteurs (15 min de marge)"],["12h30–15h","Cueva del Viento : visite guidée en français (~2h)"],["16h–17h30","Garachico : ruelles, front de mer, piscines El Caletón"],["~18h","Retour vers Puerto"]],
      notes:["GROTTE : pantalon long + chaussures fermées OBLIGATOIRES","Petit vêtement chaud · pas de sac à dos pendant la visite","Arriver 15 min avant (12h15) · Ventoline accessible","Garachico court et fluide : baignade seulement si mer très calme","Pas de Mirador Atalaya ce jour-là sauf énergie exceptionnelle"] },

    { id:"j6", scene:"town", emoji:"🎨", dow:"Jeudi 2 juillet", title:"La Laguna & forêt d'Agua García",
      sum:"Ville colorée UNESCO + micro-balade en forêt.",
      obj:"Journée douce entre la grotte et Anaga : patrimoine court, déjeuner local, micro-balade en forêt.",
      lunch:{name:"Casa Tomás", planB:"—", budget:"45–70 €", note:"plat star : costillas con papas, à partager · réserver"},
      sched:[["9h45","Départ vers La Laguna"],["10h45","La Laguna : Calle San Agustín, Plaza del Adelantado, rues colorées"],["12h20","Déjeuner chez Casa Tomás (secteur Tegueste)"],["14h10","Forêt d'Agua García / Guardianes Centenarios (45 min–1h)"],["~16h","Retour, repos"]],
      notes:["Parking conseillé à La Laguna : Las Quinteras","La Laguna reste courte : pas de musée long","Agua García en micro-balade · baskets (chemins parfois humides)","Soirée calme : départ tôt pour Anaga demain"] },

    { id:"j7", scene:"cloudforest", emoji:"☁️", dow:"Vendredi 3 juillet", title:"Anaga, la forêt des nuages",
      sum:"Laurisilve, miradors, puis côte nord-est.",
      obj:"Vraie journée Anaga mais protégée : forêt, miradors, petite rando, puis côte nord-est sans aller jusqu'à Taganana.",
      lunch:{name:"Pique-nique face à la mer", planB:"—", budget:"20–35 €", note:"acheter les bocadillos la veille ou très tôt"},
      sched:[["8h20","Départ tôt vers Anaga"],["9h10","Mirador de Jardina (arrêt court si dégagé)"],["9h45","Cruz del Carmen : parking tôt"],["10h","Sendero de los Sentidos : version familiale (laurisilve)"],["11h30","Pico del Inglés & Camino Viejo (tunnel végétal)"],["12h45","Pique-nique face à l'océan"],["13h30","Après-midi : Bajamar OU Punta del Hidalgo"]],
      opts:[["Option A — Bajamar","Piscines naturelles aménagées, plus rassurant pour Vianney, pratique pour un moment baignade."],["Option B — Punta del Hidalgo","Bout de côte nord-est, vues vers Anaga ; promenade plus esthétique, baignade seulement si très calme."]],
      notes:["On ne pousse pas vers Taganana / Benijo / Chinamada (trop long et sinueux)","Pas de grande randonnée aujourd'hui","Terrain parfois humide : baskets · départ tôt donc on dîne tranquille le soir"] },

    { id:"j8", scene:"stairs", emoji:"🪜", dow:"Samedi 4 juillet", title:"El Sauzal & les 500 escaliers",
      sum:"Jardins, falaise, miradors avec vue océan.",
      obj:"Journée douce mais enthousiasmante : végétal, falaise, mer, point de vue insolite et marche courte.",
      lunch:{name:"Terrazas del Sauzal", planB:"La Baranda (plus café / brunch)", budget:"65–95 €", note:"réserver (samedi) · repas léger avant les escaliers"},
      sched:[["10h30","Parque de Los Lavaderos"],["11h20","Balade / pause dans El Sauzal"],["12h15","Déjeuner aux Terrazas del Sauzal"],["13h45","Mirador / Parque La Garañona"],["14h45","Mirador de los 500 Escalones"],["~17h","Retour, repos"]],
      notes:["500 Escalones : on descend 1 ou 2 plateformes, pas obligé d'aller tout en bas (45 min–1h15)","Chaussures fermées · on ne court pas dans les marches · on reste groupés","Pas de descente si vent fort, fatigue ou accès ambigu · on respecte les panneaux","Chipeque seulement en plan B météo ce soir, pas prioritaire"] },

    { id:"j9", scene:"pool", emoji:"🏊", dow:"Dimanche 5 juillet", title:"Barranco de Ruiz & Charco de La Laja",
      sum:"Ravin vert le matin, piscine de l'océan l'après-midi.",
      obj:"Journée nord locale : un peu de vert le matin, un vrai déjeuner de poisson, puis le charco si la mer est calme.",
      lunch:{name:"Mesón Casa Mi Madre", planB:"Cofradía Las Aguas", budget:"70–100 €", note:"réserver pour 13h pile (dimanche) · poisson / fruits de mer"},
      sched:[["9h45","Barranco de Ruiz : version courte familiale (ravin, végétation)"],["12h","Temps calme au bord de mer à Las Aguas"],["13h","Déjeuner au Mesón Casa Mi Madre"],["14h30","Charco de La Laja : descente, photos, baignade si mer calme"],["~17h","Retour, repos (bateau demain)"]],
      notes:["Baignade non promise : seulement si la mer est visiblement calme","Pas de baignade si les vagues passent sur les rochers, accès glissant ou foule","Chaussures d'eau utiles · Vianney avec un adulte proche + flottaison","On ne reste pas tard si la mer remonte · pas de sortie le soir (Flipper demain)"] },

    { id:"j10", scene:"whale", emoji:"🐋", dow:"Lundi 6 juillet", title:"Baleines — Flipper Uno",
      sum:"Sortie en mer à Los Gigantes, repas inclus à bord.",
      obj:"Grande activité mer du séjour : rejoindre Los Gigantes sans stress, profiter de Flipper Uno, puis un mirador en bonus.",
      resa:"Flipper Uno · 11h30 (confirmé)",
      lunch:{name:"Repas inclus à bord", planB:"—", budget:"inclus", note:"garder eau, biscuits & un snack au cas où, pour Vianney"},
      sched:[["9h10","Départ de l'hôtel (ne pas partir plus tard — parking + check-in)"],["~10h30","Arrivée Los Gigantes / Poblado Marinero, stationnement"],["10h35","Check-in Flipper Uno, toilettes, crème"],["11h","Embarquement"],["11h30–14h30","Flipper Uno : 3h — baleines, dauphins, falaises de Los Gigantes, baignade possible, repas"],["14h30","Débarquement, pause fraîcheur"],["15h30","Mirador Archipenque (bonus court si tout le monde va bien)"],["~17h15","Retour à Puerto"]],
      notes:["Maillot, serviette, crème, casquette, Ventoline accessible","Vianney en mer : adulte tout près + brassards · pas de saut/tyrolienne","Parking : viser le port / Poblado Marinero, sinon Parking El Mirador","Ne pas chercher longtemps une place gratuite : basculer vite sur le parking organisé","Si fatigue / mal de mer : on saute le mirador sans regret"] },

    { id:"j11", scene:"sunset", emoji:"🌅", dow:"Mardi 7 juillet", title:"Piscines & coucher de soleil au Chipeque",
      sum:"Lago Martiánez le matin, sunset sur les nuages le soir.",
      obj:"Journée construite autour du coucher de soleil au Chipeque, avec un matin léger et un après-midi de vrai repos.",
      lunch:{name:"Repas simple à Puerto", planB:"Tinguaro le soir (bon hôtel)", budget:"simple", note:"prévenir le maître d'hôtel LUNDI au petit-déj pour le bon Tinguaro"},
      sched:[["10h30","Lago Martiánez : piscines, moment baignade (format court)"],["13h15","Déjeuner simple à Puerto ou à l'hôtel"],["14h–17h","Vrai repos : douche, sieste possible, on prépare le sac Chipeque"],["17h45","Repas tôt au Tinguaro (bon demi-pension, pas trop lourd)"],["19h15","Départ vers Chipeque (route de montagne)"],["~20h15","Installation au Mirador de Chipeque (~1800 m)"],["~20h40","Coucher de soleil au-dessus de la mer de nuages ✨"],["21h15","On repart sans traîner à la tombée de la nuit"],["~22h20","Retour à l'hôtel, dodo"]],
      notes:["Chipeque seulement si : visibilité correcte, pas de brouillard sur la TF-24, pas de calima, pas de gros vent, famille reposée","~1800 m : pull, coupe-vent, baskets, eau, snacks, téléphone chargé, Ventoline","Bon Tinguaro : 16 € / pers (64 € à 4), à demander 24h avant","Plan B si Chipeque tombe à l'eau : balade douce à Puerto + repos (pas une autre grosse sortie)"] },

    { id:"j12", scene:"forest", emoji:"🥾", dow:"Mercredi 8 juillet", title:"Dernière rando & festin guachinche",
      sum:"Forêt d'Aguamansa, déjeuner local, mirador, valises.",
      obj:"Dernière vraie journée : rando forestière courte + déjeuner guachinche + mirador, puis repos et valises.",
      lunch:{name:"Guachinche El Ramal (La Orotava)", planB:"Restaurante Aguamansa", budget:"local", note:"APPELER pour confirmer l'ouverture du mercredi midi · prévoir du cash"},
      sched:[["10h45–12h15","Randonnée SL-TF 81 Camino La Orilla del Monte (boucle forestière, rythme famille)"],["13h","Déjeuner guachinche : plats canariens à partager"],["14h30","Mirador Humboldt (20 min : vue sur la vallée de La Orotava & le Teide)"],["15h15","Retour, douche, on commence les valises"],["17h","Dernière balade douce à Puerto : Plaza del Charco, glace & souvenirs"],["Soir","Dîner à l'hôtel, dernière soirée tranquille"]],
      notes:["SL-TF 81 : format familial, on n'allonge pas · télécharger la trace hors ligne","Chaussures fermées, eau, casquettes, crème, Ventoline accessible","El Ramal : commander à partager (il reste mirador + valises + dîner)","Mirador Humboldt : 20 min max, on n'en fait pas une nouvelle activité","Anticiper le stationnement à Aguamansa"] },

    { id:"j13", scene:"departure", emoji:"👋", dow:"Jeudi 9 juillet", title:"¡Hasta luego Tenerife !",
      sum:"Matinée tranquille, route, envol le soir.",
      obj:"Journée départ sans stress.",
      sched:[["Matin","Petit-déj tranquille, dernières valises"],["—","Dernier regard sur l'île"],["~15h","Route vers l'aéroport Tenerife Sud"],["16h","Voiture rendue à Autoreisen"],["18h40","Décollage — au revoir Tenerife !"]],
      notes:["Pas de grosse sortie le jour du départ","Vérifier qu'on n'oublie rien dans les chambres","Ventoline en cabine, pas en soute"] },
  ],

  highlights: [
    { id:"h1", scene:"whale", cls:"h-coral", emoji:"🐋", when:"Lundi 6 juillet · 11h30", title:"Bateau & baleines — Flipper Uno",
      text:"Sortie de 3h à Los Gigantes : baleines, dauphins, falaises géantes, baignade possible. Repas inclus à bord.",
      list:["Départ hôtel vers 9h10 — ne pas traîner (parking)","Maillot, serviette, crème, casquette, Ventoline","Vianney se baigne avec un adulte + brassards"] },
    { id:"h2", scene:"dragon", cls:"h-teal", emoji:"🕳️", when:"Mercredi 1ᵉʳ juillet · 12h30", title:"Cueva del Viento",
      text:"Visite guidée en français d'un vrai tube de lave volcanique, l'un des plus longs du monde.",
      list:["Pantalon long + chaussures fermées OBLIGATOIRES","Vêtement chaud, pas de sac à dos dans la grotte","Arriver 15 min avant (12h15)"] },
    { id:"h3", scene:"volcano", cls:"h-gold", emoji:"🌋", when:"Lundi 29 juin", title:"Le volcan Teide",
      text:"Paysages de roche rouge comme sur Mars : Roques de García & Minas de San José. Pique-nique là-haut, sans téléphérique.",
      list:["Chaussures fermées, casquette, lunettes, crème","Une laine : frais en altitude","Beaucoup d'eau dans le sac"] },
    { id:"h4", scene:"sunset", cls:"h-violet", emoji:"🌅", when:"Mardi 7 juillet · le soir", title:"Coucher de soleil au Chipeque",
      text:"À ~1800 m, le soleil se couche au-dessus de la mer de nuages. Le moment magique du séjour.",
      list:["Pull + coupe-vent : ça caille même en juillet","Repas tôt au Tinguaro avant de monter","Téléphone chargé, Ventoline, on redescend à la nuit"] },
  ],

  practical: [
    { icon:"🏨", title:"Notre base", kv:[
      ["Hôtel","Hotel Tigaiga — Puerto de la Cruz"],
      ["Chambres","2 chambres Doble Jardín"],
      ["Repas","Petit-déj + dîner inclus (demi-pension)"],
      ["Voiture","Citroën C3 — Autoreisen (aéroport Sud)"],
      ["Séjour","12 nuits · 27 juin → 9 juillet"] ] },
    { icon:"🍽️", title:"Astuce dîner du 7 juillet", text:
      "Le soir du Chipeque, on saute le dîner classique. L'hôtel donne un bon de 16 € / personne (64 € pour nous 4) pour le restaurant Tinguaro (ouvert 11h–21h). À demander au maître d'hôtel le lundi 6 au petit-déjeuner (au moins 24h à l'avance)." },
    { icon:"📞", title:"À réserver / appeler", list:[
      "Restaurante Oliva (28/06)","Casa Tomás (02/07)",
      "Terrazas del Sauzal (04/07)","Mesón Casa Mi Madre (05/07, pour 13h)","Guachinche El Ramal (08/07, confirmer l'ouverture)"] },
    { icon:"🎒", title:"Dans le sac tous les jours", list:[
      "De l'eau pour tout le monde","Crème solaire, casquette, lunettes","Chaussures fermées pour les balades",
      "Maillot + serviette (au cas où)","Une petite laine pour la montagne","La Ventoline de Vianney — jamais dans le coffre"] },
    { icon:"💶", title:"Argent & cartes hors-ligne", list:[
      "Prévoir du cash pour les guachinches et petites adresses locales",
      "Télécharger les cartes / traces hors ligne : Teide, Rambla de Castro, Anaga, Barranco de Ruiz, SL-TF 81"] },
    { icon:"⚠️", title:"Règles de sécurité", warn:true, list:[
      "Vianney se baigne toujours avec un adulte tout près","Piscines naturelles : seulement si la mer est calme",
      "Pas de baignade si les vagues passent sur les rochers","Teide / Chipeque : on annule si calima, brouillard ou gros vent",
      "Sur les sentiers : on ne court pas, on suit les panneaux","Ventoline toujours accessible, jamais dans le coffre"] },
  ]
};

/* ---- Carnet d'adresses (coordonnées réelles → itinéraire Google Maps) ---- */
TRIP.places = {
  tigaiga:   { n:"Hotel Tigaiga",                a:"Ctra. Taoro 28, Puerto de la Cruz",        ll:"28.4103498,-16.549232" },
  tfs:       { n:"Aéroport Tenerife Sud (TFS)",  a:"Reina Sofía, Granadilla de Abona",         ll:"28.0445,-16.5725" },
  botanico:  { n:"Jardín Botánico",              a:"C. Retama 2, Puerto de la Cruz",           ll:"28.4115604,-16.5358112" },
  oliva:     { n:"Restaurante Oliva",            a:"C. Retama 3, Puerto de la Cruz",           ll:"28.4120344,-16.5361122" },
  panadero:  { n:"La Casa del Panadero",         a:"C. la Hoya 23, Puerto de la Cruz",         ll:"28.4168231,-16.5466735" },
  roques:    { n:"Roques de García",             a:"Parc national du Teide",                   ll:"28.224722,-16.631667" },
  minas:     { n:"Minas de San José",            a:"Parc national du Teide",                   ll:"28.2655679,-16.5889982" },
  orotava:   { n:"La Orotava (vieille ville)",   a:"Centre historique, La Orotava",            ll:"28.3903,-16.5230" },
  dondegord: { n:"Donde el Gordo",              a:"C. Carrera, La Orotava",                   ll:"28.3922,-16.5241" },
  elparque:  { n:"Bar Cafetería El Parque",    a:"C. de Suiza 1, Puerto de la Cruz",         ll:"28.4133,-16.5488" },
  sanpedro:  { n:"Restaurante Mirador San Pedro",a:"Mirador de San Pedro, Los Realejos",       ll:"28.395642,-16.5940611" },
  rambla:    { n:"Rambla de Castro",             a:"Sentier côtier, Los Realejos",             ll:"28.393408,-16.585892" },
  drago:     { n:"Parque del Drago (Icod)",      a:"C. Arcipreste Ossuna, Icod de los Vinos",  ll:"28.3665471,-16.722216" },
  cueva:     { n:"Cueva del Viento",             a:"Cam. los Piquetes 51, Icod de los Vinos",  ll:"28.3520121,-16.7039689" },
  garachico: { n:"Garachico",                    a:"Centre & piscines El Caletón",             ll:"28.3732467,-16.7640103" },
  laguna:    { n:"Plaza del Adelantado",         a:"Vieille ville, La Laguna",                 ll:"28.4878415,-16.3134443" },
  casatomas: { n:"Restaurante Casa Tomás",       a:"Callejón de la Iglesia 2, Tegueste",       ll:"28.49325,-16.35525" },
  aguagarcia:{ n:"Bosque de Agua García",        a:"Sentier, Tacoronte",                       ll:"28.460928,-16.4039176" },
  cruzcarmen:{ n:"Cruz del Carmen",              a:"Anaga (centre visiteurs)",                 ll:"28.5303329,-16.2804559" },
  bajamar:   { n:"Piscines de Bajamar",          a:"Av. Gran Poder, Bajamar",                  ll:"28.5564074,-16.3444705" },
  punta:     { n:"Punta del Hidalgo",            a:"Bout de côte nord-est",                    ll:"28.5681021,-16.3265126" },
  lavaderos: { n:"Parque Los Lavaderos",         a:"Calle los Lavaderos, El Sauzal",           ll:"28.478074,-16.4385214" },
  terrazas:  { n:"Terrazas del Sauzal",          a:"Pje. Sierva de Dios 9, El Sauzal",         ll:"28.4779076,-16.4375605" },
  esc500:    { n:"Mirador de los 500 Escalones", a:"El Sauzal / Tacoronte",                    ll:"28.4901186,-16.4271593" },
  barranco:  { n:"Barranco de Ruiz",             a:"Zone récréative, Los Realejos",            ll:"28.391295,-16.626247" },
  mimadre:   { n:"Mesón Casa Mi Madre",          a:"C. el Cantito 16, Las Aguas",              ll:"28.3958422,-16.6404524" },
  charco:    { n:"Charco de La Laja",            a:"C. Antonio Ruiz Cedrés, San Juan de la Rambla", ll:"28.3962952,-16.6518597" },
  flipper:   { n:"Flipper Uno",                  a:"Poblado Marinero, Los Gigantes",           ll:"28.2460211,-16.8422947" },
  archipenque:{n:"Mirador Archipenque",          a:"Acantilados de Los Gigantes",              ll:"28.2404149,-16.8370118" },
  martianez: { n:"Lago Martiánez",               a:"Av. Cristóbal Colón, Puerto de la Cruz",   ll:"28.4187585,-16.544278" },
  chipeque:  { n:"Mirador de Chipeque",          a:"TF-24 (~1800 m)",                          ll:"28.3739518,-16.4638328" },
  aguamansa: { n:"Aguamansa — SL-TF 81",         a:"TF-21, La Orotava",                        ll:"28.3606215,-16.5015584" },
  ramal:     { n:"Guachinche El Ramal",          a:"Ctra. El Ramal (TF-211), La Orotava",      ll:"28.398079,-16.5198611" },
  humboldt:  { n:"Mirador de Humboldt",          a:"TF-21, La Orotava",                        ll:"28.4077912,-16.5071779" },
};

TRIP.dayPlaces = {
  j1:["tigaiga","tfs"],
  j2:["botanico","oliva"],
  j3:["roques","minas","panadero"],
  j4:["elparque","rambla"],
  j5:["drago","cueva","garachico"],
  j6:["laguna","casatomas","aguagarcia"],
  j7:["cruzcarmen","bajamar","punta"],
  j8:["lavaderos","terrazas","esc500"],
  j9:["barranco","mimadre","charco"],
  j10:["flipper","archipenque"],
  j11:["martianez","chipeque"],
  j12:["aguamansa","ramal","humboldt"],
  j13:["tfs"],
};

/* Fiche "Adresses utiles" dans l'onglet Pratique */
TRIP.practical.push({ icon:"📍", title:"Adresses utiles (GPS)", addrs:["tigaiga","tfs"] });

/* ---- Descriptifs courts + horaires réels, fusionnés dans TRIP.places ---- */
const PLACE_INFO = {
  tigaiga:   { d:"Notre hôtel, perché sur la colline de Taoro avec vue sur le Teide ; jardins et piscine." },
  tfs:       { d:"L'aéroport au sud de l'île (Reina Sofía) : arrivée et départ." },
  botanico:  { d:"Jardin de 1788 rempli de plantes tropicales géantes ; balade ombragée d'environ 1h.", h:"9h–18h tous les jours · ~3 €" },
  oliva:     { d:"Petit resto de quartier réputé pour ses escalopes (schnitzel) et ses portions généreuses.", h:"13h–21h · fermé mer & jeu" },
  panadero:  { d:"Boulangerie artisanale : croissants et bocadillos parfaits à emporter pour le Teide.", h:"7h30–15h30 tous les jours" },
  roques:    { d:"Cheminées de lave spectaculaires au pied du Teide ; boucle facile aux airs de planète Mars." },
  minas:     { d:"Plaine de sable et de roche volcanique : paysage lunaire, parfait pour grimper sur les rochers." },
  orotava:   { d:"Vieille ville canarienne en pente, aux balcons de bois et maisons colorées." },
  dondegord: { d:"Café-terrasse décontracté, juste en contrebas de l'Iglesia de la Concepción : bruschetta, papas, salades. Léger et pas cher.", h:"Lun–dim 6h30–16h · tél. +34 674 29 30 96" },
  elparque:  { d:"Bar-cafétéria de quartier près du Parque Taoro, Puerto de la Cruz. Simple et pas cher." },
  sanpedro:  { d:"Resto-mirador avec vue sur l'océan ; point de départ de la Rambla de Castro.", h:"10h–22h (ven/sam 23h)" },
  rambla:    { d:"Sentier côtier verdoyant : palmiers, falaises, vues océan et fortin de Gordejuela." },
  drago:     { d:"Le célèbre dragonnier millénaire d'Icod ; visible aussi gratuitement depuis la rue.", h:"8h–20h tous les jours · ~5 €" },
  cueva:     { d:"Tube de lave volcanique parmi les plus longs du monde ; visite guidée avec casque.", h:"Visites 9h–16h · sur réservation" },
  garachico: { d:"Village de pêcheurs reconstruit après une coulée de lave ; piscines naturelles El Caletón." },
  laguna:    { d:"Cité historique classée UNESCO, rues colorées et places animées (Plaza del Adelantado)." },
  casatomas: { d:"Institution canarienne : costillas con papas (travers de porc) à partager.", h:"Mar–dim 12h–17h (jeu–sam jusqu'à 22h) · fermé lundi" },
  aguagarcia:{ d:"Forêt de lauriers (laurisilve) ombragée ; sentiers faciles et aire de jeux." },
  cruzcarmen:{ d:"Porte d'entrée d'Anaga (~920 m), souvent dans les nuages ; départ des sentiers." },
  bajamar:   { d:"Piscines d'eau de mer aménagées, plus sûres pour la baignade ; sable noir à côté." },
  punta:     { d:"Bout de côte nord-est sauvage : vues sur Anaga, promenade et phare." },
  lavaderos: { d:"Petit parc en terrasses : bassins, cascades, lézards et vue sur la mer.", h:"8h–19h" },
  terrazas:  { d:"Restaurant avec terrasse panoramique sur l'océan ; cuisine soignée.", h:"Mer–ven 13h–22h · sam/dim dès 10h · fermé lun & mar" },
  esc500:    { d:"Mirador vertigineux au-dessus de la côte ; long escalier (on descend ce qu'on veut)." },
  barranco:  { d:"Ravin verdoyant : petite montée nature avec de belles vues sur la côte." },
  mimadre:   { d:"Adresse locale face à l'océan : poisson et fruits de mer ultra-frais.", h:"13h–16h · fermé mar & mer" },
  charco:    { d:"Piscine naturelle creusée dans la lave ; baignade seulement si la mer est calme." },
  flipper:   { d:"Sortie en bateau pirate : baleines, dauphins et falaises de Los Gigantes, repas inclus.", h:"Billetterie 9h–18h30" },
  archipenque:{ d:"Balcon sur les falaises de Los Gigantes (jusqu'à 800 m) ; petit bar." },
  martianez: { d:"Complexe de piscines d'eau de mer signé César Manrique, au bord de l'océan.", h:"10h–18h · ~7 €" },
  chipeque:  { d:"Mirador à ~1800 m : coucher de soleil au-dessus de la mer de nuages, face au Teide." },
  aguamansa: { d:"Forêt de pins et de lauriers ; boucle familiale SL-TF 81, ombragée." },
  ramal:     { d:"Guachinche typique : vins maison et viandes grillées canariennes, à partager.", h:"Mer–dim midi (ven/sam aussi le soir) · fermé lun & mar" },
  humboldt:  { d:"Mirador sur la vallée de La Orotava, Puerto et le Teide ; arrêt court." },
};
for(const k in PLACE_INFO){ if(TRIP.places[k]) Object.assign(TRIP.places[k], PLACE_INFO[k]); }

/* ---- Téléphones (appel direct) + place_id Google (fiche/avis) ---- */
const PLACE_EXTRA = {
  tigaiga:   { tel:"+34922383500", pid:"ChIJNcVTz-1_agwRYaE2s17eQWQ" },
  tfs:       {},
  botanico:  { tel:"+34922922981", pid:"ChIJs_1sk_V_agwRADt4EGcuL-k" },
  oliva:     { tel:"+34922373904", pid:"ChIJrUp_kfV_agwRrDiVounqfaw" },
  panadero:  { pid:"ChIJxfSM7lN_agwRqJfmLQZn4BM" },
  roques:    { pid:"ChIJO47So5-EagwRhF0F_kmFaeU" },
  minas:     { pid:"ChIJG5osdLGDagwRay-d0IB4-RM" },
  orotava:   {},
  dondegord: { tel:"+34674293096" },
  elparque:  { pid:"0xc6a7f5cb73fd999:0xd6cc988be8442697" },
  sanpedro:  { tel:"+34922340875", pid:"ChIJOXBOfCV-agwRqwc-ffuIcxw" },
  rambla:    { pid:"ChIJTcGBjip-agwRXY9vMpgcHWA" },
  drago:     { tel:"+34922815685", pid:"ChIJueZPPv6HagwRdBPnNCk4rpc" },
  cueva:     { tel:"+34922474380", pid:"ChIJVesaOOqHagwRwWh9TGHsAlc" },
  garachico: { pid:"ChIJC4ZfaoRiagwRPKLOt67h6ew" },
  laguna:    { pid:"ChIJaQq8V7jNQQwRJoOtAhTZx5U" },
  casatomas: { tel:"+34922636971", pid:"ChIJ2x2Ayr7NQQwRCwt2etds2z8" },
  aguagarcia:{ pid:"ChIJP3WdR6_TQQwR1VgtcLxCkhE" },
  cruzcarmen:{ pid:"ChIJ7-PkIJfOQQwRLdWuRS6TAcw" },
  bajamar:   { pid:"ChIJ3wFqCdXPQQwRLipLQkSwCuA" },
  punta:     { pid:"ChIJoyx1iMjPQQwRYEXPdPZAAwo" },
  lavaderos: { pid:"ChIJ5XBEuvXTQQwR-ftHfFXBaY8" },
  terrazas:  { tel:"+34922571491", pid:"ChIJx8herfXTQQwRwKe2M9smgSI" },
  esc500:    { pid:"ChIJ77Yp5-TTQQwR7iUOoABzOqM" },
  barranco:  { pid:"ChIJeZa7qgd-agwRNrujVp1hzUg" },
  mimadre:   { tel:"+34647944009", pid:"ChIJNRyDheV9agwRfYD-29EAqHo" },
  charco:    { pid:"ChIJn_rzpex9agwR3McLHS2pnwQ" },
  flipper:   { tel:"+34922862120", pid:"ChIJmY8-njiMagwRtRgGlLym5jA" },
  archipenque:{ tel:"+34922862951", pid:"ChIJ0Q6XyhSMagwRAw7nAMKpYgE" },
  martianez: { tel:"+34922385955", pid:"ChIJg6S0NIt_agwRgUAkdyoMu_c" },
  chipeque:  { pid:"ChIJI5rPrWwrQAwRmHK1hxKobpM" },
  aguamansa: { pid:"ChIJ2RNDZQArQAwRdDghLfJK0sA" },
  ramal:     { tel:"+34922321313", pid:"ChIJn9Nb5UzVQQwRTmLHaWOV4UE" },
  humboldt:  { tel:"+34922324440", pid:"ChIJPVrjazfVQQwRWNxuiGz-Lig" },
};
for(const k in PLACE_EXTRA){ if(TRIP.places[k]) Object.assign(TRIP.places[k], PLACE_EXTRA[k]); }

/* Rendre cochables (mémorisé) la liste des réservations et le sac */
TRIP.practical.forEach(p=>{ if(p.title==="À réserver / appeler" || p.title==="Dans le sac tous les jours") p.check = true; });

/* ---- Urgences & contacts (en tête de l'onglet Pratique) ---- */
TRIP.practical.unshift({ icon:"🚨", title:"Urgences & contacts", contacts:[
  { n:"Urgences — 112", sub:"Pompiers · SAMU · Police — 24h/24", tel:"112" },
  { n:"Hôtel Tigaiga", sub:"Notre hôtel — réception", tel:"+34922383500", ll:"28.4103498,-16.549232", pid:"ChIJNcVTz-1_agwRYaE2s17eQWQ" },
  { n:"Hospiten Bellevue", sub:"Hôpital · urgences 24h · carte européenne acceptée", tel:"+34922385235", ll:"28.4072571,-16.5447389", pid:"ChIJn4H-svF_agwRqbFlIEsR97Q" },
  { n:"Centre de santé (public)", sub:"Casco Botánico · carte européenne", tel:"+34922478208", ll:"28.4086599,-16.5543737", pid:"ChIJoXLJZOl_agwRKRRy1jPziaI" },
  { n:"Farmacia Puerto de la Cruz", sub:"8h30–21h30 · sam 9h–15h · dim fermé", tel:"+34922385620", ll:"28.4148601,-16.5524362", pid:"ChIJJxeWVZN_agwReqlNN0pMx5c" },
  { n:"Pharmacie de garde", sub:"Trouver la pharmacie ouverte la plus proche", search:"farmacia de guardia Puerto de la Cruz Tenerife" },
]});
