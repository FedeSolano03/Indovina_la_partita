/* ═══════════════════════════════════════════════════════════
   LANG.JS — Sistema multilingua IT / EN
   ═══════════════════════════════════════════════════════════ */

const TRANSLATIONS = {
  it: {
    /* Home */
    badge:        '⚽ FOOTBALL QUIZ',
    title:        'Indovina<br>il Risultato',
    desc:         'Cinque partite leggendarie ti aspettano.<br>Ricordi il risultato? Ricordi l\'anno?<br>Metti alla prova la tua memoria calcistica.',
    btnStart:     'Inizia Partita',
    statRounds:   'Partite',
    statMax:      'Punti Max',
    statMedals:   'Medaglie',
    /* Game */
    roundLabel:   (i, t) => `Partita ${i} / ${t}`,
    inputHint:    'Qual era il risultato finale e l\'anno?',
    labelScore:   'Risultato',
    labelYear:    'Anno',
    phScore:      'es. 2-1',
    phYear:       'es. 2012',
    btnSubmit:    'Invia Risultato',
    btnContinue:  'Continua',
    /* Result panel */
    rpLabel:      'Punti guadagnati',
    rpResult:     'Risultato',
    rpYear:       'Anno',
    rpYourAnswer: 'La tua risposta',
    rpCorrect:    'Risposta corretta',
    /* Final */
    finalHeader:  'Risultato Finale',
    totalScore:   'Punteggio totale',
    /* Medals */
    gold:         'ORO',
    silver:       'ARGENTO',
    bronze:       'BRONZO',
    none:         'NESSUNA MEDAGLIA',
    descGold:     'Sei una leggenda del calcio!',
    descSilver:   'Ottima memoria calcistica!',
    descBronze:   'Buon risultato, continua ad allenarti!',
    descNone:     'Ritenta, ci vorrà più fortuna!',
    /* Errors */
    errScore:     'Formato non valido — usa es. 2-1',
    errYear:      'Anno non valido',
    /* Chart */
    chartLabel:   (i) => `Partita ${i}`,
    chartTooltip: (v) => ` ${v} / 100 punti`,
  },
  en: {
    /* Home */
    badge:        '⚽ FOOTBALL QUIZ',
    title:        'Guess the<br>Score',
    desc:         'Five legendary matches await you.<br>Do you remember the score? The year?<br>Test your football memory.',
    btnStart:     'Start Game',
    statRounds:   'Matches',
    statMax:      'Max Points',
    statMedals:   'Medals',
    /* Game */
    roundLabel:   (i, t) => `Match ${i} / ${t}`,
    inputHint:    'What was the final score and year?',
    labelScore:   'Score',
    labelYear:    'Year',
    phScore:      'e.g. 2-1',
    phYear:       'e.g. 2012',
    btnSubmit:    'Submit Answer',
    btnContinue:  'Continue',
    /* Result panel */
    rpLabel:      'Points earned',
    rpResult:     'Score',
    rpYear:       'Year',
    rpYourAnswer: 'Your answer',
    rpCorrect:    'Correct answer',
    /* Final */
    finalHeader:  'Final Results',
    totalScore:   'Total score',
    /* Medals */
    gold:         'GOLD',
    silver:       'SILVER',
    bronze:       'BRONZE',
    none:         'NO MEDAL',
    descGold:     'You are a football legend!',
    descSilver:   'Excellent football memory!',
    descBronze:   'Good result, keep training!',
    descNone:     'Try again, better luck next time!',
    /* Errors */
    errScore:     'Invalid format — use e.g. 2-1',
    errYear:      'Invalid year',
    /* Chart */
    chartLabel:   (i) => `Match ${i}`,
    chartTooltip: (v) => ` ${v} / 100 pts`,
  }
};

let currentLang = 'it';

function t(key, ...args) {
  const val = TRANSLATIONS[currentLang][key];
  return typeof val === 'function' ? val(...args) : val;
}

function setLang(lang) {
  currentLang = lang;
  applyTranslations();
  // aggiorna bandierine
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('lang-active', b.dataset.lang === lang);
  });
}

function applyTranslations() {
  const L = TRANSLATIONS[currentLang];
  // Home
  document.querySelector('.home-badge').textContent        = L.badge;
  document.querySelector('.home-title').innerHTML          = L.title;
  document.querySelector('.home-desc').innerHTML           = L.desc;
  document.querySelector('.btn-start span').textContent    = L.btnStart;
  document.querySelectorAll('.stat-l')[0].textContent      = L.statRounds;
  document.querySelectorAll('.stat-l')[1].textContent      = L.statMax;
  document.querySelectorAll('.stat-l')[2].textContent      = L.statMedals;
  // Game static
  document.querySelector('.input-hint').textContent        = L.inputHint;
  document.querySelectorAll('.input-group label')[0].textContent = L.labelScore;
  document.querySelectorAll('.input-group label')[1].textContent = L.labelYear;
  document.getElementById('inputScore').placeholder        = L.phScore;
  document.getElementById('inputScore').setAttribute('data-orig-ph', L.phScore);
  document.getElementById('inputYear').placeholder         = L.phYear;
  document.getElementById('inputYear').setAttribute('data-orig-ph', L.phYear);
  document.querySelector('.btn-submit').textContent        = L.btnSubmit;
  // Result panel
  document.querySelector('.rp-label').textContent          = L.rpLabel;
  document.querySelectorAll('.rp-bd-label')[0].textContent = L.rpResult;
  document.querySelectorAll('.rp-bd-label')[1].textContent = L.rpYear;
  document.querySelectorAll('.rp-cmp-tag')[0].textContent  = L.rpYourAnswer;
  document.querySelectorAll('.rp-cmp-tag')[1].textContent  = L.rpCorrect;
  // Final header
  document.querySelector('.final-header-title').textContent = L.finalHeader;
  document.querySelector('.final-score-total').firstChild.textContent = L.totalScore + ': ';
}
