/* ═══════════════════════════════════════════════════════════
   MATCHES.JS — Database partite
   
   Per aggiungere una partita copia un blocco e compila:
   - homeTeam / awayTeam  → nomi delle squadre
   - competition          → nome della competizione
   - scoreHome / scoreAway → gol delle due squadre
   - year                 → anno della partita
   - image                → URL immagine (jpg/png)
   - imageAlt             → descrizione immagine
   ═══════════════════════════════════════════════════════════ */

const ALL_MATCHES = [
  {
    homeTeam: "Italia",
    awayTeam: "Brasile",
    competition: "Mondiali",
    scoreHome: 3,
    scoreAway: 2,
    year: 1982,
    image: "https://www.repstatic.it/content/nazionale/img/2022/07/03/170513168-b587ce33-3eb1-4248-b827-f8557528a25f.jpg",
    imageAlt: "Mondiali 1982 Italia vs Brasile"
  },
  {
    homeTeam: "Barcellona",
    awayTeam: "Manchester Utd",
    competition: "Champions League",
    scoreHome: 3,
    scoreAway: 1,
    year: 2011,
    image: "https://radiogoal24.it/wp-content/uploads/2017/04/article-1391944-0C508CDC00000578-614_634x350.jpg",
    imageAlt: "Champions League Final 2011"
  },
  {
    homeTeam: "Portogallo",
    awayTeam: "Francia",
    competition: "Euro 2016",
    scoreHome: 1,
    scoreAway: 0,
    year: 2016,
    image: "https://editorial.uefa.com/resources/0253-0d7ad4117dbc-e8c18bbf8ec5-1000/portugal_v_france_-_uefa_euro_2016_final.jpeg",
    imageAlt: "Euro 2016 Final"
  },
  {
    homeTeam: "Real Madrid",
    awayTeam: "Atletico Madrid",
    competition: "Champions League",
    scoreHome: 4,
    scoreAway: 1,
    year: 2014,
    image: "https://assets.goal.com/images/v3/blte1a21a79c621a0bc/24a447936833e17ccd33fc1054ce7c6cad47dccc.jpg",
    imageAlt: "Champions League Final 2014"
  },
  {
    homeTeam: "Germania",
    awayTeam: "Brasile",
    competition: "Mondiali – Semifinale",
    scoreHome: 7,
    scoreAway: 1,
    year: 2014,
    image: "https://staticfanpage.akamaized.net/wp-content/uploads/sites/9/2018/03/brasile-germania-1-7-rivincita.jpg",
    imageAlt: "Germania vs Brasile 7-1 Mondiale 2014"
  },
  {
    homeTeam: "Liverpool",
    awayTeam: "AC Milan",
    competition: "Champions League",
    scoreHome: 3,
    scoreAway: 3,
    year: 2005,
    image: "https://storiedicalcio.altervista.org/blog/wp-content/uploads/2016/12/milan-liverpool-2005-maldini-wp.jpg",
    imageAlt: "Champions League Final Istanbul 2005"
  },
  {
    homeTeam: "Argentina",
    awayTeam: "Francia",
    competition: "Mondiale – Finale",
    scoreHome: 3,
    scoreAway: 3,
    year: 2022,
    image: "https://staticfanpage.akamaized.net/wp-content/uploads/sites/27/2023/02/kolo-muani-gola-errore-mondiali-martinez-1200x675.jpg",
    imageAlt: "Finale Mondiale 2022 Argentina vs Francia"
  },
  {
    homeTeam: "Juventus",
    awayTeam: "Ajax",
    competition: "Champions League",
    scoreHome: 1,
    scoreAway: 2,
    year: 2019,
    image: "https://ichef.bbci.co.uk/ace/standard/624/cpsprodpb/E748/production/_106480295_deligt_getty.jpg",
    imageAlt: "Juventus vs Ajax Champions League 2019"
  },
  {
    homeTeam: "Bayern Monaco",
    awayTeam: "Borussia Dortmund",
    competition: "Champions League",
    scoreHome: 2,
    scoreAway: 1,
    year: 2013,
    image: "https://i.pinimg.com/736x/30/57/28/3057289c3c3ea665f62b84b29ac61090.jpg",
    imageAlt: "Champions League 2013 Bayern vs Dortmund"
  },
  {
    homeTeam: "Francia",
    awayTeam: "Brasile",
    competition: "Mondiale – Finale",
    scoreHome: 3,
    scoreAway: 0,
    year: 1998,
    image: "https://staticfanpage.akamaized.net/calciofanpage/wp-content/uploads/2011/02/Francia-Brasile.jpg",
    imageAlt: "Mondiale 1998 finale"
  },
  {
    homeTeam: "Manchester City",
    awayTeam: "Inter",
    competition: "Champions League",
    scoreHome: 1,
    scoreAway: 0,
    year: 2023,
    image: "https://lavoce.hr/wp-content/uploads/2023/06/000_33j29av.jpeg",
    imageAlt: "Champions League 2023 Manchester City vs Inter"
  },
  {
    homeTeam: "Paris Saint-Germain",
    awayTeam: "Inter",
    competition: "Champions League",
    scoreHome: 5,
    scoreAway: 0,
    year: 2025,
    image: "https://citynews-today.stgy.ovh/~media/original-hi/11066392943288/psg-inter-lapresse-2.jpg",
    imageAlt: "Champions League 2025 PSG vs Inter"
  },
  {
    homeTeam: "Juventus",
    awayTeam: "Inter",
    competition: "Serie A",
    scoreHome: 4,
    scoreAway: 3,
    year: 2025,
    image: "https://static.sky.it/editorialimages/d4d3001b6fdeadb92b0741d30473f56406a45809/skysport/it/calcio/serie-a/partite/2025/giornata-3/juventus-inter/live/content/getty_adzic_gol_juventus_inter.jpg",
    imageAlt: "Serie A 2025 Juventus vs Inter"
  },
  {
    homeTeam: "Paris Saint-Germain",
    awayTeam: "Arsenal",
    competition: "Champions League",
    scoreHome: 1,
    scoreAway: 1,
    year: 2026,
    image: "https://www.thesun.co.uk/wp-content/uploads/2026/05/comforts-countryman-gabriel-magalhaes-arsenal-1084934298_d4e107.jpg?w=960https://www.thesun.co.uk/wp-content/uploads/2026/05/comforts-countryman-gabriel-magalhaes-arsenal-1084934298_d4e107.jpg?w=960https://sport.sky.it/assets/images/9828597584d603cb2202fe997c7e17dc6065bd40/skysport/it/calcio/champions-league/video/2026/05/30/rigore-sbagliato-gabriel-psg-arsenal-finale-champions-1102068/ipa_gabriel_rigore_psg_arsenal_og.jpg?im=Resize,width=1218https://sport.sky.it/assets/images/9828597584d603cb2202fe997c7e17dc6065bd40/skysport/it/calcio/champions-league/video/2026/05/30/rigore-sbagliato-gabriel-psg-arsenal-finale-champions-1102068/ipa_gabriel_rigore_psg_arsenal_og.jpg?im=Resize,width=1218https://dimages2.gazzettaobjects.it/files/image_572_320/uploads/2026/05/30/6a1b4e48f3d7a.png",
    imageAlt: "Champions League 2026 PSG vs Arsenal"
  },
  {
    homeTeam: "Olanda",
    awayTeam: "Argentina",
    competition: "Mondiali",
    scoreHome: 2,
    scoreAway: 2,
    year: 2022,
    image: "https://www.corriere.it/methode_image/2022/12/09/Sport/Foto%20Sport%20-%20Trattate/1448011345-kYm-U3390692280375l5C-656x492@Corriere-Web-Sezioni.jpg",
    imageAlt: "Mondiali Olanda Argentina 2022"
  },
  {
    homeTeam: "Portogallo",
    awayTeam: "Spagna",
    competition: "Mondiali",
    scoreHome: 3,
    scoreAway: 3,
    year: 2018,
    image: "https://images2.gazzettaobjects.it/methode_image/Video/2018/06/15/Calcio/Foto%20Calcio%20-%20Trattate/bf62c60a6be740428acc0a8cb47b0d5b-kTaF--896x504@Gazzetta-Web.jpg",
    imageAlt: "Mondiali Portogallo Spagna 2018"
  },
    {
    homeTeam: "Juventus",
    awayTeam: "Barcellona",
    competition: "Champions League",
    scoreHome: 3,
    scoreAway: 0,
    year: 2017,
    image: "https://images2.gazzettaobjects.it/methode_image/Video/2017/04/11/Calcio/Foto%20Calcio%20-%20Trattate/2017-04-11T191035Z_134939435_MT1ACI14777085_RTRMADP_3_SOCCER-CHAMPIONS-JUV-FCB-U2022529280599DH--896x504@Gazzetta-Web.jpg",
    imageAlt: "Champions League Juventus Barcellona 2017"
  },
  {
    homeTeam: "Inter",
    awayTeam: "Milan",
    competition: "Serie A",
    scoreHome: 1,
    scoreAway: 2,
    year: 2022,
    image: "https://prd-images2-gazzanet.gazzettaobjects.it/qLFu44Uwq5Std2iTBLbYysf1-xA=/1200x627/smart/www.pianetamilan.it/assets/uploads/202202/IMG_0977.jpg",
    imageAlt: "Serie A Inter Milan 2022"
  },
    {
    homeTeam: "Manchester City",
    awayTeam: "Queens Park Rangers F.C.",
    competition: "Premier League",
    scoreHome: 3,
    scoreAway: 2,
    year: 2012,
    image: "https://ichef.bbci.co.uk/ace/standard/819/cpsprodpb/fdec/live/183cab90-f072-11ec-ad03-c1b4a7f6b735.jpg",
    imageAlt: "Premier League Manchester City Queens Park 2012"
  },
  {
    homeTeam: "Arabia Saudita",
    awayTeam: "Belgio",
    competition: "Mondiali – Fase a gironi",
    scoreHome: 1,
    scoreAway: 0,
    year: 1994,
    image: "https://storiedicalcio.altervista.org/blog/wp-content/uploads/2024/06/Al-Owairan-belgio-arabia-1994.webp",
    imageAlt: "Mondiali 1994 Arabia Saudita vs Belgio"
  },
  {
    homeTeam: "Brasile",
    awayTeam: "Italia",
    competition: "Mondiali – Finale",
    scoreHome: 0,
    scoreAway: 0,
    year: 1994,
    image: "https://www.figc.it/media/4075/mondiali_1994.png",
    imageAlt: "Mondiali 1994 Finale Brasile vs Italia"
  },
  {
    homeTeam: "Italia",
    awayTeam: "Bulgaria",
    competition: "Mondiali – Fase a gironi",
    scoreHome: 2,
    scoreAway: 1,
    year: 1994,
    image: "https://storiedicalcio.altervista.org/blog/wp-content/uploads/2016/02/italia-bulgaria-1994-rassegne-wp1.jpg",
    imageAlt: "Mondiali 1994 Italia vs Bulgaria"
  },
  {
    homeTeam: "Francia",
    awayTeam: "Bulgaria",
    competition: "Qualificazioni Mondiali 1994",
    scoreHome: 1,
    scoreAway: 2,
    year: 1993,
    image: "https://storiedicalcio.altervista.org/blog/wp-content/uploads/2015/12/Francia-Bulgaria-1993_2.jpg",
    imageAlt: "Qualificazioni Mondiali 1994 Francia vs Bulgaria"
  },
  {
    homeTeam: "Svezia",
    awayTeam: "Bulgaria",
    competition: "Mondiali – Finale 3° Posto",
    scoreHome: 4,
    scoreAway: 0,
    year: 1994,
    image: "https://storiedicalcio.altervista.org/blog/wp-content/uploads/2024/07/tomas-brolin-of-sweden-celebrates-after-scoring-the-opening-goal-against-bulgaria-1994-world-cup.jpg",
    imageAlt: "Mondiali 1994 Svezia vs Bulgaria"
  },
  {
    homeTeam: "Nigeria",
    awayTeam: "Bulgaria",
    competition: "Mondiali – Fase a gironi",
    scoreHome: 3,
    scoreAway: 0,
    year: 1994,
    image: "https://i.pinimg.com/736x/cd/f0/1c/cdf01c799499b171f7dd2f31f92dd7a4.jpg",
    imageAlt: "Mondiali 1994 Nigeria vs Bulgaria"
  },
  {
    homeTeam: "Bulgaria",
    awayTeam: "Germania",
    competition: "Mondiali – Quarti di Finale",
    scoreHome: 2,
    scoreAway: 1,
    year: 1994,
    image: "https://ilnobilecalcio.it/wp-content/uploads/2020/07/IVANOV-BULGARIA-94.jpg",
    imageAlt: "Mondiali 1994 Bulgaria vs Germania"
  },
  {
    homeTeam: "Argentina",
    awayTeam: "Bulgaria",
    competition: "Mondiali – Fase a gironi",
    scoreHome: 0,
    scoreAway: 2,
    year: 1994,
    image: "https://i.pinimg.com/564x/6b/34/c1/6b34c132c1787db47c029ffddf319b42.jpg",
    imageAlt: "Mondiali 1994 Argentina vs Bulgaria"
  },
  {
    homeTeam: "Bulgaria",
    awayTeam: "Italia",
    competition: "Mondiali – Semifinale",
    scoreHome: 1,
    scoreAway: 2,
    year: 1994,
    image: "https://www.solocalcio.com/wp-content/uploads/2023/07/13baggio.jpg",
    imageAlt: "Mondiali 1994 Bulgaria vs Italia"
  },
  {
    homeTeam: "Argentina",
    awayTeam: "Nigeria",
    competition: "Mondiali – Fase a gironi",
    scoreHome: 2,
    scoreAway: 1,
    year: 1994,
    image: "https://i.ytimg.com/vi/EOgtthq5x9A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB_pZpWpZ04mcrXMDTfkTzzzWm9-Q",
    imageAlt: "Mondiali 1994 Argentina vs Nigeria"
  },
  {
    homeTeam: "Grecia",
    awayTeam: "Nigeria",
    competition: "Mondiali – Fase a gironi",
    scoreHome: 0,
    scoreAway: 2,
    year: 1994,
    image: "https://i0.wp.com/www.frankdellapa.com/wp-content/uploads/2018/06/NESH063018.jpg?fit=988%2C556&ssl=1",
    imageAlt: "Mondiali 1994 Grecia vs Nigeria"
  },
  {
    homeTeam: "Romania",
    awayTeam: "Svizzera",
    competition: "Mondiali – Fase a gironi",
    scoreHome: 1,
    scoreAway: 4,
    year: 1994,
    image: "https://cleaver.cue.rsi.ch/public/sport/calcio/289110-mgf5jj-Alain-Sutter/alternates/r16x9_900/289110-mgf5jj-Alain-Sutter",
    imageAlt: "Mondiali 1994 Romania vs Svizzera"
  },
  {
    homeTeam: "Real Madrid",
    awayTeam: "Liverpool",
    competition: "Champions League – Finale",
    scoreHome: 1,
    scoreAway: 0,
    year: 2022,
    image: "https://img.lemde.fr/2022/05/28/0/0/4507/2535/664/0/75/0/9319c90_5317110-01-06.jpg",
    imageAlt: "Champions League Finale 2022 Real Madrid vs Liverpool"
  },
  {
    homeTeam: "Real Madrid",
    awayTeam: "Borussia Dortmund",
    competition: "Champions League – Finale",
    scoreHome: 2,
    scoreAway: 0,
    year: 2024,
    image: "https://dimages2.corriereobjects.it/files/main_image_mobile/files/fp/uploads/2024/06/01/665b89015dd0a.r_d.1994-1424.jpeg",
    imageAlt: "Champions League Finale 2024 Real Madrid vs Dortmund"
  },
  {
    homeTeam: "Manchester City",
    awayTeam: "Chelsea",
    competition: "Champions League – Finale",
    scoreHome: 1,
    scoreAway: 0,
    year: 2021,
    image: "https://static.open.online/wp-content/uploads/2021/05/GOLF_20210529220214437_ae976f7570ca33678cfaa5e5af1dab6c.jpg",
    imageAlt: "Champions League Finale 2021 Manchester City vs Chelsea"
  },
  {
    homeTeam: "Italia",
    awayTeam: "Inghilterra",
    competition: "Euro – Finale",
    scoreHome: 1,
    scoreAway: 1,
    year: 2021,
    image: "https://statics.cedscdn.it/photos/MED_HIGH/84/28/6078428_1211_euro_2020_italia_inghilterra_gianluigi_donnarumma_rigori.jpg",
    imageAlt: "Euro 2020 Finale Italia vs Inghilterra"
  },
  {
    homeTeam: "Spagna",
    awayTeam: "Inghilterra",
    competition: "Euro – Finale",
    scoreHome: 2,
    scoreAway: 1,
    year: 2024,
    image: "https://dimages2.gazzettaobjects.it/files/image_768_434/uploads/2024/07/14/66943aa0c5ff2.jpeg",
    imageAlt: "Euro 2024 Finale Spagna vs Inghilterra"
  },
  {
    homeTeam: "Francia",
    awayTeam: "Croazia",
    competition: "Mondiale – Finale",
    scoreHome: 4,
    scoreAway: 2,
    year: 2018,
    image: "https://www.affaritaliani.it/wp-content/uploads/2018/07/15/17649421486930-mondiali-2018-francia.jpg",
    imageAlt: "Mondiale 2018 Finale Francia vs Croazia"
  },
  {
    homeTeam: "Inghilterra",
    awayTeam: "Croazia",
    competition: "Mondiale – Semifinale",
    scoreHome: 1,
    scoreAway: 2,
    year: 2018,
    image: "https://www.corriere.it/methode_image/2018/07/11/Sport/Foto%20Gallery/2018-07-11T202420Z_107218555_RC1FBAAC93C0_RTRMADP_3_SOCCER-WORLDCUP-CRO-ENG.jpg",
    imageAlt: "Mondiale 2018 Semifinale Inghilterra vs Croazia"
  },
  {
    homeTeam: "Croazia",
    awayTeam: "Danimarca",
    competition: "Mondiale – Ottavi",
    scoreHome: 1,
    scoreAway: 1,
    year: 2018,
    image: "https://www.repstatic.it/content/nazionale/img/2018/07/01/231630085-6522fe0e-2070-4cf7-a599-4add3a79442e.jpg",
    imageAlt: "Mondiale 2018 Ottavi Croazia vs Danimarca"
  },
  {
    homeTeam: "Brasile",
    awayTeam: "Belgio",
    competition: "Mondiale – Quarti",
    scoreHome: 1,
    scoreAway: 2,
    year: 2018,
    image: "https://www.rainews.it/dl/img/2018/07/475x0_1530902089605.brazil.jpg",
    imageAlt: "Mondiale 2018 Quarti Brasile vs Belgio"
  },
  {
    homeTeam: "Francia",
    awayTeam: "Belgio",
    competition: "Mondiale – Semifinale",
    scoreHome: 1,
    scoreAway: 0,
    year: 2018,
    image: "https://images2.gazzettaobjects.it/methode_image/2018/07/10/Calcio/Foto%20Calcio%20-%20Trattate/6c3ef35816b462517c5b0efb5d3ab54e_169_xl.jpg",
    imageAlt: "Mondiale 2018 Semifinale Francia vs Belgio"
  },
  {
    homeTeam: "Argentina",
    awayTeam: "Croazia",
    competition: "Mondiale – Semifinale",
    scoreHome: 3,
    scoreAway: 0,
    year: 2022,
    image: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2022/12/13/3507898.jpg",
    imageAlt: "Mondiale 2022 Semifinale Argentina vs Croazia"
  },
  {
    homeTeam: "Marocco",
    awayTeam: "Portogallo",
    competition: "Mondiale – Quarti",
    scoreHome: 1,
    scoreAway: 0,
    year: 2022,
    image: "https://staticfanpage.akamaized.net/wp-content/uploads/sites/27/2022/12/ronaldo--1200x675.jpeg",
    imageAlt: "Mondiale 2022 Quarti Marocco vs Portogallo"
  },
  {
    homeTeam: "Portogallo",
    awayTeam: "Svizzera",
    competition: "Mondiale – Ottavi",
    scoreHome: 6,
    scoreAway: 1,
    year: 2022,
    image: "https://www.ilpost.it/wp-content/uploads/2022/12/07/680x340/1670407625-portogallo-svizzera-ottavi-mondiali-calcio-qatar.jpg",
    imageAlt: "Mondiale 2022 Ottavi Portogallo vs Svizzera"
  },
  {
    homeTeam: "Spagna",
    awayTeam: "Germania",
    competition: "Euro – Quarti",
    scoreHome: 2,
    scoreAway: 1,
    year: 2024,
    image: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2024/07/05/3998501-81145728-2560-1440.jpg",
    imageAlt: "Euro 2024 Quarti Spagna vs Germania"
  },
  {
    homeTeam: "Turchia",
    awayTeam: "Austria",
    competition: "Euro – Ottavi",
    scoreHome: 2,
    scoreAway: 1,
    year: 2024,
    image: "https://assets.gds.it/2024/07/austria-turchia-2.jpg",
    imageAlt: "Euro 2024 Ottavi Turchia vs Austria"
  },
  {
    homeTeam: "Barcellona",
    awayTeam: "Paris Saint-Germain",
    competition: "Champions League – Ottavi",
    scoreHome: 6,
    scoreAway: 1,
    year: 2017,
    image: "https://images2.gazzettaobjects.it/methode_image/2017/03/08/Calcio/Foto%20Calcio%20-%20Trattate/912aace00f72837d2f8e4a43af154492_169_xl.jpg",
    imageAlt: "Champions League 2017 Remontada Barcellona vs PSG"
  },
  {
    homeTeam: "Liverpool",
    awayTeam: "Barcellona",
    competition: "Champions League – Semifinale",
    scoreHome: 4,
    scoreAway: 0,
    year: 2019,
    image: "https://static.sky.it/editorialimages/4a77b39314a8a469725022d3cb2d50e45e9673fe/static/contentimages/original/sezioni/tg24/sport/2019/05/07/liverpool_barcellona_getty.jpg",
    imageAlt: "Champions League 2019 Liverpool vs Barcellona"
  },
  {
    homeTeam: "Barcellona",
    awayTeam: "Liverpool",
    competition: "Champions League – Semifinale",
    scoreHome: 3,
    scoreAway: 0,
    year: 2019,
    image: "https://www.repstatic.it/content/localirep/img/rep/2019/05/02/230640348-65034485-51b7-446a-bf58-8ce80747c181.jpg",
    imageAlt: "Champions League 2019 Barcellona vs Liverpool"
  },
  {
    homeTeam: "Real Madrid",
    awayTeam: "Manchester City",
    competition: "Champions League – Semifinale",
    scoreHome: 3,
    scoreAway: 1,
    year: 2022,
    image: "https://assets.goal.com/images/v3/blte6827c32aacbc810/GettyImages-1395410665.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    imageAlt: "Champions League 2022 Semifinale Real Madrid vs Manchester City"
  },
  {
    homeTeam: "Manchester City",
    awayTeam: "Real Madrid",
    competition: "Champions League – Semifinale",
    scoreHome: 4,
    scoreAway: 3,
    year: 2022,
    image: "https://www.gazzetta.it/methode_image/2022/04/26/Calcio/Foto_Calcio_-_Trattate/66464fa6029a9982482c85c6a36dddbe_1200x675.jpg",
    imageAlt: "Champions League 2022 Semifinale Manchester City vs Real Madrid"
  },
  {
    homeTeam: "Real Madrid",
    awayTeam: "Paris Saint-Germain",
    competition: "Champions League – Ottavi",
    scoreHome: 3,
    scoreAway: 1,
    year: 2022,
    image: "https://e01-phantom-elmundo.uecdn.es/abdcf3ee62770b78282cec875580156e/crop/114x101/2947x1989/resize/828/f/webp/assets/multimedia/imagenes/2022/03/10/16468745569676.jpg",
    imageAlt: "Champions League 2022 Ottavi Real Madrid vs PSG"
  },
  {
    homeTeam: "Real Madrid",
    awayTeam: "Chelsea",
    competition: "Champions League – Quarti",
    scoreHome: 2,
    scoreAway: 3,
    year: 2023,
    image: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2022/04/12/3354477.jpg",
    imageAlt: "Champions League 2023 Quarti Real Madrid vs Chelsea"
  },
  {
    homeTeam: "Chelsea",
    awayTeam: "Real Madrid",
    competition: "Champions League – Quarti",
    scoreHome: 0,
    scoreAway: 2,
    year: 2023,
    image: "https://www.corriere.it/methode_image/2023/04/12/Sport/Foto%20Sport%20-%20Trattate/LAPR0665-ktmH-U34101183646622o5G-656x492@Corriere-Web-Sezioni.JPG",
    imageAlt: "Champions League 2023 Quarti Chelsea vs Real Madrid"
  },
  {
    homeTeam: "Manchester City",
    awayTeam: "Real Madrid",
    competition: "Champions League – Semifinale",
    scoreHome: 1,
    scoreAway: 1,
    year: 2023,
    image: "https://www.reuters.com/resizer/v2/5U7FNCWO5BML3GHGC7ODEBXGPQ.jpg?auth=a9338681ab51ba83490ca2a53fb5865e2f234d3239d4ac245d47f99a9e6f6414&width=1080&quality=80",
    imageAlt: "Champions League 2023 Semifinale Manchester City vs Real Madrid"
  },
  {
    homeTeam: "Paris Saint-Germain",
    awayTeam: "Barcellona",
    competition: "Champions League – Quarti",
    scoreHome: 4,
    scoreAway: 1,
    year: 2024,
    image: "https://imgresizer.eurosport.com/unsafe/2560x1440/filters:format(jpeg)/origin-imgresizer.eurosport.com/2024/04/16/3950433-80222368-2560-1440.jpg",
    imageAlt: "Champions League 2024 Quarti PSG vs Barcellona"
  },
  {
    homeTeam: "Bayern Monaco",
    awayTeam: "Real Madrid",
    competition: "Champions League – Semifinale",
    scoreHome: 2,
    scoreAway: 2,
    year: 2024,
    image: "https://imgresizer.eurosport.com/unsafe/2560x1440/filters:format(jpeg)/origin-imgresizer.eurosport.com/2024/04/30/3959605-80386808-2560-1440.jpg",
    imageAlt: "Champions League 2024 Semifinale Real Madrid vs Bayern Monaco"
  },
  {
    homeTeam: "Real Madrid",
    awayTeam: "Bayern Monaco",
    competition: "Champions League – Semifinale",
    scoreHome: 2,
    scoreAway: 1,
    year: 2024,
    image: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2024/05/08/3964345-80481608-2560-1440.jpg",
    imageAlt: "Champions League 2024 Semifinale Bayern Monaco vs Real Madrid"
  },
  {
    homeTeam: "Arsenal",
    awayTeam: "Bayern Monaco",
    competition: "Champions League – Quarti",
    scoreHome: 2,
    scoreAway: 2,
    year: 2024,
    image: "https://imgresizer.eurosport.com/unsafe/2560x1440/filters:format(jpeg)/origin-imgresizer.eurosport.com/2024/04/09/3946263-80138968-2560-1440.jpg",
    imageAlt: "Champions League 2024 Quarti Arsenal vs Bayern Monaco"
  },
  {
    homeTeam: "Borussia Dortmund",
    awayTeam: "Paris Saint-Germain",
    competition: "Champions League – Semifinale",
    scoreHome: 1,
    scoreAway: 0,
    year: 2024,
    image: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2024/05/01/3960130.jpg",
    imageAlt: "Champions League 2024 Semifinale Dortmund vs PSG"
  },
  {
    homeTeam: "Atletico Madrid",
    awayTeam: "Real Madrid",
    competition: "Champions League – Quarti",
    scoreHome: 2,
    scoreAway: 1,
    year: 2015,
    image: "https://ichef.bbci.co.uk/ace/standard/624/cpsprodpb/3E4E/production/_96005951_madrid.jpg",
    imageAlt: "Champions League 2015 Quarti Atletico Madrid vs Real Madrid"
  },
  {
    homeTeam: "Ajax",
    awayTeam: "Tottenham",
    competition: "Champions League – Semifinale",
    scoreHome: 2,
    scoreAway: 3,
    year: 2019,
    image: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/QEDAL5DR2YI6TEZRGC6FQNXURY.jpg&w=1440",
    imageAlt: "Champions League 2019 Semifinale Tottenham vs Ajax"
  },
  {
    homeTeam: "Real Madrid",
    awayTeam: "Ajax",
    competition: "Champions League – Ottavi",
    scoreHome: 1,
    scoreAway: 4,
    year: 2019,
    image: "https://e0.365dm.com/19/03/1600x900/skysports-real-madrid-ajax_4598426.jpg?20190305213942",
    imageAlt: "Champions League 2019 Ottavi Ajax vs Real Madrid"
  },
  {
    homeTeam: "Liverpool",
    awayTeam: "Roma",
    competition: "Champions League – Semifinale",
    scoreHome: 5,
    scoreAway: 2,
    year: 2018,
    image: "https://editorial.uefa.com/resources/0244-0e98b7321ff6-66982edb83c1-1000/mohamed_salah_after_scoring_his_and_liverpool_s_second_goal_in_the_first_leg_against_roma.jpeg",
    imageAlt: "Champions League 2018 Semifinale Liverpool vs Roma"
  },
  {
    homeTeam: "Roma",
    awayTeam: "Barcellona",
    competition: "Champions League – Quarti",
    scoreHome: 3,
    scoreAway: 0,
    year: 2018,
    image: "https://static.sky.it/editorialimages/c0e47814bbe6daae9d5ea9d491c237dbd617fb2f/static/contentimages/original/sezioni/sport/champions_league/2018/04/10/manolas_delirio_getty.jpg",
    imageAlt: "Champions League 2018 Quarti Roma vs Barcellona"
  },
    {
    homeTeam: "Real Madrid",
    awayTeam: "Barcellona",
    competition: "La Liga – Clasico",
    scoreHome: 2,
    scoreAway: 6,
    year: 2009,
    image: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/08/17/15344896817379.jpg",
    imageAlt: "Clasico 2009 Real Madrid vs Barcellona"
  },
  {
    homeTeam: "Barcellona",
    awayTeam: "Real Madrid",
    competition: "La Liga – Clasico",
    scoreHome: 5,
    scoreAway: 0,
    year: 2010,
    image: "https://estaticos-cdn.prensaiberica.es/clip/9f8c2660-5f61-46db-aca1-8fcdfcb19e3c_16-9-discover-aspect-ratio_default_0.jpg",
    imageAlt: "Clasico 2010 Barcellona vs Real Madrid"
  },
  {
    homeTeam: "Manchester United",
    awayTeam: "Manchester City",
    competition: "Premier League",
    scoreHome: 4,
    scoreAway: 3,
    year: 2009,
    image: "https://newsimg.bbc.co.uk/media/images/46410000/jpg/_46410778_owen_new_credit.jpg",
    imageAlt: "Premier League 2009 Manchester United vs Manchester City"
  },
  {
    homeTeam: "Manchester City",
    awayTeam: "Manchester United",
    competition: "Premier League",
    scoreHome: 6,
    scoreAway: 1,
    year: 2011,
    image: "https://i.imgur.com/VYl9O67.jpg",
    imageAlt: "Premier League 2011 Manchester City vs Manchester United"
  },
  {
    homeTeam: "Liverpool",
    awayTeam: "Arsenal",
    competition: "Premier League",
    scoreHome: 5,
    scoreAway: 1,
    year: 2014,
    image: "https://i2-prod.dailypost.co.uk/article6688480.ece/ALTERNATES/s1200d/skrtel.jpg",
    imageAlt: "Premier League 2014 Liverpool vs Arsenal"
  },
  {
    homeTeam: "Manchester United",
    awayTeam: "Tottenham",
    competition: "Premier League",
    scoreHome: 1,
    scoreAway: 6,
    year: 2020,
    image: "https://c.files.bbci.co.uk/97F2/production/_114689883_spurs-index-epa.jpg",
    imageAlt: "Premier League 2020 Tottenham vs Manchester United"
  },
  {
    homeTeam: "Leicester City",
    awayTeam: "Manchester United",
    competition: "Premier League",
    scoreHome: 5,
    scoreAway: 3,
    year: 2014,
    image: "https://premierleague25years.wordpress.com/wp-content/uploads/2019/02/leicester-5-3-manchester-united-stretty-news.jpg",
    imageAlt: "Premier League 2014 Leicester vs Manchester United"
  },
  {
    homeTeam: "Inter",
    awayTeam: "Milan",
    competition: "Serie A – Derby",
    scoreHome: 3,
    scoreAway: 2,
    year: 2005,
    image: "https://www.corriere.it/Hermes%20Foto/2005/12/11/0IRCQL7M--470x314.jpg",
    imageAlt: "Derby 2005 Inter vs Milan"
  },
  {
    homeTeam: "Juventus",
    awayTeam: "Napoli",
    competition: "Serie A",
    scoreHome: 3,
    scoreAway: 1,
    year: 2018,
    image: "https://www.ansa.it/webimages/news_base/2018/9/29/0d47d930a9c4821837322981c23ee799.jpg",
    imageAlt: "Serie A 2018 Juventus vs Napoli"
  },
  {
    homeTeam: "Germania",
    awayTeam: "Inghilterra",
    competition: "Mondiale – Ottavi",
    scoreHome: 4,
    scoreAway: 1,
    year: 2010,
    image: "https://staticfanpage.akamaized.net/wp-content/uploads/sites/27/2020/06/lampard-no-goal-germania-inghilterra-1593257906893.jpg",
    imageAlt: "Mondiale 2010 Ottavi Germania vs Inghilterra"
  },
  {
    homeTeam: "Spagna",
    awayTeam: "Olanda",
    competition: "Mondiale – Finale",
    scoreHome: 1,
    scoreAway: 0,
    year: 2010,
    image: "https://gameofgoals.it/wp-content/uploads/2025/11/f93df685f37e5b2ed3b12c3a1abdaca3.jpg",
    imageAlt: "Mondiale 2010 Finale Spagna vs Olanda"
  },
  {
    homeTeam: "Grecia",
    awayTeam: "Portogallo",
    competition: "Euro – Finale",
    scoreHome: 1,
    scoreAway: 0,
    year: 2004,
    image: "https://storiedicalcio.altervista.org/blog/wp-content/uploads/2016/02/Euro-2004-Angelos-Charisteas-Greece-Portugal-_909345.jpg",
    imageAlt: "Euro 2004 Finale Grecia vs Portogallo"
  },
  {
    homeTeam: "Spagna",
    awayTeam: "Italia",
    competition: "Euro – Finale",
    scoreHome: 4,
    scoreAway: 0,
    year: 2012,
    image: "https://aeshahadlina.wordpress.com/wp-content/uploads/2012/07/torres-goal.jpg",
    imageAlt: "Euro 2012 Finale Spagna vs Italia"
  },
  {
    homeTeam: "Italia",
    awayTeam: "Germania",
    competition: "Euro – Semifinale",
    scoreHome: 2,
    scoreAway: 1,
    year: 2012,
    image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1002757922-667e904745ef5.jpg?resize=980:*",
    imageAlt: "Euro 2012 Semifinale Germania vs Italia"
  },
  {
    homeTeam: "Ungheria",
    awayTeam: "Portogallo",
    competition: "Euro – Fase a gironi",
    scoreHome: 0,
    scoreAway: 3,
    year: 2021,
    image: "https://sport.sky.it/assets/images/d3cbde24ed899052cf54de5d0f4e2ef0f117ead9/skysport/it/calcio/europei/partite/2020/giornata-1/ungheria-portogallo/live/content/ronaldo_getty%203.jpg",
    imageAlt: "Euro 2020 Portogallo vs Ungheria"
  },
  {
    homeTeam: "Francia",
    awayTeam: "Svizzera",
    competition: "Euro – Ottavi",
    scoreHome: 3,
    scoreAway: 3,
    year: 2021,
    image: "https://editorial.uefa.com/resources/026a-12a179e31415-ea528aab99f4-1000/lowres_20210629000315.jpeg",
    imageAlt: "Euro 2020 Ottavi Francia vs Svizzera"
  },
  {
    homeTeam: "Inghilterra",
    awayTeam: "Germania",
    competition: "Euro – Ottavi",
    scoreHome: 2,
    scoreAway: 0,
    year: 2021,
    image: "https://www.repstatic.it/content/nazionale/img/2021/06/29/202821437-38c9d068-0044-4b31-b0d6-e31c773d7f74.jpg",
    imageAlt: "Euro 2020 Ottavi Inghilterra vs Germania"
  },
  {
    homeTeam: "Milan",
    awayTeam: "Inter",
    competition: "Serie A – Derby",
    scoreHome: 0,
    scoreAway: 4,
    year: 2009,
    image: "https://www.calcioinpillole.com/wp-content/uploads/2021/02/ac-milan-v-fc-internazionale-milano-serie-a-1-scaled.jpg",
    imageAlt: "Derby Milano 2009 Milan vs Inter 0-4"
  },
  {
    homeTeam: "Lazio",
    awayTeam: "Roma",
    competition: "Serie A – Derby della Capitale",
    scoreHome: 1,
    scoreAway: 5,
    year: 2002,
    image: "https://m.laroma24.it/wp-content/uploads/2017/03/BIG-Totti-6-unica.jpg",
    imageAlt: "Derby della Capitale 2002 Lazio vs Roma 1-5"
  },
  {
    homeTeam: "Roma",
    awayTeam: "Lazio",
    competition: "Serie A – Derby della Capitale",
    scoreHome: 4,
    scoreAway: 2,
    year: 2009,
    image: "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_1:1,f_auto,q_auto,g_auto/shape/cover/sport/Lazios-forward-Mauro-Zarate-celebrates-eeefeb05107d7d155ec25955790dca7d.jpg",
    imageAlt: "Derby della Capitale 2009 Roma vs Lazio 4-2"
  },
  {
    homeTeam: "Napoli",
    awayTeam: "Juventus",
    competition: "Serie A",
    scoreHome: 5,
    scoreAway: 1,
    year: 2023,
    image: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/01/13/3525539.jpg",
    imageAlt: "Serie A 2023 Napoli vs Juventus 5-1"
  },
    {
    // La Partita del Secolo — 5 gol nei supplementari
    homeTeam: "Italia",
    awayTeam: "Germania",
    competition: "Mondiali – Semifinale",
    scoreHome: 4,
    scoreAway: 3,
    year: 1970,
    image: "https://www.repstatic.it/content/nazionale/img/2020/06/14/203343427-db38189d-ed77-4a7e-b283-9d860813e935.jpg",
    imageAlt: "Mondiali 1970 Semifinale Italia vs Germania 4-3"
  },
  {
    // Brasile più forte di sempre — finale col Carlos Alberto gol
    homeTeam: "Brasile",
    awayTeam: "Italia",
    competition: "Mondiali – Finale",
    scoreHome: 4,
    scoreAway: 1,
    year: 1970,
    image: "https://athlet.org/jdd/public/documents/athlet/football/games/460x276/2379.jpg",
    imageAlt: "Mondiali 1970 Finale Brasile vs Italia 4-1"
  },
  {
    // Parata del secolo di Banks su Pelé
    homeTeam: "Brasile",
    awayTeam: "Inghilterra",
    competition: "Mondiali – Fase a gironi",
    scoreHome: 1,
    scoreAway: 0,
    year: 1970,
    image: "https://storiedicalcio.altervista.org/blog/wp-content/uploads/2016/07/bra-eng-1970-sdkjsdf8-wp.jpg",
    imageAlt: "Mondiali 1970 Brasile vs Inghilterra 1-0"
  },
  {
    // Primo mondiale argentino — Kempes doppietta ai supplementari
    homeTeam: "Argentina",
    awayTeam: "Olanda",
    competition: "Mondiali – Finale",
    scoreHome: 3,
    scoreAway: 1,
    year: 1978,
    image: "https://lavoce.hr/wp-content/uploads/2022/12/kempes_vs_netherlands_1978.jpg",
    imageAlt: "Mondiali 1978 Finale Argentina vs Olanda 3-1"
  },
  {
    // Mano de Dios + Gol del Secolo — Maradona immortale
    homeTeam: "Argentina",
    awayTeam: "Inghilterra",
    competition: "Mondiali – Quarti",
    scoreHome: 2,
    scoreAway: 1,
    year: 1986,
    image: "https://sport.sky.it/assets/images/bc835b25c5f8394c13c511f398baa426d95c1f7d/skysport/it/calcio/maradona-argentina-gol-mano-de-dios/maradona_argentina_mano%20de%20dios_ipa.jpg",
    imageAlt: "Mondiali 1986 Quarti Argentina vs Inghilterra 2-1 Maradona"
  },
  {
    // Mondiale 1986 — Maradona trascina l'Argentina al titolo
    homeTeam: "Argentina",
    awayTeam: "Germania",
    competition: "Mondiali – Finale",
    scoreHome: 3,
    scoreAway: 2,
    year: 1986,
    image: "https://inzonacesarini.wordpress.com/wp-content/uploads/2014/07/mara.jpg",
    imageAlt: "Mondiali 1986 Finale Argentina vs Germania 3-2"
  },
  {
    // 2 gol al 91' e 93' — la rimonta più epica della storia
    homeTeam: "Manchester United",
    awayTeam: "Bayern Monaco",
    competition: "Champions League – Finale",
    scoreHome: 2,
    scoreAway: 1,
    year: 1999,
    image: "https://editorial.uefa.com/resources/01e3-0e741f87bec9-6916b46f55ba-1000/1466052.jpeg",
    imageAlt: "Champions League Finale 1999 Manchester United vs Bayern Monaco"
  },
  {
    // Deportivo rimonta dal 4-1 — il miracolo che nessuno si aspettava
    homeTeam: "Deportivo La Coruña",
    awayTeam: "AC Milan",
    competition: "Champions League – Quarti",
    scoreHome: 4,
    scoreAway: 0,
    year: 2004,
    image: "https://www.chiamarsibomber.com/wp-content/uploads/2025/11/milan-deportivo-la-coruna-champions-league.png",
    imageAlt: "Champions League 2004 Deportivo vs Milan rimonta storica"
  },
  {
    // Brasile 3-0 Spagna — fine di un'era, Neymar e Fred demoliscono i campioni
    homeTeam: "Brasile",
    awayTeam: "Spagna",
    competition: "Confederations Cup – Finale",
    scoreHome: 3,
    scoreAway: 0,
    year: 2013,
    image: "https://athlet.org/jdd/public/documents/athlet/football/games/460x276/19659.jpg",
    imageAlt: "Confederations Cup 2013 Finale Brasile vs Spagna 3-0"
  },


];
