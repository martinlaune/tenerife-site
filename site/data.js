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
      sched:[["8h30–9h30","Petit-déjeuner tranquille au Tigaiga"],["10h15","Jardin botanique de Puerto (mission plantes exotiques pour Vianney)","Créé en 1788 sur ordre du roi Charles III, ce jardin servait à acclimater les plantes tropicales rapportées des Amériques avant de les expédier vers l'Espagne continentale — l'un des plus anciens jardins botaniques du pays."],["11h45","Petite pause / quartier La Paz"],["13h","Déjeuner près du jardin"],["14h30","Retour hôtel : repos, lecture, piscine"],["16h30","Bonus léger : Plaza del Charco / La Ranilla / front de mer si en forme","La Ranilla est le plus vieux quartier de pêcheurs de Puerto ; la Plaza del Charco doit son nom à une mare d'eau de mer comblée au 19ᵉ siècle, aujourd'hui ombragée de lauriers centenaires."],["Soir","Dîner hôtel · micro-balade Parque Taoro seulement si envie","Le Parque Taoro fut aménagé autour du Gran Hotel Taoro (1890), premier grand hôtel de l'île qui attira l'aristocratie européenne en villégiature d'hiver."]],
      notes:["Ne pas empiler jardin + Lago Martiánez + centre complet : on garde léger","Préparer le sac Teide ce soir : eau, casquettes, crème, chaussures, vestes légères, snacks, Ventoline"] },

    { id:"j3", scene:"volcano", emoji:"🌋", dow:"Lundi 29 juin", title:"Le volcan Teide",
      sum:"Roques de García, paysages de Mars, pique-nique.",
      obj:"Grande journée volcan, libre et sans téléphérique, centrée sur les paysages et de petites marches.",
      lunch:{name:"Bocadillos à emporter", planB:"La Casa del Panadero (ou Dulce Encuentro)", budget:"~25 €", note:"4 bocadillos + 4 à 6 L d'eau + fruits + snacks, achetés le matin"},
      sched:[["8h","Achat des bocadillos en bas (La Casa del Panadero)"],["8h45","Départ vers le parc national du Teide"],["~10h30","Roques de García / Mirador de La Ruleta","Ces cheminées de lave se dressent dans la caldera de Las Cañadas, vieille d'environ 170 000 ans. Le plus célèbre, le Roque Cinchado, ornait autrefois le billet de 1000 pesetas."],["10h45–12h45","Roques de García : boucle complète si tout le monde est bien, sinon partielle"],["12h45","Pique-nique au pied des roches"],["13h45","Minas de San José : marche courte ou complète selon l'énergie","Ce désert de ponce blonde doit sa couleur aux retombées de l'éruption du Teide d'il y a environ 2000 ans ; les premiers explorateurs y voyaient déjà un paysage « lunaire »."],["~14h45","Miradors selon météo (Llano de Ucanca, La Tarta…), puis retour","Le Llano de Ucanca est une ancienne caldera comblée de sédiments ; La Tarta tire son nom de ses strates colorées, empilement de coulées de lave et de cendres successives."]],
      notes:["Pas de téléphérique : ~126 € pour peu de temps en haut, jugé pas rentable","Chaussures fermées, pas de sandales · casquettes, lunettes, crème","En cas de calima forte, gros vent ou mauvaise visibilité : réduire ou décaler","Pas de Chipeque ce soir-là (journée déjà bien remplie)"] },

    { id:"j4", scene:"cliffs", emoji:"🏘️", dow:"Mardi 30 juin", title:"Repos & Rambla de Castro ✓",
      sum:"Matinée tranquille, déjeuner au Bar El Parque, puis balade côtière.",
      obj:"Matin repos à l'hôtel, déjeuner au Bar Cafetería El Parque à Puerto, puis Rambla de Castro l'après-midi.",
      lunch:{name:"Bar Cafetería El Parque", planB:"—", budget:"€", note:"C. de Suiza 1, Puerto de la Cruz · déjeuner à 14h"},
      sched:[["Matin","Repos à l'hôtel — La Orotava non visitée ce jour"],["14h","Déjeuner — Bar Cafetería El Parque (Puerto de la Cruz) ✓"],["~15h","Route vers le Mirador de San Pedro (parking gratuit)"],["15h30–16h30","Rambla de Castro : San Pedro → Fortín → Gordejuela ✓","Le Fortín de San Fernando, petite forteresse du 17ᵉ siècle, protégeait la côte des attaques de pirates ; le sentier traverse une ancienne plantation de palmiers et de bananiers."],["~17h","Retour, douche, repos"]],
      notes:["Rambla de Castro faite ✓ · El Lance pas fait","La Orotava non visitée : à envisager sur un autre jour si l'occasion se présente"] },

    { id:"j5", scene:"cliffs", emoji:"🕳️", dow:"Mercredi 1ᵉʳ juillet", title:"Grotte de lave & goûter à Garachico",
      sum:"Direct à la grotte, puis droit à Garachico pour un goûter face à la mer.",
      obj:"Départ direct de l'hôtel vers la Cueva del Viento (réservée), puis direction Garachico pour le goûter et la balade (pas d'arrêt à Icod).",
      resa:"Cueva del Viento · 12h30 (visite en français)",
      lunch:{name:"Cinnamon Atelier (Garachico)", planB:"Le Pâtissier ou La Alsaciana (vue mer)", budget:"10–15 €", note:"après la grotte, pas de déjeuner formel", label:"Goûter"},
      sched:[["11h20","Départ direct de l'hôtel vers la Cueva del Viento"],["12h10","Arrivée, parking, check-in (prévoir 15–20 min avant)"],["12h30–14h","Cueva del Viento : visite guidée (~1h30 sur place, prendre une petite laine)","Formée il y a environ 27 000 ans par une éruption du Pico Viejo, cette grotte est un tube de lave de plus de 17 km — l'un des plus longs et des plus anciens du monde — abritant une faune souterraine unique adaptée à l'obscurité totale."],["14h","Route directe vers Garachico (~30 min, sans passage par Icod)"],["15h–15h45","Goûter à Cinnamon Atelier, terrasse face à la mer","Petit atelier-pâtisserie de Garachico réputé pour ses gâteaux et viennoiseries maison, avec une terrasse ouverte sur l'océan et les piscines d'El Caletón."],["15h45–16h15","Garachico : Castillo de San Miguel","Petite forteresse construite vers 1575 pour protéger Garachico — alors le port le plus riche de l'île — des attaques de pirates ; c'est l'un des rares édifices à avoir résisté à la coulée de lave de 1706."],["16h15–16h45","Piscines naturelles El Caletón","Bassins nés de l'éruption de 1706 : en se jetant dans l'océan, la lave refroidie a dessiné un dédale de piscines d'eau de mer, aujourd'hui aménagées pour la baignade."],["~17h","Retour vers Puerto de la Cruz"]] },

    { id:"j6", scene:"stairs", emoji:"🛞", dow:"Jeudi 2 juillet", title:"Crevaison — journée blanche",
      sum:"Crevaison en route : programme reporté au lendemain.",
      obj:"Gestion de la crevaison ; le programme prévu (La Laguna, Agua García) est décalé à demain.",
      sched:[["Journée","Crevaison — gestion du pneu, rien fait du programme prévu"]],
      notes:["La Laguna, Agua García et Casa Tomás reportés à demain (vendredi 3 juillet)","Anaga (programme d'origine de vendredi) décalé à samedi 4 juillet"] },

    { id:"j7", scene:"town", emoji:"🎨", dow:"Vendredi 3 juillet", title:"La Laguna & forêt d'Agua García",
      sum:"Ville colorée UNESCO ✓ + forêt d'Agua García ✓.",
      obj:"Programme reporté du jeudi (crevaison) : patrimoine varié à La Laguna, déjeuner sur place, micro-balade en forêt.",
      lunch:{name:"Sur place à La Laguna", planB:"—", budget:"non précisé", note:"finalement resté dans le centre plutôt que Casa Tomás/Tegueste"},
      sched:[["10h00","Départ vers La Laguna"],["10h35","Parking Las Quinteras, à pied vers le centre"],["10h45","Plaza del Adelantado : place centrale, Ayuntamiento, Palacio Episcopal","Place nommée d'après Alonso Fernández de Lugo, l'« Adelantado » qui fonda La Laguna en 1496 ; elle est bordée par l'Ayuntamiento et le Palacio Episcopal."],["11h00","Convento de Santa Catalina de Siena : dulces au tourniquet","Couvent de dominicaines cloîtrées fondé au 17ᵉ siècle, toujours habité ; les sœurs vendent leurs dulces faits maison par un tourniquet (torno), sans jamais se montrer."],["11h20","Catedral de San Cristóbal","Reconstruite au tournant du 20ᵉ siècle dans un style mêlant néoclassique et néogothique, elle abrite la sépulture d'Alonso Fernández de Lugo, le conquistador fondateur de la ville."],["11h40","Iglesia de la Concepción","Doyenne des paroisses de Tenerife (fondée au 16ᵉ siècle), elle conserve un plafond mudéjar à caissons et un clocher considéré comme le plus haut des Canaries."],["12h00","Calle San Agustín & Nava y Grimón : demeures coloniales, rues colorées","Ces rues aux demeures aristocratiques et balcons de bois sculptés ont servi de modèle à l'urbanisme de nombreuses villes coloniales d'Amérique latine — la raison du classement UNESCO de La Laguna depuis 1999."],["12h20","Déjeuner sur place à La Laguna ✓"],["13h30","Route vers Agua García (~20 min)"],["13h50","Forêt d'Agua García / Guardianes Centenarios (45 min–1h) ✓","Ce vestige de laurisilve — forêt humide vieille de plus de vingt millions d'années — a presque disparu d'Europe, sauf aux Canaries, à Madère et aux Açores. Elle doit son nom au colon García Morales, qui reçut ces terres riches en eau après la conquête castillane. Les « Guardianes Centenarios » sont ses viñátigos (Persea indica) plusieurs fois centenaires — l'un d'eux serait même millénaire —, entourés de lauriers, tilos, fayas et bruyères arborescentes. Le sentier (boucle de 2,6 km, quasi plat) traverse le Paisaje Protegido de Las Lagunetas ; sa première section est accessible aux poussettes."],["~15h15","Retour, repos"]],
      notes:["Programme reporté du jeudi 2 juillet (crevaison)","Parking La Laguna (matin) : Las Quinteras, Calle Quinteras 1","Parking Agua García (après-midi) : esplanade près du Centre d'information, via TF-226 puis direction « Área Recreativa Lomo de la Jara », suivre le panneau « Guardianes Centenarios »","Casa Tomás et le Mirador de los 500 Escalones n'ont finalement pas été faits","Soirée calme : départ tôt pour Anaga demain (samedi)"] },

    { id:"j8", scene:"cloudforest", emoji:"☁️", dow:"Samedi 4 juillet", title:"Anaga, la forêt des nuages",
      sum:"Laurisilve, miradors, puis côte nord-est.",
      obj:"Vraie journée Anaga mais protégée : forêt, miradors, petite rando, puis côte nord-est sans aller jusqu'à Taganana.",
      lunch:{name:"Pique-nique face à la mer", planB:"—", budget:"20–35 €", note:"acheter les bocadillos la veille ou très tôt"},
      sched:[["8h20","Départ tôt vers Anaga"],["9h10","Mirador de Jardina (arrêt court si dégagé)","Première vraie fenêtre sur le massif d'Anaga, le plus vieux de l'île (jusqu'à 7 millions d'années), avec vue sur La Laguna et, par temps clair, le Teide."],["9h45","Cruz del Carmen : parking tôt","Porte d'entrée historique d'Anaga (~920 m) : point de passage des anciens chemins muletiers qui reliaient les villages isolés du massif avant la construction des routes."],["10h","Sendero de los Sentidos : version familiale (laurisilve)","Ce sentier pensé pour éveiller les sens traverse une authentique laurisilve : mousses, fougères géantes et lauriers centenaires baignés dans le brouillard quasi permanent apporté par les alizés."],["11h30","Pico del Inglés & Camino Viejo (tunnel végétal)","Ce mirador doit son nom aux voyageurs britanniques du 19ᵉ siècle, parmi les premiers touristes de l'île ; le Camino Viejo est un ancien chemin royal qui traverse un authentique tunnel de lauriers."],["12h45","Pique-nique face à l'océan"],["13h30","Après-midi : Bajamar OU Punta del Hidalgo"]],
      opts:[["Option A — Bajamar","Piscines naturelles aménagées, plus rassurant pour Vianney, pratique pour un moment baignade. Bajamar (« mer basse ») vivait traditionnellement de la pêche avant de devenir, dans les années 1970, une destination de bain populaire."],["Option B — Punta del Hidalgo","Bout de côte nord-est, vues vers Anaga ; promenade plus esthétique, baignade seulement si très calme. Ce cap marque l'extrémité du massif d'Anaga ; son phare, construit en 1991, signale la pointe nord de l'île aux navires."]],
      notes:["On ne pousse pas vers Taganana / Benijo / Chinamada (trop long et sinueux)","Pas de grande randonnée aujourd'hui","Terrain parfois humide : baskets · départ tôt donc on dîne tranquille le soir","Le programme El Sauzal (lavoirs, Terrazas, Garañona, 500 Escalones) n'a finalement pas pu être fait, y compris le bonus prévu vendredi"] },

    { id:"j9", scene:"pool", emoji:"🏊", dow:"Dimanche 5 juillet", title:"Barranco de Ruiz & Charco de La Laja",
      sum:"Ravin vert le matin, piscine de l'océan l'après-midi.",
      obj:"Journée nord locale : un peu de vert le matin, un vrai déjeuner de poisson, puis le charco si la mer est calme.",
      lunch:{name:"Mesón Casa Mi Madre", planB:"Cofradía Las Aguas", budget:"70–100 €", note:"réserver pour 13h pile (dimanche) · poisson / fruits de mer"},
      sched:[["9h45","Barranco de Ruiz : version courte familiale (ravin, végétation)","Ce ravin a été creusé au fil des millénaires par l'écoulement des eaux de pluie depuis les hauteurs volcaniques jusqu'à l'océan ; sa végétation dense contraste avec la côte aride environnante."],["12h","Temps calme au bord de mer à Las Aguas"],["13h","Déjeuner au Mesón Casa Mi Madre"],["14h30","Charco de La Laja : descente, photos, baignade si mer calme","Cette piscine naturelle s'est formée dans une ancienne coulée de lave sculptée par les vagues ; les locaux l'utilisent depuis des générations, faute de plages de sable sur cette côte."],["~17h","Retour, repos (bateau demain)"]],
      notes:["Baignade non promise : seulement si la mer est visiblement calme","Pas de baignade si les vagues passent sur les rochers, accès glissant ou foule","Chaussures d'eau utiles · Vianney avec un adulte proche + flottaison","On ne reste pas tard si la mer remonte · pas de sortie le soir (Flipper demain)"] },

    { id:"j10", scene:"whale", emoji:"🐋", dow:"Lundi 6 juillet", title:"Baleines — Flipper Uno",
      sum:"Sortie en mer à Los Gigantes, repas inclus à bord.",
      obj:"Grande activité mer du séjour : rejoindre Los Gigantes sans stress, profiter de Flipper Uno, puis un mirador en bonus.",
      resa:"Flipper Uno · 11h30 (confirmé)",
      lunch:{name:"Repas inclus à bord", planB:"—", budget:"inclus", note:"garder eau, biscuits & un snack au cas où, pour Vianney"},
      sched:[["9h10","Départ de l'hôtel (ne pas partir plus tard — parking + check-in)"],["~10h30","Arrivée Los Gigantes / Poblado Marinero, stationnement"],["10h35","Check-in Flipper Uno, toilettes, crème"],["11h","Embarquement"],["11h30–14h30","Flipper Uno : 3h — baleines, dauphins, falaises de Los Gigantes, baignade possible, repas","Hautes de 600 à 800 m, parmi les plus vertes d'Europe, les falaises de Los Gigantes se sont formées il y a environ 7 millions d'années lors de l'effondrement du massif de Teno dans l'océan."],["14h30","Débarquement, pause fraîcheur"],["15h30","Mirador Archipenque (bonus court si tout le monde va bien)","Ce balcon offre la même vue sur les falaises que celle admirée depuis le bateau, mais d'en haut ; par temps clair, on aperçoit l'île de La Gomera à l'horizon."],["~16h30","Bonus optionnel : Icod de los Vinos — Drago vu depuis la rue (10 min, seulement si énergie)","Âgé d'environ 800 à 1000 ans, ce dragonnier géant était considéré comme sacré par les Guanches, les premiers habitants de l'île ; sa sève rouge, le « sang de dragon », servait à l'embaumement et à la teinture."],["~17h15","Retour à Puerto"]],
      notes:["Maillot, serviette, crème, casquette, Ventoline accessible","Vianney en mer : adulte tout près + brassards · pas de saut/tyrolienne","Parking : viser le port / Poblado Marinero, sinon Parking El Mirador","Ne pas chercher longtemps une place gratuite : basculer vite sur le parking organisé","Si fatigue / mal de mer : on saute le mirador sans regret","Icod (Drago) : arrêt optionnel sur la route du retour, gratuit et visible depuis la rue, pas besoin d'entrer dans le parc — on saute sans regret si tout le monde est fatigué"] },

    { id:"j11", scene:"sunset", emoji:"🌅", dow:"Mardi 7 juillet", title:"Piscines & coucher de soleil au Chipeque",
      sum:"Lago Martiánez le matin, sunset sur les nuages le soir.",
      obj:"Journée construite autour du coucher de soleil au Chipeque, avec un matin léger et un après-midi de vrai repos.",
      lunch:{name:"Repas simple à Puerto", planB:"Tinguaro le soir (bon hôtel)", budget:"simple", note:"prévenir le maître d'hôtel LUNDI au petit-déj pour le bon Tinguaro"},
      sched:[["10h30","Lago Martiánez : piscines, moment baignade (format court)","Conçu en 1970 par l'artiste canarien César Manrique, ce complexe de piscines d'eau de mer mêle volcanisme et modernité en intégrant la roche noire naturelle de la côte dans son architecture."],["13h15","Déjeuner simple à Puerto ou à l'hôtel"],["14h–17h","Vrai repos : douche, sieste possible, on prépare le sac Chipeque"],["17h45","Repas tôt au Tinguaro (bon demi-pension, pas trop lourd)"],["19h15","Départ vers Chipeque (route de montagne)"],["~20h15","Installation au Mirador de Chipeque (~1800 m)"],["~20h40","Coucher de soleil au-dessus de la mer de nuages ✨","Ce phénomène, fréquent sur le versant nord de l'île, est dû à l'alizé qui pousse les nuages contre les pentes du Teide, où ils stagnent sous une couche d'air plus chaud — créant cette mer de nuages qui s'arrête net en altitude."],["21h15","On repart sans traîner à la tombée de la nuit"],["~22h20","Retour à l'hôtel, dodo"]],
      notes:["Chipeque seulement si : visibilité correcte, pas de brouillard sur la TF-24, pas de calima, pas de gros vent, famille reposée","~1800 m : pull, coupe-vent, baskets, eau, snacks, téléphone chargé, Ventoline","Bon Tinguaro : 16 € / pers (64 € à 4), à demander 24h avant","Plan B si Chipeque tombe à l'eau : balade douce à Puerto + repos (pas une autre grosse sortie)"] },

    { id:"j12", scene:"forest", emoji:"🥾", dow:"Mercredi 8 juillet", title:"Dernière rando & festin guachinche",
      sum:"Forêt d'Aguamansa, déjeuner local, mirador, La Orotava, valises.",
      obj:"Dernière vraie journée : rando forestière courte + déjeuner guachinche + mirador + bonus La Orotava, puis repos et valises.",
      lunch:{name:"Guachinche El Ramal (La Orotava)", planB:"Restaurante Aguamansa", budget:"local", note:"APPELER pour confirmer l'ouverture du mercredi midi · prévoir du cash"},
      sched:[["10h45–12h15","Randonnée SL-TF 81 Camino La Orilla del Monte (boucle forestière, rythme famille)","Ce sentier traverse une pinède de pin canarien, une espèce endémique capable de repousser après un incendie — une adaptation unique au volcanisme de l'île."],["13h","Déjeuner guachinche : plats canariens à partager","Un guachinche est une taverne informelle, souvent installée dans un garage ou une cour, où les vignerons vendaient traditionnellement leur récolte de l'année accompagnée de plats simples ; beaucoup sont restés ouverts toute l'année."],["14h30","Mirador Humboldt (20 min : vue sur la vallée de La Orotava & le Teide)","Nommé en hommage au naturaliste Alexander von Humboldt, qui fit escale à Tenerife en 1799 en route pour l'Amérique du Sud et décrivit cette vue sur la vallée de La Orotava comme l'une des plus belles du monde."],["15h00","La Orotava : vieille ville en 20 min (balcons de bois, rues en pente)","Vieille ville canarienne construite en pente sur les flancs de la vallée, célèbre pour ses maisons aux balcons de bois sculptés — un modèle d'architecture qui a essaimé dans toute l'Amérique coloniale espagnole."],["15h30","Retour, douche, on commence les valises"],["17h","Dernière balade douce à Puerto : Plaza del Charco, glace & souvenirs"],["Soir","Dîner à l'hôtel, dernière soirée tranquille"]],
      notes:["SL-TF 81 : format familial, on n'allonge pas · télécharger la trace hors ligne","Chaussures fermées, eau, casquettes, crème, Ventoline accessible","El Ramal : commander à partager (il reste mirador + La Orotava + valises + dîner)","Mirador Humboldt et La Orotava : arrêts volontairement courts, pas de nouvelle grosse activité avant les valises","Anticiper le stationnement à Aguamansa"] },

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
  decathlon: { n:"Decathlon La Laguna",          a:"Cam. la Hornera 160, Las Chumberas",       ll:"Camino la Hornera 160, Las Chumberas, San Cristóbal de La Laguna" },
  quinteras: { n:"Parking Las Quinteras",        a:"Calle Quinteras 1, La Laguna",             ll:"Calle Quinteras 1, San Cristóbal de La Laguna" },
  laguna:    { n:"Plaza del Adelantado",         a:"Vieille ville, La Laguna",                 ll:"28.4878415,-16.3134443" },
  convento:  { n:"Convento de Santa Catalina",   a:"Plaza del Adelantado 1, La Laguna",        ll:"Plaza del Adelantado 1, San Cristóbal de La Laguna" },
  catedral:  { n:"Catedral de San Cristóbal",    a:"C. Obispo Rey Redondo 24, La Laguna",      ll:"Calle Obispo Rey Redondo 24, San Cristóbal de La Laguna" },
  concepcion:{ n:"Iglesia de la Concepción",     a:"Plaza de la Concepción, La Laguna",        ll:"Plaza de la Concepción, San Cristóbal de La Laguna" },
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
  j5:["cueva","garachico"],
  j7:["quinteras","laguna","convento","catedral","concepcion","aguagarcia"],
  j8:["cruzcarmen","bajamar","punta"],
  j9:["barranco","mimadre","charco"],
  j10:["flipper","archipenque","drago"],
  j11:["martianez","chipeque"],
  j12:["aguamansa","ramal","humboldt","orotava"],
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
  decathlon: { d:"Enseigne de sport : raquettes, baskets, tout ce qu'il manque avant les randos.", h:"Lun–sam 9h–22h30 · fermé dimanche" },
  quinteras: { d:"Parking public en surface, à l'entrée de la zone piétonne du centre historique." },
  laguna:    { d:"Cité historique classée UNESCO, rues colorées et places animées (Plaza del Adelantado)." },
  convento:  { d:"Couvent de dominicaines cloîtrées ; dulces maison vendus par le tourniquet (torno)." },
  catedral:  { d:"Cathédrale mêlant styles néoclassique et néogothique ; sépulture d'Alonso Fernández de Lugo." },
  concepcion:{ d:"Doyenne des paroisses de Tenerife ; plafond mudéjar et plus haut clocher des Canaries." },
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
  elparque:  {},
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
