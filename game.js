/* ═══════════════════════════════════════════════════════════
   GAME.JS — Logica di gioco
   Il database partite è in matches.js
   ═══════════════════════════════════════════════════════════ */

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
  "https://images.unsplash.com/photo-1551958219-acbc6d1ead01?w=800&q=80",
  "https://images.unsplash.com/photo-1540747913346-19212a729c62?w=800&q=80",
  "https://images.unsplash.com/photo-1522778034537-20a2486be803?w=800&q=80",
  "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80",
  "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80",
  "https://images.unsplash.com/photo-1607627000458-210e8d2bdb1d?w=800&q=80",
];

const TOTAL_ROUNDS  = 5;
const MAX_SCORE     = TOTAL_ROUNDS * 100; // 500
const TIMER_SECONDS = 45;

/* ─── STATE ─── */
let sessionMatches = [];
let currentIdx     = 0;
let scores         = [];
let totalScore     = 0;
let chartInstance  = null;

/* ─── TIMER ─── */
let timerInterval  = null;
let timerLeft      = TIMER_SECONDS;

/* ─── SHUFFLE ─── */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ─── SCREEN NAVIGATION ─── */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function goHome() {
  stopTimer();
  showScreen('screen-home');
}

/* ─── START GAME ─── */
function startGame() {
  sessionMatches = shuffle(ALL_MATCHES).slice(0, TOTAL_ROUNDS);
  currentIdx  = 0;
  scores      = [];
  totalScore  = 0;

  updateTotalDisplay();
  buildProgressDots();
  showScreen('screen-game');
  loadMatch(currentIdx);
}

function buildProgressDots() {
  const container = document.getElementById('progressDots');
  container.innerHTML = '';
  for (let i = 0; i < TOTAL_ROUNDS; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.id = 'dot-' + i;
    container.appendChild(d);
  }
}

function updateDots(idx) {
  for (let i = 0; i < TOTAL_ROUNDS; i++) {
    const d = document.getElementById('dot-' + i);
    d.className = 'dot';
    if (i < idx)   d.classList.add('done');
    if (i === idx) d.classList.add('active');
  }
}

function updateTotalDisplay() {
  document.getElementById('totalScoreDisplay').textContent = Math.round(totalScore);
}

/* ─── TIMER ─── */
function startTimer() {
  stopTimer();
  timerLeft = TIMER_SECONDS;
  updateTimerUI();

  timerInterval = setInterval(() => {
    timerLeft--;
    updateTimerUI();

    if (timerLeft <= 0) {
      stopTimer();
      timeUp();
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

function updateTimerUI() {
  const fill  = document.getElementById('timerFill');
  const label = document.getElementById('timerLabel');
  if (!fill || !label) return;

  const pct = (timerLeft / TIMER_SECONDS) * 100;
  fill.style.width = pct + '%';

  label.textContent = timerLeft + 's';

  // Colori progressivi
  const level = timerLeft <= 5 ? 'danger' : timerLeft <= 10 ? 'warning' : '';
  fill.className  = 'timer-bar-fill'  + (level ? ' timer-' + level : '');
  label.className = 'timer-label'     + (level ? ' timer-' + level : '');
}

function timeUp() {
  // Forza 0 punti e mostra pannello risultati
  const m = sessionMatches[currentIdx];
  scores.push(0);
  // non aggiungere a totalScore

  document.getElementById('userScoreDisplay').textContent = '—';
  document.getElementById('userYearDisplay').textContent  = '—';
  document.getElementById('realScore').textContent        = `${m.scoreHome}-${m.scoreAway}`;
  document.getElementById('realYear').textContent         = m.year;
  document.getElementById('scoreResult').textContent      = 0;
  document.getElementById('scoreYear').textContent        = 0;

  const scoreVal = document.getElementById('scoreMatch');
  scoreVal.textContent = 0;
  scoreVal.className   = 'rp-score-val score-poor';

  stopTimer();
  document.getElementById('inputPanel').classList.add('hidden');
  document.getElementById('resultPanel').classList.remove('hidden');
}

/* ─── LOAD MATCH ─── */
function loadMatch(idx) {
  const m = sessionMatches[idx];

  document.getElementById('inputPanel').classList.remove('hidden');
  document.getElementById('resultPanel').classList.add('hidden');
  document.getElementById('inputScore').value = '';
  document.getElementById('inputYear').value  = '';

  document.getElementById('roundLabel').textContent     = t('roundLabel', idx + 1, TOTAL_ROUNDS);
  document.getElementById('teamHome').textContent        = m.homeTeam;
  document.getElementById('teamAway').textContent        = m.awayTeam;
  document.getElementById('competitionTag').textContent  = m.competition;

  const img = document.getElementById('matchImg');
  img.src = '';
  const tryLoad = (src, fi) => {
    const t = new Image();
    t.onload  = () => { img.src = src; };
    t.onerror = () => { if (fi < FALLBACK_IMAGES.length) tryLoad(FALLBACK_IMAGES[fi], fi + 1); };
    t.src = src;
  };
  tryLoad(m.image, 0);

  const card = document.getElementById('matchCard');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = '';

  updateDots(idx);
  startTimer();
  document.getElementById('inputScore').focus();
}

/* ─── SCORING ─── */
function parseScore(str) {
  const parts = str.trim().split(/[-–]/);
  if (parts.length !== 2) return null;
  const a = parseInt(parts[0]);
  const b = parseInt(parts[1]);
  if (isNaN(a) || isNaN(b) || a < 0 || b < 0 || a > 20 || b > 20) return null;
  return [a, b];
}

function calcMatchScore(m, userScore, userYear) {
  // ─── ESITO (V/P/S) ───
  const realOutcome = m.scoreHome > m.scoreAway ? 1 : m.scoreHome < m.scoreAway ? -1 : 0;
  const userOutcome = userScore[0] > userScore[1] ? 1 : userScore[0] < userScore[1] ? -1 : 0;
  const P_esito = realOutcome === userOutcome ? 1 : 0.1;

  // ─── DIFFERENZA RETI ───
  const realDiff = Math.abs(m.scoreHome - m.scoreAway);
  const userDiff = Math.abs(userScore[0] - userScore[1]);
  const P_diff   = Math.max(0, 1 - Math.abs(realDiff - userDiff) / Math.max(realDiff, 1));

  // ─── GOAL ASSOLUTI ───
  const errCasa  = Math.abs(m.scoreHome - userScore[0]);
  const errFuori = Math.abs(m.scoreAway - userScore[1]);
  const totaleReale = m.scoreHome + m.scoreAway + 1;
  const P_goal   = Math.max(0, 1 - (errCasa + errFuori) / totaleReale);

  // ─── PUNTEGGIO RISULTATO (0-100) ───
  const sResult = (P_esito * 0.30 + P_diff * 0.25 + P_goal * 0.45) * 100;

  // ─── ANNO (invariato) ───
  const sYear  = Math.max(0, 100 - Math.abs(m.year - userYear) * 5);

  // ─── PUNTEGGIO FINALE ───
  const sMatch = (sResult + sYear) / 2;

  return { sResult, sYear, sMatch };
}

/* ─── SUBMIT GUESS ─── */
function submitGuess() {
  const scoreRaw = document.getElementById('inputScore').value;
  const yearRaw  = parseInt(document.getElementById('inputYear').value);

  const parsed = parseScore(scoreRaw);
  if (!parsed) { shakeInput('inputScore', t('errScore')); return; }
  if (isNaN(yearRaw) || yearRaw < 1950 || yearRaw > 2026) { shakeInput('inputYear', t('errYear')); return; }

  const m = sessionMatches[currentIdx];
  const { sResult, sYear, sMatch } = calcMatchScore(m, parsed, yearRaw);

  scores.push(Math.round(sMatch));
  totalScore += sMatch;
  updateTotalDisplay();

  document.getElementById('userScoreDisplay').textContent = `${parsed[0]}-${parsed[1]}`;
  document.getElementById('userYearDisplay').textContent  = yearRaw;
  document.getElementById('realScore').textContent        = `${m.scoreHome}-${m.scoreAway}`;
  document.getElementById('realYear').textContent         = m.year;
  document.getElementById('scoreResult').textContent      = Math.round(sResult);
  document.getElementById('scoreYear').textContent        = Math.round(sYear);

  const scoreVal = document.getElementById('scoreMatch');
  const matchRounded = Math.round(sMatch);
  scoreVal.textContent = matchRounded;
  scoreVal.className   = 'rp-score-val ' + (sMatch >= 75 ? 'score-great' : sMatch >= 45 ? 'score-ok' : 'score-poor');

  if (matchRounded === 100) {
    setTimeout(triggerPerfect, 300);
  }

  stopTimer();
  document.getElementById('inputPanel').classList.add('hidden');
  document.getElementById('resultPanel').classList.remove('hidden');
}

/* ─── SHAKE INPUT ─── */
function shakeInput(id, msg) {
  const el = document.getElementById(id);
  const original = el.getAttribute('data-orig-ph') || el.placeholder;
  el.setAttribute('data-orig-ph', original);
  el.style.borderColor = '#ff4757';
  el.style.animation   = 'shake 0.4s ease';
  el.value             = '';
  el.placeholder       = msg;
  setTimeout(() => {
    el.style.borderColor = '';
    el.style.animation   = '';
    el.placeholder       = original;
  }, 2000);
}

/* ─── NEXT MATCH ─── */
function nextMatch() {
  currentIdx++;
  if (currentIdx >= TOTAL_ROUNDS) {
    showFinal();
  } else {
    loadMatch(currentIdx);
  }
}

/* ─── FINAL SCREEN ─── */
function showFinal() {
  showScreen('screen-final');

  const total = Math.round(totalScore);
  document.getElementById('finalTotalScore').textContent = total;
  document.getElementById('finalMaxScore').textContent   = MAX_SCORE;

  const medalDisplay = document.getElementById('medalDisplay');
  const medalIcon    = document.getElementById('medalIcon');
  const medalName    = document.getElementById('medalName');
  const medalDesc    = document.getElementById('medalDesc');

  medalDisplay.className = 'medal-display';

  // Soglie scalate su 500 (era 700)
  if (total >= 390) {
    medalDisplay.classList.add('medal-gold');
    medalIcon.textContent = '🥇';
    medalName.textContent = t('gold');
    medalDesc.textContent = t('descGold');
  } else if (total >= 280) {
    medalDisplay.classList.add('medal-silver');
    medalIcon.textContent = '🥈';
    medalName.textContent = t('silver');
    medalDesc.textContent = t('descSilver');
  } else if (total >= 175) {
    medalDisplay.classList.add('medal-bronze');
    medalIcon.textContent = '🥉';
    medalName.textContent = t('bronze');
    medalDesc.textContent = t('descBronze');
  } else {
    medalDisplay.classList.add('medal-none');
    medalIcon.textContent = '⚽';
    medalName.textContent = t('none');
    medalDesc.textContent = t('descNone');
  }

  renderChart();
}

/* ─── CHART ─── */
function renderChart() {
  if (chartInstance) { chartInstance.destroy(); chartInstance = null; }

  const ctx = document.getElementById('scoreChart').getContext('2d');
  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: scores.map((_, i) => t('chartLabel', i + 1)),
      datasets: [{
        label: 'Punti',
        data: scores,
        backgroundColor: scores.map(s => s >= 75 ? 'rgba(46,204,113,0.75)' : s >= 45 ? 'rgba(0,212,255,0.65)' : 'rgba(255,107,53,0.65)'),
        borderColor:     scores.map(s => s >= 75 ? '#2ecc71' : s >= 45 ? '#00d4ff' : '#ff6b35'),
        borderWidth: 2, borderRadius: 8, borderSkipped: false,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1000, easing: 'easeOutQuart' },
      scales: {
        y: { min: 0, max: 100,
          ticks: { color: 'rgba(255,255,255,0.5)', font: { family: 'Barlow', size: 12 } },
          grid:  { color: 'rgba(255,255,255,0.06)' }
        },
        x: {
          ticks: { color: 'rgba(255,255,255,0.5)', font: { family: 'Barlow', size: 12 } },
          grid:  { display: false }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#161b22',
          borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1,
          titleColor: '#fff', bodyColor: 'rgba(255,255,255,0.6)',
          callbacks: { label: ctx => t('chartTooltip', ctx.parsed.y) }
        }
      }
    }
  });
}

/* ─── PERFECT SCORE ANIMATION — PALLONE IN GOL ─── */
function triggerPerfect() {
  // Wrapper
  const wrap = document.createElement('div');
  wrap.className = 'goal-wrap';

  // Pallone SVG
  wrap.innerHTML = `
    <div class="goal-ball">
      <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="22" r="21" fill="#f0f0f0" stroke="#ccc" stroke-width="1"/>
        <polygon points="22,8 27,14 27,21 22,25 17,21 17,14" fill="#222"/>
        <polygon points="34,18 39,14 42,20 39,27 34,24" fill="#222"/>
        <polygon points="10,18 5,14 2,20 5,27 10,24" fill="#222"/>
        <polygon points="28,32 33,28 36,34 31,38 25,36" fill="#222"/>
        <polygon points="16,32 11,28 8,34 13,38 19,36" fill="#222"/>
      </svg>
    </div>
    <div class="goal-net"></div>
    <div class="goal-text">GOL!</div>
  `;

  document.body.appendChild(wrap);

  // Flash sul numero
  const scoreEl = document.getElementById('scoreMatch');
  scoreEl.classList.add('perfect-flash');

  // Rimuovi tutto dopo l'animazione
  setTimeout(() => {
    wrap.remove();
    scoreEl.classList.remove('perfect-flash');
  }, 3200);
}

/* ─── SHAKE ANIMATION ─── */
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
@keyframes shake {
  0%,100%{transform:translateX(0)}
  20%{transform:translateX(-8px)}
  40%{transform:translateX(8px)}
  60%{transform:translateX(-5px)}
  80%{transform:translateX(5px)}
}`;
document.head.appendChild(shakeStyle);

/* ─── ENTER KEY ─── */
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  if (!document.getElementById('inputPanel').classList.contains('hidden'))   submitGuess();
  else if (!document.getElementById('resultPanel').classList.contains('hidden')) nextMatch();
});