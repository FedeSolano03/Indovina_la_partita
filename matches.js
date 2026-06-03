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
    image: "https://www.sportal.it/wp-content/uploads/2025/09/marcus_thuram_khephren_thuram-6.webphttps://wips.plug.it/cips/sport.virgilio.it/cms/2025/09/juventus-inter-risata-marcus-thuram.jpg",
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
    image: "https://prd-images2-gazzanet.gazzettaobjects.it/QWwO4fBJfpZTIk-jn-H0_FyuRdI=/712x402/smart/www.pianetamilan.it/assets/uploads/202202/IMG_0977.jpg",
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

];
