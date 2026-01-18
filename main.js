document.addEventListener('DOMContentLoaded', () => {
    // --- Translations ---
    const translations = {
        ko: {
            appTitle: "삶의 의미를 잃어버린 당신에게",
            q1Title: "지금 당신의 마음에 가장 가까운 감정은 무엇인가요?",
            empty: "공허함",
            powerless: "무기력함",
            anxious: "불안함",
            sadness: "슬픔",
            q2Title: "그 감정의 원인은 무엇이라고 생각하시나요?",
            workCareer: "일과 진로",
            relationships: "인간관계",
            health: "건강",
            myself: "나 자신",
            unknown: "알 수 없음",
            q3Title: "지금 당신에게 가장 필요한 위로의 종류는 무엇인가요?",
            gentleComfort: "다정한 위로",
            realisticAdvice: "현실적인 조언",
            philosophicalInsight: "철학적인 통찰",
            sternAdvice: "따끔한 충고",
            findWisdom: "지혜 찾기",
            loadingMessage: "당신만을 위한 지혜를 찾고 있어요...",
            saveImage: "이미지로 저장하기",
            retry: "다시 찾기",
            // closeBtn: "닫기", // For the close button accessible text

            // Wisdoms (using keys for dynamic content)
            wisdom1_intro: "사람들 속에 있어도 문득 혼자인 것만 같은 차가운 공허함이 당신을 찾아왔군요.",
            wisdom1_wisdom: "산에 피어 있는 꽃은 누가 봐주지 않아도 제 몫을 다합니다.",
            wisdom1_author: "법륜 스님",
            wisdom1_deepening: "꽃의 목적은 누군가에게 예쁘게 보이는 것이 아니라, 그저 피어나는 그 자체에 있습니다. 당신의 가치 또한 누군가의 인정을 받기 위한 수단이 아닙니다. 지금 이 자리에 숨 쉬고 있는 것, 그것이 당신의 가장 위대한 성취입니다.",
            wisdom1_closing: "애쓰지 않아도 당신은 이미 충분히 빛나는 사람입니다.",
            wisdom1_mission: "지금 바로 찬물 한 잔을 입안에 머금고 그 시원한 감각을 느껴보세요.",

            wisdom2_intro: "타인의 시선에 맞추느라 정작 '나'를 잃어버린 듯한 허전함이 느껴질 때가 있죠.",
            wisdom2_wisdom: "진정한 소명은 자기 자신에게로 이르는 길을 찾는 것이다.",
            wisdom2_author: "헤르만 헤세",
            wisdom2_deepening: "우리는 종종 밖에서 답을 찾으려 헤매지만, 헤세는 모든 답이 결국 내면으로 향하는 길목에 있다고 말합니다. 타인이 만든 기준에 당신을 끼워 맞추지 마세요. 당신은 오직 당신이 되기 위해 이 땅에 왔습니다.",
            wisdom2_closing: "당신이라는 유일한 별은 그 자체로 이미 완전합니다.",
            wisdom2_mission: "거울 속의 나를 가만히 바라보며 '고생했어'라고 작게 속삭여보세요.",
            
            wisdom3_intro: "열심히 달려왔지만 정작 손에 쥔 것이 없는 것 같아 마음이 텅 빈 날인가요?",
            wisdom3_wisdom: "인생이란, 당신이 다른 계획을 세우느라 바쁠 때 당신에게 일어나는 것이다.",
            wisdom3_author: "존 레논",
            wisdom3_deepening: "미래의 거창한 목표를 달성해야만 삶의 의미가 생기는 것은 아닙니다. 지금 이 순간, 당신이 겪는 사소한 일들이 모여 이미 당신의 인생을 만들고 있습니다. 결과가 없다고 해서 당신의 시간이 사라진 것은 아닙니다.",
            wisdom3_closing: "성취보다 중요한 것은 당신이 지나온 그 모든 과정입니다.",
            wisdom3_mission: "책상 위 물건 중 가장 오랫동안 자리를 지킨 물건 하나를 정성껏 닦아주세요.",

            wisdom4_intro: "내가 누구인지, 왜 사는지 도무지 알 수 없어 가슴 한구석이 서늘해질 때...",
            wisdom4_wisdom: "텅 빈 충만, 그 역설의 의미를 체득해야 한다.",
            wisdom4_author: "법정 스님",
            wisdom4_deepening: "비어있다는 것은 부족함이 아니라, 무엇이든 채울 수 있는 가능성을 뜻합니다. 마음의 공허함은 당신의 영혼이 잠시 쉬어 가고 싶다는 신호일지 모릅니다. 무언가로 억지로 채우려 하기보다 그 비어있음을 가만히 응시해 보세요.",
            wisdom4_closing: "비워진 만큼 당신은 더 넓고 깊어질 것입니다.",
            wisdom4_mission: "방 안의 불을 모두 끄고 1분간 어둠의 고요함을 온전히 누려보세요.",

            wisdom5_intro: "손가락 하나 까딱할 힘조차 없고, 모든 게 덧없게 느껴져 답답해 돌아버릴 것 같을 때...",
            wisdom5_wisdom: "다람쥐도 살고 토끼도 사는데, 사람이 못 살 이유가 뭐가 있습니까.",
            wisdom5_author: "법륜 스님",
            wisdom5_deepening: "삶에 거창한 의미가 꼭 있어야 하는 것은 아닙니다. 그저 태어났기에 살아가고, 살아있기에 오늘을 맞이하는 것만으로도 생명의 도리를 다하는 것입니다. 의미를 찾지 못해 괴로워하는 당신에게 스님은 '그냥 살아도 괜찮다'고 말합니다.",
            wisdom5_closing: "오늘은 그저 무사히 하루를 보낸 당신 자신을 칭찬해 주세요.",
            wisdom5_mission: "자리에서 일어나 기지개를 크게 한 번 켜고 몸의 근육이 늘어나는 것을 느껴보세요.",

            wisdom6_intro: "아무것도 하고 싶지 않은 무력함이 당신을 짓누르고 있나요?",
            wisdom6_wisdom: "나를 죽이지 못하는 것은 나를 더 강하게 만들 뿐이다.",
            wisdom6_author: "프리드리히 니체",
            wisdom6_deepening: "무기력은 당신이 너무 강하게 버티려다 잠시 방전된 상태일 뿐입니다. 이 깊은 침잠의 시간 또한 당신을 더 단단하게 만드는 과정입니다. 아무것도 하지 않는 지금의 당신도 여전히 성장하고 있습니다.",
            wisdom6_closing: "잠시 멈춰 서 있는 당신을 응원합니다.",
            wisdom6_mission: "눈을 감고 가장 깊고 느린 호흡을 세 번만 반복해 보세요.",

            wisdom7_intro: "해야 할 일은 쌓여있는데 도무지 의욕이 생기지 않을 때...",
            wisdom7_wisdom: "가장 큰 위험은 너무 조심하는 것이다.",
            wisdom7_author: "괴테",
            wisdom7_deepening: "실패에 대한 두려움이 우리를 무기력하게 만듭니다. 완벽하게 해내려 하지 마세요. 아주 작고 사소한 시작이 무기력의 벽을 깨는 유일한 망치입니다. 결과보다 당신이 내딛는 그 첫걸음이 더 중요합니다.",
            wisdom7_closing: "작은 시도가 모여 당신만의 길을 완성할 것입니다.",
            wisdom7_mission: "오늘 할 일 중 가장 사소한 것 하나(예: 샤워하기)만 지금 해보세요.",

            wisdom8_intro: "오지 않은 내일이 두려워 잠 못 이루고 가슴이 답답해지는 밤인가요?",
            wisdom8_wisdom: "우리가 두려워하는 것들의 대부분은 현실보다 상상 속에서 더 크다.",
            wisdom8_author: "세네카",
            wisdom8_deepening: "불안은 미래의 불확실성을 상상으로 채울 때 발생합니다. 하지만 당신이 걱정하는 일의 90%는 실제로 일어나지 않습니다. 상상이 당신의 현재를 잠식하게 두지 마세요. 당신에게는 지금 이 순간만이 실재합니다.",
            wisdom8_closing: "걱정은 내일에게 맡기고, 당신은 오늘을 누릴 자격이 있습니다.",
            wisdom8_mission: "불안한 생각 하나를 종이에 적고, 그 종이를 구겨서 쓰레기통에 던져버리세요.",

            wisdom9_intro: "앞이 보이지 않는 막막함에 숨이 턱끝까지 차오를 때...",
            wisdom9_wisdom: "가장 깊은 밤이 지나야 새벽이 온다.",
            wisdom9_author: "작자 미상",
            wisdom9_deepening: "어둠이 가장 짙다는 것은 곧 해가 뜨기 직전이라는 뜻이기도 합니다. 지금 당신이 겪는 이 혹독한 불안은 당신의 인생에서 가장 빛나는 아침을 맞이하기 위한 전조일 뿐입니다. 조금만 더 버텨주세요.",
            wisdom9_closing: "당신의 새벽은 반드시 밝아올 것입니다.",
            wisdom9_mission: "창문을 아주 살짝만 열어 차가운 밤공기가 얼굴에 닿는 감각을 느껴보세요.",

            wisdom10_intro: "주변의 시선과 관계 때문에 마음이 흔들리고 불안할 때...",
            wisdom10_wisdom: "세상이란 우리가 보고 싶어 하는 방식으로만 존재한다.",
            wisdom10_author: "헤르만 헤세",
            wisdom10_deepening: "타인의 평가가 곧 당신의 정체성은 아닙니다. 당신을 흔드는 것은 타인의 말 자체가 아니라, 그 말을 받아들이는 당신의 마음일지 모릅니다. 당신의 시선을 조금만 돌려 당신을 아껴주는 사람들의 온기를 바라보세요.",
            wisdom10_closing: "당신은 누군가의 편견보다 훨씬 더 크고 아름다운 존재입니다.",
            wisdom10_mission: "당신이 가장 편안함을 느끼는 사람의 이름을 마음속으로 세 번 불러보세요.",
            
            fallback_intro: "당신을 위한 지혜를 찾았지만, 깊이를 더하기 어려웠어요.",
            fallback_wisdom: "선택하지 않은 길 또한 당신의 일부입니다.",
            fallback_author: "누군가의 지혜",
            fallback_deepening: "어떤 선택을 하든, 당신의 길은 가치가 있습니다. 이 길의 끝에서 또 다른 길이 당신을 기다리고 있을 것입니다.",
            fallback_closing: "스스로를 믿고 나아가세요.",
            fallback_mission: "하늘을 보며 크게 심호흡을 세 번 해보세요."

        },
        en: {
            appTitle: "For You, Who Have Lost the Meaning of Life",
            q1Title: "What emotion is closest to your heart right now?",
            empty: "Emptiness",
            powerless: "Powerlessness",
            anxious: "Anxiety",
            sadness: "Sadness",
            q2Title: "What do you think is the cause of that emotion?",
            workCareer: "Work & Career",
            relationships: "Relationships",
            health: "Health",
            myself: "Myself",
            unknown: "Unknown",
            q3Title: "What kind of comfort do you need most right now?",
            gentleComfort: "Gentle Comfort",
            realisticAdvice: "Realistic Advice",
            philosophicalInsight: "Philosophical Insight",
            sternAdvice: "Stern Advice",
            findWisdom: "Find Wisdom",
            loadingMessage: "Searching for wisdom just for you...",
            saveImage: "Save as Image",
            retry: "Try Again",
            closeBtn: "Close",

            // Wisdoms (using keys for dynamic content)
            wisdom1_intro: "It seems a cold emptiness has found you, making you feel alone even among people.",
            wisdom1_wisdom: "A flower blooming on a mountain fulfills its purpose even if no one sees it.",
            wisdom1_author: "Ven. Beopryun",
            wisdom1_deepening: "The purpose of a flower is not to look pretty for someone, but simply to bloom. Your worth is not a means to gain someone's approval. The fact that you are breathing in this moment, that is your greatest achievement.",
            wisdom1_closing: "You are already shining brightly without even trying.",
            wisdom1_mission: "Right now, take a sip of cold water and feel its refreshing sensation.",

            wisdom2_intro: "There are times when you feel an emptiness, as if you've lost 'yourself' trying to meet others' expectations.",
            wisdom2_wisdom: "The true vocation is to find the path to oneself.",
            wisdom2_author: "Herman Hesse",
            wisdom2_deepening: "We often wander, seeking answers outside, but Hesse says all answers eventually lie on the path inward. Don't force yourself into standards set by others. You came to this earth only to be you.",
            wisdom2_closing: "The unique star that is you is already complete in itself.",
            wisdom2_mission: "Gaze quietly at yourself in the mirror and softly whisper, 'You've worked hard.'",
            
            wisdom3_intro: "Have you run hard, only to feel empty-handed and heart-vacant?",
            wisdom3_wisdom: "Life is what happens to you while you're busy making other plans.",
            wisdom3_author: "John Lennon",
            wisdom3_deepening: "Achieving grand future goals is not the only way to find meaning in life. In this very moment, the small things you experience are already shaping your life. Just because there's no tangible result doesn't mean your time has vanished.",
            wisdom3_closing: "More important than achievement is every process you've been through.",
            wisdom3_mission: "Carefully clean one item on your desk that has been there the longest.",

            wisdom4_intro: "When you can't figure out who you are or why you live, and a chill runs through your heart...",
            wisdom4_wisdom: "One must grasp the meaning of 'empty fullness,' that paradox.",
            wisdom4_author: "Ven. Beopjeong",
            wisdom4_deepening: "Being empty doesn't signify lack, but the potential to be filled with anything. The emptiness in your heart might be a sign that your soul wishes to rest for a while. Rather than trying to forcefully fill it, calmly observe that emptiness.",
            wisdom4_closing: "You will become wider and deeper the more you empty yourself.",
            wisdom4_mission: "Turn off all the lights in your room and fully embrace the quiet darkness for one minute.",

            wisdom5_intro: "When you don't even have the strength to lift a finger, and everything feels futile, making you frustrated to the point of madness...",
            wisdom5_wisdom: "If squirrels and rabbits can live, what reason is there for humans not to?",
            wisdom5_author: "Ven. Beopryun",
            wisdom5_deepening: "Life doesn't necessarily require a grand meaning. Simply living because you were born, and facing today because you are alive, is enough to fulfill the duty of life. To you who suffers from not finding meaning, the monk says, 'It's okay just to live.'",
            wisdom5_closing: "Today, praise yourself for having safely gotten through the day.",
            wisdom5_mission: "Stand up, stretch widely, and feel your muscles extending.",

            wisdom6_intro: "Is a debilitating powerlessness weighing you down, making you want to do nothing?",
            wisdom6_wisdom: "What does not kill me makes me stronger.",
            wisdom6_author: "Friedrich Nietzsche",
            wisdom6_deepening: "Powerlessness is just a temporary state of exhaustion from trying to endure too strongly. This period of deep stagnation is also a process that makes you tougher. Even now, doing nothing, you are still growing.",
            wisdom6_closing: "I support you as you pause for a moment.",
            wisdom6_mission: "Close your eyes and take three of your deepest, slowest breaths.",

            wisdom7_intro: "When tasks pile up but you can't find any motivation...",
            wisdom7_wisdom: "The greatest danger is to be too cautious.",
            wisdom7_author: "Goethe",
            wisdom7_deepening: "Fear of failure makes us powerless. Don't try to do everything perfectly. A very small, insignificant start is the only hammer that breaks the wall of powerlessness. Your first step is more important than the result.",
            wisdom7_closing: "Small attempts will gather to complete your unique path.",
            wisdom7_mission: "Do just one tiny task you have today (e.g., take a shower).",

            wisdom8_intro: "Is it a night when you can't sleep, your chest heavy with fear of an unknown tomorrow?",
            wisdom8_wisdom: "Most of the things we fear are larger in our imagination than in reality.",
            wisdom8_author: "Seneca",
            wisdom8_deepening: "Anxiety arises when you fill the uncertainty of the future with imagination. But 90% of what you worry about never actually happens. Don't let imagination consume your present. Only this moment exists for you.",
            wisdom8_closing: "Leave your worries for tomorrow; you deserve to enjoy today.",
            wisdom8_mission: "Write down one anxious thought on a piece of paper, crumple it up, and throw it in the trash.",

            wisdom9_intro: "When you feel suffocated by the daunting unknown ahead...",
            wisdom9_wisdom: "Dawn always comes after the darkest night.",
            wisdom9_author: "Unknown Author",
            wisdom9_deepening: "The deepest darkness also means that the sun is about to rise. This harsh anxiety you are experiencing now is merely a prelude to the brightest morning of your life. Just hold on a little longer.",
            wisdom9_closing: "Your dawn will surely break.",
            wisdom9_mission: "Open the window just a crack and feel the cold night air on your face.",

            wisdom10_intro: "When your heart wavers and feels anxious due to external gazes and relationships...",
            wisdom10_wisdom: "The world exists only in the way we want to see it.",
            wisdom10_author: "Herman Hesse",
            wisdom10_deepening: "Others' evaluations are not your identity. What shakes you might not be others' words themselves, but your heart's reception of those words. Shift your gaze slightly and look at the warmth of those who care for you.",
            wisdom10_closing: "You are far greater and more beautiful than anyone's prejudice.",
            wisdom10_mission: "Mentally call the name of the person you feel most comfortable with, three times.",
            
            fallback_intro: "We searched for wisdom for you, but found it hard to deepen.",
            fallback_wisdom: "The path not chosen is also a part of you.",
            fallback_author: "Someone's Wisdom",
            fallback_deepening: "No matter what choice you make, your path is valuable. At the end of this path, another path will be waiting for you.",
            fallback_closing: "Believe in yourself and move forward.",
            fallback_mission: "Look at the sky and take three deep breaths."
        }
    };

    let currentLang = localStorage.getItem('lang') || 'ko'; // Default to Korean

    function getTranslation(key, lang = currentLang) {
        return translations[lang][key] || translations['ko'][key] || `MISSING_TRANSLATION[${key}]`;
    }

    function updateContent() {
        document.documentElement.lang = currentLang; // Update HTML lang attribute
        document.title = getTranslation('appTitle'); // Update document title

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (element.tagName === 'BUTTON' && !element.classList.contains('option-btn')) {
                element.textContent = getTranslation(key);
            } else if (element.tagName === 'P' || element.tagName === 'H2' || element.tagName === 'SPAN' || element.tagName === 'A') {
                element.textContent = getTranslation(key);
            } else if (element.classList.contains('option-btn')) {
                // For option buttons, update the displayed text but keep the data-value as the key
                element.textContent = getTranslation(key);
            }
        });

        // Update active language button style
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.dataset.lang === currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update the data-value of option buttons to be the key, not the translated text
        // This is crucial for userSelections logic later
        document.querySelectorAll('.options-grid .option-btn').forEach(btn => {
            const key = btn.dataset.key; // The data-key holds the unique identifier (e.g., 'empty')
            btn.dataset.value = key; // Set data-value to the key
        });
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        updateContent();
        // If a wisdom ticket is currently displayed, re-render it with the new language
        if (resultOverlay.style.display === 'flex') {
            displayWisdomTicket(lastDisplayedWisdom); // Assuming lastDisplayedWisdom is stored
        }
    }

    // --- DOM Elements ---
    const questionContainer = document.querySelector('.question-container');
    const resultOverlay = document.querySelector('.result-overlay');
    const saveBtn = document.getElementById('save-btn');
    const retryBtn = document.getElementById('retry-btn');
    const closeBtn = document.querySelector('.close-btn');
    const resultTicketEl = document.querySelector('.result-ticket');
    const loadingSpinner = document.getElementById('loading-spinner');
    const submitBtn = document.getElementById('submit-btn');
    const langButtons = document.querySelectorAll('.lang-btn');

    const questionSteps = {
        1: document.getElementById('question-1'),
        2: document.getElementById('question-2'),
        3: document.getElementById('question-3'),
    };
    
    // New result elements selectors based on updated HTML
    const resultElements = {
        intro: document.querySelector('.wisdom-intro'), 
        mainText: document.querySelector('.wisdom-text-main'),
        author: document.querySelector('.wisdom-author-main'),
        deepening: document.querySelector('.wisdom-commentary-main'), 
        closing: document.querySelector('.wisdom-closing'),
        mission: document.querySelector('.mission-text-main'),
    };

    let lastDisplayedWisdom = null; // To store the last displayed wisdom for language switching

    // --- Local Data Library (Refactored to use translation keys) ---
    const wisdomLibrary = {
        empty: { // Corresponds to data-key 'empty'
            relationships: [ // Corresponds to data-key 'relationships'
                {
                    intro: "wisdom1_intro",
                    wisdom: "wisdom1_wisdom",
                    author: "wisdom1_author",
                    deepening: "wisdom1_deepening",
                    closing: "wisdom1_closing",
                    mission: "wisdom1_mission"
                },
                {
                    intro: "wisdom2_intro",
                    wisdom: "wisdom2_wisdom",
                    author: "wisdom2_author",
                    deepening: "wisdom2_deepening",
                    closing: "wisdom2_closing",
                    mission: "wisdom2_mission"
                }
            ],
            workCareer: [ // Corresponds to data-key 'workCareer'
                {
                    intro: "wisdom3_intro",
                    wisdom: "wisdom3_wisdom",
                    author: "wisdom3_author",
                    deepening: "wisdom3_deepening",
                    closing: "wisdom3_closing",
                    mission: "wisdom3_mission"
                }
            ],
            myself: [ // Corresponds to data-key 'myself'
                {
                    intro: "wisdom4_intro",
                    wisdom: "wisdom4_wisdom",
                    author: "wisdom4_author",
                    deepening: "wisdom4_deepening",
                    closing: "wisdom4_closing",
                    mission: "wisdom4_mission"
                }
            ]
        },

        powerless: { // Corresponds to data-key 'powerless'
            myself: [ 
                {
                    intro: "wisdom5_intro",
                    wisdom: "wisdom5_wisdom",
                    author: "wisdom5_author",
                    deepening: "wisdom5_deepening",
                    closing: "wisdom5_closing",
                    mission: "wisdom5_mission"
                },
                {
                    intro: "wisdom6_intro",
                    wisdom: "wisdom6_wisdom",
                    author: "wisdom6_author",
                    deepening: "wisdom6_deepening",
                    closing: "wisdom6_closing",
                    mission: "wisdom6_mission"
                }
            ],
            workCareer: [ 
                {
                    intro: "wisdom7_intro",
                    wisdom: "wisdom7_wisdom",
                    author: "wisdom7_author",
                    deepening: "wisdom7_deepening",
                    closing: "wisdom7_closing",
                    mission: "wisdom7_mission"
                }
            ]
        },

        anxious: { // Corresponds to data-key 'anxious'
            future: [ // New category to map '알 수 없음' -> 'unknown'
                {
                    intro: "wisdom8_intro",
                    wisdom: "wisdom8_wisdom",
                    author: "wisdom8_author",
                    deepening: "wisdom8_deepening",
                    closing: "wisdom8_closing",
                    mission: "wisdom8_mission"
                },
                {
                    intro: "wisdom9_intro",
                    wisdom: "wisdom9_wisdom",
                    author: "wisdom9_author",
                    deepening: "wisdom9_deepening",
                    closing: "wisdom9_closing",
                    mission: "wisdom9_mission"
                }
            ],
            relationships: [
                {
                    intro: "wisdom10_intro",
                    wisdom: "wisdom10_wisdom",
                    author: "wisdom10_author",
                    deepening: "wisdom10_deepening",
                    closing: "wisdom10_closing",
                    mission: "wisdom10_mission"
                }
            ]
        }
    };


    // --- State ---
    const userSelections = { emotion: [], cause: [], need: [] }; 
    let currentStep = 1;
    let autoAdvanceTimer = null; 

    // --- Functions ---
    function handleOptionClick(event) {
        const button = event.target;
        const { value } = button.dataset; // data-value is now the key
        const step = parseInt(button.closest('.question-step').id.split('-')[1]);
        const category = Object.keys(userSelections)[step - 1];
        
        if (userSelections[category].includes(value)) {
            userSelections[category] = [];
            button.classList.remove('selected');
        } else {
            userSelections[category] = [value];
            button.closest('.options-grid').querySelectorAll('.option-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            button.classList.add('selected');
        }
        
        if (autoAdvanceTimer) {
            clearTimeout(autoAdvanceTimer);
        }

        if (step < 3) {
            if (userSelections[category].length > 0) {
                autoAdvanceTimer = setTimeout(() => {
                    advanceToStep(step + 1);
                }, 300);
            }
        } else { 
            if (userSelections[category].length > 0) {
                submitBtn.classList.remove('hidden');
            } else {
                submitBtn.classList.add('hidden');
            }
        }
    }

    function advanceToStep(stepNumber) {
        questionSteps[currentStep].classList.add('hidden');
        questionSteps[stepNumber].classList.remove('hidden');
        currentStep = stepNumber;
    }

    function displayWisdomTicket(wisdom) {
        lastDisplayedWisdom = wisdom; // Store for language switching
        resultElements.intro.textContent = getTranslation(wisdom.intro);
        resultElements.mainText.textContent = getTranslation(wisdom.wisdom);
        resultElements.author.textContent = `— ${getTranslation(wisdom.author)}`;
        resultElements.deepening.textContent = getTranslation(wisdom.deepening);
        resultElements.closing.textContent = getTranslation(wisdom.closing);
        resultElements.mission.textContent = getTranslation(wisdom.mission);
    }

    function getWisdom() {
        questionContainer.classList.add('hidden');
        loadingSpinner.classList.remove('hidden');

        setTimeout(() => { 
            // userSelections now holds keys like 'empty', 'workCareer', 'gentleComfort'
            const emotionKey = userSelections.emotion[0] || 'empty'; 
            let causeKey = userSelections.cause[0] || 'relationships'; 
            const needKey = userSelections.need[0] || 'gentleComfort'; 

            // Special handling for 'unknown' cause, map it to 'future'
            if (causeKey === 'unknown') {
                causeKey = 'future';
            }

            let wisdomSet = wisdomLibrary[emotionKey]?.[causeKey];
            
            // Fallback logic for wisdomSet
            if (!wisdomSet || wisdomSet.length === 0) {
                const emotionCauses = wisdomLibrary[emotionKey];
                if (emotionCauses) {
                    const allCausesSets = Object.values(emotionCauses);
                    if (allCausesSets.length > 0) {
                        wisdomSet = allCausesSets[Math.floor(Math.random() * allCausesSets.length)];
                    }
                }
            }
            if (!wisdomSet || wisdomSet.length === 0) {
                 const allEmotions = Object.values(wisdomLibrary);
                 const randomEmotionSet = allEmotions[Math.floor(Math.random() * allEmotions.length)];
                 const allCausesOfRandomEmotion = Object.values(randomEmotionSet);
                 wisdomSet = allCausesOfRandomEmotion[Math.floor(Math.random() * allCausesOfRandomEmotion.length)];
            }


            let wisdom;
            if (wisdomSet && wisdomSet.length > 0) {
                const filteredByNeed = wisdomSet.filter(w => {
                    const deepeningText = getTranslation(w.deepening, 'ko'); // Use Korean for filtering logic
                    const missionText = getTranslation(w.mission, 'ko');
                    const authorText = getTranslation(w.author, 'ko');

                    if (needKey === 'gentleComfort') return deepeningText.includes('당신') || deepeningText.includes('사랑') || deepeningText.includes('위로');
                    if (needKey === 'realisticAdvice') return missionText.includes('지금') || missionText.includes('하나') || missionText.includes('해보세요');
                    if (needKey === 'philosophicalInsight') return authorText.includes('니체') || authorText.includes('헤세') || authorText.includes('세네카') || authorText.includes('법정');
                    if (needKey === 'sternAdvice') return deepeningText.includes('직시') || deepeningText.includes('직면') || deepeningText.includes('인정');
                    return true;
                });
                
                if (filteredByNeed.length > 0) {
                    wisdom = filteredByNeed[Math.floor(Math.random() * filteredByNeed.length)];
                } else {
                    wisdom = wisdomSet[Math.floor(Math.random() * wisdomSet.length)];
                }
            } else {
                wisdom = { 
                    intro: "fallback_intro", 
                    wisdom: "fallback_wisdom", 
                    author: "fallback_author", 
                    deepening: "fallback_deepening", 
                    closing: "fallback_closing", 
                    mission: "fallback_mission" 
                };
            }
            
            displayWisdomTicket(wisdom); // Use the new function to display
            loadingSpinner.classList.add('hidden');
            resultOverlay.style.display = 'flex';
        }, 50);
    }

    function reset() {
        resultOverlay.style.display = 'none';
        questionContainer.classList.remove('hidden');
        
        document.querySelectorAll('.option-btn.selected').forEach(btn => {
            btn.classList.remove('selected');
        });
        document.querySelectorAll('.next-btn').forEach(btn => { 
            btn.classList.add('hidden');
        });

        questionSteps[1].classList.remove('hidden');
        questionSteps[2].classList.add('hidden');
        questionSteps[3].classList.add('hidden');
        currentStep = 1;
        userSelections.emotion = [];
        userSelections.cause = [];
        userSelections.need = [];
        submitBtn.classList.add('hidden'); 
    }

    // --- Event Listeners ---
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', handleOptionClick);
    });

    submitBtn.addEventListener('click', getWisdom); 
    
    saveBtn.addEventListener('click', () => {
        // Use the current language in the filename
        const filename = currentLang === 'ko' ? '오늘의-지혜.png' : 'Todays-Wisdom.png';
        html2canvas(resultTicketEl, { 
            backgroundColor: null,
            scale: 2 
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = filename;
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });

    retryBtn.addEventListener('click', reset);
    closeBtn.addEventListener('click', reset);

    // Add new event listeners here for satisfaction survey buttons
    const surveyYesBtn = document.getElementById('survey-yes');
    const surveyNoBtn = document.getElementById('survey-no');

    if (surveyYesBtn) {
        surveyYesBtn.addEventListener('click', () => {
            console.log('Satisfaction Survey: Yes, comforted!');
            // Add logic here for sending data or further interaction
        });
    }

    if (surveyNoBtn) {
        surveyNoBtn.addEventListener('click', () => {
            console.log('Satisfaction Survey: Still unsure.');
            // Add logic here for sending data or further interaction
        });
    }

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            setLanguage(button.dataset.lang);
        });
    });

    // Initial setup
    updateContent(); // Apply translations on load
    reset(); // Set initial state correctly

    // Force default button selection for unknown cause to 'future' key
    // This needs to happen after initial content update so data-value is set to keys
    const unknownCauseButton = document.querySelector('.option-btn[data-key="unknown"]');
    if (unknownCauseButton) {
        unknownCauseButton.dataset.value = 'future';
    }

});