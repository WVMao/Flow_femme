(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();let G=localStorage.getItem("lastView")||"calendar",E=new Date().getMonth(),D=new Date().getFullYear();const X=[{id:"1",name:"Flow",age:26,cycleLength:28,periodLength:5,targetWeight:60,waterGoal:8,sleepGoal:8,lastPeriodDate:new Date(new Date().setDate(new Date().getDate()-25)).toISOString().split("T")[0],isSecurityEnabled:!1,language:"fr"}];let k=JSON.parse(localStorage.getItem("profiles")||JSON.stringify(X)),y=localStorage.getItem("activeProfileId")||k[0].id,o=k.find(t=>t.id===y)||k[0];const j={fr:{nav:{calendar:"Calendrier",health:"Santé",tips:"Conseils",profile:"Profil"},titles:{calendar:"Mon Calendrier 📅",health:"Santé & IMC ⚖️",tips:"Conseils Santé 💡",profile:"Votre Profil 🌸",report:"Rapport Santé"},symptoms:["Crampes","Maux de tête","Acné","Ballonnements","Fatigue","Seins sensibles","Bas du dos"],moods:["Heureuse","Calme","Irritable","Sensible","Épuisée","Anxieuse"],phases:{menstrual:"Règles",follicular:"Folliculaire",ovulatory:"Ovulation",luteal:"Lutéale"},ui:{save:"Enregistrer",cancel:"Annuler",edit:"Modifier",delete:"Supprimer",addProfile:"Ajouter un profil",switchProfile:"Changer de Profil",security:"Sécurité",pinProtect:"Protéger par PIN",exportJSON:"Exporter (JSON)",exportPDF:"📄 Générer Rapport (PDF)",clearData:"Supprimer tout",createProfile:"Créer le profil",today:"Aujourd'hui",fertile:"Fertile",periodStart:"Prochaines Règles",water:"Hydratation 💧",sleep:"Sommeil 🌙",sleepQuality:"Qualité",moodChart:"Analyse d'Humeur 📊",weightChart:"Suivi du Poids",bmiCalc:"Calculateur d'IMC",height:"Taille (cm)",weight:"Poids (kg)",calc:"Calculer & Sauvegarder",goalWeight:"Objectif Poids",current:"Actuel",none:"Aucune mesure enregistrée",journal:"Journal du",flow:"Flux",symptomLabel:"Symptômes",moodLabel:"Humeur",nutrition:"Nutrition 🥗",notes:"Notes",breakfast:"☕ Petit déjeuner",lunch:"🍲 Déjeuner",dinner:"🍝 Dîner",snack:"🍎 Collation",confirmPin:"Entrez votre PIN",createPin:"Créer PIN",setupPin:"Configurer PIN",lang:"Langue / Language",cloud:"Sauvegarde Cloud ☁️",syncNow:"🔄 Synchroniser",lastSync:"Dernière synchro",synced:"À jour",notSynced:"Non synchronisé",restore:"📥 Restaurer",confirmRestore:"Cela remplacera vos données actuelles par la sauvegarde. Continuer ?",syncing:"Synchronisation...",restoring:"Restauration...",successSync:"Données sauvegardées en ligne ! ✅",successRestore:"Données restaurées ! ✅",profileUpdated:"Profil mis à jour !",disablePinConfirm:"Désactiver PIN ?",setupPinTitle:"Créer PIN",predictions:"Prévisions",waterGoalAchieved:"🎉 Objectif atteint ! Bravo !",waterGoalContinue:"Continuez comme ça !",sleepQualityBad:"Mauvais",sleepQualityAverage:"Moyen",sleepQualityGood:"Bon",sleepGoal:"Objectif",flowNone:"Aucun",flowLight:"Léger",flowMedium:"Moyen",flowHeavy:"Abondant",breakfastPlaceholder:"Ex: Avoine, Fruits...",lunchPlaceholder:"Ex: Salade Quinoa...",dinnerPlaceholder:"Ex: Soupe, Légumes...",snackPlaceholder:"Ex: Amandes, Yaourt..."}},en:{nav:{calendar:"Calendar",health:"Health",tips:"Tips",profile:"Profile"},titles:{calendar:"My Calendar 📅",health:"Health & BMI ⚖️",tips:"Health Tips 💡",profile:"Your Profile 🌸",report:"Health Report"},symptoms:["Cramps","Headache","Acne","Bloating","Fatigue","Tender Breasts","Low Back Pain"],moods:["Happy","Calm","Irritable","Sensitive","Exhausted","Anxious"],phases:{menstrual:"Menstrual",follicular:"Follicular",ovulatory:"Ovulation",luteal:"Luteal"},ui:{save:"Save",cancel:"Cancel",edit:"Edit",delete:"Delete",addProfile:"Add Profile",switchProfile:"Switch Profile",security:"Security",pinProtect:"PIN Protection",exportJSON:"Export (JSON)",exportPDF:"📄 Generate Report (PDF)",clearData:"Clear All Data",createProfile:"Create Profile",today:"Today",fertile:"Fertile",periodStart:"Next Period",water:"Hydration 💧",sleep:"Sleep 🌙",sleepQuality:"Quality",moodChart:"Mood Analysis 📊",weightChart:"Weight Tracker",bmiCalc:"BMI Calculator",height:"Height (cm)",weight:"Weight (kg)",calc:"Calculate & Save",goalWeight:"Weight Goal",current:"Current",none:"No measurement recorded",journal:"Journal for",flow:"Flow",symptomLabel:"Symptoms",moodLabel:"Mood",nutrition:"Nutrition 🥗",notes:"Notes",breakfast:"☕ Breakfast",lunch:"🍲 Lunch",dinner:"🍝 Dinner",snack:"🍎 Snack",confirmPin:"Enter PIN",createPin:"Create PIN",setupPin:"Setup PIN",lang:"Langue / Language",cloud:"Cloud Backup ☁️",syncNow:"🔄 Sync Now",lastSync:"Last Synced",synced:"Up to date",notSynced:"Not synced",restore:"📥 Restore",confirmRestore:"This will replace your current data with the backup. Continue?",syncing:"Syncing...",restoring:"Restoring...",successSync:"Data saved to cloud! ✅",successRestore:"Data restored! ✅",profileUpdated:"Profile updated!",disablePinConfirm:"Disable PIN?",setupPinTitle:"Create PIN",predictions:"Predictions",waterGoalAchieved:"🎉 Goal reached! Well done!",waterGoalContinue:"Keep going!",sleepQualityBad:"Bad",sleepQualityAverage:"Average",sleepQualityGood:"Good",sleepGoal:"Goal",flowNone:"None",flowLight:"Light",flowMedium:"Medium",flowHeavy:"Heavy",breakfastPlaceholder:"Ex: Oatmeal, Fruits...",lunchPlaceholder:"Ex: Quinoa Salad...",dinnerPlaceholder:"Ex: Soup, Veggies...",snackPlaceholder:"Ex: Almonds, Yogurt..."}}},i=t=>{const a=o.language||"fr",l=t.split(".");let n=j[a];for(const e of l)n=n?.[e];return n||t},Z=()=>j[o.language||"fr"].symptoms,ee=()=>j[o.language||"fr"].moods;let h=JSON.parse(localStorage.getItem(`bmiHistory_${y}`)||"[]"),c=JSON.parse(localStorage.getItem(`dailyLogs_${y}`)||"[]");const te=[{title:"Nutrition Menstruelle",content:"Privilégiez les aliments riches en fer et magnésium.",category:"nutrition",phase:"menstrual"},{title:"Énergie Folliculaire",content:"C'est le moment idéal pour des entraînements cardio intenses.",category:"sport",phase:"follicular"},{title:"Bien-être Holistique",content:"L'ovulation est propice à la créativité.",category:"wellbeing",phase:"ovulatory"},{title:"Phase Lutéale",content:"Priorisez le repos et les activités douces comme le Yoga.",category:"sport",phase:"luteal"}],P=document.getElementById("app-content"),F=document.getElementById("view-title"),_=document.querySelectorAll(".nav-item"),q=document.getElementById("current-date"),ae=()=>{if(q){const t=new Date;q.textContent=t.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"})}},Q=(t="Entrez votre PIN",a="verify",l)=>{const n=document.createElement("div");n.className="lock-screen";let e="";const s=()=>{n.querySelectorAll(".pin-dot").forEach((d,r)=>d.classList.toggle("filled",r<e.length))};n.innerHTML=`
    <i class="fas fa-lock fa-3x" style="color:var(--terracotta); margin-bottom:20px;"></i>
    <h2 style="margin-bottom:10px;">${t}</h2>
    <div class="pin-display">
      <div class="pin-dot"></div><div class="pin-dot"></div><div class="pin-dot"></div><div class="pin-dot"></div>
    </div>
    <div class="numpad">
      ${[1,2,3,4,5,6,7,8,9].map(d=>`<button class="num-btn" data-val="${d}">${d}</button>`).join("")}
      <button class="num-btn empty"></button>
      <button class="num-btn" data-val="0">0</button>
      <button class="num-btn delete" data-val="del"><i class="fas fa-backspace"></i></button>
    </div>
    ${a==="verify"?"":'<button class="btn-primary" style="margin-top:30px; background:var(--bg-app); color:var(--text-main); width:auto; padding:10px 30px;" id="cancel-pin">Annuler</button>'}
  `,document.body.appendChild(n),n.querySelectorAll(".num-btn").forEach(d=>{d.addEventListener("click",()=>{const r=d.getAttribute("data-val");r==="del"?e=e.slice(0,-1):r&&e.length<4&&(e+=r),s(),e.length===4&&setTimeout(()=>{a==="verify"?e===o.pin?(n.classList.add("out"),setTimeout(()=>{n.remove(),l&&l(e)},400)):(e="",s(),alert("PIN Incorrect")):l&&(l(e),n.remove())},200)})}),document.getElementById("cancel-pin")?.addEventListener("click",()=>n.remove())},A=()=>{if(!P)return;F.textContent=`Bonjour, ${o.name} ✨`;const t=o.language==="en"?["January","February","March","April","May","June","July","August","September","October","November","December"]:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],a=new Date(D,E,1).getDay(),l=new Date(D,E+1,0).getDate(),n=a===0?6:a-1,e=ce(o.lastPeriodDate,o.cycleLength,o.periodLength),s=e.nextPeriod,d=e.nextPeriodEnd,r=o.language==="en"?"en-US":"fr-FR",m={day:"numeric",month:"long"},p=s?s.toLocaleDateString(r,m):i("ui.unknown"),f=e.fertileWindowStart?`${e.fertileWindowStart.toLocaleDateString(r,{day:"numeric"})} - ${e.fertileWindowEnd?.toLocaleDateString(r,m)}`:i("ui.unknown"),u=new Date().toISOString().split("T")[0],$=c.find(g=>g.date===u)||{waterIntake:0},I=o.waterGoal||8,b=$.waterIntake||0,S=$.sleepHours||7,L=$.sleepQuality||null;P.innerHTML=`
    <div class="card" style="background: linear-gradient(135deg, white, var(--bg-app));">
      <div class="cal-nav">
        <button class="cal-nav-btn" id="prev-month"><i class="fas fa-chevron-left"></i></button>
        <h2>${t[E]} ${D}</h2>
        <button class="cal-nav-btn" id="next-month"><i class="fas fa-chevron-right"></i></button>
      </div>
      <div class="calendar-container">
        ${["L","M","M","J","V","S","D"].map(g=>`<div style="font-size:12px; color:var(--text-muted); font-weight:700;">${g}</div>`).join("")}
        ${Array.from({length:n},()=>"<div></div>").join("")}
        ${Array.from({length:l},(g,v)=>{const w=v+1,x=new Date(D,E,w),C=`${D}-${(E+1).toString().padStart(2,"0")}-${w.toString().padStart(2,"0")}`,M=new Date().toDateString()===x.toDateString(),K=c.some(O=>O.date===C);let T=!1,W=!1,J=!1;if(s&&d&&(x>=s&&x<=d&&(T=!0),x>=e.fertileWindowStart&&x<=e.fertileWindowEnd&&(W=!0),x.toDateString()===e.ovulation?.toDateString()&&(J=!0)),o.lastPeriodDate){const O=new Date(o.lastPeriodDate),R=new Date(O);R.setDate(O.getDate()+o.periodLength-1),x>=O&&x<=R&&(T=!0)}return`
            <div class="cal-day ${T?"period":""} ${W?"fertile":""} ${J?"ovulation":""} ${M?"today":""}" data-day="${w}">
              ${w}
              ${K?'<div class="logged-dot"></div>':""}
              ${J?'<div class="ovulation-dot"></div>':""}
            </div>
          `}).join("")}
      </div>
    </div>

    <div class="card">
      <h3>${i("ui.predictions")}</h3>
      <div style="margin-top:15px; display:grid; gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:14px; color:var(--text-muted);">${i("ui.periodStart")}</span>
          <span style="font-weight:700;">${p}</span>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:14px; color:var(--text-muted);">${i("ui.fertile")}</span>
          <span style="font-weight:700;">${f}</span>
        </div>
      </div>
    </div>

    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <h3>${i("ui.water")}</h3>
        <span style="font-size:12px; color:var(--text-muted);" id="water-text">${b} / ${I}</span>
      </div>
      <div class="water-grid">
        ${Array.from({length:I},(g,v)=>`
          <div class="water-glass ${v<b?"filled":""}" data-idx="${v}"></div>
        `).join("")}
      </div>
      <p class="water-summary">${b>=I?i("ui.waterGoalAchieved"):i("ui.waterGoalContinue")}</p>
    </div>

    <div class="card sleep-card">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <h3 style="color:white;">${i("ui.sleep")}</h3>
        <span style="font-size:12px; opacity:0.8;">${i("ui.sleepGoal")}: ${o.sleepGoal||8}h</span>
      </div>
      <div class="sleep-controls">
        <button class="sleep-btn" id="sleep-minus"><i class="fas fa-minus"></i></button>
        <div class="sleep-display">${S}h</div>
        <button class="sleep-btn" id="sleep-plus"><i class="fas fa-plus"></i></button>
      </div>
      <div class="quality-grid">
        <div class="quality-opt ${L==="bad"?"active":""}" data-q="bad"><span>😞</span><label>${i("ui.sleepQualityBad")}</label></div>
        <div class="quality-opt ${L==="average"?"active":""}" data-q="average"><span>😐</span><label>${i("ui.sleepQualityAverage")}</label></div>
        <div class="quality-opt ${L==="good"?"active":""}" data-q="good"><span>🙂</span><label>${i("ui.sleepQualityGood")}</label></div>
      </div>
    </div>

    <button class="btn-primary" id="log-period-btn"><i class="fas fa-plus-circle"></i> ${i("ui.edit")}</button>
  `,document.getElementById("prev-month")?.addEventListener("click",()=>{E--,E<0&&(E=11,D--),A()}),document.getElementById("next-month")?.addEventListener("click",()=>{E++,E>11&&(E=0,D++),A()}),document.getElementById("log-period-btn")?.addEventListener("click",()=>z(new Date().getDate())),document.querySelectorAll(".cal-day").forEach(g=>{g.addEventListener("click",()=>{const v=Number(g.getAttribute("data-day"));v&&z(v)})}),document.querySelectorAll(".water-glass").forEach(g=>{g.addEventListener("click",()=>{const v=Number(g.getAttribute("data-idx"));let w=v+1;b===w&&(w=v);const x=c.findIndex(M=>M.date===u),C=x>-1?{...c[x],waterIntake:w}:{date:u,symptoms:[],moods:[],waterIntake:w};x>-1?c[x]=C:c.push(C),localStorage.setItem(`dailyLogs_${y}`,JSON.stringify(c)),A()})});const H=(g,v)=>{const w=c.findIndex(M=>M.date===u),C={...w>-1?c[w]:{date:u,symptoms:[],moods:[]},sleepHours:g,sleepQuality:v};w>-1?c[w]=C:c.push(C),localStorage.setItem(`dailyLogs_${y}`,JSON.stringify(c)),A()};document.getElementById("sleep-minus")?.addEventListener("click",()=>{S>0&&H(S-.5,L)}),document.getElementById("sleep-plus")?.addEventListener("click",()=>{S<24&&H(S+.5,L)}),document.querySelectorAll(".quality-opt").forEach(g=>{g.addEventListener("click",()=>{const v=g.getAttribute("data-q");H(S,v)})})},z=t=>{const a=`${D}-${(E+1).toString().padStart(2,"0")}-${t.toString().padStart(2,"0")}`,l=c.find(r=>r.date===a)||{date:a,symptoms:[],moods:[],flow:"none",meals:[]},n=l.meals||[],e=r=>n.find(m=>m.type===r)?.description||"",s=o.language==="en"?"en-US":"fr-FR",d=document.createElement("div");d.className="modal-overlay show",d.innerHTML=`
    <div class="modal-sheet">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:25px;">
        <h2>${i("ui.journal")} ${t} ${new Intl.DateTimeFormat(s,{month:"long"}).format(new Date(D,E))}</h2>
        <i class="fas fa-times" id="close-modal" style="cursor:pointer; color:var(--text-muted);"></i>
      </div>
      <div class="input-group"><label>${i("ui.flow")}</label><div style="display:flex; gap:10px;">
        ${["none","light","medium","heavy"].map(r=>`<div class="symptom-tag ${l.flow===r?"selected":""}" data-type="flow" data-val="${r}">${i(`ui.flow${r.charAt(0).toUpperCase()+r.slice(1)}`)}</div>`).join("")}
      </div></div>
      <div class="input-group"><label>${i("ui.symptomLabel")}</label><div class="tag-grid">
        ${Z().map(r=>`<div class="symptom-tag ${l.symptoms.includes(r)?"selected":""}" data-type="symptom" data-val="${r}">${r}</div>`).join("")}
      </div></div>
      
      <div class="meal-section">
        <h3 style="font-size:16px; margin-bottom:15px; color:var(--text-main);">${i("ui.nutrition")}</h3>
        <div class="meal-input-group"><label>${i("ui.breakfast")}</label><input class="meal-input" data-type="breakfast" value="${e("breakfast")}" placeholder="${i("ui.breakfastPlaceholder")}"></div>
        <div class="meal-input-group"><label>${i("ui.lunch")}</label><input class="meal-input" data-type="lunch" value="${e("lunch")}" placeholder="${i("ui.lunchPlaceholder")}"></div>
        <div class="meal-input-group"><label>${i("ui.dinner")}</label><input class="meal-input" data-type="dinner" value="${e("dinner")}" placeholder="${i("ui.dinnerPlaceholder")}"></div>
        <div class="meal-input-group"><label>${i("ui.snack")}</label><input class="meal-input" data-type="snack" value="${e("snack")}" placeholder="${i("ui.snackPlaceholder")}"></div>
      </div>

      <div class="input-group"><label>${i("ui.moodLabel")}</label><div class="tag-grid">
        ${ee().map(r=>`<div class="symptom-tag ${l.moods.includes(r)?"selected":""}" data-type="mood" data-val="${r}">${r}</div>`).join("")}
      </div></div>
      <div class="input-group"><label>${i("ui.notes")}</label>
        <textarea id="log-notes" style="width:100%; padding:14px; border-radius:12px; border:1px solid var(--sage-light); background:var(--cream); height:80px; resize:none; font-family:inherit;">${l.notes||""}</textarea>
      </div>
      <button class="btn-primary" id="save-log-btn">${i("ui.save")}</button>
    </div>
  `,document.body.appendChild(d),d.querySelectorAll(".symptom-tag").forEach(r=>{r.addEventListener("click",()=>{r.getAttribute("data-type")==="flow"?(d.querySelectorAll('[data-type="flow"]').forEach(p=>p.classList.remove("selected")),r.classList.add("selected")):r.classList.toggle("selected")})}),document.getElementById("close-modal")?.addEventListener("click",()=>d.remove()),document.getElementById("save-log-btn")?.addEventListener("click",()=>{const r=Array.from(d.querySelectorAll('.symptom-tag[data-type="symptom"].selected')).map(b=>b.getAttribute("data-val")),m=Array.from(d.querySelectorAll('.symptom-tag[data-type="mood"].selected')).map(b=>b.getAttribute("data-val")),p=d.querySelector('.symptom-tag[data-type="flow"].selected')?.getAttribute("data-val")||"none",f=document.getElementById("log-notes").value,u=[];d.querySelectorAll(".meal-input").forEach(b=>{const S=b.value.trim(),L=b.getAttribute("data-type");S&&u.push({type:L,description:S})});const $={...l,symptoms:r,moods:m,flow:p,date:a,notes:f,meals:u},I=c.findIndex(b=>b.date===a);I>-1?c[I]=$:c.push($),localStorage.setItem(`dailyLogs_${y}`,JSON.stringify(c)),A(),d.remove()})},U=()=>{if(!P)return;F.textContent=i("titles.health");const t=h[h.length-1],a=o.targetWeight||60,l=t?.weight||0,n=l>0?Math.min(100,Math.max(0,(1-Math.abs(l-a)/Math.abs(h[0]?.weight-a||1))*100)):0;P.innerHTML=`
    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
        <h3>${i("ui.goalWeight")}</h3>
        <span style="font-weight:700; color:var(--terracotta);">${a} kg</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width:${h.length>1?n:0}%"></div>
      </div>
      <p style="font-size:12px; color:var(--text-muted); text-align:right;">
        ${l>0?`${i("ui.current")}: ${l}kg`:i("ui.none")}
      </p>
    </div>

    <div class="card">
      <h3>${i("ui.bmiCalc")}</h3>
      <div class="bmi-grid">
        <div class="input-group"><label>${i("ui.height")}</label><input type="number" id="h-height" value="${t?.height||""}"></div>
        <div class="input-group"><label>${i("ui.weight")}</label><input type="number" id="h-weight" value="${t?.weight||""}"></div>
      </div>
      <button class="btn-primary" id="calc-bmi-btn">${i("ui.calc")}</button>
      <div id="bmi-result" style="margin-top:20px; text-align:center; display:${t?"block":"none"};">
        <h2 style="font-size:32px; color:var(--terracotta);">${t?.bmi.toFixed(1)||""}</h2>
        <p style="font-weight:600; color:var(--sage-dark);">${se(t?.bmi||0)}</p>
      </div>
    </div>

  <div class="card">
      <h3>${i("ui.weightChart")}</h3>
      <div class="chart-container" id="weight-chart"></div>
    </div>

    <div class="card">
      <h3>${i("ui.moodChart")}</h3>
      <div class="chart-container" id="mood-chart"></div>
    </div>
  `,document.getElementById("calc-bmi-btn")?.addEventListener("click",re),ne(),ie()},ie=()=>{const t=document.getElementById("mood-chart");if(!t)return;const a=new Date,l=[];for(let p=6;p>=0;p--){const f=new Date(a);f.setDate(f.getDate()-p);const u=f.toISOString().split("T")[0],$=c.find(S=>S.date===u);let I=0;if($&&$.moods.length>0){const S={Heureuse:5,Calme:4,Sensible:3,Anxieuse:2,Irritable:1,Épuisée:0},L=o.language==="en"?$.moods.map(g=>j.fr.moods[j.en.moods.indexOf(g)]):$.moods;I=L.reduce((g,v)=>g+(S[v]||2.5),0)/L.length}const b=o.language==="en"?"en-US":"fr-FR";l.push({date:f.toLocaleDateString(b,{weekday:"short"}),score:I})}const n=t.clientWidth,e=200,s=30,d=p=>p/(l.length-1)*(n-2*s)+s,r=p=>e-(p/5*(e-2*s)+s);let m=`M ${d(0)} ${r(l[0].score)}`;for(let p=1;p<l.length;p++)m+=` L ${d(p)} ${r(l[p].score)}`;t.innerHTML=`
        <svg class="chart-svg" viewBox="0 0 ${n} ${e}">
          <!-- Background Zones -->
          <rect x="${s}" y="${s}" width="${n-2*s}" height="${(e-2*s)/3}" fill="rgba(129, 178, 154, 0.2)" /> <!-- Good -->
          <rect x="${s}" y="${s+(e-2*s)/3}" width="${n-2*s}" height="${(e-2*s)/3}" fill="rgba(242, 204, 143, 0.2)" /> <!-- Mid -->
          <rect x="${s}" y="${s+2*(e-2*s)/3}" width="${n-2*s}" height="${(e-2*s)/3}" fill="rgba(224, 122, 95, 0.2)" /> <!-- Low -->
          
          <path class="chart-line" d="${m}" style="stroke: var(--sage); stroke-width:3;" />
          ${l.map((p,f)=>`<circle class="chart-dot" cx="${d(f)}" cy="${r(p.score)}" r="4" style="fill:var(--sage-dark);" /><text class="chart-label" x="${d(f)}" y="${e-5}" text-anchor="middle">${p.date}</text>`).join("")}
        </svg>
    `},ne=()=>{const t=document.getElementById("weight-chart");if(!t||h.length<2){t&&(t.innerHTML='<p style="text-align:center; color:var(--text-muted); margin-top:80px;">Saisissez au moins 2 mesures.</p>');return}const a=30,l=t.clientWidth,n=200,e=h.slice(-7),s=Math.min(...e.map(u=>u.weight))-2,d=Math.max(...e.map(u=>u.weight))+2,r=u=>u/(e.length-1)*(l-2*a)+a,m=u=>n-((u-s)/(d-s)*(n-2*a)+a);let p=`M ${r(0)} ${m(e[0].weight)}`,f=`M ${r(0)} ${n} L ${r(0)} ${m(e[0].weight)}`;for(let u=1;u<e.length;u++)p+=` L ${r(u)} ${m(e[u].weight)}`,f+=` L ${r(u)} ${m(e[u].weight)}`;f+=` L ${r(e.length-1)} ${n} Z`,t.innerHTML=`
    <svg class="chart-svg" viewBox="0 0 ${l} ${n}">
      <defs><linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="var(--terracotta)" /><stop offset="100%" stop-color="white" /></linearGradient></defs>
      <path class="chart-area" d="${f}" /><path class="chart-line" d="${p}" />
      ${e.map((u,$)=>`<circle class="chart-dot" cx="${r($)}" cy="${m(u.weight)}" r="4" /><text class="chart-label" x="${r($)}" y="${n-5}" text-anchor="middle">${u.date.split("/")[0]}</text>`).join("")}
    </svg>
  `},oe=()=>{P&&(F.textContent="Conseils Santé 💡",P.innerHTML=`<div style="display:grid; gap:20px;">
    ${te.map(t=>`
      <div class="card tip-card" style="background:${t.phase==="menstrual"?"var(--terracotta)":"var(--sage)"}">
        <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
          <span class="phase-chip" style="background:rgba(255,255,255,0.2); color:white; border:1px solid rgba(255,255,255,0.4)">${t.phase}</span>
          <i class="fas ${t.category==="nutrition"?"fa-apple-alt":t.category==="sport"?"fa-running":"fa-spa"}"></i>
        </div>
        <h3>${t.title}</h3><p>${t.content}</p>
      </div>`).join("")}
  </div>`)},V=()=>{if(!P)return;F.textContent=i("titles.profile"),P.innerHTML=`
    <div class="card">
      <h3>${i("ui.switchProfile")}</h3>
      <div class="profile-card-mini" id="add-profile-btn">
        <div class="avatar-circle plus"><i class="fas fa-plus"></i></div>
        <div><h4 style="font-size:14px; color:var(--terracotta);">${i("ui.addProfile")}</h4></div>
      </div>
      ${k.map(a=>a.id!==y?`
        <div class="profile-card-mini" onclick="window.switchProfile('${a.id}')">
          <div class="avatar-circle">${a.name[0]}</div>
          <div><h4 style="font-size:14px;">${a.name}</h4></div>
        </div>
      `:"").join("")}
    </div>

    <div class="card">
      <h3>${i("ui.lang")} 🌍</h3>
      <div style="display:flex; gap:10px;">
        <button class="btn-primary" id="lang-fr" style="background:${o.language==="fr"||!o.language?"var(--terracotta)":"var(--sage-light)"};">Français</button>
        <button class="btn-primary" id="lang-en" style="background:${o.language==="en"?"var(--terracotta)":"var(--sage-light)"};">English</button>
      </div>
    </div>

    <div class="card">
      <h3>${i("ui.security")}</h3>
      <div id="pin-toggle" style="display:flex; justify-content:space-between; align-items:center; cursor:pointer;">
        <span>${i("ui.pinProtect")}</span>
        <div style="width:40px; height:20px; background:${o.isSecurityEnabled?"var(--terracotta)":"var(--sage-light)"}; border-radius:10px; position:relative;">
          <div style="width:16px; height:16px; background:white; border-radius:50%; position:absolute; ${o.isSecurityEnabled?"right:2px":"left:2px"}; top:2px; transition:var(--transition);"></div>
        </div>
      </div>
    </div>

    <div class="card">
      <h3>${i("ui.cloud")}</h3>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
         <div>
            <span style="font-size:12px; color:var(--text-muted);">${i("ui.lastSync")}:</span>
            <div style="font-weight:600; color:var(--sage-dark);" id="last-sync-date">${o.lastSynced?new Date(o.lastSynced).toLocaleString():i("ui.notSynced")}</div>
         </div>
         <div id="sync-status-icon" style="color:var(--sage);"><i class="fas fa-cloud"></i></div>
      </div>
      <div style="display:flex; gap:10px;">
        <button class="btn-primary" id="sync-btn" style="background:var(--terracotta); flex:1;">${i("ui.syncNow")}</button>
        <button class="btn-primary" id="restore-btn" style="background:var(--sage-light); color:var(--text-main); flex:1;">${i("ui.restore")}</button>
      </div>
    </div>

    <div class="card">
      <h3>Données</h3>
      <button class="btn-primary" id="export-pdf-btn" style="background:var(--terracotta); margin-bottom:10px;">${i("ui.exportPDF")}</button>
      <button class="btn-primary" id="export-data-btn" style="background:var(--sage-dark); margin-bottom:10px;">${i("ui.exportJSON")}</button>
      <button class="btn-primary" id="clear-data-btn" style="background:var(--terracotta-dark);">${i("ui.clearData")}</button>
    </div>
  `;const t=a=>{o.language=a,N(),location.reload()};document.getElementById("lang-fr")?.addEventListener("click",()=>t("fr")),document.getElementById("lang-en")?.addEventListener("click",()=>t("en")),document.getElementById("save-profile-btn")?.addEventListener("click",()=>{o.cycleLength=Number(document.getElementById("p-cycle").value),o.periodLength=Number(document.getElementById("p-period").value),o.targetWeight=Number(document.getElementById("p-weight").value),o.waterGoal=Number(document.getElementById("p-water").value),o.sleepGoal=Number(document.getElementById("p-sleep").value);const a=document.getElementById("p-last").value;a&&(o.lastPeriodDate=a);const l=k.findIndex(n=>n.id===y);l>-1&&(k[l]=o),N(),alert(i("ui.profileUpdated")+" ✅"),A()}),document.getElementById("sync-btn")?.addEventListener("click",()=>{const a=document.getElementById("sync-btn"),l=a.textContent;a.textContent=i("ui.syncing"),a.disabled=!0,setTimeout(()=>{const n=new Date;o.lastSynced=n.toISOString(),localStorage.setItem(`cloud_backup_${y}`,JSON.stringify({profile:o,logs:c,bmi:h})),N(),a.textContent=l,a.disabled=!1,alert(i("ui.successSync")),V()},1500)}),document.getElementById("restore-btn")?.addEventListener("click",()=>{if(!confirm(i("ui.confirmRestore")))return;const a=document.getElementById("restore-btn"),l=a.textContent;a.textContent=i("ui.restoring");const n=localStorage.getItem(`cloud_backup_${y}`);n?setTimeout(()=>{const e=JSON.parse(n);c=e.logs||[],h=e.bmi||[],o={...o,...e.profile},localStorage.setItem(`dailyLogs_${y}`,JSON.stringify(c)),localStorage.setItem(`bmiHistory_${y}`,JSON.stringify(h)),N(),a.textContent=l,alert(i("ui.successRestore")),location.reload()},1500):(alert("Aucune sauvegarde trouvée / No backup found."),a.textContent=l)}),document.getElementById("add-profile-btn")?.addEventListener("click",le),document.getElementById("pin-toggle")?.addEventListener("click",()=>{o.isSecurityEnabled?confirm(i("ui.disablePinConfirm"))&&(o.isSecurityEnabled=!1,o.pin=void 0,N(),B("profile")):Q(i("ui.setupPin"),"setup",a=>{o.isSecurityEnabled=!0,o.pin=a,N(),B("profile")})}),document.getElementById("export-pdf-btn")?.addEventListener("click",de),document.getElementById("export-data-btn")?.addEventListener("click",()=>{const a={profile:o,bmiHistory:h,dailyLogs:c},l=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),n=URL.createObjectURL(l),e=document.createElement("a");e.href=n,e.download=`flowfit_data_${o.name}.json`,e.click()}),document.getElementById("clear-data-btn")?.addEventListener("click",()=>{confirm("ATTENTION: Cela effacera toutes les données de ce profil. Continuer ?")&&(localStorage.removeItem(`bmiHistory_${y}`),localStorage.removeItem(`dailyLogs_${y}`),h=[],c=[],alert("Données effacées."),B("profile"))})},le=()=>{const t=document.createElement("div");t.className="modal-overlay show",t.innerHTML=`
    <div class="modal-sheet">
      <h2 style="margin-bottom:20px;">Nouveau Profil</h2>
      <div class="input-group"><label>Nom</label><input type="text" id="new-name" placeholder="Ex: Sarah"></div>
      <div class="input-group"><label>Objectif Poids (kg)</label><input type="number" id="new-target" placeholder="60"></div>
      <button class="btn-primary" id="create-profile-btn">Créer le profil</button>
    </div>
  `,document.body.appendChild(t),document.getElementById("create-profile-btn")?.addEventListener("click",()=>{const a=document.getElementById("new-name").value,l=Number(document.getElementById("new-target").value);if(a&&l){const n={id:Date.now().toString(),name:a,age:25,cycleLength:28,periodLength:5,targetWeight:l,isSecurityEnabled:!1};k.push(n),N(),t.remove(),Y(n.id)}})},Y=t=>{y=t,localStorage.setItem("activeProfileId",t),o=k.find(a=>a.id===t),h=JSON.parse(localStorage.getItem(`bmiHistory_${t}`)||"[]"),c=JSON.parse(localStorage.getItem(`dailyLogs_${t}`)||"[]"),B("calendar")};window.switchProfile=Y;const N=()=>localStorage.setItem("profiles",JSON.stringify(k)),re=()=>{const t=Number(document.getElementById("h-height").value)/100,a=Number(document.getElementById("h-weight").value);t>0&&a>0&&(h.push({date:new Date().toLocaleDateString("fr-FR"),weight:a,height:t*100,bmi:a/(t*t)}),localStorage.setItem(`bmiHistory_${y}`,JSON.stringify(h)),U())},se=t=>t<18.5?"Insuffisant":t<25?"Normal":t<30?"Surpoids":"Obésité",de=()=>{const t=window.open("","_blank");if(!t)return alert("Veuillez autoriser les pop-ups pour générer le rapport.");const a=c.sort((n,e)=>e.date.localeCompare(n.date)).map(n=>`
      <tr>
          <td>${n.date}</td>
          <td>${n.flow||"-"}</td>
          <td>${n.symptoms.join(", ")}</td>
          <td>${n.moods.join(", ")}</td>
          <td>${n.waterIntake||0} / ${o.waterGoal||8}</td>
          <td>${n.sleepHours||0}h (${n.sleepQuality||"-"})</td>
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
                  <p><strong>Dernier IMC:</strong> ${h.length?h[h.length-1].bmi.toFixed(1):"N/A"}</p>
                  <p><strong>Sommeil Moyen:</strong> ${c.length?(c.reduce((n,e)=>n+(e.sleepHours||0),0)/c.length).toFixed(1):0}h</p>
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
                  ${a||'<tr><td colspan="6" style="text-align:center">Aucune donnée enregistrée</td></tr>'}
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
  `;t.document.write(l),t.document.close()},B=t=>{switch(G=t,localStorage.setItem("lastView",t),_.forEach(a=>a.classList.toggle("active",a.getAttribute("data-view")===t)),t){case"calendar":A();break;case"health":U();break;case"tips":oe();break;case"profile":V();break}},ce=(t,a,l)=>{if(!t)return{nextPeriod:null,nextPeriodEnd:null,fertileWindowStart:null,fertileWindowEnd:null,ovulation:null};const n=new Date(t),e=new Date(n);e.setDate(n.getDate()+a);const s=new Date(e);s.setDate(e.getDate()+l-1);const d=new Date(e);d.setDate(e.getDate()-14);const r=new Date(d);r.setDate(d.getDate()-5);const m=new Date(d);return m.setDate(d.getDate()+1),{nextPeriod:e,nextPeriodEnd:s,fertileWindowStart:r,fertileWindowEnd:m,ovulation:d}};_.forEach(t=>t.addEventListener("click",()=>{const a=t.getAttribute("data-view");a&&B(a)}));ae();o.isSecurityEnabled&&o.pin?(P&&(P.innerHTML=""),Q(i("ui.confirmPin"),"verify",()=>{B(G)})):B(G);
