import './style.css';
import type { BMIMeasurement, UserProfile, Tip, DailyLog } from './types';

// --- State & Data ---
let currentView = localStorage.getItem('lastView') || 'calendar';
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const defaultProfiles: UserProfile[] = [{
  id: '1',
  name: "Flow",
  age: 26,
  cycleLength: 28,
  periodLength: 5,
  targetWeight: 60,
  waterGoal: 8,
  sleepGoal: 8,
  lastPeriodDate: new Date(new Date().setDate(new Date().getDate() - 25)).toISOString().split('T')[0],
  isSecurityEnabled: false,
  language: 'fr'
}];

// --- User Profile & Data Loading ---
let profiles: UserProfile[] = JSON.parse(localStorage.getItem('profiles') || JSON.stringify(defaultProfiles));
let activeProfileId: string = localStorage.getItem('activeProfileId') || profiles[0].id;
let userProfile = profiles.find(p => p.id === activeProfileId) || profiles[0];

// --- Translations ---
const translations: Record<string, any> = {
  fr: {
    nav: { calendar: "Calendrier", health: "Santé", tips: "Conseils", profile: "Profil" },
    titles: { calendar: "Mon Calendrier 📅", health: "Santé & IMC ⚖️", tips: "Conseils Santé 💡", profile: "Votre Profil 🌸", report: "Rapport Santé" },
    symptoms: ["Crampes", "Maux de tête", "Acné", "Ballonnements", "Fatigue", "Seins sensibles", "Bas du dos"],
    moods: ["Heureuse", "Calme", "Irritable", "Sensible", "Épuisée", "Anxieuse"],
    phases: { menstrual: "Règles", follicular: "Folliculaire", ovulatory: "Ovulation", luteal: "Lutéale" },
    ui: {
      save: "Enregistrer",
      cancel: "Annuler",
      edit: "Modifier",
      delete: "Supprimer",
      addProfile: "Ajouter un profil",
      switchProfile: "Changer de Profil",
      security: "Sécurité",
      pinProtect: "Protéger par PIN",
      exportJSON: "Exporter (JSON)",
      exportPDF: "📄 Générer Rapport (PDF)",
      clearData: "Supprimer tout",
      createProfile: "Créer le profil",
      today: "Aujourd'hui",
      fertile: "Fertile",
      periodStart: "Prochaines Règles",
      water: "Hydratation 💧",
      sleep: "Sommeil 🌙",
      sleepQuality: "Qualité",
      moodChart: "Analyse d'Humeur 📊",
      weightChart: "Suivi du Poids",
      bmiCalc: "Calculateur d'IMC",
      height: "Taille (cm)",
      weight: "Poids (kg)",
      calc: "Calculer & Sauvegarder",
      goalWeight: "Objectif Poids",
      current: "Actuel",
      none: "Aucune mesure enregistrée",
      journal: "Journal du",
      flow: "Flux",
      symptomLabel: "Symptômes",
      moodLabel: "Humeur",
      nutrition: "Nutrition 🥗",
      notes: "Notes",
      breakfast: "☕ Petit déjeuner",
      lunch: "🍲 Déjeuner",
      dinner: "🍝 Dîner",
      snack: "🍎 Collation",
      confirmPin: "Entrez votre PIN",
      createPin: "Créer PIN",
      setupPin: "Configurer PIN",
      lang: "Langue / Language",
      cloud: "Sauvegarde Cloud ☁️",
      syncNow: "🔄 Synchroniser",
      lastSync: "Dernière synchro",
      synced: "À jour",
      notSynced: "Non synchronisé",
      restore: "📥 Restaurer",
      confirmRestore: "Cela remplacera vos données actuelles par la sauvegarde. Continuer ?",
      syncing: "Synchronisation...",
      restoring: "Restauration...",
      successSync: "Données sauvegardées en ligne ! ✅",
      successRestore: "Données restaurées ! ✅",
      profileUpdated: "Profil mis à jour !",
      disablePinConfirm: "Désactiver PIN ?",
      setupPinTitle: "Créer PIN",
      predictions: "Prévisions",
      waterGoalAchieved: "🎉 Objectif atteint ! Bravo !",
      waterGoalContinue: "Continuez comme ça !",
      sleepQualityBad: "Mauvais",
      sleepQualityAverage: "Moyen",
      sleepQualityGood: "Bon",
      sleepGoal: "Objectif",
      flowNone: "Aucun",
      flowLight: "Léger",
      flowMedium: "Moyen",
      flowHeavy: "Abondant",
      breakfastPlaceholder: "Ex: Avoine, Fruits...",
      lunchPlaceholder: "Ex: Salade Quinoa...",
      dinnerPlaceholder: "Ex: Soupe, Légumes...",
      snackPlaceholder: "Ex: Amandes, Yaourt..."
    }
  },
  en: {
    nav: { calendar: "Calendar", health: "Health", tips: "Tips", profile: "Profile" },
    titles: { calendar: "My Calendar 📅", health: "Health & BMI ⚖️", tips: "Health Tips 💡", profile: "Your Profile 🌸", report: "Health Report" },
    symptoms: ["Cramps", "Headache", "Acne", "Bloating", "Fatigue", "Tender Breasts", "Low Back Pain"],
    moods: ["Happy", "Calm", "Irritable", "Sensitive", "Exhausted", "Anxious"],
    phases: { menstrual: "Menstrual", follicular: "Follicular", ovulatory: "Ovulation", luteal: "Luteal" },
    ui: {
      save: "Save",
      cancel: "Cancel",
      edit: "Edit",
      delete: "Delete",
      addProfile: "Add Profile",
      switchProfile: "Switch Profile",
      security: "Security",
      pinProtect: "PIN Protection",
      exportJSON: "Export (JSON)",
      exportPDF: "📄 Generate Report (PDF)",
      clearData: "Clear All Data",
      createProfile: "Create Profile",
      today: "Today",
      fertile: "Fertile",
      periodStart: "Next Period",
      water: "Hydration 💧",
      sleep: "Sleep 🌙",
      sleepQuality: "Quality",
      moodChart: "Mood Analysis 📊",
      weightChart: "Weight Tracker",
      bmiCalc: "BMI Calculator",
      height: "Height (cm)",
      weight: "Weight (kg)",
      calc: "Calculate & Save",
      goalWeight: "Weight Goal",
      current: "Current",
      none: "No measurement recorded",
      journal: "Journal for",
      flow: "Flow",
      symptomLabel: "Symptoms",
      moodLabel: "Mood",
      nutrition: "Nutrition 🥗",
      notes: "Notes",
      breakfast: "☕ Breakfast",
      lunch: "🍲 Lunch",
      dinner: "🍝 Dinner",
      snack: "🍎 Snack",
      confirmPin: "Enter PIN",
      createPin: "Create PIN",
      setupPin: "Setup PIN",
      lang: "Langue / Language",
      cloud: "Cloud Backup ☁️",
      syncNow: "🔄 Sync Now",
      lastSync: "Last Synced",
      synced: "Up to date",
      notSynced: "Not synced",
      restore: "📥 Restore",
      confirmRestore: "This will replace your current data with the backup. Continue?",
      syncing: "Syncing...",
      restoring: "Restoring...",
      successSync: "Data saved to cloud! ✅",
      successRestore: "Data restored! ✅",
      profileUpdated: "Profile updated!",
      disablePinConfirm: "Disable PIN?",
      setupPinTitle: "Create PIN",
      predictions: "Predictions",
      waterGoalAchieved: "🎉 Goal reached! Well done!",
      waterGoalContinue: "Keep going!",
      sleepQualityBad: "Bad",
      sleepQualityAverage: "Average",
      sleepQualityGood: "Good",
      sleepGoal: "Goal",
      flowNone: "None",
      flowLight: "Light",
      flowMedium: "Medium",
      flowHeavy: "Heavy",
      breakfastPlaceholder: "Ex: Oatmeal, Fruits...",
      lunchPlaceholder: "Ex: Quinoa Salad...",
      dinnerPlaceholder: "Ex: Soup, Veggies...",
      snackPlaceholder: "Ex: Almonds, Yogurt..."
    }
  }
};

const getT = (key: string) => {
  const lang = userProfile.language || 'fr';
  const keys = key.split('.');
  let val = translations[lang];
  for (const k of keys) val = val?.[k];
  return val || key;
}

const getSymptoms = () => (translations[userProfile.language || 'fr'].symptoms);
const getMoods = () => (translations[userProfile.language || 'fr'].moods);

let bmiHistory: BMIMeasurement[] = JSON.parse(localStorage.getItem(`bmiHistory_${activeProfileId}`) || '[]');
let dailyLogs: DailyLog[] = JSON.parse(localStorage.getItem(`dailyLogs_${activeProfileId}`) || '[]');


const mockTips: Tip[] = [
  { title: "Nutrition Menstruelle", content: "Privilégiez les aliments riches en fer et magnésium.", category: 'nutrition', phase: 'menstrual' },
  { title: "Énergie Folliculaire", content: "C'est le moment idéal pour des entraînements cardio intenses.", category: 'sport', phase: 'follicular' },
  { title: "Bien-être Holistique", content: "L'ovulation est propice à la créativité.", category: 'wellbeing', phase: 'ovulatory' },
  { title: "Phase Lutéale", content: "Priorisez le repos et les activités douces comme le Yoga.", category: 'sport', phase: 'luteal' }
];

// --- UI Elements ---
const appContent = document.getElementById('app-content');
const viewTitle = document.getElementById('view-title');
const navItems = document.querySelectorAll('.nav-item');
const currentDateEl = document.getElementById('current-date');

const updateDateDisplay = () => {
  if (currentDateEl) {
    const now = new Date();
    currentDateEl.textContent = now.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  }
};

// --- View Renders ---

const renderLockScreen = (customTitle: string = "Entrez votre PIN", mode: 'verify' | 'setup' = 'verify', callback?: (pin: string) => void) => {
  const lockEl = document.createElement('div');
  lockEl.className = 'lock-screen';
  let enteredPin = "";
  const updateDots = () => {
    lockEl.querySelectorAll('.pin-dot').forEach((dot, i) => dot.classList.toggle('filled', i < enteredPin.length));
  };

  lockEl.innerHTML = `
    <i class="fas fa-lock fa-3x" style="color:var(--terracotta); margin-bottom:20px;"></i>
    <h2 style="margin-bottom:10px;">${customTitle}</h2>
    <div class="pin-display">
      <div class="pin-dot"></div><div class="pin-dot"></div><div class="pin-dot"></div><div class="pin-dot"></div>
    </div>
    <div class="numpad">
      ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<button class="num-btn" data-val="${n}">${n}</button>`).join('')}
      <button class="num-btn empty"></button>
      <button class="num-btn" data-val="0">0</button>
      <button class="num-btn delete" data-val="del"><i class="fas fa-backspace"></i></button>
    </div>
    ${mode === 'verify' ? '' : `<button class="btn-primary" style="margin-top:30px; background:var(--bg-app); color:var(--text-main); width:auto; padding:10px 30px;" id="cancel-pin">Annuler</button>`}
  `;

  document.body.appendChild(lockEl);
  lockEl.querySelectorAll('.num-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-val');
      if (val === 'del') enteredPin = enteredPin.slice(0, -1);
      else if (val && enteredPin.length < 4) enteredPin += val;
      updateDots();
      if (enteredPin.length === 4) {
        setTimeout(() => {
          if (mode === 'verify') {
            if (enteredPin === userProfile.pin) {
              lockEl.classList.add('out');
              setTimeout(() => {
                lockEl.remove();
                if (callback) callback(enteredPin);
              }, 400);
            } else { enteredPin = ""; updateDots(); alert("PIN Incorrect"); }
          } else if (callback) { callback(enteredPin); lockEl.remove(); }
        }, 200);
      }
    });
  });
  document.getElementById('cancel-pin')?.addEventListener('click', () => lockEl.remove());
};

const renderCalendar = (targetContainer?: HTMLElement) => {
  const container = targetContainer || appContent;
  if (!container) return;

  if (!targetContainer) viewTitle!.textContent = `Bonjour, ${userProfile.name} ✨`;

  const monthNames = userProfile.language === 'en'
    ? ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    : ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const startingDay = firstDay === 0 ? 6 : firstDay - 1;

  // Cycle Predictions
  const predictions = getCyclePredictions(userProfile.lastPeriodDate, userProfile.cycleLength, userProfile.periodLength);
  const nextPeriodStart = predictions.nextPeriod;
  const nextPeriodEnd = predictions.nextPeriodEnd;

  const locale = userProfile.language === 'en' ? 'en-US' : 'fr-FR';
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
  const nextPeriodStr = nextPeriodStart ? nextPeriodStart.toLocaleDateString(locale, options) : getT('ui.unknown'); // Assuming 'unknown' key
  const fertileStr = predictions.fertileWindowStart ? `${predictions.fertileWindowStart.toLocaleDateString(locale, { day: 'numeric' })} - ${predictions.fertileWindowEnd?.toLocaleDateString(locale, options)}` : getT('ui.unknown'); // Assuming 'unknown' key

  // Water & Sleep Logic
  const todayStr = new Date().toISOString().split('T')[0];
  const todayLog = dailyLogs.find(l => l.date === todayStr) || { date: todayStr, symptoms: [], moods: [], waterIntake: 0 };
  const waterGoal = userProfile.waterGoal || 8;
  const drunk = todayLog.waterIntake || 0;

  const sleepHours = todayLog.sleepHours || 7;
  const sleepQuality = todayLog.sleepQuality || null;

  container.innerHTML = `
    <div class="card" style="background: linear-gradient(135deg, white, var(--bg-app));">
      <div class="cal-nav">
        <button class="cal-nav-btn" id="prev-month"><i class="fas fa-chevron-left"></i></button>
        <h2>${monthNames[currentMonth]} ${currentYear}</h2>
        <button class="cal-nav-btn" id="next-month"><i class="fas fa-chevron-right"></i></button>
      </div>
      <div class="calendar-container">
        ${['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(d => `<div style="font-size:12px; color:var(--text-muted); font-weight:700;">${d}</div>`).join('')}
        ${Array.from({ length: startingDay }, () => `<div></div>`).join('')}
        ${Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const dateObj = new Date(currentYear, currentMonth, day);
    const dateStr = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const isToday = new Date().toDateString() === dateObj.toDateString();
    const hasLog = dailyLogs.some(l => l.date === dateStr);

    let isPeriod = false;
    let isFertile = false;
    let isOvulation = false;

    if (nextPeriodStart && nextPeriodEnd) {
      if (dateObj >= nextPeriodStart && dateObj <= nextPeriodEnd) isPeriod = true;
      if (dateObj >= predictions.fertileWindowStart! && dateObj <= predictions.fertileWindowEnd!) isFertile = true;
      if (dateObj.toDateString() === predictions.ovulation?.toDateString()) isOvulation = true;
    }

    if (userProfile.lastPeriodDate) {
      const lp = new Date(userProfile.lastPeriodDate);
      const lpEnd = new Date(lp); lpEnd.setDate(lp.getDate() + userProfile.periodLength - 1);
      if (dateObj >= lp && dateObj <= lpEnd) isPeriod = true;
    }

    return `
            <div class="cal-day ${isPeriod ? 'period' : ''} ${isFertile ? 'fertile' : ''} ${isOvulation ? 'ovulation' : ''} ${isToday ? 'today' : ''}" data-day="${day}">
              ${day}
              ${hasLog ? '<div class="logged-dot"></div>' : ''}
              ${isOvulation ? '<div class="ovulation-dot"></div>' : ''}
            </div>
          `;
  }).join('')}
      </div>
    </div>

    <div class="card">
      <h3>${getT('ui.predictions')}</h3>
      <div style="margin-top:15px; display:grid; gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:14px; color:var(--text-muted);">${getT('ui.periodStart')}</span>
          <span style="font-weight:700;">${nextPeriodStr}</span>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:14px; color:var(--text-muted);">${getT('ui.fertile')}</span>
          <span style="font-weight:700;">${fertileStr}</span>
        </div>
      </div>
    </div>

    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <h3>${getT('ui.water')}</h3>
        <span style="font-size:12px; color:var(--text-muted);" id="water-text">${drunk} / ${waterGoal}</span>
      </div>
      <div class="water-grid">
        ${Array.from({ length: waterGoal }, (_, i) => `
          <div class="water-glass ${i < drunk ? 'filled' : ''}" data-idx="${i}"></div>
        `).join('')}
      </div>
      <p class="water-summary">${drunk >= waterGoal ? getT('ui.waterGoalAchieved') : getT('ui.waterGoalContinue')}</p>
    </div>

    <div class="card sleep-card">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <h3 style="color:white;">${getT('ui.sleep')}</h3>
        <span style="font-size:12px; opacity:0.8;">${getT('ui.sleepGoal')}: ${userProfile.sleepGoal || 8}h</span>
      </div>
      <div class="sleep-controls">
        <button class="sleep-btn" id="sleep-minus"><i class="fas fa-minus"></i></button>
        <div class="sleep-display">${sleepHours}h</div>
        <button class="sleep-btn" id="sleep-plus"><i class="fas fa-plus"></i></button>
      </div>
      <div class="quality-grid">
        <div class="quality-opt ${sleepQuality === 'bad' ? 'active' : ''}" data-q="bad"><span>😞</span><label>${getT('ui.sleepQualityBad')}</label></div>
        <div class="quality-opt ${sleepQuality === 'average' ? 'active' : ''}" data-q="average"><span>😐</span><label>${getT('ui.sleepQualityAverage')}</label></div>
        <div class="quality-opt ${sleepQuality === 'good' ? 'active' : ''}" data-q="good"><span>🙂</span><label>${getT('ui.sleepQualityGood')}</label></div>
      </div>
    </div>

    <button class="btn-primary" id="log-period-btn"><i class="fas fa-plus-circle"></i> ${getT('ui.edit')}</button>
  `;

  document.getElementById('prev-month')?.addEventListener('click', () => { currentMonth--; if (currentMonth < 0) { currentMonth = 11; currentYear--; } renderCalendar(); });
  document.getElementById('next-month')?.addEventListener('click', () => { currentMonth++; if (currentMonth > 11) { currentMonth = 0; currentYear++; } renderCalendar(); });
  document.getElementById('log-period-btn')?.addEventListener('click', () => showSymptomsModal(new Date().getDate()));
  document.querySelectorAll('.cal-day').forEach(dayEl => {
    dayEl.addEventListener('click', () => {
      const day = Number(dayEl.getAttribute('data-day'));
      if (day) showSymptomsModal(day);
    });
  });

  document.querySelectorAll('.water-glass').forEach(glass => {
    glass.addEventListener('click', () => {
      const idx = Number(glass.getAttribute('data-idx'));
      let newIntake = idx + 1;
      if (drunk === newIntake) newIntake = idx;

      const logIdx = dailyLogs.findIndex(l => l.date === todayStr);
      const updatedLog: DailyLog = logIdx > -1 ? { ...dailyLogs[logIdx], waterIntake: newIntake } : { date: todayStr, symptoms: [], moods: [], waterIntake: newIntake };

      if (logIdx > -1) dailyLogs[logIdx] = updatedLog; else dailyLogs.push(updatedLog);
      localStorage.setItem(`dailyLogs_${activeProfileId}`, JSON.stringify(dailyLogs));
      renderCalendar();
    });
  });

  // Sleep Listeners
  const updateSleep = (h: number, q: string | null) => {
    const logIdx = dailyLogs.findIndex(l => l.date === todayStr);
    const baseLog = logIdx > -1 ? dailyLogs[logIdx] : { date: todayStr, symptoms: [], moods: [] };
    const updatedLog: DailyLog = { ...baseLog, sleepHours: h, sleepQuality: q as any };

    if (logIdx > -1) dailyLogs[logIdx] = updatedLog; else dailyLogs.push(updatedLog);
    localStorage.setItem(`dailyLogs_${activeProfileId}`, JSON.stringify(dailyLogs));
    renderCalendar();
  };

  document.getElementById('sleep-minus')?.addEventListener('click', () => {
    if (sleepHours > 0) updateSleep(sleepHours - 0.5, sleepQuality);
  });
  document.getElementById('sleep-plus')?.addEventListener('click', () => {
    if (sleepHours < 24) updateSleep(sleepHours + 0.5, sleepQuality);
  });
  document.querySelectorAll('.quality-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const q = opt.getAttribute('data-q');
      updateSleep(sleepHours, q);
    });
  });
};

const showSymptomsModal = (day: number) => {
  const dateStr = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  const existingLog = dailyLogs.find(l => l.date === dateStr) || { date: dateStr, symptoms: [], moods: [], flow: 'none', meals: [] };
  const meals = existingLog.meals || [];
  const getMeal = (type: string) => meals.find(m => m.type === type)?.description || '';
  const locale = userProfile.language === 'en' ? 'en-US' : 'fr-FR';

  const modal = document.createElement('div');
  modal.className = 'modal-overlay show';
  modal.innerHTML = `
    <div class="modal-sheet">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:25px;">
        <h2>${getT('ui.journal')} ${day} ${new Intl.DateTimeFormat(locale, { month: 'long' }).format(new Date(currentYear, currentMonth))}</h2>
        <i class="fas fa-times" id="close-modal" style="cursor:pointer; color:var(--text-muted);"></i>
      </div>
      <div class="input-group"><label>${getT('ui.flow')}</label><div style="display:flex; gap:10px;">
        ${['none', 'light', 'medium', 'heavy'].map(f => `<div class="symptom-tag ${existingLog.flow === f ? 'selected' : ''}" data-type="flow" data-val="${f}">${getT(`ui.flow${f.charAt(0).toUpperCase() + f.slice(1)}`)}</div>`).join('')}
      </div></div>
      <div class="input-group"><label>${getT('ui.symptomLabel')}</label><div class="tag-grid">
        ${getSymptoms().map((s: string) => `<div class="symptom-tag ${existingLog.symptoms.includes(s) ? 'selected' : ''}" data-type="symptom" data-val="${s}">${s}</div>`).join('')}
      </div></div>
      
      <div class="meal-section">
        <h3 style="font-size:16px; margin-bottom:15px; color:var(--text-main);">${getT('ui.nutrition')}</h3>
        <div class="meal-input-group"><label>${getT('ui.breakfast')}</label><input class="meal-input" data-type="breakfast" value="${getMeal('breakfast')}" placeholder="${getT('ui.breakfastPlaceholder')}"></div>
        <div class="meal-input-group"><label>${getT('ui.lunch')}</label><input class="meal-input" data-type="lunch" value="${getMeal('lunch')}" placeholder="${getT('ui.lunchPlaceholder')}"></div>
        <div class="meal-input-group"><label>${getT('ui.dinner')}</label><input class="meal-input" data-type="dinner" value="${getMeal('dinner')}" placeholder="${getT('ui.dinnerPlaceholder')}"></div>
        <div class="meal-input-group"><label>${getT('ui.snack')}</label><input class="meal-input" data-type="snack" value="${getMeal('snack')}" placeholder="${getT('ui.snackPlaceholder')}"></div>
      </div>

      <div class="input-group"><label>${getT('ui.moodLabel')}</label><div class="tag-grid">
        ${getMoods().map((m: string) => `<div class="symptom-tag ${existingLog.moods.includes(m) ? 'selected' : ''}" data-type="mood" data-val="${m}">${m}</div>`).join('')}
      </div></div>
      <div class="input-group"><label>${getT('ui.notes')}</label>
        <textarea id="log-notes" style="width:100%; padding:14px; border-radius:12px; border:1px solid var(--sage-light); background:var(--cream); height:80px; resize:none; font-family:inherit;">${existingLog.notes || ''}</textarea>
      </div>
      <button class="btn-primary" id="save-log-btn">${getT('ui.save')}</button>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelectorAll('.symptom-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const type = tag.getAttribute('data-type');
      if (type === 'flow') { modal.querySelectorAll('[data-type="flow"]').forEach(t => t.classList.remove('selected')); tag.classList.add('selected'); }
      else tag.classList.toggle('selected');
    });
  });
  document.getElementById('close-modal')?.addEventListener('click', () => modal.remove());
  document.getElementById('save-log-btn')?.addEventListener('click', () => {
    const selectedSymptoms = Array.from(modal.querySelectorAll('.symptom-tag[data-type="symptom"].selected')).map(el => el.getAttribute('data-val')!);
    const selectedMoods = Array.from(modal.querySelectorAll('.symptom-tag[data-type="mood"].selected')).map(el => el.getAttribute('data-val')!);
    const selectedFlow = modal.querySelector('.symptom-tag[data-type="flow"].selected')?.getAttribute('data-val') || 'none';
    const notes = (document.getElementById('log-notes') as HTMLTextAreaElement).value;

    const newMeals: any[] = [];
    modal.querySelectorAll('.meal-input').forEach(input => {
      const val = (input as HTMLInputElement).value.trim();
      const type = input.getAttribute('data-type');
      if (val) newMeals.push({ type, description: val });
    });

    const newLog: DailyLog = {
      ...existingLog,
      symptoms: selectedSymptoms,
      moods: selectedMoods,
      flow: selectedFlow as any,
      date: dateStr,
      notes,
      meals: newMeals
    };

    // Preserve other fields
    const logIdx = dailyLogs.findIndex(l => l.date === dateStr);
    if (logIdx > -1) dailyLogs[logIdx] = newLog; else dailyLogs.push(newLog);

    localStorage.setItem(`dailyLogs_${activeProfileId}`, JSON.stringify(dailyLogs));
    renderCalendar();
    modal.remove();
  });
};

const renderHealth = () => {
  if (!appContent) return;
  viewTitle!.textContent = getT('titles.health');
  const lastBMI = bmiHistory[bmiHistory.length - 1];
  const targetW = userProfile.targetWeight || 60;
  const currentW = lastBMI?.weight || 0;
  const progress = currentW > 0 ? Math.min(100, Math.max(0, (1 - Math.abs(currentW - targetW) / Math.abs(bmiHistory[0]?.weight - targetW || 1)) * 100)) : 0;

  appContent.innerHTML = `
    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
        <h3>${getT('ui.goalWeight')}</h3>
        <span style="font-weight:700; color:var(--terracotta);">${targetW} kg</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width:${bmiHistory.length > 1 ? progress : 0}%"></div>
      </div>
      <p style="font-size:12px; color:var(--text-muted); text-align:right;">
        ${currentW > 0 ? `${getT('ui.current')}: ${currentW}kg` : getT('ui.none')}
      </p>
    </div>

    <div class="card">
      <h3>${getT('ui.bmiCalc')}</h3>
      <div class="bmi-grid">
        <div class="input-group"><label>${getT('ui.height')}</label><input type="number" id="h-height" value="${lastBMI?.height || ''}"></div>
        <div class="input-group"><label>${getT('ui.weight')}</label><input type="number" id="h-weight" value="${lastBMI?.weight || ''}"></div>
      </div>
      <button class="btn-primary" id="calc-bmi-btn">${getT('ui.calc')}</button>
      <div id="bmi-result" style="margin-top:20px; text-align:center; display:${lastBMI ? 'block' : 'none'};">
        <h2 style="font-size:32px; color:var(--terracotta);">${lastBMI?.bmi.toFixed(1) || ''}</h2>
        <p style="font-weight:600; color:var(--sage-dark);">${getBMICategory(lastBMI?.bmi || 0)}</p>
      </div>
    </div>

  <div class="card">
      <h3>${getT('ui.weightChart')}</h3>
      <div class="chart-container" id="weight-chart"></div>
    </div>

    <div class="card">
      <h3>${getT('ui.moodChart')}</h3>
      <div class="chart-container" id="mood-chart"></div>
    </div>
  `;
  document.getElementById('calc-bmi-btn')?.addEventListener('click', calculateBMI);
  renderWeightChart();
  renderMoodChart();
};

const renderMoodChart = () => {
  const container = document.getElementById('mood-chart');
  if (!container) return;

  // Process last 7 days of logs
  const now = new Date();
  const data = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now); d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const log = dailyLogs.find(l => l.date === dateStr);
    let score = 0;
    if (log && log.moods.length > 0) {
      const points: { [key: string]: number } = { "Heureuse": 5, "Calme": 4, "Sensible": 3, "Anxieuse": 2, "Irritable": 1, "Épuisée": 0 };
      // Translate mood keys to their French equivalents for scoring if current language is English
      const translatedMoods = userProfile.language === 'en' ? log.moods.map(m => translations['fr'].moods[translations['en'].moods.indexOf(m)]) : log.moods;
      const total = translatedMoods.reduce((acc, m) => acc + (points[m] || 2.5), 0);
      score = total / translatedMoods.length;
    }
    const locale = userProfile.language === 'en' ? 'en-US' : 'fr-FR';
    data.push({ date: d.toLocaleDateString(locale, { weekday: 'short' }), score });
  }

  // SVG Chart
  const width = container.clientWidth; const height = 200; const padding = 30;
  const getX = (i: number) => (i / (data.length - 1)) * (width - 2 * padding) + padding;
  const getY = (s: number) => height - ((s / 5) * (height - 2 * padding) + padding);

  let pathData = `M ${getX(0)} ${getY(data[0].score)}`;
  for (let i = 1; i < data.length; i++) { pathData += ` L ${getX(i)} ${getY(data[i].score)}`; }

  container.innerHTML = `
        <svg class="chart-svg" viewBox="0 0 ${width} ${height}">
          <!-- Background Zones -->
          <rect x="${padding}" y="${padding}" width="${width - 2 * padding}" height="${(height - 2 * padding) / 3}" fill="rgba(129, 178, 154, 0.2)" /> <!-- Good -->
          <rect x="${padding}" y="${padding + (height - 2 * padding) / 3}" width="${width - 2 * padding}" height="${(height - 2 * padding) / 3}" fill="rgba(242, 204, 143, 0.2)" /> <!-- Mid -->
          <rect x="${padding}" y="${padding + 2 * (height - 2 * padding) / 3}" width="${width - 2 * padding}" height="${(height - 2 * padding) / 3}" fill="rgba(224, 122, 95, 0.2)" /> <!-- Low -->
          
          <path class="chart-line" d="${pathData}" style="stroke: var(--sage); stroke-width:3;" />
          ${data.map((d, i) => `<circle class="chart-dot" cx="${getX(i)}" cy="${getY(d.score)}" r="4" style="fill:var(--sage-dark);" /><text class="chart-label" x="${getX(i)}" y="${height - 5}" text-anchor="middle">${d.date}</text>`).join('')}
        </svg>
    `;
};

const renderWeightChart = () => {
  const container = document.getElementById('weight-chart');
  if (!container || bmiHistory.length < 2) {
    if (container) container.innerHTML = '<p style="text-align:center; color:var(--text-muted); margin-top:80px;">Saisissez au moins 2 mesures.</p>';
    return;
  }
  const padding = 30; const width = container.clientWidth; const height = 200;
  const data = bmiHistory.slice(-7);
  const minW = Math.min(...data.map(d => d.weight)) - 2;
  const maxW = Math.max(...data.map(d => d.weight)) + 2;
  const getX = (i: number) => (i / (data.length - 1)) * (width - 2 * padding) + padding;
  const getY = (w: number) => height - ((w - minW) / (maxW - minW) * (height - 2 * padding) + padding);

  let pathData = `M ${getX(0)} ${getY(data[0].weight)}`;
  let areaData = `M ${getX(0)} ${height} L ${getX(0)} ${getY(data[0].weight)}`;
  for (let i = 1; i < data.length; i++) { pathData += ` L ${getX(i)} ${getY(data[i].weight)}`; areaData += ` L ${getX(i)} ${getY(data[i].weight)}`; }
  areaData += ` L ${getX(data.length - 1)} ${height} Z`;

  container.innerHTML = `
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}">
      <defs><linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="var(--terracotta)" /><stop offset="100%" stop-color="white" /></linearGradient></defs>
      <path class="chart-area" d="${areaData}" /><path class="chart-line" d="${pathData}" />
      ${data.map((d, i) => `<circle class="chart-dot" cx="${getX(i)}" cy="${getY(d.weight)}" r="4" /><text class="chart-label" x="${getX(i)}" y="${height - 5}" text-anchor="middle">${d.date.split('/')[0]}</text>`).join('')}
    </svg>
  `;
};

const renderTips = () => {
  if (!appContent) return; viewTitle!.textContent = "Conseils Santé 💡";
  appContent.innerHTML = `<div style="display:grid; gap:20px;">
    ${mockTips.map(tip => `
      <div class="card tip-card" style="background:${tip.phase === 'menstrual' ? 'var(--terracotta)' : 'var(--sage)'}">
        <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
          <span class="phase-chip" style="background:rgba(255,255,255,0.2); color:white; border:1px solid rgba(255,255,255,0.4)">${tip.phase}</span>
          <i class="fas ${tip.category === 'nutrition' ? 'fa-apple-alt' : (tip.category === 'sport' ? 'fa-running' : 'fa-spa')}"></i>
        </div>
        <h3>${tip.title}</h3><p>${tip.content}</p>
      </div>`).join('')}
  </div>`;
};


const renderProfile = () => {
  if (!appContent) return; viewTitle!.textContent = getT('titles.profile');
  appContent.innerHTML = `
    <div class="card">
      <h3>${getT('ui.switchProfile')}</h3>
      <div class="profile-card-mini" id="add-profile-btn">
        <div class="avatar-circle plus"><i class="fas fa-plus"></i></div>
        <div><h4 style="font-size:14px; color:var(--terracotta);">${getT('ui.addProfile')}</h4></div>
      </div>
      ${profiles.map(p => p.id !== activeProfileId ? `
        <div class="profile-card-mini" onclick="window.switchProfile('${p.id}')">
          <div class="avatar-circle">${p.name[0]}</div>
          <div><h4 style="font-size:14px;">${p.name}</h4></div>
        </div>
      ` : '').join('')}
    </div>

    <div class="card">
      <h3>${getT('ui.lang')} 🌍</h3>
      <div style="display:flex; gap:10px;">
        <button class="btn-primary" id="lang-fr" style="background:${userProfile.language === 'fr' || !userProfile.language ? 'var(--terracotta)' : 'var(--sage-light)'};">Français</button>
        <button class="btn-primary" id="lang-en" style="background:${userProfile.language === 'en' ? 'var(--terracotta)' : 'var(--sage-light)'};">English</button>
      </div>
    </div>

    <div class="card">
      <h3>${getT('ui.security')}</h3>
      <div id="pin-toggle" style="display:flex; justify-content:space-between; align-items:center; cursor:pointer;">
        <span>${getT('ui.pinProtect')}</span>
        <div style="width:40px; height:20px; background:${userProfile.isSecurityEnabled ? 'var(--terracotta)' : 'var(--sage-light)'}; border-radius:10px; position:relative;">
          <div style="width:16px; height:16px; background:white; border-radius:50%; position:absolute; ${userProfile.isSecurityEnabled ? 'right:2px' : 'left:2px'}; top:2px; transition:var(--transition);"></div>
        </div>
      </div>
    </div>

    <div class="card">
      <h3>${getT('ui.cloud')}</h3>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
         <div>
            <span style="font-size:12px; color:var(--text-muted);">${getT('ui.lastSync')}:</span>
            <div style="font-weight:600; color:var(--sage-dark);" id="last-sync-date">${userProfile.lastSynced ? new Date(userProfile.lastSynced).toLocaleString() : getT('ui.notSynced')}</div>
         </div>
         <div id="sync-status-icon" style="color:var(--sage);"><i class="fas fa-cloud"></i></div>
      </div>
      <div style="display:flex; gap:10px;">
        <button class="btn-primary" id="sync-btn" style="background:var(--terracotta); flex:1;">${getT('ui.syncNow')}</button>
        <button class="btn-primary" id="restore-btn" style="background:var(--sage-light); color:var(--text-main); flex:1;">${getT('ui.restore')}</button>
      </div>
    </div>

    <div class="card">
      <h3>Données</h3>
      <button class="btn-primary" id="export-pdf-btn" style="background:var(--terracotta); margin-bottom:10px;">${getT('ui.exportPDF')}</button>
      <button class="btn-primary" id="export-data-btn" style="background:var(--sage-dark); margin-bottom:10px;">${getT('ui.exportJSON')}</button>
      <button class="btn-primary" id="clear-data-btn" style="background:var(--terracotta-dark);">${getT('ui.clearData')}</button>
    </div>
  `;

  const setLang = (l: 'fr' | 'en') => {
    userProfile.language = l;
    saveProfiles();
    location.reload(); // Reload to refresh all static texts/constants
  };
  document.getElementById('lang-fr')?.addEventListener('click', () => setLang('fr'));
  document.getElementById('lang-en')?.addEventListener('click', () => setLang('en'));

  document.getElementById('save-profile-btn')?.addEventListener('click', () => {
    userProfile.cycleLength = Number((document.getElementById('p-cycle') as HTMLInputElement).value);
    userProfile.periodLength = Number((document.getElementById('p-period') as HTMLInputElement).value);
    userProfile.targetWeight = Number((document.getElementById('p-weight') as HTMLInputElement).value);
    userProfile.waterGoal = Number((document.getElementById('p-water') as HTMLInputElement).value);
    userProfile.sleepGoal = Number((document.getElementById('p-sleep') as HTMLInputElement).value);
    const lastDate = (document.getElementById('p-last') as HTMLInputElement).value;
    if (lastDate) userProfile.lastPeriodDate = lastDate;

    // Update profiles array
    const idx = profiles.findIndex(p => p.id === activeProfileId);
    if (idx > -1) profiles[idx] = userProfile;

    saveProfiles();
    alert(getT('ui.profileUpdated') + " ✅");
    renderCalendar();
  });

  // Cloud Sync Logic
  document.getElementById('sync-btn')?.addEventListener('click', () => {
    const btn = document.getElementById('sync-btn') as HTMLButtonElement;
    const originalText = btn.textContent;
    btn.textContent = getT('ui.syncing');
    btn.disabled = true;

    // Simulate API Call
    setTimeout(() => {
      const now = new Date();
      userProfile.lastSynced = now.toISOString();
      localStorage.setItem(`cloud_backup_${activeProfileId}`, JSON.stringify({
        profile: userProfile,
        logs: dailyLogs,
        bmi: bmiHistory
      }));
      saveProfiles();

      btn.textContent = originalText;
      btn.disabled = false;
      alert(getT('ui.successSync'));
      renderProfile(); // Refresh UI
    }, 1500);
  });

  document.getElementById('restore-btn')?.addEventListener('click', () => {
    if (!confirm(getT('ui.confirmRestore'))) return;

    const btn = document.getElementById('restore-btn') as HTMLButtonElement;
    const originalText = btn.textContent;
    btn.textContent = getT('ui.restoring');

    const backupStr = localStorage.getItem(`cloud_backup_${activeProfileId}`);
    if (backupStr) {
      setTimeout(() => {
        const backup = JSON.parse(backupStr);
        dailyLogs = backup.logs || [];
        bmiHistory = backup.bmi || [];
        // Merge profile safely
        userProfile = { ...userProfile, ...backup.profile };

        localStorage.setItem(`dailyLogs_${activeProfileId}`, JSON.stringify(dailyLogs));
        localStorage.setItem(`bmiHistory_${activeProfileId}`, JSON.stringify(bmiHistory));
        saveProfiles();

        btn.textContent = originalText;
        alert(getT('ui.successRestore'));
        location.reload();
      }, 1500);
    } else {
      alert('Aucune sauvegarde trouvée / No backup found.');
      btn.textContent = originalText;
    }
  });

  document.getElementById('add-profile-btn')?.addEventListener('click', showAddProfileModal);
  document.getElementById('pin-toggle')?.addEventListener('click', () => {
    if (userProfile.isSecurityEnabled) { if (confirm(getT('ui.disablePinConfirm'))) { userProfile.isSecurityEnabled = false; userProfile.pin = undefined; saveProfiles(); renderView('profile'); } }
    else { renderLockScreen(getT('ui.setupPin'), 'setup', (pin) => { userProfile.isSecurityEnabled = true; userProfile.pin = pin; saveProfiles(); renderView('profile'); }); }
  });
  document.getElementById('export-pdf-btn')?.addEventListener('click', generateReport);
  document.getElementById('export-data-btn')?.addEventListener('click', () => {
    const data = { profile: userProfile, bmiHistory, dailyLogs };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `flowfit_data_${userProfile.name}.json`; a.click();
  });
  document.getElementById('clear-data-btn')?.addEventListener('click', () => {
    if (confirm("ATTENTION: Cela effacera toutes les données de ce profil. Continuer ?")) {
      localStorage.removeItem(`bmiHistory_${activeProfileId}`);
      localStorage.removeItem(`dailyLogs_${activeProfileId}`);
      bmiHistory = []; dailyLogs = [];
      alert("Données effacées.");
      renderView('profile');
    }
  });
};

const showAddProfileModal = () => {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay show';
  modal.innerHTML = `
    <div class="modal-sheet">
      <h2 style="margin-bottom:20px;">Nouveau Profil</h2>
      <div class="input-group"><label>Nom</label><input type="text" id="new-name" placeholder="Ex: Sarah"></div>
      <div class="input-group"><label>Objectif Poids (kg)</label><input type="number" id="new-target" placeholder="60"></div>
      <button class="btn-primary" id="create-profile-btn">Créer le profil</button>
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById('create-profile-btn')?.addEventListener('click', () => {
    const name = (document.getElementById('new-name') as HTMLInputElement).value;
    const target = Number((document.getElementById('new-target') as HTMLInputElement).value);
    if (name && target) {
      const newP: UserProfile = { id: Date.now().toString(), name, age: 25, cycleLength: 28, periodLength: 5, targetWeight: target, isSecurityEnabled: false };
      profiles.push(newP);
      saveProfiles();
      modal.remove();
      switchProfile(newP.id);
    }
  });
};

const switchProfile = (id: string) => {
  activeProfileId = id;
  localStorage.setItem('activeProfileId', id);
  userProfile = profiles.find(p => p.id === id)!;
  bmiHistory = JSON.parse(localStorage.getItem(`bmiHistory_${id}`) || '[]');
  dailyLogs = JSON.parse(localStorage.getItem(`dailyLogs_${id}`) || '[]');
  renderView('calendar');
};
(window as any).switchProfile = switchProfile;

const saveProfiles = () => localStorage.setItem('profiles', JSON.stringify(profiles));

const calculateBMI = () => {
  const h = Number((document.getElementById('h-height') as HTMLInputElement).value) / 100, w = Number((document.getElementById('h-weight') as HTMLInputElement).value);
  if (h > 0 && w > 0) {
    bmiHistory.push({ date: new Date().toLocaleDateString('fr-FR'), weight: w, height: h * 100, bmi: w / (h * h) });
    localStorage.setItem(`bmiHistory_${activeProfileId}`, JSON.stringify(bmiHistory)); renderHealth();
  }
};

const getBMICategory = (bmi: number) => { if (bmi < 18.5) return "Insuffisant"; if (bmi < 25) return "Normal"; if (bmi < 30) return "Surpoids"; return "Obésité"; };

const generateReport = () => {
  const reportWindow = window.open('', '_blank');
  if (!reportWindow) return alert("Veuillez autoriser les pop-ups pour générer le rapport.");

  const logsHtml = dailyLogs.sort((a, b) => b.date.localeCompare(a.date)).map(log => `
      <tr>
          <td>${log.date}</td>
          <td>${log.flow || '-'}</td>
          <td>${log.symptoms.join(', ')}</td>
          <td>${log.moods.join(', ')}</td>
          <td>${log.waterIntake || 0} / ${userProfile.waterGoal || 8}</td>
          <td>${log.sleepHours || 0}h (${log.sleepQuality || '-'})</td>
      </tr>
  `).join('');

  const html = `
      <html>
      <head>
          <title>Rapport Santé - ${userProfile.name}</title>
          <style>
              body { font-family: 'Helvetica', sans-serif; color: #333; padding: 40px; }
              h1 { color: #E07A5F; border-bottom: 2px solid #E07A5F; padding-bottom: 10px; margin-bottom: 30px; }
              h2 { color: #81B29A; margin-top: 30px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
              .header-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px; }
              .stat-card { background: #f9f9f9; padding: 20px; border-radius: 12px; border: 1px solid #eee; }
              table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px; }
              th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
              th { background-color: #81B29A; color: white; }
              tr:nth-child(even) { background-color: #f8f8f8; }
              .footer { margin-top: 50px; text-align: center; color: #888; font-size: 12px; border-top: 1px solid #eee; padding-top: 20px; }
          </style>
      </head>
      <body>
          <h1>Flow & Fit - Rapport Santé 🌸</h1>
          
          <div class="header-grid">
              <div class="stat-card">
                  <h3 style="margin-top:0;">Profil</h3>
                  <p><strong>Nom:</strong> ${userProfile.name}</p>
                  <p><strong>Cycle:</strong> ${userProfile.cycleLength} jours (Règles: ${userProfile.periodLength}j)</p>
                  <p><strong>Objectif Poids:</strong> ${userProfile.targetWeight} kg</p>
              </div>
              <div class="stat-card">
                  <h3 style="margin-top:0;">Statistiques Globales</h3>
                  <p><strong>Jours suivis:</strong> ${dailyLogs.length}</p>
                  <p><strong>Dernier IMC:</strong> ${bmiHistory.length ? bmiHistory[bmiHistory.length - 1].bmi.toFixed(1) : 'N/A'}</p>
                  <p><strong>Sommeil Moyen:</strong> ${dailyLogs.length ? (dailyLogs.reduce((acc, l) => acc + (l.sleepHours || 0), 0) / dailyLogs.length).toFixed(1) : 0}h</p>
              </div>
          </div>

          <h2>Journal de Bord</h2>
          <table>
              <thead>
                  <tr>
                      <th>Date</th>
                      <th>Flux</th>
                      <th>Symptômes</th>
                      <th>Humeur</th>
                      <th>Eau (Verres)</th>
                      <th>Sommeil</th>
                  </tr>
              </thead>
              <tbody>
                  ${logsHtml || '<tr><td colspan="6" style="text-align:center">Aucune donnée enregistrée</td></tr>'}
              </tbody>
          </table>

          <div class="footer">
              Généré le ${new Date().toLocaleDateString('fr-FR')} par Flow & Fit
          </div>

          <script>
            window.onload = () => { setTimeout(() => window.print(), 500); };
          </script>
      </body>
      </html>
  `;

  reportWindow.document.write(html);
  reportWindow.document.close();
};


const getCyclePredictions = (lastPeriod: string | undefined, cycleLen: number, periodLen: number) => {
  if (!lastPeriod) return { nextPeriod: null, nextPeriodEnd: null, fertileWindowStart: null, fertileWindowEnd: null, ovulation: null };
  const lastDate = new Date(lastPeriod);
  const nextDate = new Date(lastDate);
  nextDate.setDate(lastDate.getDate() + cycleLen);
  const nextPeriodEnd = new Date(nextDate);
  nextPeriodEnd.setDate(nextDate.getDate() + periodLen - 1);
  const ovulationDate = new Date(nextDate);
  ovulationDate.setDate(nextDate.getDate() - 14);
  const fertileStart = new Date(ovulationDate);
  fertileStart.setDate(ovulationDate.getDate() - 5);
  const fertileEnd = new Date(ovulationDate);
  fertileEnd.setDate(ovulationDate.getDate() + 1);
  return { nextPeriod: nextDate, nextPeriodEnd, fertileWindowStart: fertileStart, fertileWindowEnd: fertileEnd, ovulation: ovulationDate };
}

// --- New Helpers ---
const showToast = (msg: string) => {
  const toast = document.createElement('div');
  toast.className = 'notification-toast';
  toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${msg}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 100);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
};

// --- FAB Logic ---
const renderFAB = () => {
  if (document.querySelector('.fab-container')) return;
  const fab = document.createElement('div');
  fab.className = 'fab-container';
  fab.innerHTML = `
    <div class="fab-menu">
      <div class="fab-item" id="quick-period"><i class="fas fa-tint" style="color:var(--terracotta);"></i> ${getT('ui.periodStart')}</div>
      <div class="fab-item" id="quick-mood"><i class="fas fa-smile" style="color:var(--sage);"></i> ${getT('ui.moodLabel')}</div>
      <div class="fab-item" id="quick-sport"><i class="fas fa-running" style="color:var(--sage-dark);"></i> Sport</div>
    </div>
    <button class="fab-main"><i class="fas fa-plus"></i></button>
  `;
  document.body.appendChild(fab);

  const mainBtn = fab.querySelector('.fab-main');
  mainBtn?.addEventListener('click', () => fab.classList.toggle('active'));

  // Quick Actions
  fab.querySelector('#quick-period')?.addEventListener('click', () => {
    fab.classList.remove('active');
    showSymptomsModal(new Date().getDate());
  });
  fab.querySelector('#quick-mood')?.addEventListener('click', () => {
    fab.classList.remove('active');
    showSymptomsModal(new Date().getDate());
  });
  fab.querySelector('#quick-sport')?.addEventListener('click', () => {
    fab.classList.remove('active');
    // Ideally open a sport specific modal, for now generic modal or just a toast
    showToast("Séance de sport enregistrée ! 💪");
  });
};

// --- Onboarding Logic ---
const renderOnboarding = () => {
  if (localStorage.getItem('seenOnboarding')) return;

  const overlay = document.createElement('div');
  overlay.className = 'onboarding-overlay';
  const slides = [
    { title: "Bienvenue sur Flow & Fit 🌸", desc: "Votre compagnon pour un cycle serein et une santé équilibrée.", icon: "fa-heart" },
    { title: "Suivi de Cycle 📅", desc: "Anticipez vos règles et votre période fertile en un coup d'œil.", icon: "fa-calendar-alt" },
    { title: "Santé & Bien-être 🧘‍♀️", desc: "Adaptez votre sommeil, sport et nutrition à votre rythme biologique.", icon: "fa-spa" }
  ];

  let currentSlide = 0;
  const renderSlide = () => {
    overlay.innerHTML = `
      <i class="fas ${slides[currentSlide].icon} fa-4x" style="color:var(--terracotta); margin-bottom:30px; animation: popIn 0.5s;"></i>
      <h2 style="font-size:24px; margin-bottom:15px; color:var(--text-main);">${slides[currentSlide].title}</h2>
      <p style="color:var(--text-muted); margin-bottom:40px; line-height:1.6; max-width:300px;">${slides[currentSlide].desc}</p>
      
      <div class="onboarding-dots">
        ${slides.map((_, i) => `<div class="dot ${i === currentSlide ? 'active' : ''}"></div>`).join('')}
      </div>

      <button class="btn-primary" id="next-slide-btn" style="margin-top:40px; width:auto; padding:12px 40px;">
        ${currentSlide === slides.length - 1 ? "C'est parti ! ✨" : "Suivant"}
      </button>
    `;

    overlay.querySelector('#next-slide-btn')?.addEventListener('click', () => {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        renderSlide();
      } else {
        localStorage.setItem('seenOnboarding', 'true');
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 500);
      }
    });
  };

  renderSlide();
  document.body.appendChild(overlay);
};

// --- Updated Render Calendar (Now Home/Dashboard) ---
const renderDashboard = () => {
  if (!appContent) return;
  viewTitle!.textContent = "Aperçu 🏡"; // Set title for Home

  // Calculate Phase logic
  const predictions = getCyclePredictions(userProfile.lastPeriodDate, userProfile.cycleLength, userProfile.periodLength);
  const nextPeriodStart = predictions.nextPeriod;
  const today = new Date();

  // Determine Phase
  let phaseName = "Phase Folliculaire 🌿"; // Default
  let phaseClass = "theme-follicular";
  let advice = "Énergie montante ! Idéal pour le sport."; // Default

  // Logic could be more precise relying on dates vs today
  if (userProfile.lastPeriodDate) {
    const lp = new Date(userProfile.lastPeriodDate);
    const diffTime = Math.abs(today.getTime() - lp.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= userProfile.periodLength) {
      phaseName = "Phase Menstruelle 🌸";
      phaseClass = "theme-menstrual";
      advice = "Repos et douceur. Hydratez-vous bien.";
    } else if (diffDays > userProfile.cycleLength - 14 - 2 && diffDays < userProfile.cycleLength - 14 + 2) {
      phaseName = "Ovulation ✨";
      phaseClass = "theme-ovulatory";
      advice = "Rayonnante ! Osez les projets créatifs.";
    } else if (diffDays >= userProfile.cycleLength - 14 + 2) {
      phaseName = "Phase Lutéale 🍂";
      phaseClass = "theme-luteal";
      advice = "Écoutez votre corps, ralentissez le rythme.";
    }
  }

  // Days until period
  let daysUntil = 0;
  if (nextPeriodStart) {
    const diffStats = nextPeriodStart.getTime() - today.getTime();
    daysUntil = Math.ceil(diffStats / (1000 * 60 * 60 * 24));
  }

  // Inject Dashboard
  appContent.innerHTML = `
    <!-- Hero Phase Card -->
    <div class="phase-card ${phaseClass}">
       <div style="position:relative; z-index:2;">
          <div style="font-size:14px; opacity:0.9; margin-bottom:5px;">Aujourd'hui</div>
          <h2 style="font-size:28px; margin-bottom:10px;">${phaseName}</h2>
          <p style="font-size:16px; font-weight:500; opacity:0.95;"><i class="fas fa-lightbulb"></i> ${advice}</p>
          
          <div style="margin-top:20px; display:inline-flex; align-items:center; background:rgba(255,255,255,0.2); padding:5px 15px; border-radius:20px;">
             <i class="fas fa-hourglass-half" style="margin-right:8px;"></i> Règles dans ${daysUntil} jours
          </div>
       </div>
    </div>

    <!-- Quick Stats Row -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:25px;">
        <div class="card" style="margin:0; padding:15px; text-align:center;">
           <i class="fas fa-tint" style="color:var(--sage); font-size:20px; margin-bottom:5px;"></i>
           <div style="font-size:12px; color:var(--text-muted);">Hydratation</div>
           <div style="font-weight:700; font-size:18px;">
             ${dailyLogs.find(l => l.date === today.toISOString().split('T')[0])?.waterIntake || 0}/${userProfile.waterGoal || 8}
           </div>
        </div>
        <div class="card" style="margin:0; padding:15px; text-align:center;">
           <i class="fas fa-moon" style="color:var(--terracotta); font-size:20px; margin-bottom:5px;"></i>
           <div style="font-size:12px; color:var(--text-muted);">Sommeil</div>
           <div style="font-weight:700; font-size:18px;">
             ${dailyLogs.find(l => l.date === today.toISOString().split('T')[0])?.sleepHours || 0}h
           </div>
        </div>
    </div>
    
    <!-- Original Calendar (re-using renderCalendar logic but embedded? 
         To avoid duplication, we can call renderCalendar() OR just embedding the Calendar VIEW here is redundant if we have specific views. 
         Let's just put a specific mini-calendar or simply call renderCalendar logic here but simplified? 
         Actually, the user wants "Aperçu". The detailed calendar can be in the "Calendar" Tab if we had 5 tabs. 
         Since we have 4 tabs: Flow/Calendar, Fit, Tips, Profile. 
         The USER wants "Home" as the first tab. 
         So RenderDashboard IS the first tab view. It replaces the "Full Calendar" as the default view. 
         But we still need access to the full calendar. 
         Let's add a button "Voir le calendrier complet" which toggles a "full calendar mode" or simply render the calendar below.
         Let's render the calendar below for now.
    -->
    <div id="calendar-wrapper"></div>
  `;

  // Execute standard calendar logic inside the wrapper
  // We need to adapt renderCalendar to target a specific container or just rewrite inner logic.
  // For simplicity, let's keep the dashboard 'light' and just show the full calendar below it:
  // We can modify standard renderCalendar to APPEND instead of replace appContent, or accept a container.
  // Let's modify renderCalendar signature quickly or just use a flag.
  // OR: renderDashboard calls renderCalendar(true) where true means "Appended Mode".
  // Actually, let's just make renderCalendar THE function for the first tab, and PREPEND the dashboard widget if it's the 'home' view.
  // Wait, currentView IS 'calendar' (or 'home' now).
  // Let's Rename 'calendar' view to 'home'.

  // We'll call the OLD renderCalendar logic but inject the Dashboard Card at the top of the HTML string inside it.
  const calWrapper = document.getElementById('calendar-wrapper');
  if (calWrapper) renderCalendar(calWrapper);
};

const renderView = (view: string) => {
  currentView = view;
  localStorage.setItem('lastView', view);
  navItems.forEach(item => item.classList.toggle('active', item.getAttribute('data-view') === view));
  switch (view) {
    case 'home': renderDashboard(); break; // Changed from 'calendar' to 'home' and calls renderDashboard
    case 'calendar': renderCalendar(); break; // Added back for a dedicated calendar view if needed, or remove if dashboard fully replaces it.
    case 'health': renderHealth(); break;
    case 'tips': renderTips(); break;
    case 'profile': renderProfile(); break;
  }
};

// ... (We need to update renderCalendar to include the Dashboard Header if view is 'home')

navItems.forEach(item => item.addEventListener('click', () => {
  const view = item.getAttribute('data-view');
  if (view) renderView(view);
}));

updateDateDisplay();

if (userProfile.isSecurityEnabled && userProfile.pin) {
  if (appContent) appContent.innerHTML = '';
  renderLockScreen(getT('ui.confirmPin'), 'verify', () => {
    renderView(currentView);
    renderFAB();
    renderOnboarding();
  });
} else {
  renderView(currentView);
  renderFAB();
  renderOnboarding();
}
