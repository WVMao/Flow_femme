(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function l(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=l(a);fetch(a.href,s)}})();let J=localStorage.getItem("lastView")||"calendar",$=new Date().getMonth(),D=new Date().getFullYear();const ie=[{id:"1",name:"Flow",age:26,cycleLength:28,periodLength:5,targetWeight:60,waterGoal:8,sleepGoal:8,lastPeriodDate:new Date(new Date().setDate(new Date().getDate()-25)).toISOString().split("T")[0],isSecurityEnabled:!1,language:"fr"}];let C=JSON.parse(localStorage.getItem("profiles")||JSON.stringify(ie)),h=localStorage.getItem("activeProfileId")||C[0].id,o=C.find(e=>e.id===h)||C[0];const F={fr:{nav:{calendar:"Calendrier",health:"Santé",tips:"Conseils",profile:"Profil"},titles:{calendar:"Mon Calendrier 📅",health:"Santé & IMC ⚖️",tips:"Conseils Santé 💡",profile:"Votre Profil 🌸",report:"Rapport Santé"},symptoms:["Crampes","Maux de tête","Acné","Ballonnements","Fatigue","Seins sensibles","Bas du dos"],moods:["Heureuse","Calme","Irritable","Sensible","Épuisée","Anxieuse"],phases:{menstrual:"Règles",follicular:"Folliculaire",ovulatory:"Ovulation",luteal:"Lutéale"},ui:{save:"Enregistrer",cancel:"Annuler",edit:"Modifier",delete:"Supprimer",addProfile:"Ajouter un profil",switchProfile:"Changer de Profil",security:"Sécurité",pinProtect:"Protéger par PIN",exportJSON:"Exporter (JSON)",exportPDF:"📄 Générer Rapport (PDF)",clearData:"Supprimer tout",createProfile:"Créer le profil",today:"Aujourd'hui",fertile:"Fertile",periodStart:"Prochaines Règles",water:"Hydratation 💧",sleep:"Sommeil 🌙",sleepQuality:"Qualité",moodChart:"Analyse d'Humeur 📊",weightChart:"Suivi du Poids",bmiCalc:"Calculateur d'IMC",height:"Taille (cm)",weight:"Poids (kg)",calc:"Calculer & Sauvegarder",goalWeight:"Objectif Poids",current:"Actuel",none:"Aucune mesure enregistrée",journal:"Journal du",flow:"Flux",symptomLabel:"Symptômes",moodLabel:"Humeur",nutrition:"Nutrition 🥗",notes:"Notes",breakfast:"☕ Petit déjeuner",lunch:"🍲 Déjeuner",dinner:"🍝 Dîner",snack:"🍎 Collation",confirmPin:"Entrez votre PIN",createPin:"Créer PIN",setupPin:"Configurer PIN",lang:"Langue / Language",cloud:"Sauvegarde Cloud ☁️",syncNow:"🔄 Synchroniser",lastSync:"Dernière synchro",synced:"À jour",notSynced:"Non synchronisé",restore:"📥 Restaurer",confirmRestore:"Cela remplacera vos données actuelles par la sauvegarde. Continuer ?",syncing:"Synchronisation...",restoring:"Restauration...",successSync:"Données sauvegardées en ligne ! ✅",successRestore:"Données restaurées ! ✅",profileUpdated:"Profil mis à jour !",disablePinConfirm:"Désactiver PIN ?",setupPinTitle:"Créer PIN",predictions:"Prévisions",waterGoalAchieved:"🎉 Objectif atteint ! Bravo !",waterGoalContinue:"Continuez comme ça !",sleepQualityBad:"Mauvais",sleepQualityAverage:"Moyen",sleepQualityGood:"Bon",sleepGoal:"Objectif",flowNone:"Aucun",flowLight:"Léger",flowMedium:"Moyen",flowHeavy:"Abondant",breakfastPlaceholder:"Ex: Avoine, Fruits...",lunchPlaceholder:"Ex: Salade Quinoa...",dinnerPlaceholder:"Ex: Soupe, Légumes...",snackPlaceholder:"Ex: Amandes, Yaourt..."}},en:{nav:{calendar:"Calendar",health:"Health",tips:"Tips",profile:"Profile"},titles:{calendar:"My Calendar 📅",health:"Health & BMI ⚖️",tips:"Health Tips 💡",profile:"Your Profile 🌸",report:"Health Report"},symptoms:["Cramps","Headache","Acne","Bloating","Fatigue","Tender Breasts","Low Back Pain"],moods:["Happy","Calm","Irritable","Sensitive","Exhausted","Anxious"],phases:{menstrual:"Menstrual",follicular:"Follicular",ovulatory:"Ovulation",luteal:"Luteal"},ui:{save:"Save",cancel:"Cancel",edit:"Edit",delete:"Delete",addProfile:"Add Profile",switchProfile:"Switch Profile",security:"Security",pinProtect:"PIN Protection",exportJSON:"Export (JSON)",exportPDF:"📄 Generate Report (PDF)",clearData:"Clear All Data",createProfile:"Create Profile",today:"Today",fertile:"Fertile",periodStart:"Next Period",water:"Hydration 💧",sleep:"Sleep 🌙",sleepQuality:"Quality",moodChart:"Mood Analysis 📊",weightChart:"Weight Tracker",bmiCalc:"BMI Calculator",height:"Height (cm)",weight:"Weight (kg)",calc:"Calculate & Save",goalWeight:"Weight Goal",current:"Current",none:"No measurement recorded",journal:"Journal for",flow:"Flow",symptomLabel:"Symptoms",moodLabel:"Mood",nutrition:"Nutrition 🥗",notes:"Notes",breakfast:"☕ Breakfast",lunch:"🍲 Lunch",dinner:"🍝 Dinner",snack:"🍎 Snack",confirmPin:"Enter PIN",createPin:"Create PIN",setupPin:"Setup PIN",lang:"Langue / Language",cloud:"Cloud Backup ☁️",syncNow:"🔄 Sync Now",lastSync:"Last Synced",synced:"Up to date",notSynced:"Not synced",restore:"📥 Restore",confirmRestore:"This will replace your current data with the backup. Continue?",syncing:"Syncing...",restoring:"Restoring...",successSync:"Data saved to cloud! ✅",successRestore:"Data restored! ✅",profileUpdated:"Profile updated!",disablePinConfirm:"Disable PIN?",setupPinTitle:"Create PIN",predictions:"Predictions",waterGoalAchieved:"🎉 Goal reached! Well done!",waterGoalContinue:"Keep going!",sleepQualityBad:"Bad",sleepQualityAverage:"Average",sleepQualityGood:"Good",sleepGoal:"Goal",flowNone:"None",flowLight:"Light",flowMedium:"Medium",flowHeavy:"Heavy",breakfastPlaceholder:"Ex: Oatmeal, Fruits...",lunchPlaceholder:"Ex: Quinoa Salad...",dinnerPlaceholder:"Ex: Soup, Veggies...",snackPlaceholder:"Ex: Almonds, Yogurt..."}}},n=e=>{const t=o.language||"fr",l=e.split(".");let i=F[t];for(const a of l)i=i?.[a];return i||e},ne=()=>F[o.language||"fr"].symptoms,oe=()=>F[o.language||"fr"].moods;let v=JSON.parse(localStorage.getItem(`bmiHistory_${h}`)||"[]"),c=JSON.parse(localStorage.getItem(`dailyLogs_${h}`)||"[]");const le=[{title:"Nutrition Menstruelle",content:"Privilégiez les aliments riches en fer et magnésium.",category:"nutrition",phase:"menstrual"},{title:"Énergie Folliculaire",content:"C'est le moment idéal pour des entraînements cardio intenses.",category:"sport",phase:"follicular"},{title:"Bien-être Holistique",content:"L'ovulation est propice à la créativité.",category:"wellbeing",phase:"ovulatory"},{title:"Phase Lutéale",content:"Priorisez le repos et les activités douces comme le Yoga.",category:"sport",phase:"luteal"}],E=document.getElementById("app-content"),q=document.getElementById("view-title"),Y=document.querySelectorAll(".nav-item"),Q=document.getElementById("current-date"),re=()=>{if(Q){const e=new Date;Q.textContent=e.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"})}},K=(e="Entrez votre PIN",t="verify",l)=>{const i=document.createElement("div");i.className="lock-screen";let a="";const s=()=>{i.querySelectorAll(".pin-dot").forEach((d,r)=>d.classList.toggle("filled",r<a.length))};i.innerHTML=`
    <i class="fas fa-lock fa-3x" style="color:var(--terracotta); margin-bottom:20px;"></i>
    <h2 style="margin-bottom:10px;">${e}</h2>
    <div class="pin-display">
      <div class="pin-dot"></div><div class="pin-dot"></div><div class="pin-dot"></div><div class="pin-dot"></div>
    </div>
    <div class="numpad">
      ${[1,2,3,4,5,6,7,8,9].map(d=>`<button class="num-btn" data-val="${d}">${d}</button>`).join("")}
      <button class="num-btn empty"></button>
      <button class="num-btn" data-val="0">0</button>
      <button class="num-btn delete" data-val="del"><i class="fas fa-backspace"></i></button>
    </div>
    ${t==="verify"?"":'<button class="btn-primary" style="margin-top:30px; background:var(--bg-app); color:var(--text-main); width:auto; padding:10px 30px;" id="cancel-pin">Annuler</button>'}
  `,document.body.appendChild(i),i.querySelectorAll(".num-btn").forEach(d=>{d.addEventListener("click",()=>{const r=d.getAttribute("data-val");r==="del"?a=a.slice(0,-1):r&&a.length<4&&(a+=r),s(),a.length===4&&setTimeout(()=>{t==="verify"?a===o.pin?(i.classList.add("out"),setTimeout(()=>{i.remove(),l&&l(a)},400)):(a="",s(),alert("PIN Incorrect")):l&&(l(a),i.remove())},200)})}),document.getElementById("cancel-pin")?.addEventListener("click",()=>i.remove())},N=e=>{const t=e||E;if(!t)return;e||(q.textContent=`Bonjour, ${o.name} ✨`);const l=o.language==="en"?["January","February","March","April","May","June","July","August","September","October","November","December"]:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],i=new Date(D,$,1).getDay(),a=new Date(D,$+1,0).getDate(),s=i===0?6:i-1,d=te(o.lastPeriodDate,o.cycleLength,o.periodLength),r=d.nextPeriod,p=d.nextPeriodEnd,u=o.language==="en"?"en-US":"fr-FR",m={day:"numeric",month:"long"},g=r?r.toLocaleDateString(u,m):n("ui.unknown"),S=d.fertileWindowStart?`${d.fertileWindowStart.toLocaleDateString(u,{day:"numeric"})} - ${d.fertileWindowEnd?.toLocaleDateString(u,m)}`:n("ui.unknown"),L=new Date().toISOString().split("T")[0],y=c.find(f=>f.date===L)||{waterIntake:0},P=o.waterGoal||8,I=y.waterIntake||0,A=y.sleepHours||7,k=y.sleepQuality||null;t.innerHTML=`
    <div class="card" style="background: linear-gradient(135deg, white, var(--bg-app));">
      <div class="cal-nav">
        <button class="cal-nav-btn" id="prev-month"><i class="fas fa-chevron-left"></i></button>
        <h2>${l[$]} ${D}</h2>
        <button class="cal-nav-btn" id="next-month"><i class="fas fa-chevron-right"></i></button>
      </div>
      <div class="calendar-container">
        ${["L","M","M","J","V","S","D"].map(f=>`<div style="font-size:12px; color:var(--text-muted); font-weight:700;">${f}</div>`).join("")}
        ${Array.from({length:s},()=>"<div></div>").join("")}
        ${Array.from({length:a},(f,b)=>{const w=b+1,x=new Date(D,$,w),B=`${D}-${($+1).toString().padStart(2,"0")}-${w.toString().padStart(2,"0")}`,H=new Date().toDateString()===x.toDateString(),ae=c.some(j=>j.date===B);let R=!1,W=!1,G=!1;if(r&&p&&(x>=r&&x<=p&&(R=!0),x>=d.fertileWindowStart&&x<=d.fertileWindowEnd&&(W=!0),x.toDateString()===d.ovulation?.toDateString()&&(G=!0)),o.lastPeriodDate){const j=new Date(o.lastPeriodDate),_=new Date(j);_.setDate(j.getDate()+o.periodLength-1),x>=j&&x<=_&&(R=!0)}return`
            <div class="cal-day ${R?"period":""} ${W?"fertile":""} ${G?"ovulation":""} ${H?"today":""}" data-day="${w}">
              ${w}
              ${ae?'<div class="logged-dot"></div>':""}
              ${G?'<div class="ovulation-dot"></div>':""}
            </div>
          `}).join("")}
      </div>
    </div>

    <div class="card">
      <h3>${n("ui.predictions")}</h3>
      <div style="margin-top:15px; display:grid; gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:14px; color:var(--text-muted);">${n("ui.periodStart")}</span>
          <span style="font-weight:700;">${g}</span>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:14px; color:var(--text-muted);">${n("ui.fertile")}</span>
          <span style="font-weight:700;">${S}</span>
        </div>
      </div>
    </div>

    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <h3>${n("ui.water")}</h3>
        <span style="font-size:12px; color:var(--text-muted);" id="water-text">${I} / ${P}</span>
      </div>
      <div class="water-grid">
        ${Array.from({length:P},(f,b)=>`
          <div class="water-glass ${b<I?"filled":""}" data-idx="${b}"></div>
        `).join("")}
      </div>
      <p class="water-summary">${I>=P?n("ui.waterGoalAchieved"):n("ui.waterGoalContinue")}</p>
    </div>

    <div class="card sleep-card">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <h3 style="color:white;">${n("ui.sleep")}</h3>
        <span style="font-size:12px; opacity:0.8;">${n("ui.sleepGoal")}: ${o.sleepGoal||8}h</span>
      </div>
      <div class="sleep-controls">
        <button class="sleep-btn" id="sleep-minus"><i class="fas fa-minus"></i></button>
        <div class="sleep-display">${A}h</div>
        <button class="sleep-btn" id="sleep-plus"><i class="fas fa-plus"></i></button>
      </div>
      <div class="quality-grid">
        <div class="quality-opt ${k==="bad"?"active":""}" data-q="bad"><span>😞</span><label>${n("ui.sleepQualityBad")}</label></div>
        <div class="quality-opt ${k==="average"?"active":""}" data-q="average"><span>😐</span><label>${n("ui.sleepQualityAverage")}</label></div>
        <div class="quality-opt ${k==="good"?"active":""}" data-q="good"><span>🙂</span><label>${n("ui.sleepQualityGood")}</label></div>
      </div>
    </div>

    <button class="btn-primary" id="log-period-btn"><i class="fas fa-plus-circle"></i> ${n("ui.edit")}</button>
  `,document.getElementById("prev-month")?.addEventListener("click",()=>{$--,$<0&&($=11,D--),N()}),document.getElementById("next-month")?.addEventListener("click",()=>{$++,$>11&&($=0,D++),N()}),document.getElementById("log-period-btn")?.addEventListener("click",()=>z(new Date().getDate())),document.querySelectorAll(".cal-day").forEach(f=>{f.addEventListener("click",()=>{const b=Number(f.getAttribute("data-day"));b&&z(b)})}),document.querySelectorAll(".water-glass").forEach(f=>{f.addEventListener("click",()=>{const b=Number(f.getAttribute("data-idx"));let w=b+1;I===w&&(w=b);const x=c.findIndex(H=>H.date===L),B=x>-1?{...c[x],waterIntake:w}:{date:L,symptoms:[],moods:[],waterIntake:w};x>-1?c[x]=B:c.push(B),localStorage.setItem(`dailyLogs_${h}`,JSON.stringify(c)),N()})});const O=(f,b)=>{const w=c.findIndex(H=>H.date===L),B={...w>-1?c[w]:{date:L,symptoms:[],moods:[]},sleepHours:f,sleepQuality:b};w>-1?c[w]=B:c.push(B),localStorage.setItem(`dailyLogs_${h}`,JSON.stringify(c)),N()};document.getElementById("sleep-minus")?.addEventListener("click",()=>{A>0&&O(A-.5,k)}),document.getElementById("sleep-plus")?.addEventListener("click",()=>{A<24&&O(A+.5,k)}),document.querySelectorAll(".quality-opt").forEach(f=>{f.addEventListener("click",()=>{const b=f.getAttribute("data-q");O(A,b)})})},z=e=>{const t=`${D}-${($+1).toString().padStart(2,"0")}-${e.toString().padStart(2,"0")}`,l=c.find(r=>r.date===t)||{date:t,symptoms:[],moods:[],flow:"none",meals:[]},i=l.meals||[],a=r=>i.find(p=>p.type===r)?.description||"",s=o.language==="en"?"en-US":"fr-FR",d=document.createElement("div");d.className="modal-overlay show",d.innerHTML=`
    <div class="modal-sheet">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:25px;">
        <h2>${n("ui.journal")} ${e} ${new Intl.DateTimeFormat(s,{month:"long"}).format(new Date(D,$))}</h2>
        <i class="fas fa-times" id="close-modal" style="cursor:pointer; color:var(--text-muted);"></i>
      </div>
      <div class="input-group"><label>${n("ui.flow")}</label><div style="display:flex; gap:10px;">
        ${["none","light","medium","heavy"].map(r=>`<div class="symptom-tag ${l.flow===r?"selected":""}" data-type="flow" data-val="${r}">${n(`ui.flow${r.charAt(0).toUpperCase()+r.slice(1)}`)}</div>`).join("")}
      </div></div>
      <div class="input-group"><label>${n("ui.symptomLabel")}</label><div class="tag-grid">
        ${ne().map(r=>`<div class="symptom-tag ${l.symptoms.includes(r)?"selected":""}" data-type="symptom" data-val="${r}">${r}</div>`).join("")}
      </div></div>
      
      <div class="meal-section">
        <h3 style="font-size:16px; margin-bottom:15px; color:var(--text-main);">${n("ui.nutrition")}</h3>
        <div class="meal-input-group"><label>${n("ui.breakfast")}</label><input class="meal-input" data-type="breakfast" value="${a("breakfast")}" placeholder="${n("ui.breakfastPlaceholder")}"></div>
        <div class="meal-input-group"><label>${n("ui.lunch")}</label><input class="meal-input" data-type="lunch" value="${a("lunch")}" placeholder="${n("ui.lunchPlaceholder")}"></div>
        <div class="meal-input-group"><label>${n("ui.dinner")}</label><input class="meal-input" data-type="dinner" value="${a("dinner")}" placeholder="${n("ui.dinnerPlaceholder")}"></div>
        <div class="meal-input-group"><label>${n("ui.snack")}</label><input class="meal-input" data-type="snack" value="${a("snack")}" placeholder="${n("ui.snackPlaceholder")}"></div>
      </div>

      <div class="input-group"><label>${n("ui.moodLabel")}</label><div class="tag-grid">
        ${oe().map(r=>`<div class="symptom-tag ${l.moods.includes(r)?"selected":""}" data-type="mood" data-val="${r}">${r}</div>`).join("")}
      </div></div>
      <div class="input-group"><label>${n("ui.notes")}</label>
        <textarea id="log-notes" style="width:100%; padding:14px; border-radius:12px; border:1px solid var(--sage-light); background:var(--cream); height:80px; resize:none; font-family:inherit;">${l.notes||""}</textarea>
      </div>
      <button class="btn-primary" id="save-log-btn">${n("ui.save")}</button>
    </div>
  `,document.body.appendChild(d),d.querySelectorAll(".symptom-tag").forEach(r=>{r.addEventListener("click",()=>{r.getAttribute("data-type")==="flow"?(d.querySelectorAll('[data-type="flow"]').forEach(u=>u.classList.remove("selected")),r.classList.add("selected")):r.classList.toggle("selected")})}),document.getElementById("close-modal")?.addEventListener("click",()=>d.remove()),document.getElementById("save-log-btn")?.addEventListener("click",()=>{const r=Array.from(d.querySelectorAll('.symptom-tag[data-type="symptom"].selected')).map(y=>y.getAttribute("data-val")),p=Array.from(d.querySelectorAll('.symptom-tag[data-type="mood"].selected')).map(y=>y.getAttribute("data-val")),u=d.querySelector('.symptom-tag[data-type="flow"].selected')?.getAttribute("data-val")||"none",m=document.getElementById("log-notes").value,g=[];d.querySelectorAll(".meal-input").forEach(y=>{const P=y.value.trim(),I=y.getAttribute("data-type");P&&g.push({type:I,description:P})});const S={...l,symptoms:r,moods:p,flow:u,date:t,notes:m,meals:g},L=c.findIndex(y=>y.date===t);L>-1?c[L]=S:c.push(S),localStorage.setItem(`dailyLogs_${h}`,JSON.stringify(c)),N(),d.remove()})},X=()=>{if(!E)return;q.textContent=n("titles.health");const e=v[v.length-1],t=o.targetWeight||60,l=e?.weight||0,i=l>0?Math.min(100,Math.max(0,(1-Math.abs(l-t)/Math.abs(v[0]?.weight-t||1))*100)):0;E.innerHTML=`
    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
        <h3>${n("ui.goalWeight")}</h3>
        <span style="font-weight:700; color:var(--terracotta);">${t} kg</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width:${v.length>1?i:0}%"></div>
      </div>
      <p style="font-size:12px; color:var(--text-muted); text-align:right;">
        ${l>0?`${n("ui.current")}: ${l}kg`:n("ui.none")}
      </p>
    </div>

    <div class="card">
      <h3>${n("ui.bmiCalc")}</h3>
      <div class="bmi-grid">
        <div class="input-group"><label>${n("ui.height")}</label><input type="number" id="h-height" value="${e?.height||""}"></div>
        <div class="input-group"><label>${n("ui.weight")}</label><input type="number" id="h-weight" value="${e?.weight||""}"></div>
      </div>
      <button class="btn-primary" id="calc-bmi-btn">${n("ui.calc")}</button>
      <div id="bmi-result" style="margin-top:20px; text-align:center; display:${e?"block":"none"};">
        <h2 style="font-size:32px; color:var(--terracotta);">${e?.bmi.toFixed(1)||""}</h2>
        <p style="font-weight:600; color:var(--sage-dark);">${ge(e?.bmi||0)}</p>
      </div>
    </div>

  <div class="card">
      <h3>${n("ui.weightChart")}</h3>
      <div class="chart-container" id="weight-chart"></div>
    </div>

    <div class="card">
      <h3>${n("ui.moodChart")}</h3>
      <div class="chart-container" id="mood-chart"></div>
    </div>
  `,document.getElementById("calc-bmi-btn")?.addEventListener("click",pe),de(),se()},se=()=>{const e=document.getElementById("mood-chart");if(!e)return;const t=new Date,l=[];for(let u=6;u>=0;u--){const m=new Date(t);m.setDate(m.getDate()-u);const g=m.toISOString().split("T")[0],S=c.find(P=>P.date===g);let L=0;if(S&&S.moods.length>0){const P={Heureuse:5,Calme:4,Sensible:3,Anxieuse:2,Irritable:1,Épuisée:0},I=o.language==="en"?S.moods.map(k=>F.fr.moods[F.en.moods.indexOf(k)]):S.moods;L=I.reduce((k,O)=>k+(P[O]||2.5),0)/I.length}const y=o.language==="en"?"en-US":"fr-FR";l.push({date:m.toLocaleDateString(y,{weekday:"short"}),score:L})}const i=e.clientWidth,a=200,s=30,d=u=>u/(l.length-1)*(i-2*s)+s,r=u=>a-(u/5*(a-2*s)+s);let p=`M ${d(0)} ${r(l[0].score)}`;for(let u=1;u<l.length;u++)p+=` L ${d(u)} ${r(l[u].score)}`;e.innerHTML=`
        <svg class="chart-svg" viewBox="0 0 ${i} ${a}">
          <!-- Background Zones -->
          <rect x="${s}" y="${s}" width="${i-2*s}" height="${(a-2*s)/3}" fill="rgba(129, 178, 154, 0.2)" /> <!-- Good -->
          <rect x="${s}" y="${s+(a-2*s)/3}" width="${i-2*s}" height="${(a-2*s)/3}" fill="rgba(242, 204, 143, 0.2)" /> <!-- Mid -->
          <rect x="${s}" y="${s+2*(a-2*s)/3}" width="${i-2*s}" height="${(a-2*s)/3}" fill="rgba(224, 122, 95, 0.2)" /> <!-- Low -->
          
          <path class="chart-line" d="${p}" style="stroke: var(--sage); stroke-width:3;" />
          ${l.map((u,m)=>`<circle class="chart-dot" cx="${d(m)}" cy="${r(u.score)}" r="4" style="fill:var(--sage-dark);" /><text class="chart-label" x="${d(m)}" y="${a-5}" text-anchor="middle">${u.date}</text>`).join("")}
        </svg>
    `},de=()=>{const e=document.getElementById("weight-chart");if(!e||v.length<2){e&&(e.innerHTML='<p style="text-align:center; color:var(--text-muted); margin-top:80px;">Saisissez au moins 2 mesures.</p>');return}const t=30,l=e.clientWidth,i=200,a=v.slice(-7),s=Math.min(...a.map(g=>g.weight))-2,d=Math.max(...a.map(g=>g.weight))+2,r=g=>g/(a.length-1)*(l-2*t)+t,p=g=>i-((g-s)/(d-s)*(i-2*t)+t);let u=`M ${r(0)} ${p(a[0].weight)}`,m=`M ${r(0)} ${i} L ${r(0)} ${p(a[0].weight)}`;for(let g=1;g<a.length;g++)u+=` L ${r(g)} ${p(a[g].weight)}`,m+=` L ${r(g)} ${p(a[g].weight)}`;m+=` L ${r(a.length-1)} ${i} Z`,e.innerHTML=`
    <svg class="chart-svg" viewBox="0 0 ${l} ${i}">
      <defs><linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="var(--terracotta)" /><stop offset="100%" stop-color="white" /></linearGradient></defs>
      <path class="chart-area" d="${m}" /><path class="chart-line" d="${u}" />
      ${a.map((g,S)=>`<circle class="chart-dot" cx="${r(S)}" cy="${p(g.weight)}" r="4" /><text class="chart-label" x="${r(S)}" y="${i-5}" text-anchor="middle">${g.date.split("/")[0]}</text>`).join("")}
    </svg>
  `},ce=()=>{E&&(q.textContent="Conseils Santé 💡",E.innerHTML=`<div style="display:grid; gap:20px;">
    ${le.map(e=>`
      <div class="card tip-card" style="background:${e.phase==="menstrual"?"var(--terracotta)":"var(--sage)"}">
        <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
          <span class="phase-chip" style="background:rgba(255,255,255,0.2); color:white; border:1px solid rgba(255,255,255,0.4)">${e.phase}</span>
          <i class="fas ${e.category==="nutrition"?"fa-apple-alt":e.category==="sport"?"fa-running":"fa-spa"}"></i>
        </div>
        <h3>${e.title}</h3><p>${e.content}</p>
      </div>`).join("")}
  </div>`)},Z=()=>{if(!E)return;q.textContent=n("titles.profile"),E.innerHTML=`
    <div class="card">
      <h3>${n("ui.switchProfile")}</h3>
      <div class="profile-card-mini" id="add-profile-btn">
        <div class="avatar-circle plus"><i class="fas fa-plus"></i></div>
        <div><h4 style="font-size:14px; color:var(--terracotta);">${n("ui.addProfile")}</h4></div>
      </div>
      ${C.map(t=>t.id!==h?`
        <div class="profile-card-mini" onclick="window.switchProfile('${t.id}')">
          <div class="avatar-circle">${t.name[0]}</div>
          <div><h4 style="font-size:14px;">${t.name}</h4></div>
        </div>
      `:"").join("")}
    </div>

    <div class="card">
      <h3>${n("ui.lang")} 🌍</h3>
      <div style="display:flex; gap:10px;">
        <button class="btn-primary" id="lang-fr" style="background:${o.language==="fr"||!o.language?"var(--terracotta)":"var(--sage-light)"};">Français</button>
        <button class="btn-primary" id="lang-en" style="background:${o.language==="en"?"var(--terracotta)":"var(--sage-light)"};">English</button>
      </div>
    </div>

    <div class="card">
      <h3>${n("ui.security")}</h3>
      <div id="pin-toggle" style="display:flex; justify-content:space-between; align-items:center; cursor:pointer;">
        <span>${n("ui.pinProtect")}</span>
        <div style="width:40px; height:20px; background:${o.isSecurityEnabled?"var(--terracotta)":"var(--sage-light)"}; border-radius:10px; position:relative;">
          <div style="width:16px; height:16px; background:white; border-radius:50%; position:absolute; ${o.isSecurityEnabled?"right:2px":"left:2px"}; top:2px; transition:var(--transition);"></div>
        </div>
      </div>
    </div>

    <div class="card">
      <h3>${n("ui.cloud")}</h3>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
         <div>
            <span style="font-size:12px; color:var(--text-muted);">${n("ui.lastSync")}:</span>
            <div style="font-weight:600; color:var(--sage-dark);" id="last-sync-date">${o.lastSynced?new Date(o.lastSynced).toLocaleString():n("ui.notSynced")}</div>
         </div>
         <div id="sync-status-icon" style="color:var(--sage);"><i class="fas fa-cloud"></i></div>
      </div>
      <div style="display:flex; gap:10px;">
        <button class="btn-primary" id="sync-btn" style="background:var(--terracotta); flex:1;">${n("ui.syncNow")}</button>
        <button class="btn-primary" id="restore-btn" style="background:var(--sage-light); color:var(--text-main); flex:1;">${n("ui.restore")}</button>
      </div>
    </div>

    <div class="card">
      <h3>Données</h3>
      <button class="btn-primary" id="export-pdf-btn" style="background:var(--terracotta); margin-bottom:10px;">${n("ui.exportPDF")}</button>
      <button class="btn-primary" id="export-data-btn" style="background:var(--sage-dark); margin-bottom:10px;">${n("ui.exportJSON")}</button>
      <button class="btn-primary" id="clear-data-btn" style="background:var(--terracotta-dark);">${n("ui.clearData")}</button>
    </div>
  `;const e=t=>{o.language=t,M(),location.reload()};document.getElementById("lang-fr")?.addEventListener("click",()=>e("fr")),document.getElementById("lang-en")?.addEventListener("click",()=>e("en")),document.getElementById("save-profile-btn")?.addEventListener("click",()=>{o.cycleLength=Number(document.getElementById("p-cycle").value),o.periodLength=Number(document.getElementById("p-period").value),o.targetWeight=Number(document.getElementById("p-weight").value),o.waterGoal=Number(document.getElementById("p-water").value),o.sleepGoal=Number(document.getElementById("p-sleep").value);const t=document.getElementById("p-last").value;t&&(o.lastPeriodDate=t);const l=C.findIndex(i=>i.id===h);l>-1&&(C[l]=o),M(),alert(n("ui.profileUpdated")+" ✅"),N()}),document.getElementById("sync-btn")?.addEventListener("click",()=>{const t=document.getElementById("sync-btn"),l=t.textContent;t.textContent=n("ui.syncing"),t.disabled=!0,setTimeout(()=>{const i=new Date;o.lastSynced=i.toISOString(),localStorage.setItem(`cloud_backup_${h}`,JSON.stringify({profile:o,logs:c,bmi:v})),M(),t.textContent=l,t.disabled=!1,alert(n("ui.successSync")),Z()},1500)}),document.getElementById("restore-btn")?.addEventListener("click",()=>{if(!confirm(n("ui.confirmRestore")))return;const t=document.getElementById("restore-btn"),l=t.textContent;t.textContent=n("ui.restoring");const i=localStorage.getItem(`cloud_backup_${h}`);i?setTimeout(()=>{const a=JSON.parse(i);c=a.logs||[],v=a.bmi||[],o={...o,...a.profile},localStorage.setItem(`dailyLogs_${h}`,JSON.stringify(c)),localStorage.setItem(`bmiHistory_${h}`,JSON.stringify(v)),M(),t.textContent=l,alert(n("ui.successRestore")),location.reload()},1500):(alert("Aucune sauvegarde trouvée / No backup found."),t.textContent=l)}),document.getElementById("add-profile-btn")?.addEventListener("click",ue),document.getElementById("pin-toggle")?.addEventListener("click",()=>{o.isSecurityEnabled?confirm(n("ui.disablePinConfirm"))&&(o.isSecurityEnabled=!1,o.pin=void 0,M(),T("profile")):K(n("ui.setupPin"),"setup",t=>{o.isSecurityEnabled=!0,o.pin=t,M(),T("profile")})}),document.getElementById("export-pdf-btn")?.addEventListener("click",me),document.getElementById("export-data-btn")?.addEventListener("click",()=>{const t={profile:o,bmiHistory:v,dailyLogs:c},l=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),i=URL.createObjectURL(l),a=document.createElement("a");a.href=i,a.download=`flowfit_data_${o.name}.json`,a.click()}),document.getElementById("clear-data-btn")?.addEventListener("click",()=>{confirm("ATTENTION: Cela effacera toutes les données de ce profil. Continuer ?")&&(localStorage.removeItem(`bmiHistory_${h}`),localStorage.removeItem(`dailyLogs_${h}`),v=[],c=[],alert("Données effacées."),T("profile"))})},ue=()=>{const e=document.createElement("div");e.className="modal-overlay show",e.innerHTML=`
    <div class="modal-sheet">
      <h2 style="margin-bottom:20px;">Nouveau Profil</h2>
      <div class="input-group"><label>Nom</label><input type="text" id="new-name" placeholder="Ex: Sarah"></div>
      <div class="input-group"><label>Objectif Poids (kg)</label><input type="number" id="new-target" placeholder="60"></div>
      <button class="btn-primary" id="create-profile-btn">Créer le profil</button>
    </div>
  `,document.body.appendChild(e),document.getElementById("create-profile-btn")?.addEventListener("click",()=>{const t=document.getElementById("new-name").value,l=Number(document.getElementById("new-target").value);if(t&&l){const i={id:Date.now().toString(),name:t,age:25,cycleLength:28,periodLength:5,targetWeight:l,isSecurityEnabled:!1};C.push(i),M(),e.remove(),ee(i.id)}})},ee=e=>{h=e,localStorage.setItem("activeProfileId",e),o=C.find(t=>t.id===e),v=JSON.parse(localStorage.getItem(`bmiHistory_${e}`)||"[]"),c=JSON.parse(localStorage.getItem(`dailyLogs_${e}`)||"[]"),T("calendar")};window.switchProfile=ee;const M=()=>localStorage.setItem("profiles",JSON.stringify(C)),pe=()=>{const e=Number(document.getElementById("h-height").value)/100,t=Number(document.getElementById("h-weight").value);e>0&&t>0&&(v.push({date:new Date().toLocaleDateString("fr-FR"),weight:t,height:e*100,bmi:t/(e*e)}),localStorage.setItem(`bmiHistory_${h}`,JSON.stringify(v)),X())},ge=e=>e<18.5?"Insuffisant":e<25?"Normal":e<30?"Surpoids":"Obésité",me=()=>{const e=window.open("","_blank");if(!e)return alert("Veuillez autoriser les pop-ups pour générer le rapport.");const t=c.sort((i,a)=>a.date.localeCompare(i.date)).map(i=>`
      <tr>
          <td>${i.date}</td>
          <td>${i.flow||"-"}</td>
          <td>${i.symptoms.join(", ")}</td>
          <td>${i.moods.join(", ")}</td>
          <td>${i.waterIntake||0} / ${o.waterGoal||8}</td>
          <td>${i.sleepHours||0}h (${i.sleepQuality||"-"})</td>
      </tr>
  `).join(""),l=`
      <html>
      <head>
          <title>Rapport Santé - ${o.name}</title>
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
                  <p><strong>Nom:</strong> ${o.name}</p>
                  <p><strong>Cycle:</strong> ${o.cycleLength} jours (Règles: ${o.periodLength}j)</p>
                  <p><strong>Objectif Poids:</strong> ${o.targetWeight} kg</p>
              </div>
              <div class="stat-card">
                  <h3 style="margin-top:0;">Statistiques Globales</h3>
                  <p><strong>Jours suivis:</strong> ${c.length}</p>
                  <p><strong>Dernier IMC:</strong> ${v.length?v[v.length-1].bmi.toFixed(1):"N/A"}</p>
                  <p><strong>Sommeil Moyen:</strong> ${c.length?(c.reduce((i,a)=>i+(a.sleepHours||0),0)/c.length).toFixed(1):0}h</p>
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
                  ${t||'<tr><td colspan="6" style="text-align:center">Aucune donnée enregistrée</td></tr>'}
              </tbody>
          </table>

          <div class="footer">
              Généré le ${new Date().toLocaleDateString("fr-FR")} par Flow & Fit
          </div>

          <script>
            window.onload = () => { setTimeout(() => window.print(), 500); };
          <\/script>
      </body>
      </html>
  `;e.document.write(l),e.document.close()},te=(e,t,l)=>{if(!e)return{nextPeriod:null,nextPeriodEnd:null,fertileWindowStart:null,fertileWindowEnd:null,ovulation:null};const i=new Date(e),a=new Date(i);a.setDate(i.getDate()+t);const s=new Date(a);s.setDate(a.getDate()+l-1);const d=new Date(a);d.setDate(a.getDate()-14);const r=new Date(d);r.setDate(d.getDate()-5);const p=new Date(d);return p.setDate(d.getDate()+1),{nextPeriod:a,nextPeriodEnd:s,fertileWindowStart:r,fertileWindowEnd:p,ovulation:d}},ve=e=>{const t=document.createElement("div");t.className="notification-toast",t.innerHTML=`<i class="fas fa-check-circle"></i> <span>${e}</span>`,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),100),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),400)},3e3)},U=()=>{if(document.querySelector(".fab-container"))return;const e=document.createElement("div");e.className="fab-container",e.innerHTML=`
    <div class="fab-menu">
      <div class="fab-item" id="quick-period"><i class="fas fa-tint" style="color:var(--terracotta);"></i> ${n("ui.periodStart")}</div>
      <div class="fab-item" id="quick-mood"><i class="fas fa-smile" style="color:var(--sage);"></i> ${n("ui.moodLabel")}</div>
      <div class="fab-item" id="quick-sport"><i class="fas fa-running" style="color:var(--sage-dark);"></i> Sport</div>
    </div>
    <button class="fab-main"><i class="fas fa-plus"></i></button>
  `,document.body.appendChild(e),e.querySelector(".fab-main")?.addEventListener("click",()=>e.classList.toggle("active")),e.querySelector("#quick-period")?.addEventListener("click",()=>{e.classList.remove("active"),z(new Date().getDate())}),e.querySelector("#quick-mood")?.addEventListener("click",()=>{e.classList.remove("active"),z(new Date().getDate())}),e.querySelector("#quick-sport")?.addEventListener("click",()=>{e.classList.remove("active"),ve("Séance de sport enregistrée ! 💪")})},V=()=>{if(localStorage.getItem("seenOnboarding"))return;const e=document.createElement("div");e.className="onboarding-overlay";const t=[{title:"Bienvenue sur Flow & Fit 🌸",desc:"Votre compagnon pour un cycle serein et une santé équilibrée.",icon:"fa-heart"},{title:"Suivi de Cycle 📅",desc:"Anticipez vos règles et votre période fertile en un coup d'œil.",icon:"fa-calendar-alt"},{title:"Santé & Bien-être 🧘‍♀️",desc:"Adaptez votre sommeil, sport et nutrition à votre rythme biologique.",icon:"fa-spa"}];let l=0;const i=()=>{e.innerHTML=`
      <i class="fas ${t[l].icon} fa-4x" style="color:var(--terracotta); margin-bottom:30px; animation: popIn 0.5s;"></i>
      <h2 style="font-size:24px; margin-bottom:15px; color:var(--text-main);">${t[l].title}</h2>
      <p style="color:var(--text-muted); margin-bottom:40px; line-height:1.6; max-width:300px;">${t[l].desc}</p>
      
      <div class="onboarding-dots">
        ${t.map((a,s)=>`<div class="dot ${s===l?"active":""}"></div>`).join("")}
      </div>

      <button class="btn-primary" id="next-slide-btn" style="margin-top:40px; width:auto; padding:12px 40px;">
        ${l===t.length-1?"C'est parti ! ✨":"Suivant"}
      </button>
    `,e.querySelector("#next-slide-btn")?.addEventListener("click",()=>{l<t.length-1?(l++,i()):(localStorage.setItem("seenOnboarding","true"),e.style.opacity="0",setTimeout(()=>e.remove(),500))})};i(),document.body.appendChild(e)},fe=()=>{if(!E)return;q.textContent="Aperçu 🏡";const t=te(o.lastPeriodDate,o.cycleLength,o.periodLength).nextPeriod,l=new Date;let i="Phase Folliculaire 🌿",a="theme-follicular",s="Énergie montante ! Idéal pour le sport.";if(o.lastPeriodDate){const p=new Date(o.lastPeriodDate),u=Math.abs(l.getTime()-p.getTime()),m=Math.ceil(u/(1e3*60*60*24));m<=o.periodLength?(i="Phase Menstruelle 🌸",a="theme-menstrual",s="Repos et douceur. Hydratez-vous bien."):m>o.cycleLength-14-2&&m<o.cycleLength-14+2?(i="Ovulation ✨",a="theme-ovulatory",s="Rayonnante ! Osez les projets créatifs."):m>=o.cycleLength-14+2&&(i="Phase Lutéale 🍂",a="theme-luteal",s="Écoutez votre corps, ralentissez le rythme.")}let d=0;if(t){const p=t.getTime()-l.getTime();d=Math.ceil(p/(1e3*60*60*24))}E.innerHTML=`
    <!-- Hero Phase Card -->
    <div class="phase-card ${a}">
       <div style="position:relative; z-index:2;">
          <div style="font-size:14px; opacity:0.9; margin-bottom:5px;">Aujourd'hui</div>
          <h2 style="font-size:28px; margin-bottom:10px;">${i}</h2>
          <p style="font-size:16px; font-weight:500; opacity:0.95;"><i class="fas fa-lightbulb"></i> ${s}</p>
          
          <div style="margin-top:20px; display:inline-flex; align-items:center; background:rgba(255,255,255,0.2); padding:5px 15px; border-radius:20px;">
             <i class="fas fa-hourglass-half" style="margin-right:8px;"></i> Règles dans ${d} jours
          </div>
       </div>
    </div>

    <!-- Quick Stats Row -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:25px;">
        <div class="card" style="margin:0; padding:15px; text-align:center;">
           <i class="fas fa-tint" style="color:var(--sage); font-size:20px; margin-bottom:5px;"></i>
           <div style="font-size:12px; color:var(--text-muted);">Hydratation</div>
           <div style="font-weight:700; font-size:18px;">
             ${c.find(p=>p.date===l.toISOString().split("T")[0])?.waterIntake||0}/${o.waterGoal||8}
           </div>
        </div>
        <div class="card" style="margin:0; padding:15px; text-align:center;">
           <i class="fas fa-moon" style="color:var(--terracotta); font-size:20px; margin-bottom:5px;"></i>
           <div style="font-size:12px; color:var(--text-muted);">Sommeil</div>
           <div style="font-weight:700; font-size:18px;">
             ${c.find(p=>p.date===l.toISOString().split("T")[0])?.sleepHours||0}h
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
  `;const r=document.getElementById("calendar-wrapper");r&&N(r)},T=e=>{switch(J=e,localStorage.setItem("lastView",e),Y.forEach(t=>t.classList.toggle("active",t.getAttribute("data-view")===e)),e){case"home":fe();break;case"calendar":N();break;case"health":X();break;case"tips":ce();break;case"profile":Z();break}};Y.forEach(e=>e.addEventListener("click",()=>{const t=e.getAttribute("data-view");t&&T(t)}));re();o.isSecurityEnabled&&o.pin?(E&&(E.innerHTML=""),K(n("ui.confirmPin"),"verify",()=>{T(J),U(),V()})):(T(J),U(),V());
