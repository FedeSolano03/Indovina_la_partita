/* ═══════════════════════════════════════════════════════════
   INDOVINA IL RISULTATO — game.js
   ═══════════════════════════════════════════════════════════ */

/* ─── PARTITE DATABASE ─── */
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
    competition: "Mondiali – semifinale",
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
    imageAlt: "Stadio Champions League"
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
    imageAlt: "Champions League 2025 Psg-Inter"
  },
];

/* ─── FALLBACK IMAGES (Unsplash/Pexels – no copyright) ─── */
const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
  "https://images.unsplash.com/photo-1551958219-acbc6d1ead01?w=800&q=80",
  "https://images.unsplash.com/photo-1540747913346-19212a729c62?w=800&q=80",
  "https://images.unsplash.com/photo-1522778034537-20a2486be803?w=800&q=80",
  "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80",
  "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80",
  "https://images.unsplash.com/photo-1607627000458-210e8d2bdb1d?w=800&q=80",
];

/* ─── STATE ─── */
let sessionMatches = [];
let currentIdx = 0;
let scores = [];
let totalScore = 0;
let chartInstance = null;

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
  const target = document.getElementById(id);
  target.classList.add('active');
  window.scrollTo(0, 0);
}

function goHome() {
  showScreen('screen-home');
}

/* ─── START GAME ─── */
function startGame() {
  sessionMatches = shuffle(ALL_MATCHES).slice(0, 7);
  currentIdx = 0;
  scores = [];
  totalScore = 0;

  updateTotalDisplay();
  buildProgressDots();
  showScreen('screen-game');
  loadMatch(currentIdx);
}

function buildProgressDots() {
  const container = document.getElementById('progressDots');
  container.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.id = 'dot-' + i;
    container.appendChild(d);
  }
}

function updateDots(idx) {
  for (let i = 0; i < 7; i++) {
    const d = document.getElementById('dot-' + i);
    d.className = 'dot';
    if (i < idx)  d.classList.add('done');
    if (i === idx) d.classList.add('active');
  }
}

function updateTotalDisplay() {
  document.getElementById('totalScoreDisplay').textContent = Math.round(totalScore);
}

/* ─── LOAD MATCH ─── */
function loadMatch(idx) {
  const m = sessionMatches[idx];

  // reset panels
  document.getElementById('inputPanel').classList.remove('hidden');
  document.getElementById('resultPanel').classList.add('hidden');
  document.getElementById('inputScore').value = '';
  document.getElementById('inputYear').value = '';

  // labels
  document.getElementById('roundLabel').textContent = `Partita ${idx + 1} / 7`;
  document.getElementById('teamHome').textContent = m.homeTeam;
  document.getElementById('teamAway').textContent = m.awayTeam;
  document.getElementById('competitionTag').textContent = m.competition;

  // image with fallback
  const img = document.getElementById('matchImg');
  img.src = '';
  const tryLoad = (src, fallbackIdx) => {
    const test = new Image();
    test.onload = () => { img.src = src; };
    test.onerror = () => {
      if (fallbackIdx < FALLBACK_IMAGES.length) {
        tryLoad(FALLBACK_IMAGES[fallbackIdx], fallbackIdx + 1);
      }
    };
    test.src = src;
  };
  tryLoad(m.image, 0);

  // re-animate card
  const card = document.getElementById('matchCard');
  card.style.animation = 'none';
  card.offsetHeight; // reflow
  card.style.animation = '';

  updateDots(idx);
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
  // result score
  const diffHome = Math.abs(m.scoreHome - userScore[0]);
  const diffAway = Math.abs(m.scoreAway - userScore[1]);
  const errTotal = diffHome + diffAway;
  const sResult = Math.max(0, 100 - errTotal * 20);

  // year score
  const diffYear = Math.abs(m.year - userYear);
  const sYear = Math.max(0, 100 - diffYear * 5);

  const sMatch = (sResult + sYear) / 2;
  return { sResult, sYear, sMatch };
}

/* ─── SUBMIT GUESS ─── */
function submitGuess() {
  const scoreRaw = document.getElementById('inputScore').value;
  const yearRaw  = parseInt(document.getElementById('inputYear').value);

  // Validation
  const parsed = parseScore(scoreRaw);
  if (!parsed) {
    shakeInput('inputScore', 'Formato non valido — usa es. 2-1');
    return;
  }
  if (isNaN(yearRaw) || yearRaw < 1950 || yearRaw > 2025) {
    shakeInput('inputYear', 'Anno non valido');
    return;
  }

  const m = sessionMatches[currentIdx];
  const { sResult, sYear, sMatch } = calcMatchScore(m, parsed, yearRaw);

  scores.push(Math.round(sMatch));
  totalScore += sMatch;

  updateTotalDisplay();

  // Show results
  document.getElementById('realScore').textContent = `${m.scoreHome} - ${m.scoreAway}`;
  document.getElementById('realYear').textContent = m.year;
  document.getElementById('scoreResult').textContent = Math.round(sResult);
  document.getElementById('scoreYear').textContent = Math.round(sYear);
  document.getElementById('scoreMatch').textContent = Math.round(sMatch);

  document.getElementById('inputPanel').classList.add('hidden');
  document.getElementById('resultPanel').classList.remove('hidden');
}

function shakeInput(id, msg) {
  const el = document.getElementById(id);
  const original = el.getAttribute('data-orig-ph') || el.placeholder;
  el.setAttribute('data-orig-ph', original);
  el.style.borderColor = '#ff4757';
  el.style.animation = 'shake 0.4s ease';
  el.value = '';
  el.placeholder = msg;
  setTimeout(() => {
    el.style.borderColor = '';
    el.style.animation = '';
    el.placeholder = original;
  }, 2000);
}

/* ─── NEXT MATCH ─── */
function nextMatch() {
  currentIdx++;
  if (currentIdx >= 7) {
    showFinal();
  } else {
    loadMatch(currentIdx);
  }
}

/* ─── FINAL SCREEN ─── */
function showFinal() {
  showScreen('screen-final');

  // Medal
  const total = Math.round(totalScore);
  document.getElementById('finalTotalScore').textContent = total;

  const medalDisplay = document.getElementById('medalDisplay');
  const medalIcon    = document.getElementById('medalIcon');
  const medalName    = document.getElementById('medalName');
  const medalDesc    = document.getElementById('medalDesc');

  medalDisplay.className = 'medal-display';

  if (total >= 550) {
    medalDisplay.classList.add('medal-gold');
    medalIcon.textContent = '🥇';
    medalName.textContent = 'ORO';
    medalDesc.textContent = 'Sei una leggenda del calcio!';
  } else if (total >= 400) {
    medalDisplay.classList.add('medal-silver');
    medalIcon.textContent = '🥈';
    medalName.textContent = 'ARGENTO';
    medalDesc.textContent = 'Ottima memoria calcistica!';
  } else if (total >= 250) {
    medalDisplay.classList.add('medal-bronze');
    medalIcon.textContent = '🥉';
    medalName.textContent = 'BRONZO';
    medalDesc.textContent = 'Buon risultato, continua ad allenarti!';
  } else {
    medalDisplay.classList.add('medal-none');
    medalIcon.textContent = '⚽';
    medalName.textContent = 'NESSUNA MEDAGLIA';
    medalDesc.textContent = 'Ritenta, ci vorrà più fortuna!';
  }

  // Chart
  renderChart();
}

function renderChart() {
  if (chartInstance) { chartInstance.destroy(); chartInstance = null; }

  const labels = scores.map((_, i) => `Partita ${i + 1}`);
  const ctx = document.getElementById('scoreChart').getContext('2d');

  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Punti',
        data: scores,
        backgroundColor: scores.map(s =>
          s >= 75 ? 'rgba(46,204,113,0.75)' :
          s >= 45 ? 'rgba(0,212,255,0.65)' :
                    'rgba(255,107,53,0.65)'
        ),
        borderColor: scores.map(s =>
          s >= 75 ? '#2ecc71' :
          s >= 45 ? '#00d4ff' :
                    '#ff6b35'
        ),
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1000, easing: 'easeOutQuart' },
      scales: {
        y: {
          min: 0, max: 100,
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
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          titleColor: '#fff',
          bodyColor: 'rgba(255,255,255,0.6)',
          callbacks: {
            label: ctx => ` ${ctx.parsed.y} / 100 punti`
          }
        }
      }
    }
  });
}

/* ─── CSS SHAKE ANIMATION (injected) ─── */
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
@keyframes shake {
  0%,100%{transform:translateX(0)}
  20%{transform:translateX(-8px)}
  40%{transform:translateX(8px)}
  60%{transform:translateX(-5px)}
  80%{transform:translateX(5px)}
}
`;
document.head.appendChild(shakeStyle);

/* ─── ENTER KEY SUPPORT ─── */
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    if (!document.getElementById('inputPanel').classList.contains('hidden')) {
      submitGuess();
    } else if (!document.getElementById('resultPanel').classList.contains('hidden')) {
      nextMatch();
    }
  }
});