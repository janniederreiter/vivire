// ===== REPLACE THIS with the real inbox you want questionnaire replies sent to =====
const CONTACT_EMAIL = "hellovivire@gmail.com";

const translations = {
  de: {
    nav_what:"Was", nav_why:"Warum", nav_contact:"Kontakt",
    hero_title:"Dein Leben ist bereits eine Geschichte.",
    hero_sub:"Wir machen einen Film daraus.",
    //story_1:"ERINNERUNGEN VERBLASSEN.",
    //story_2:"GESCHICHTEN BLEIBEN.",
    //story_3:"AUS DEINEN FOTOS.<br>DEINEN VIDEOS.<br>DEINEN ERINNERUNGEN.",
    //story_4:"WIR ERSCHAFFEN DEN FILM<br>EINES LEBENS.",
    story_cta:"Erschaffe deinen →",
    what_title:"Was ist Viviré?",
    what_body:"Viviré verwandelt deine Fotos, Videos und Erinnerungen in einen filmischen Kurzfilm, persönlich erzählt und mit Sorgfalt gestaltet. Kein beliebiges Zehn-Sekunden-KI-Video, sondern eine durchdachte Geschichte: Lebensgeschichten, Hochzeiten, goldene Hochzeitstage und andere Momente, die es wert sind, erzählt zu werden.",
    why_title:"Warum Viviré?",
    why_1:"Viviré („Ich werde leben“ auf Spanisch) verspricht, dass deine Erinnerung niemals verblassen wird. Sie bleibt bei dir nicht nur in deinem Gedächtnis, sondern auch in deinen Händen, bereit, mit den Menschen geteilt zu werden, die du liebst. Echte Handwerkskunst statt Zufallsgenerator - jede Szene entsteht gemeinsam mit dir.",
    why_2:"Mehr als Bewegung: Deine Fotos werden in gelebte Momente versetzt, nicht nur animiert.",
    why_3:"Erzähle deine Geschichte und gestalte sie mit.",
    contact_title:"Erzähl uns deine Geschichte",
    contact_sub:"Wir bauen Viviré gerade erst auf. Es gibt noch keine festen Preise oder Pakete. Wir möchten zunächst verstehen, welche Geschichte du erzählen möchtest.",
    f_name:"Name", f_email:"E-Mail", f_occasion:"Anlass",
    f_occasion_opts:["Lebensgeschichte","Hochzeit","Goldene Hochzeit / Jubiläum","Etwas anderes"],
    f_materials:"Welches Material hast du? (Fotos, Videos, Tonaufnahmen …)",
    f_length:"Gewünschte Länge",
    f_length_opts:["ca. 2-3 Minuten","ca. 5 Minuten","10+ Minuten","Noch unsicher"],
    f_message:"Erzähl uns kurz die Geschichte / Anekdoten",
    f_consent:"Ich bestätige, dass ich die Rechte an den eingereichten Fotos/Videos habe und, falls erforderlich, das Einverständnis der abgebildeten Personen vorliegt.",
    f_submit:"Absenden",
    form_note:"Öffnet dein E-Mail-Programm mit einer vorausgefüllten Nachricht.",
    footer_rights:"Alle Rechte vorbehalten.", footer_impressum:"Impressum",
    footer_privacy:"Datenschutz", footer_terms:"Nutzungsbedingungen", footer_widerruf:"Widerruf",
    mail_subject:"Viviré - Anfrage von",
    loc_cap_0:"ERINNERUNGEN VERBLASSEN.",
    loc_cap_1:"GESCHICHTEN BLEIBEN.",
    loc_cap_2:"AUS DEINEN FOTOS.",
    loc_cap_3:"DEINEN VIDEOS.",
    loc_cap_4:"DEINEN ERINNERUNGEN.",
    loc_cap_5:"WIR ERSCHAFFEN DEN FILM",
    loc_cap_6:"EINES LEBENS.",
    promo_title:"Promo Video"
  },
  en: {
    nav_what:"What", nav_why:"Why", nav_contact:"Contact",
    hero_title:"Your life is already a story.",
    hero_sub:"We turn it into a film.",
    //story_1:"MEMORIES FADE.",
    //story_2:"STORIES STAY.",
    //story_3:"FROM YOUR PHOTOS.<br>YOUR VIDEOS.<br>YOUR MEMORIES.",
    //story_4:"WE CREATE THE FILM<br>OF A LIFE.",
    story_cta:"Create yours →",
    what_title:"What is Viviré?",
    what_body:"Viviré turns your photos, videos and memories into a cinematic short film — personal, crafted, and told with care. Not a generic ten-second AI clip, but a considered story: life histories, weddings, golden anniversaries, and other moments worth telling.",
    why_title:"Why Viviré?",
    why_1:"Viviré (\"I will live in Spanish\") promises that your memory will never fade. It will stay with you—not only in your mind, but in your hands, ready to be shared with those you love. Real craftsmanship, not a random generator — every scene is built together with you.",
    why_2:"More than motion — your photos are lived moments, not just animated.",
    why_3:"Tell your story — you can participate in shaping it.",
    contact_title:"Tell us your story",
    contact_sub:"We're building Viviré right now. There are no fixed prices or packages yet — we'd first like to understand the story you want to tell.",
    f_name:"Name", f_email:"Email", f_occasion:"Occasion",
    f_occasion_opts:["Life story","Wedding","Golden anniversary","Something else"],
    f_materials:"What material do you have? (photos, videos, voice recordings …)",
    f_length:"Desired length",
    f_length_opts:["~2-3 minutes","~5 minutes","10+ minutes","Not sure yet"],
    f_message:"Tell us the story / anecdotes, briefly",
    f_consent:"I confirm I hold the rights to the submitted photos/videos and, where applicable, the consent of the people shown.",
    f_submit:"Send",
    form_note:"Opens your email app with a pre-filled message.",
    footer_rights:"All rights reserved.", footer_impressum:"Impressum",footer_widerruf:"Right of Withdrawal",
    footer_privacy:"Privacy", footer_terms:"Terms",
    mail_subject:"Viviré - inquiry from",
    loc_cap_0:"MEMORIES FADE.",
    loc_cap_1:"STORIES STAY.",
    loc_cap_2:"FROM YOUR PHOTOS.",
    loc_cap_3:"YOUR VIDEOS.",
    loc_cap_4:"YOUR MEMORIES.",
    loc_cap_5:"WE CREATE THE FILM",
    loc_cap_6:"OF A LIFE.",
    promo_title:"Promo Video"
  },
  es: {
    nav_what:"Qué es", nav_why:"Por qué", nav_contact:"Contacto",
    hero_title:"Tu vida ya es una historia.",
    hero_sub:"La convertimos en una película.",
    //story_1:"LOS RECUERDOS SE DESVANECEN.",
    //story_2:"LAS HISTORIAS PERDURAN.",
    //story_3:"DE TUS FOTOS.<br>TUS VIDEOS.<br>TUS RECUERDOS.",
    //story_4:"CREAMOS LA PELÍCULA<br>DE UNA VIDA.",
    story_cta:"Crea la tuya →",
    what_title:"¿Qué es Viviré?",
    what_body:"Viviré convierte tus fotos, videos y recuerdos en un cortometraje cinematográfico, personal y elaborado con cuidado. No es un video genérico de IA de diez segundos, sino una historia pensada: biografías, bodas, bodas de oro y otros momentos que merecen ser contados.",
    why_title:"¿Por qué Viviré?",
    why_1:"Viviré te promete que tu recuerdo nunca se desvanecerá, permanecerá contigo. No solo en tu memoria, en tus manos para mostrarlo a aquellos que amas. Artesanía real, no un generador aleatorio: cada escena se construye contigo y se perfecciona hasta que sea la correcta.",
    why_2:"Más que movimiento: tus fotos se sitúan en nuevos momentos creíbles, no solo se animan.",
    why_3:"Tú mantienes el control: puedes dar forma y corregir cada paso.",
    contact_title:"Cuéntanos tu historia",
    contact_sub:"Estamos construyendo Viviré ahora mismo. Todavía no hay precios ni paquetes fijos — primero nos gustaría entender la historia que quieres contar.",
    f_name:"Nombre", f_email:"Correo electrónico", f_occasion:"Ocasión",
    f_occasion_opts:["Biografía","Boda","Bodas de oro / aniversario","Otra cosa"],
    f_materials:"¿Qué material tienes? (fotos, videos, grabaciones de voz …)",
    f_length:"Duración deseada",
    f_length_opts:["~2-3 minutos","~5 minutos","10+ minutos","Aún no lo sé"],
    f_message:"Cuéntanos brevemente la historia / anécdotas",
    f_consent:"Confirmo que tengo los derechos sobre las fotos/videos enviados y, en su caso, el consentimiento de las personas que aparecen.",
    f_submit:"Enviar",
    form_note:"Abre tu programa de correo con un mensaje ya redactado.",
    footer_rights:"Todos los derechos reservados.", footer_impressum:"Aviso legal", footer_widerruf:"Derecho de desistimiento",
    footer_privacy:"Privacidad", footer_terms:"Términos",
    mail_subject:"Viviré - solicitud de",
    loc_cap_0:"LOS RECUERDOS SE DESVANECEN.",
    loc_cap_1:"LAS HISTORIAS PERDURAN.",
    loc_cap_2:"DE TUS FOTOS.",
    loc_cap_3:"TUS VIDEOS.",
    loc_cap_4:"TUS RECUERDOS.",
    loc_cap_5:"CREAMOS LA PELÍCULA",
    loc_cap_6:"DE UNA VIDA.",
    promo_title:"Promo Video"
  }
  it: {
    nav_what:"Cos'è", nav_why:"Perché", nav_contact:"Contatto",
hero_title:"La tua vita è già una storia.",
hero_sub:"Noi la trasformiamo in un film.",
//story_1:"I RICORDI SVANISCONO.",
//story_2:"LE STORIE RESTANO.",
//story_3:"DALLE TUE FOTO.<br>I TUOI VIDEO.<br>I TUOI RICORDI.",
//story_4:"CREIAMO IL FILM<br>DI UNA VITA.",
story_cta:"Crea il tuo →",
what_title:"Cos'è Viviré?",
what_body:"Viviré trasforma le tue foto, i tuoi video e i tuoi ricordi in un cortometraggio cinematografico, personale e realizzato con cura. Non è un generico video IA di dieci secondi, ma una storia pensata: biografie, matrimoni, nozze d'oro e altri momenti che meritano di essere raccontati.",
why_title:"Perché Viviré?",
why_1:"Viviré ti promette che il tuo ricordo non svanirà mai, resterà con te. Non solo nella tua memoria, ma nelle tue mani, pronto per essere mostrato a chi ami. Vera cura artigianale, non un generatore casuale: ogni scena viene costruita insieme a te e perfezionata finché non è quella giusta.",
why_2:"Più del semplice movimento: le tue foto vengono inserite in nuovi momenti credibili, non semplicemente animate.",
why_3:"Mantieni tu il controllo: puoi dare forma e correggere ogni passaggio.",
contact_title:"Raccontaci la tua storia",
contact_sub:"Stiamo costruendo Viviré proprio ora. Non ci sono ancora prezzi o pacchetti fissi — prima vorremmo capire la storia che vuoi raccontare.",
f_name:"Nome", f_email:"Indirizzo e-mail", f_occasion:"Occasione",
f_occasion_opts:["Biografia","Matrimonio","Nozze d'oro / anniversario","Altro"],
f_materials:"Che materiale hai? (foto, video, registrazioni vocali …)",
f_length:"Durata desiderata",
f_length_opts:["~2-3 minuti","~5 minuti","10+ minuti","Non lo so ancora"],
f_message:"Raccontaci brevemente la storia / gli aneddoti",
f_consent:"Confermo di avere i diritti sulle foto/video inviati e, se applicabile, il consenso delle persone raffigurate.",
f_submit:"Invia",
form_note:"Apre il tuo programma di posta elettronica con un messaggio già preparato.",
footer_rights:"Tutti i diritti riservati.", footer_impressum:"Note legali", footer_widerruf:"Diritto di recesso",
footer_privacy:"Privacy", footer_terms:"Termini",
mail_subject:"Viviré - richiesta per",
loc_cap_0:"I RICORDI SVANISCONO.",
loc_cap_1:"LE STORIE RESTANO.",
loc_cap_2:"DALLE TUE FOTO.",
loc_cap_3:"I TUOI VIDEO.",
loc_cap_4:"I TUOI RICORDI.",
loc_cap_5:"CREIAMO IL FILM",
loc_cap_6:"DI UNA VITA.",
promo_title:"Video promozionale"  
  }
  // Navigation / language
  nav_about: "Chi siamo",
  nav_how: "Come funziona",
  nav_contact: "Contatti",

  // Hero
  hero_title: "Il film di una vita",
  hero_subtitle: "Trasformiamo i tuoi ricordi in un film.",
  hero_cta: "Raccontaci la tua storia",

  // General brand copy
  intro_title: "I ricordi meritano di essere vissuti, non solo conservati.",
  intro_text:
    "Viviré trasforma fotografie, video, voci e ricordi in un film personale che racconta una vita attraverso immagini, emozioni e storie.",

  // How it works
  how_title: "Come funziona",

  how_1_title: "Raccontaci la tua storia",
  how_1_text:
    "Condividi con noi le persone, i momenti e i ricordi che vuoi preservare.",

  how_2_title: "Condividi i tuoi ricordi",
  how_2_text:
    "Fotografie, video, registrazioni audio e storie ci aiutano a ricostruire il mondo che vuoi raccontare.",

  how_3_title: "Creiamo il tuo film",
  how_3_text:
    "Uniamo i tuoi ricordi a scene artistiche create con l'aiuto dell'intelligenza artificiale per dare vita alla tua storia.",

  // AI / artistic nature
  ai_title: "Ispirato a ricordi reali. Creato come un'opera cinematografica.",
  ai_text:
    "Le scene generate da Viviré sono interpretazioni artistiche ispirate a persone, fotografie e ricordi reali. Non sono registrazioni autentiche degli eventi rappresentati e non hanno lo scopo di ricostruire la realtà in modo perfettamente fedele.",

  // Emotional positioning
  memory_title: "Una storia che rimane.",
  memory_text:
    "Viviré promette che il tuo ricordo non svanirà. Rimarrà con te — non solo nella tua memoria, ma nelle tue mani, pronto per essere condiviso con le persone che ami.",

  // Contact / form
  form_title: "Raccontaci la tua storia",
  form_name: "Nome",
  form_email: "E-mail",
  form_occasion: "Occasione",
  form_length: "Durata desiderata",
  form_material: "Quale materiale hai a disposizione?",
  form_message: "Raccontaci qualcosa della storia",
  form_submit: "Invia richiesta",

  // Footer
  footer_impressum: "Note legali",
  footer_privacy: "Privacy",
  footer_terms: "Termini e condizioni",
  footer_widerruf: "Diritto di recesso",
  footer_rights: "Tutti i diritti riservati."
}
};

function applyLang(lang){
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  // rebuild select options
  fillSelect("occasion", t.f_occasion_opts);
  fillSelect("length", t.f_length_opts);
  document.querySelectorAll(".langs button").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  document.getElementById("lang-current").textContent = lang.toUpperCase();
  try { localStorage.setItem("viviere_lang", lang); } catch(e) {}
  window.__currentLang = lang;
}

function fillSelect(id, opts){
  const sel = document.getElementById(id);
  if (!sel) return;
  const current = sel.value;
  sel.innerHTML = "";
  opts.forEach((label, i)=>{
    const o = document.createElement("option");
    o.value = i;
    o.textContent = label;
    sel.appendChild(o);
  });
  if (current !== "") sel.value = current;
}

function updateLocketScroll(){
  const section = document.getElementById("locket-scroll");
  if (!section) return;
  const frames = document.querySelectorAll(".locket-frame");
  const rect = section.getBoundingClientRect();
  const total = section.offsetHeight - window.innerHeight;
  let progress = total > 0 ? -rect.top / total : 0;
  progress = Math.max(0, Math.min(1, progress));

  const n = frames.length;
  const pos = progress * (n - 1);
  const idx = Math.min(Math.floor(pos), n - 2 < 0 ? 0 : n - 2);
  const blend = pos - idx;

  frames.forEach((f, i) => {
    if (i === idx) f.style.opacity = 1 - blend;
    else if (i === idx + 1) f.style.opacity = blend;
    else f.style.opacity = 0;
  });

  const dominant = blend < 0.5 ? idx : idx + 1;
  const caption = document.getElementById("locket-caption");
  const key = `loc_cap_${dominant}`;
  if (caption && caption.getAttribute("data-current") !== key){
    caption.setAttribute("data-current", key);
    const t = translations[window.__currentLang || "de"];
    caption.style.opacity = 0;
    setTimeout(()=>{
      caption.textContent = t[key] || "";
      caption.style.opacity = 1;
    }, 200);
  }
}

let locketTicking = false;
function onLocketScroll(){
  if (!locketTicking){
    requestAnimationFrame(()=>{
      updateLocketScroll();
      locketTicking = false;
    });
    locketTicking = true;
  }
}
window.addEventListener("scroll", onLocketScroll, {passive:true});
window.addEventListener("resize", updateLocketScroll);
updateLocketScroll();



document.addEventListener("DOMContentLoaded", ()=>{
  let saved = "de";
  try { saved = localStorage.getItem("viviere_lang") || "de"; } catch(e) {}
  applyLang(translations[saved] ? saved : "de");

  document.querySelectorAll(".langs button").forEach(b=>{
    b.addEventListener("click", ()=>{
      applyLang(b.dataset.lang);
      document.querySelector(".lang-switch").removeAttribute("open");
    });
  });

  // scroll reveal
  const beats = document.querySelectorAll(".beat");
  if ("IntersectionObserver" in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.35 });
    beats.forEach(b=> io.observe(b));
  } else {
    beats.forEach(b=> b.classList.add("visible"));
  }

  // questionnaire -> mailto
  const form = document.getElementById("questionnaire");
  if (form){
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      const t = translations[window.__currentLang || "de"];
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const occasion = t.f_occasion_opts[form.occasion.value] || "";
      const materials = form.materials.value.trim();
      const length = t.f_length_opts[form.length.value] || "";
      const message = form.message.value.trim();

      const subject = `${t.mail_subject} ${name}`;
      const body =
`${t.f_name}: ${name}
${t.f_email}: ${email}
${t.f_occasion}: ${occasion}
${t.f_length}: ${length}

${t.f_materials}
${materials}

${t.f_message}
${message}`;

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

 document.getElementById("play-btn")?.addEventListener("click", function(){
  const wrap = document.getElementById("video-wrap");
  const poster = wrap.querySelector(".video-poster");
  const iframe = document.createElement("iframe");
  //iframe.src = "https://www.youtube.com/embed/xjM4v2g9kQc?autoplay=1&rel=0";
  iframe.src = "https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID?autoplay=1&rel=0";
  iframe.title = "Viviré — promo video";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  iframe.style.border = "0";
  iframe.width = "100%";
  iframe.height = "100%";
  poster.replaceWith(iframe);
  this.remove();
});
});
