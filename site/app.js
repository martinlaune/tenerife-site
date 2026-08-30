/* ====================== Tenerife 2026 — app.js ====================== */

/* ---------- Illustrations vectorielles (composées par couches) ---------- */
const SKY = {
  day:    ["#9BE0EF","#D8F3F0"],
  warm:   ["#7FD3E0","#FFE3B0"],
  sunset: ["#F7A24B","#F8D17B"],
  dusk:   ["#3E5C8A","#E8916B"],
  green:  ["#BFE3D0","#E7F4EC"],
};
function svg(id, sky, inner){
  const [a,b]=SKY[sky]||SKY.day;
  return `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="illustration">
  <defs><linearGradient id="sky-${id}" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>
  <linearGradient id="sea-${id}" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#1E9AA0"/><stop offset="1" stop-color="#0E6F73"/></linearGradient></defs>
  <rect width="400" height="200" fill="url(#sky-${id})"/>${inner}</svg>`;
}
const sun=(x,y,r,c="#FFD86B")=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
const sea=(id,y=150)=>`<rect x="0" y="${y}" width="400" height="${200-y}" fill="url(#sea-${id})"/>
  <path d="M0 ${y+8} q20 -7 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 v40 H0Z" fill="#ffffff22"/>`;
const cloudBand=(y)=>`<g fill="#ffffff" opacity=".92">
  <ellipse cx="80" cy="${y}" rx="55" ry="16"/><ellipse cx="150" cy="${y+4}" rx="70" ry="18"/>
  <ellipse cx="250" cy="${y}" rx="75" ry="17"/><ellipse cx="340" cy="${y+5}" rx="60" ry="16"/></g>`;
const palm=(x,b,s=1)=>`<g transform="translate(${x},${b}) scale(${s})">
  <path d="M0 0 Q-3 -34 4 -54" stroke="#7A5230" stroke-width="5" fill="none" stroke-linecap="round"/>
  <g fill="#2F8F5B"><path d="M4 -54 Q-26 -60 -40 -44 Q-18 -56 4 -54"/><path d="M4 -54 Q34 -60 48 -44 Q22 -56 4 -54"/>
  <path d="M4 -54 Q-20 -76 -34 -78 Q-10 -70 4 -54"/><path d="M4 -54 Q28 -76 42 -78 Q16 -70 4 -54"/>
  <path d="M4 -54 Q0 -82 6 -92 Q10 -74 4 -54"/></g></g>`;
const tree=(x,b,s=1,c="#2F8F5B")=>`<g transform="translate(${x},${b}) scale(${s})">
  <rect x="-3" y="-22" width="6" height="24" fill="#7A5230"/><circle cx="0" cy="-30" r="20" fill="${c}"/>
  <circle cx="-14" cy="-22" r="13" fill="${c}"/><circle cx="14" cy="-22" r="13" fill="${c}"/></g>`;
const pine=(x,b,s=1)=>`<g transform="translate(${x},${b}) scale(${s})"><rect x="-2.5" y="-10" width="5" height="12" fill="#6B4A2B"/>
  <polygon points="0,-46 -16,-12 16,-12" fill="#2C7A4E"/><polygon points="0,-58 -13,-26 13,-26" fill="#36905C"/>
  <polygon points="0,-68 -10,-40 10,-40" fill="#41A468"/></g>`;

const SCENES = {
  arrival:(id)=>svg(id,"day", `${sun(330,46,26)}${cloudBand(40)}
    <path d="M0 150 q100 -34 210 -10 q120 26 190 8 V200 H0Z" fill="#2F8F5B"/>${sea(id,162)}
    <g transform="translate(150,70) rotate(-8)"><path d="M0 0 L70 8 L96 2 L70 16 L0 18 L-18 9Z" fill="#fff"/>
    <path d="M30 2 L60 -20 L70 -18 L52 4Z" fill="#dfeef0"/><path d="M30 18 L58 36 L68 34 L52 16Z" fill="#dfeef0"/>
    <circle cx="20" cy="9" r="3" fill="#1A8E92"/><circle cx="36" cy="9" r="3" fill="#1A8E92"/><circle cx="52" cy="9" r="3" fill="#1A8E92"/></g>`),
  garden:(id)=>svg(id,"green", `${sun(338,44,24,"#FFE08A")}
    <rect x="0" y="150" width="400" height="50" fill="#3FA06A"/>
    ${palm(60,168,1.5)}${palm(150,172,1.1)}${palm(330,170,1.6)}${palm(255,166,1.2)}
    <g fill="#F2B33D"><circle cx="110" cy="150" r="6"/><circle cx="200" cy="158" r="6"/><circle cx="300" cy="152" r="6"/></g>
    <g fill="#E2607A"><circle cx="140" cy="156" r="5"/><circle cx="240" cy="150" r="5"/><circle cx="350" cy="158" r="5"/></g>`),
  volcano:(id)=>svg(id,"warm", `${sun(60,46,24)}
    <polygon points="0,200 80,120 130,150 200,60 270,140 330,110 400,200" fill="#C56B3E"/>
    <polygon points="200,60 175,95 230,95" fill="#F2E4CF"/>
    <polygon points="0,200 90,150 160,175 240,140 320,168 400,150 400,200" fill="#8E4427"/>
    <g fill="#6E331C"><ellipse cx="120" cy="186" rx="22" ry="8"/><ellipse cx="300" cy="190" rx="26" ry="9"/></g>`),
  cliffs:(id)=>svg(id,"day", `${sun(60,44,22)}${cloudBand(40)}
    ${sea(id,138)}<path d="M0 138 L0 86 Q60 70 110 110 L150 138Z" fill="#3F7E54"/>
    <path d="M0 138 L0 110 Q50 96 96 128 L120 138Z" fill="#2F8F5B"/>${palm(36,96,1)}${palm(74,112,.9)}
    <path d="M260 138 Q330 96 400 120 L400 138Z" fill="#3F7E54"/>`),
  dragon:(id)=>svg(id,"warm", `${sun(330,44,22)}
    <rect x="0" y="156" width="400" height="44" fill="#C98A4E"/>
    <g transform="translate(180,156)"><rect x="-10" y="-58" width="20" height="58" fill="#6E4A2C"/>
    <g fill="#2C7A4E"><path d="M0 -58 Q-46 -64 -70 -40 Q-30 -58 0 -58"/><path d="M0 -58 Q46 -64 70 -40 Q30 -58 0 -58"/>
    <path d="M0 -58 Q-30 -92 -52 -96 Q-14 -80 0 -58"/><path d="M0 -58 Q30 -92 52 -96 Q14 -80 0 -58"/>
    <path d="M0 -58 Q-4 -100 4 -112 Q12 -86 0 -58"/></g></g>
    <path d="M40 156 q14 -22 34 -22 q20 0 30 18 l0 4Z" fill="#5B3A22"/><ellipse cx="74" cy="150" rx="14" ry="10" fill="#1c1410"/>`),
  town:(id)=>svg(id,"day", `${sun(56,42,20)}${cloudBand(36)}
    <g>
    <rect x="40" y="96" width="46" height="74" fill="#E8654F"/><polygon points="40,96 63,78 86,96" fill="#B23B2C"/>
    <rect x="92" y="84" width="44" height="86" fill="#F2B33D"/><polygon points="92,84 114,66 136,84" fill="#C9871E"/>
    <rect x="142" y="100" width="44" height="70" fill="#5FA9D6"/><polygon points="142,100 164,82 186,100" fill="#3C82AC"/>
    <rect x="192" y="86" width="46" height="84" fill="#79B98C"/><polygon points="192,86 215,68 238,86" fill="#4E9268"/>
    <rect x="244" y="98" width="44" height="72" fill="#E2607A"/><polygon points="244,98 266,80 288,98" fill="#B23F58"/>
    <rect x="294" y="88" width="46" height="82" fill="#9B7FD0"/><polygon points="294,88 317,70 340,88" fill="#6F54C9"/>
    </g>
    <g fill="#ffffffcc"><rect x="52" y="112" width="10" height="12"/><rect x="106" y="104" width="10" height="12"/>
    <rect x="156" y="118" width="10" height="12"/><rect x="206" y="106" width="10" height="12"/>
    <rect x="258" y="116" width="10" height="12"/><rect x="308" y="108" width="10" height="12"/></g>
    <rect x="0" y="170" width="400" height="30" fill="#C98A4E"/>`),
  cloudforest:(id)=>svg(id,"green", `${cloudBand(40)}
    <path d="M0 120 Q70 86 150 110 Q240 138 400 104 V200 H0Z" fill="#2C7A4E"/>
    <path d="M0 150 Q90 122 200 146 Q300 166 400 140 V200 H0Z" fill="#206040"/>
    <g opacity=".7" fill="#fff"><ellipse cx="120" cy="132" rx="46" ry="9"/><ellipse cx="300" cy="150" rx="56" ry="10"/></g>
    ${tree(60,180,1,"#2C7A4E")}${tree(150,186,.9,"#36905C")}${tree(330,182,1.1,"#206040")}${tree(250,188,.8,"#2C7A4E")}`),
  stairs:(id)=>svg(id,"day", `${sun(330,44,22)}${sea(id,150)}
    <path d="M0 150 L0 70 Q70 58 120 92 L150 150Z" fill="#3F7E54"/>
    <g fill="#8E6A46"><rect x="20" y="150" width="120" height="8"/><rect x="36" y="158" width="104" height="8"/>
    <rect x="52" y="166" width="88" height="8"/><rect x="68" y="174" width="72" height="8"/><rect x="84" y="182" width="56" height="8"/></g>
    ${palm(36,92,.9)}${palm(96,104,.8)}`),
  pool:(id)=>svg(id,"day", `${sun(60,44,20)}<rect x="0" y="120" width="400" height="80" fill="url(#sea-${id})"/>
    <path d="M0 120 q40 -8 80 0 t80 0 t80 0 t80 0 t80 0 v6 H0Z" fill="#ffffff33"/>
    <g fill="#4A4540"><path d="M0 168 Q60 150 120 168 Q150 178 180 170 L180 200 L0 200Z"/>
    <path d="M240 172 Q300 156 360 172 Q390 180 400 174 L400 200 L240 200Z"/></g>
    <ellipse cx="210" cy="184" rx="60" ry="14" fill="#39B4C0"/><ellipse cx="210" cy="182" rx="50" ry="10" fill="#7FD3E0"/>`),
  whale:(id)=>svg(id,"day", `${sun(56,42,20)}${cloudBand(38)}
    <polygon points="300,150 340,40 360,44 400,150" fill="#6E5A52"/><polygon points="320,150 345,70 360,74 380,150" fill="#56463F"/>
    ${sea(id,150)}
    <g transform="translate(120,150)"><path d="M-40 0 L46 0 L40 16 L-30 16Z" fill="#8B3A2E"/><rect x="-30" y="-14" width="50" height="14" fill="#C45A47"/>
    <polygon points="-6,-14 -6,-40 -2,-40 14,-14" fill="#fff"/></g>
    <g transform="translate(250,158)" fill="#23435A"><path d="M0 6 Q26 6 40 -16 Q34 6 0 14Z"/><path d="M38 -14 q10 -10 22 -6 q-10 0 -16 12Z"/></g>`),
  sunset:(id)=>svg(id,"sunset", `${sun(200,96,40,"#FF8A4B")}
    ${cloudBand(140)}${cloudBand(160)}
    <polygon points="40,150 110,84 150,118 0,150" fill="#7A4A2E" opacity=".55"/>
    <polygon points="250,150 330,70 400,128 400,150" fill="#7A4A2E" opacity=".55"/>`),
  forest:(id)=>svg(id,"green", `${sun(338,42,20,"#FFE08A")}
    <path d="M0 130 Q120 100 240 124 Q330 142 400 120 V200 H0Z" fill="#2C7A4E"/>
    <rect x="0" y="172" width="400" height="28" fill="#5C7A3A"/>
    ${pine(50,176,1.1)}${pine(120,180,.9)}${pine(330,176,1.1)}${pine(250,182,1)}${pine(190,178,.8)}
    <path d="M150 200 Q200 168 250 200Z" fill="#caa56e"/>`),
  departure:(id)=>svg(id,"dusk", `${sun(200,120,34,"#FFB36B")}${cloudBand(150)}
    <path d="M0 168 q100 -22 210 -6 q120 18 190 4 V200 H0Z" fill="#27506A"/>
    <g transform="translate(230,64) rotate(10)"><path d="M0 0 L70 8 L96 2 L70 16 L0 18 L-18 9Z" fill="#fff"/>
    <path d="M30 2 L60 -20 L70 -18 L52 4Z" fill="#e7d3c0"/><path d="M30 18 L58 36 L68 34 L52 16Z" fill="#e7d3c0"/></g>`),
};
function sceneFor(d){
  const fn=SCENES[d.scene]||SCENES.arrival;
  return fn(d.id);
}
function illustration(d){
  return `<div class="illu">${sceneFor(d)}</div>`;
}

/* ---------- Rendu des jours ---------- */
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

function mapsUrl(p){ return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(p.ll)}&travelmode=driving`; }
function searchUrl(p){ return p.pid ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.n)}&query_place_id=${p.pid}` : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.ll)}`; }
function addrLink(p){
  const acts=[`<a class="da go" href="${mapsUrl(p)}" target="_blank" rel="noopener">🧭 Y aller</a>`,
              `<a class="da see" href="${searchUrl(p)}" target="_blank" rel="noopener">🔎 Voir</a>`];
  if(p.tel) acts.unshift(`<a class="da call" href="tel:${p.tel}">📞 Appeler</a>`);
  if(p.url) acts.push(`<a class="da trail" href="${p.url}" target="_blank" rel="noopener">🥾 ${esc(p.urlLabel||"AllTrails")}</a>`);
  const hours = p.h ? `<small class="addr-hours">🕒 ${esc(p.h)}</small>` : "";
  const detail = p.d ? `<p>${esc(p.d)}</p>` : "";
  return `<div class="addr">
    <button class="addr-info" type="button"><span class="addr-pin">📍</span>
      <span class="addr-txt"><b>${esc(p.n)}</b><small>${esc(p.a)}</small>${hours}</span>
      <span class="addr-chev">›</span></button>
    <div class="addr-detail">${detail}<div class="addr-actions">${acts.join("")}</div></div></div>`;
}
const slug = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-");
function contactRow(c){
  const acts=[];
  if(c.tel)    acts.push(`<a class="da call" href="tel:${c.tel}">📞 Appeler</a>`);
  if(c.ll)     acts.push(`<a class="da go" href="${mapsUrl(c)}" target="_blank" rel="noopener">🧭 Y aller</a>`);
  if(c.search) acts.push(`<a class="da see" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.search)}" target="_blank" rel="noopener">🔎 Chercher</a>`);
  return `<div class="contact"><div class="c-txt"><b>${esc(c.n)}</b><small>${esc(c.sub||"")}</small></div><div class="c-acts">${acts.join("")}</div></div>`;
}

function dayCard(d){
  let body = "";
  if(d.obj) body += `<p class="dobj">${esc(d.obj)}</p>`;
  if(d.resa) body += `<div class="badge-resa">📌 Réservation : ${esc(d.resa)}</div>`;
  body += '<div class="sched">' + d.sched.map(s=>`<div class="slot"><div class="t">${esc(s[0])}</div><div class="x">${esc(s[1])}${s[2]?` <button type="button" class="xi-toggle" aria-expanded="false">ℹ️</button>`:""}</div>${s[2]?`<div class="xi">${esc(s[2])}</div>`:""}</div>`).join("") + '</div>';
  if(d.lunch){
    const pb = (d.lunch.planB && d.lunch.planB!=="—") ? `<small>Plan B : ${esc(d.lunch.planB)}</small>` : "";
    body += `<div class="info-row"><div class="pill"><div class="k">🍴 ${esc(d.lunch.label || "Midi")}</div><div class="v">${esc(d.lunch.name)}${pb}</div></div>
      <div class="pill"><div class="k">💶 Budget</div><div class="v">${esc(d.lunch.budget)}<small>${esc(d.lunch.note||"")}</small></div></div></div>`;
  }
  if(d.opts) body += '<div class="notes"><div class="nh">Au choix l\'après-midi</div>' + d.opts.map(o=>`<div class="opt"><b>${esc(o[0])}</b><br>${esc(o[1])}</div>`).join("") + '</div>';
  if(d.notes) body += '<div class="notes"><div class="nh">Bon à savoir</div><ul>' + d.notes.map(n=>`<li>${esc(n)}</li>`).join("") + '</ul></div>';

  const pk = (TRIP.dayPlaces && TRIP.dayPlaces[d.id]) || [];
  if(pk.length){
    body += '<div class="notes"><div class="nh">📍 Adresses & itinéraires</div>' +
      pk.map(k=>TRIP.places[k] ? addrLink(TRIP.places[k]) : "").join("") + '</div>';
  }

  const el = document.createElement("article");
  el.className = "day"; el.id = d.id;
  el.innerHTML = `${illustration(d)}
    <div class="dhead" role="button" tabindex="0" aria-expanded="false">
      <div class="demoji">${d.emoji}</div>
      <div class="dinfo"><div class="dmeta">${esc(d.dow)}</div><div class="dtitle">${esc(d.title)}</div><div class="dsum">${esc(d.sum)}</div></div>
      <div class="chev">›</div>
    </div>
    <div class="dbody"><div class="dbody-inner">${body}</div></div>`;
  const head = el.querySelector(".dhead");
  const toggle = ()=>{ const o=el.classList.toggle("open"); head.setAttribute("aria-expanded", o); };
  head.addEventListener("click", toggle);
  head.addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); toggle(); }});
  return el;
}

function renderDays(){
  const root = document.getElementById("v-jours");
  if(!root) return;
  TRIP.days.forEach(d => root.appendChild(dayCard(d)));
}

function renderHighlights(){
  const root = document.getElementById("v-forts");
  if(!root) return;
  root.innerHTML = TRIP.highlights.map(h=>`
    <div class="hcard ${h.cls}">
      <div class="hillu">${sceneFor(h)}</div>
      <div class="hbody"><span class="e">${h.emoji}</span>
        <span class="w">${esc(h.when)}</span><h3>${esc(h.title)}</h3><p>${esc(h.text)}</p>
        <ul>${h.list.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
    </div>`).join("");
}

function renderPractical(){
  const root = document.getElementById("v-pratique");
  if(!root) return;
  let html = "";
  TRIP.practical.forEach(p=>{
    html += `<div class="panel ${p.warn?'warn':''}"><h3>${p.icon} ${esc(p.title)}</h3>`;
    if(p.kv) html += p.kv.map(([k,v])=>`<div class="kv"><span class="k">${esc(k)}</span><span class="v">${esc(v)}</span></div>`).join("");
    if(p.text) html += `<p class="ptext">${esc(p.text)}</p>`;
    if(p.list){
      if(p.check){
        const base = "chk:"+slug(p.title)+":";
        html += `<div class="chklist">` + p.list.map((x,i)=>`<label class="chk"><input type="checkbox" data-key="${base+i}"><span>${esc(x)}</span></label>`).join("") + `</div>`;
      } else {
        html += `<ul>${p.list.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`;
      }
    }
    if(p.addrs) html += p.addrs.map(k=>TRIP.places[k] ? addrLink(TRIP.places[k]) : "").join("");
    if(p.contacts) html += p.contacts.map(contactRow).join("");
    html += `</div>`;
  });
  html += `<div class="foot">Bon voyage la famille 🏝️ · ${esc(TRIP.meta.title)}</div>`;
  root.innerHTML = html;
}

/* ---------- Recherche ---------- */
function buildIndex(){
  const idx = [];
  TRIP.days.forEach(d=>{
    const text = [d.dow,d.title,d.sum,d.resa,d.lunch&&d.lunch.name,d.lunch&&d.lunch.planB,d.lunch&&d.lunch.note,
      ...(d.sched||[]).map(s=>s[1]), ...(d.sched||[]).map(s=>s[2]), ...(d.notes||[]), ...((d.opts||[]).flat()),
      ...((TRIP.dayPlaces&&TRIP.dayPlaces[d.id]||[]).map(k=>TRIP.places[k]?TRIP.places[k].n+" "+TRIP.places[k].a+" "+(TRIP.places[k].d||""):""))].filter(Boolean).join(" ");
    idx.push({type:"Jour", label:`${d.emoji} ${d.dow} — ${d.title}`, target:d.id, view:"jours", text:text.toLowerCase()});
  });
  TRIP.highlights.forEach(h=>idx.push({type:"Temps fort", label:`${h.emoji} ${h.title}`, target:null, view:"forts",
    text:[h.when,h.title,h.text,...h.list].join(" ").toLowerCase()}));
  TRIP.practical.forEach(p=>idx.push({type:"Pratique", label:`${p.icon} ${p.title}`, target:null, view:"pratique",
    text:[p.title,p.text||"",...(p.list||[]),...((p.kv||[]).flat())].join(" ").toLowerCase()}));
  return idx;
}
const INDEX = (()=>[])(); // placeholder, filled after data

function setupSearch(){
  const idx = buildIndex();
  const input = document.getElementById("search");
  const box = document.getElementById("results");
  input.addEventListener("input", ()=>{
    const q = input.value.trim().toLowerCase();
    if(q.length < 2){ box.classList.remove("show"); box.innerHTML=""; return; }
    const hits = idx.filter(i=>i.text.includes(q)).slice(0,12);
    if(!hits.length){ box.classList.add("show"); box.innerHTML = `<div class="rnone">Aucun résultat pour « ${esc(input.value)} »</div>`; return; }
    box.classList.add("show");
    box.innerHTML = hits.map((h,n)=>`<button class="ritem" data-n="${idx.indexOf(h)}">
      <span class="rtag">${h.type}</span> ${esc(h.label)}</button>`).join("");
    box.querySelectorAll(".ritem").forEach(btn=>btn.addEventListener("click",()=>{
      const h = idx[+btn.dataset.n];
      show(h.view);
      box.classList.remove("show"); input.value=""; 
      if(h.target){ const el=document.getElementById(h.target); el.classList.add("open");
        el.querySelector(".dhead").setAttribute("aria-expanded",true);
        setTimeout(()=>el.scrollIntoView({behavior:"smooth",block:"start"}),60); }
    }));
  });
  document.addEventListener("click", e=>{ if(!e.target.closest(".searchbar")) box.classList.remove("show"); });
}

/* ---------- Onglets ---------- */
function show(v){
  document.querySelectorAll(".view").forEach(x=>x.classList.toggle("active", x.id==="v-"+v));
  document.querySelectorAll("[data-v]").forEach(x=>x.classList.toggle("active", x.dataset.v===v));
  window.scrollTo({top:0, behavior:"smooth"});
}
function setupTabs(){
  document.querySelectorAll("[data-v]").forEach(b=>b.addEventListener("click", ()=>show(b.dataset.v)));
}

/* ---------- Compte à rebours ---------- */
const midnight = d => new Date(d.getFullYear(), d.getMonth(), d.getDate());
function countdown(){
  const start=midnight(new Date(TRIP.meta.start)), end=midnight(new Date(TRIP.meta.end)), now=midnight(new Date()), day=864e5;
  const num=document.getElementById("cd-num"), lab=document.getElementById("cd-lab");
  if(now<start){ const n=Math.round((start-now)/day); num.textContent=n; lab.textContent=(n<=1?"jour":"jours")+" avant le départ !"; }
  else if(now<=end){ const n=Math.round((now-start)/day)+1; num.textContent="J"+n; lab.textContent="on est à Tenerife ! 🏝️"; }
  else { num.textContent="♥"; lab.textContent="Quel voyage… souvenirs !"; }
}

/* ---------- Nettoyage service worker (suppression définitive) ---------- */
function registerSW(){
  if(!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.getRegistrations().then(regs=>{
    regs.forEach(r => r.unregister());
  });
  if(typeof caches !== "undefined"){
    caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
  }
}

/* ---------- Carte d'ensemble (SVG, hors-ligne) ---------- */
function renderMap(){
  const root = document.getElementById("v-carte");
  if(!root) return;
  const W=360, H=240, PAD=10;
  const hasCoords=ll=>/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(ll);
  const placeKeys = Object.keys(TRIP.places).filter(k=>hasCoords(TRIP.places[k].ll));
  const isTenerife = TRIP.meta.mapShape === "tenerife";

  let LNGMIN, LNGMAX, LATMIN, LATMAX;
  if(isTenerife){
    LNGMIN=-16.95; LNGMAX=-16.06; LATMIN=27.99; LATMAX=28.60;
  } else if(placeKeys.length){
    const lats = placeKeys.map(k=>parseFloat(TRIP.places[k].ll.split(",")[0]));
    const lons = placeKeys.map(k=>parseFloat(TRIP.places[k].ll.split(",")[1]));
    const padLat = (Math.max(...lats)-Math.min(...lats))*0.25 || 0.02;
    const padLon = (Math.max(...lons)-Math.min(...lons))*0.25 || 0.02;
    LATMIN=Math.min(...lats)-padLat; LATMAX=Math.max(...lats)+padLat;
    LNGMIN=Math.min(...lons)-padLon; LNGMAX=Math.max(...lons)+padLon;
  } else {
    LNGMIN=-1; LNGMAX=1; LATMIN=-1; LATMAX=1;
  }
  const X=ll=>(PAD+(parseFloat(ll.split(",")[1])-LNGMIN)/(LNGMAX-LNGMIN)*(W-2*PAD));
  const Y=ll=>(PAD+(LATMAX-parseFloat(ll.split(",")[0]))/(LATMAX-LATMIN)*(H-2*PAD));
  const island = isTenerife ? `<path d="M22,112 Q60,80 95,82 Q150,66 200,42 L262,26 Q236,64 220,118 Q196,170 156,214 Q120,176 100,168 Q66,150 52,140 Q30,128 22,112 Z" class="island"/>` : "";
  const teide = isTenerife ? `<polygon points="128,121 119,135 137,135" class="teide-mk"/>` : "";
  const dots=placeKeys.map(k=>{const p=TRIP.places[k];
    return `<circle class="mdot" data-k="${k}" cx="${X(p.ll).toFixed(1)}" cy="${Y(p.ll).toFixed(1)}" r="5"><title>${esc(p.n)}</title></circle>`;}).join("");
  const caption = placeKeys.length
    ? "Touche un point — ou un lieu dans la liste — pour le situer et lancer l'itinéraire."
    : "Aucun lieu enregistré pour le moment — la carte se remplira au fil du séjour.";
  root.innerHTML = `
    <div class="mapcap" id="mapcap">${caption}</div>
    <div class="mapwrap"><svg viewBox="0 0 ${W} ${H}" class="mapsvg" xmlns="http://www.w3.org/2000/svg">
      ${island}
      ${teide}
      ${dots}
    </svg></div>
    <div class="maplist">${Object.keys(TRIP.places).map(k=>`<button class="mli" data-k="${k}" type="button">📍 ${esc(TRIP.places[k].n)}</button>`).join("")}</div>`;
  function select(k){
    const p=TRIP.places[k];
    document.getElementById("mapcap").innerHTML =
      `<b>${esc(p.n)}</b> <small>${esc(p.a)}</small>
       <div class="capbtns"><a href="${mapsUrl(p)}" target="_blank" rel="noopener">🧭 Y aller</a>
       <a href="${searchUrl(p)}" target="_blank" rel="noopener">🔎 Voir</a></div>`;
    root.querySelectorAll(".mdot").forEach(c=>c.classList.toggle("on", c.dataset.k===k));
    const dot=root.querySelector('.mdot[data-k="'+k+'"]'); if(dot) dot.parentNode.appendChild(dot);
  }
  root.querySelectorAll(".mdot,.mli").forEach(el=>el.addEventListener("click",()=>select(el.dataset.k)));
}

/* ---------- Mode Souvenir (moments illustrés par des photos) ---------- */
function photoUrl(id, size){ return `photos/${size}/${id}.webp`; }

const FR_MOIS = ["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."];
function photoDate(ts){
  const [d,t] = ts.split(" ");
  const [,m,day] = d.split("-").map(Number);
  const [h,mi] = t.split(":");
  return `${day} ${FR_MOIS[m-1]} · ${h}h${mi}`;
}

const SOUV = { moments:[], momentIdx:0, photoIdx:0 };

function souvenirMoments(){
  const byId = {}; (TRIP.photos||[]).forEach(p=>byId[p.id]=p);
  return (TRIP.highlights||[])
    .filter(h=>h.photos && h.photos.length)
    .map(h=>({ h, photos: h.photos.map(id=>byId[id]).filter(Boolean) }))
    .filter(m=>m.photos.length)
    .sort((a,b)=>(a.h.day||"9999-99-99").localeCompare(b.h.day||"9999-99-99"));
}

function renderSouvenirs(){
  const root = document.getElementById("v-souvenirs");
  if(!root) return;
  const moments = souvenirMoments();
  SOUV.moments = moments;
  if(!moments.length){
    root.innerHTML = `<div class="panel"><p class="ptext">Pas encore de photos rattachées à un moment — elles apparaîtront ici au fil du voyage.</p></div>`;
    return;
  }
  root.innerHTML = moments.map((m,i)=>{
    const hero = m.photos[0];
    const place = hero.place ? TRIP.places[hero.place] : null;
    return `
    <div class="moment" data-mi="${i}">
      <div class="momhero"><div class="momheroblur" style="background-image:url('${photoUrl(hero.id,'thumb')}')"></div><img src="${photoUrl(hero.id,'thumb')}" alt="${esc(m.h.title)}" loading="lazy"></div>
      <div class="mombody">
        <span class="mcount">📸 ${m.photos.length} photo${m.photos.length>1?"s":""}</span>
        <div class="mwhen">${esc(m.h.when)}</div>
        <h3>${esc(m.h.title)}</h3>
        <p>${esc(m.h.text)}</p>
        ${place?`<button type="button" class="mplace" data-k="${hero.place}">📍 ${esc(place.n)}</button>`:""}
      </div>
    </div>`;
  }).join("");

  root.querySelectorAll(".moment").forEach(el=>{
    el.addEventListener("click", e=>{
      if(e.target.closest(".mplace")) return;
      openLightbox(parseInt(el.dataset.mi), 0);
    });
  });
  root.querySelectorAll(".mplace").forEach(btn=>{
    btn.addEventListener("click", e=>{
      e.stopPropagation();
      jumpToPlaceOnMap(btn.dataset.k);
    });
  });
  ensureLightbox();
}

function jumpToPlaceOnMap(key){
  show("carte");
  setTimeout(()=>{ const b=document.querySelector('.mli[data-k="'+key+'"]'); if(b) b.click(); }, 60);
}

function ensureLightbox(){
  if(document.getElementById("lightbox")) return;
  document.body.insertAdjacentHTML("beforeend", `
    <div class="lightbox" id="lightbox">
      <div class="lbtop">
        <div class="lbtitle" id="lbtitle"></div>
        <button type="button" class="lbclose" id="lbclose" aria-label="Fermer">✕</button>
      </div>
      <div class="lbmain">
        <button type="button" class="lbnav lbprev" id="lbprev" aria-label="Précédent">‹</button>
        <img class="lbimg" id="lbimg" alt="">
        <button type="button" class="lbnav lbnext" id="lbnext" aria-label="Suivant">›</button>
      </div>
      <div class="lbfoot">
        <div class="lbcap" id="lbcap"></div>
        <button type="button" class="lbmap" id="lbmap">🗺️ Voir sur la carte</button>
      </div>
    </div>`);
  document.getElementById("lbclose").addEventListener("click", closeLightbox);
  document.getElementById("lbprev").addEventListener("click", ()=>navLightbox(-1));
  document.getElementById("lbnext").addEventListener("click", ()=>navLightbox(1));
  document.getElementById("lightbox").addEventListener("click", e=>{ if(e.target.id==="lightbox") closeLightbox(); });
  let touchX=null;
  const main = document.querySelector("#lightbox .lbmain");
  main.addEventListener("touchstart", e=>{ touchX = e.touches[0].clientX; }, {passive:true});
  main.addEventListener("touchend", e=>{
    if(touchX===null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if(Math.abs(dx) > 40) navLightbox(dx < 0 ? 1 : -1);
    touchX = null;
  }, {passive:true});
  document.addEventListener("keydown", e=>{
    if(!document.getElementById("lightbox").classList.contains("open")) return;
    if(e.key==="Escape") closeLightbox();
    if(e.key==="ArrowLeft") navLightbox(-1);
    if(e.key==="ArrowRight") navLightbox(1);
  });
}

function openLightbox(momentIdx, photoIdx){
  SOUV.momentIdx = momentIdx; SOUV.photoIdx = photoIdx;
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
  renderLightboxPhoto();
}
function closeLightbox(){
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}
function navLightbox(delta){
  const m = SOUV.moments[SOUV.momentIdx];
  if(!m) return;
  SOUV.photoIdx = (SOUV.photoIdx + delta + m.photos.length) % m.photos.length;
  renderLightboxPhoto();
}
function renderLightboxPhoto(){
  const m = SOUV.moments[SOUV.momentIdx];
  if(!m) return;
  const p = m.photos[SOUV.photoIdx];
  const place = p.place ? TRIP.places[p.place] : null;
  document.getElementById("lbtitle").textContent = `${m.h.title} · ${SOUV.photoIdx+1}/${m.photos.length}`;
  document.getElementById("lbimg").src = photoUrl(p.id, "full");
  document.getElementById("lbcap").textContent = `${photoDate(p.ts)}${place ? " · "+place.n : ""}`;
  const mapBtn = document.getElementById("lbmap");
  mapBtn.style.display = place ? "" : "none";
  mapBtn.onclick = ()=>{ closeLightbox(); jumpToPlaceOnMap(p.place); };
}

/* ---------- Persistance des cases à cocher ---------- */
function setupChecklists(){
  document.querySelectorAll('input[type="checkbox"][data-key]').forEach(cb=>{
    try{ cb.checked = localStorage.getItem(cb.dataset.key)==="1"; }catch(e){}
    cb.addEventListener("change",()=>{ try{ localStorage.setItem(cb.dataset.key, cb.checked?"1":"0"); }catch(e){} });
  });
}

/* ---------- Mode « Aujourd'hui » ---------- */
function setupToday(){
  const start=midnight(new Date(TRIP.meta.start)), now=midnight(new Date()), day=864e5;
  const idx=Math.round((now-start)/day);
  if(idx<0 || idx>=TRIP.days.length) return;
  const d=TRIP.days[idx], el=document.getElementById(d.id);
  if(!el) return;
  el.classList.add("open","is-today");
  const meta=el.querySelector(".dmeta");
  if(meta) meta.insertAdjacentHTML("beforeend",' · <span class="today-badge">Aujourd\'hui</span>');
  setTimeout(()=>el.scrollIntoView({behavior:"smooth",block:"start"}),200);
}

/* ---------- Dépliage des adresses (descriptif/horaires) ---------- */
function setupAddrToggles(){
  document.addEventListener("click", e=>{
    const btn = e.target.closest(".addr-info");
    if(!btn) return;
    btn.closest(".addr").classList.toggle("open");
  });
}

/* ---------- Dépliage des notes culturelles ---------- */
function setupCulturalToggles(){
  document.addEventListener("click", e=>{
    const btn = e.target.closest(".xi-toggle");
    if(!btn) return;
    const slot = btn.closest(".slot");
    const xi = slot && slot.querySelector(".xi");
    if(!xi) return;
    const open = xi.classList.toggle("show");
    btn.setAttribute("aria-expanded", open);
  });
}

/* ---------- Démarrage ---------- */
document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("subtitle").textContent = TRIP.meta.subtitle;
  renderDays(); renderHighlights(); renderSouvenirs(); renderPractical(); renderMap();
  setupTabs(); setupSearch(); setupAddrToggles(); setupCulturalToggles(); setupChecklists(); countdown(); setupToday(); registerSW();
});
