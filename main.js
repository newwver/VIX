document.addEventListener('DOMContentLoaded', () => {
    // ===============================
    // 1. GOOGLE MAP LINK (GLOBAL)
    // ===============================
    (function () {
      const mapContainer = document.getElementById('naver-map-link-container');
      const mapLink = document.getElementById('naver-map-link');
      const msg1 = mapContainer?.querySelector('[data-key="naverMapLinkMessage"]');
      const msg2 = mapContainer?.querySelector('[data-key="naverMapLinkMessage2"]');
  
      const EMOTION_TO_QUERY = {
        empty: 'psychological counseling center',
        powerless: 'mental health clinic',
        anxious: 'psychiatrist',
        sadness: 'mental health clinic'
      };
  
      window.showGoogleMapLink = function (emotionKey) {
        try {
          const query = EMOTION_TO_QUERY[emotionKey] || 'mental health clinic';
          const encoded = encodeURIComponent(query);
  
          if (mapLink) {
            mapLink.dataset.href = `https://www.google.com/maps/search/${encoded}`;
            mapLink.target = '_blank';
            mapLink.rel = 'noopener noreferrer';
          }
  
          if (msg1) {
            msg1.textContent =
              'You can find nearby mental health professionals based on your feelings.';
          }
  
          if (msg2) {
            msg2.textContent =
              'Search results will open in Google Maps (new tab).';
          }
  
          if (mapContainer) mapContainer.style.display = 'block';
        } catch {
          if (mapContainer) mapContainer.style.display = 'none';
        }
      };
    })();
  
    // ===============================
    // 2. TOAST & OVERLAY
    // ===============================
    (function () {
      function showToast(text, duration = 3500) {
        if (!text || document.getElementById('custom-toast')) return;
  
        const toast = document.createElement('div');
        toast.id = 'custom-toast';
        toast.textContent = text;
  
        Object.assign(toast.style, {
          position: 'fixed',
          left: '50%',
          bottom: '24px',
          transform: 'translateX(-50%)',
          background: 'rgba(0,0,0,0.85)',
          color: '#fff',
          padding: '10px 16px',
          borderRadius: '20px',
          zIndex: 9999,
          opacity: '0',
          transition: 'opacity 220ms ease'
        });
  
        document.body.appendChild(toast);
        requestAnimationFrame(() => (toast.style.opacity = '1'));
  
        setTimeout(() => {
          toast.style.opacity = '0';
          toast.addEventListener('transitionend', () => toast.remove());
        }, duration);
      }
  
      window.showToast = showToast;
  
      const overlay = document.querySelector('.result-overlay');
      const ticket = document.querySelector('.result-ticket');
      const closeBtn = document.querySelector('.result-overlay .close-btn');
  
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          overlay && (overlay.style.display = 'none');
          document.querySelector('.satisfaction-survey')?.classList.remove('hidden');
        });
      }
  
      if (overlay) {
        overlay.addEventListener('click', () => {
          overlay.style.display = 'none';
          document.querySelector('.satisfaction-survey')?.classList.remove('hidden');
        });
      }
  
      ticket?.addEventListener('click', e => e.stopPropagation());
    })();
  
    // ===============================
    // 3. TRANSLATION & DATA
    // ===============================
    let translations = {};
    let wisdomLibrary = {};
    let currentLang = document.documentElement.lang || localStorage.getItem('lang') || 'ko';
  
    function getTranslation(key, lang = currentLang) {
      return (
        translations[lang]?.[key] ||
        translations.ko?.[key] ||
        `MISSING_TRANSLATION[${key}]`
      );
    }
  
    async function loadData() {
      try {
        const [tRes, wRes] = await Promise.all([
          fetch('translations.json'),
          fetch('wisdoms.json')
        ]);
  
        translations = await tRes.json();
        wisdomLibrary = await wRes.json();
  
        updateContent();
        reset();
      } catch (e) {
        console.error('Data loading error:', e);
      }
    }
  
    function updateContent() {
      document.documentElement.lang = currentLang;
      document.title = getTranslation('appTitle');
      document.querySelector('meta[name="description"]').setAttribute('content', getTranslation('appDescription'));
  
      document.querySelectorAll('[data-key]').forEach(el => {
        el.textContent = getTranslation(el.dataset.key);
      });
  
      document.querySelectorAll('.option-btn').forEach(btn => {
        btn.dataset.value = btn.dataset.key;
      });
  
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
      });
    }
  
    function setLanguage(lang) {
      if (lang === currentLang) return;
      localStorage.setItem('lang', lang);
      if (lang === 'en') {
        window.location.href = '/index.en.html';
      } else {
        window.location.href = '/index.html';
      }
    }
  
    // ===============================
    // 4. DOM ELEMENTS
    // ===============================
    const questionContainer = document.querySelector('.question-container');
    const resultOverlay = document.querySelector('.result-overlay');
    const resultTicketEl = document.querySelector('.result-ticket');
    const loadingSpinner = document.getElementById('loading-spinner');
    const submitBtn = document.getElementById('submit-btn');
    const reportBtn = document.getElementById('report-btn');
    const closeBtn = document.querySelector('.close-btn');
    const langButtons = document.querySelectorAll('.lang-btn');
    const satisfactionSurvey = document.querySelector('.satisfaction-survey');
  
    const questionSteps = {
      1: document.getElementById('question-1'),
      2: document.getElementById('question-2'),
      3: document.getElementById('question-3')
    };
  
    const resultElements = {
      intro: document.querySelector('.wisdom-intro'),
      mainText: document.querySelector('.wisdom-text-main'),
      author: document.querySelector('.wisdom-author-main'),
      deepening: document.querySelector('.wisdom-commentary-main'),
      closing: document.querySelector('.wisdom-closing'),
      mission: document.querySelector('.mission-text-main')
    };
  
    // ===============================
    // 5. STATE
    // ===============================
    const userSelections = { emotion: [], cause: [], need: [] };
    let currentStep = 1;
    let autoAdvanceTimer = null;
    let lastDisplayedWisdom = null;
  
    // ===============================
    // 6. CORE LOGIC
    // ===============================
    function handleOptionClick(e) {
      const btn = e.target;
      const step = Number(btn.closest('.question-step').id.split('-')[1]);
      const category = Object.keys(userSelections)[step - 1];
      const value = btn.dataset.value;
  
      userSelections[category] = [value];
  
      btn.closest('.options-grid')
        .querySelectorAll('.option-btn')
        .forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
  
      clearTimeout(autoAdvanceTimer);
  
      if (step < 3) {
        autoAdvanceTimer = setTimeout(() => advanceToStep(step + 1), 300);
      } else {
        submitBtn.classList.remove('hidden');
      }
    }
  
    function advanceToStep(step) {
      questionSteps[currentStep]?.classList.add('hidden');
      questionSteps[step]?.classList.remove('hidden');
      currentStep = step;
    }
  
    function displayWisdomTicket(w) {
      lastDisplayedWisdom = w;
      resultElements.intro.textContent = getTranslation(w.intro);
      resultElements.mainText.textContent = getTranslation(w.wisdom);
      resultElements.author.textContent = `— ${getTranslation(w.author)}`;
      resultElements.deepening.textContent = getTranslation(w.deepening);
      resultElements.closing.textContent = getTranslation(w.closing);
      resultElements.mission.textContent = getTranslation(w.mission);
    }
  
    function getWisdom() {
      questionContainer.classList.add('hidden');
      loadingSpinner.classList.remove('hidden');
  
      setTimeout(() => {
        const emotion = userSelections.emotion[0] || 'empty';
        const emotionSet = wisdomLibrary[emotion] || {};
        const pools = Object.values(emotionSet).flat();
        const wisdom = pools[Math.floor(Math.random() * pools.length)];
  
        displayWisdomTicket(wisdom);
        loadingSpinner.classList.add('hidden');
        resultOverlay.style.display = 'flex';
  
        window.showGoogleMapLink?.(emotion);
      }, 50);
    }
  
    function reset() {
      Object.keys(userSelections).forEach(k => (userSelections[k] = []));
      currentStep = 1;
  
      resultOverlay.style.display = 'none';
      satisfactionSurvey?.classList.add('hidden');
      questionContainer.classList.remove('hidden');
  
      Object.values(questionSteps).forEach(s => s?.classList.add('hidden'));
      questionSteps[1]?.classList.remove('hidden');
  
      document.querySelectorAll('.option-btn.selected').forEach(b =>
        b.classList.remove('selected')
      );
  
      submitBtn.classList.add('hidden');
      loadingSpinner.classList.add('hidden');
    }
  
    window.resetApp = reset;
  
    // ===============================
    // 7. EVENTS
    // ===============================
    document.querySelectorAll('.option-btn').forEach(btn =>
      btn.addEventListener('click', handleOptionClick)
    );
  
    submitBtn?.addEventListener('click', getWisdom);
  
    reportBtn?.addEventListener('click', () => {
      console.log('report-btn clicked');
      showToast(getTranslation('featureInProgress'));
      gtag('event', 'generate_report_click', {
        event_category: 'engagement',
        event_label: 'personalized_report_button',
        button_text: getTranslation('getReport')
      });
    });
  
    langButtons.forEach(btn =>
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang))
    );

    document.getElementById('survey-yes')?.addEventListener('click', () => {
      console.log('Survey Yes clicked, dispatching answer: yes');
      gtag('event', 'answer', { answer: 'yes' });
      reset();
    });

    document.getElementById('survey-no')?.addEventListener('click', () => {
      console.log('Survey No clicked, dispatching answer: no');
      gtag('event', 'answer', { answer: 'no' });
      reset();
    });

    document.getElementById('naver-map-link')?.addEventListener('click', () => {
      console.log('Find Experts clicked, dispatching link_text: find_experts');
      gtag('event', 'link_text', { link_text: 'find_experts' });
    });
  
    // ===============================
    // 8. INIT
    // ===============================
    loadData();
  });
  