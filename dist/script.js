const translations = {
  es: {
    skip: "Saltar al contenido", navMethod: "El método", navVideo: "Conoce a Victoria", navStart: "Empezar", headerCta: "Comienza aquí <span aria-hidden=\"true\">↗</span>",
    heroEyebrow: "Aprender un idioma empieza al hablar", heroTitle: "Haz espacio para <em>tu voz</em> en español.", heroText: "Escucha, practica y atrévete a hablar. Un primer paso cercano hacia conversaciones reales en español.", heroCta: "Conoce a Victoria <span aria-hidden=\"true\">↗</span>", heroSecondary: "Explora el enfoque <span aria-hidden=\"true\">↓</span>",
    introEyebrow: "Un idioma para vivirlo", introTitle: "Las palabras cobran vida cuando las <em>usas.</em>", introText: "Hablar español es mucho más que recordar reglas. Es encontrar tu ritmo, probar sonidos nuevos y descubrir todo lo que puedes decir.", introLink: "Escucha a Victoria <span aria-hidden=\"true\">↗</span>",
    step1Title: "Escucha", step1Text: "Familiarízate con el sonido y el ritmo del español.", step2Title: "Practica", step2Text: "Repite, prueba y encuentra una forma de expresarte propia.", step3Title: "Conecta", step3Text: "Usa el idioma para compartir ideas y crear conversaciones.",
    videoEyebrow: "Un encuentro para empezar", videoTitle: "Ponle voz a esta historia.", videoText: "Conoce a Victoria en este video y descubre a la persona detrás de la invitación a hablar español.", videoHint: "Pulsa reproducir y escucha su presentación.", videoFallback: "Tu navegador no puede reproducir este video.", videoCaption: "Victoria · Presentación",
    closingEyebrow: "Tu próximo paso", closingTitle: "Tu español empieza con una palabra.", closingText: "Empieza por escuchar. Después, dilo en voz alta. Cada conversación comienza así.", closingCta: "Ver el video <span aria-hidden=\"true\">↗</span>", footerLine: "Una voz, muchas posibilidades.", backTop: "Volver arriba ↑"
  },
  en: {
    skip: "Skip to content", navMethod: "The approach", navVideo: "Meet Victoria", navStart: "Get started", headerCta: "Start here <span aria-hidden=\"true\">↗</span>",
    heroEyebrow: "Learning a language begins with speaking", heroTitle: "Make room for <em>your voice</em> in Spanish.", heroText: "Listen, practise and dare to speak. A welcoming first step toward real conversations in Spanish.", heroCta: "Meet Victoria <span aria-hidden=\"true\">↗</span>", heroSecondary: "Explore the approach <span aria-hidden=\"true\">↓</span>",
    introEyebrow: "A language to live", introTitle: "Words come alive when you <em>use them.</em>", introText: "Speaking Spanish is about much more than remembering rules. It is finding your rhythm, trying new sounds and discovering everything you can say.", introLink: "Listen to Victoria <span aria-hidden=\"true\">↗</span>",
    step1Title: "Listen", step1Text: "Get familiar with the sound and rhythm of Spanish.", step2Title: "Practise", step2Text: "Repeat, experiment and find your own way to express yourself.", step3Title: "Connect", step3Text: "Use the language to share ideas and start conversations.",
    videoEyebrow: "A place to begin", videoTitle: "Hear the story behind the voice.", videoText: "Meet Victoria in this video and discover the person behind the invitation to speak Spanish.", videoHint: "Press play to hear her introduction.", videoFallback: "Your browser cannot play this video.", videoCaption: "Victoria · Introduction",
    closingEyebrow: "Your next step", closingTitle: "Your Spanish begins with one word.", closingText: "Start by listening. Then say it out loud. Every conversation begins that way.", closingCta: "Watch the video <span aria-hidden=\"true\">↗</span>", footerLine: "One voice, many possibilities.", backTop: "Back to top ↑"
  }
};

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.es;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translated = dictionary[element.dataset.i18n];
    if (translated) element.innerHTML = translated;
  });
  document.querySelectorAll('.lang-button').forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.title = lang === 'es' ? 'Habla Español · Tu voz en español' : 'Habla Español · Your voice in Spanish';
  document.querySelector('meta[name="description"]').content = lang === 'es'
    ? 'Habla Español: un espacio para escuchar, practicar y ganar confianza al hablar español.'
    : 'Habla Español: a place to listen, practise and grow confident speaking Spanish.';
  document.querySelector('video').setAttribute('aria-label', lang === 'es' ? 'Presentación de Victoria' : 'Introduction to Victoria');
  try { localStorage.setItem('habla-espanol-language', lang); } catch (_) {}
}

document.querySelectorAll('.lang-button').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

let savedLanguage = 'es';
try { savedLanguage = localStorage.getItem('habla-espanol-language') || 'es'; } catch (_) {}
setLanguage(savedLanguage === 'en' ? 'en' : 'es');
