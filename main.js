document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const questionContainer = document.querySelector('.question-container');
    const resultOverlay = document.querySelector('.result-overlay');
    const saveBtn = document.getElementById('save-btn');
    const retryBtn = document.getElementById('retry-btn');
    const closeBtn = document.querySelector('.close-btn');
    const resultTicketEl = document.querySelector('.result-ticket');
    const loadingSpinner = document.getElementById('loading-spinner');
    const submitBtn = document.getElementById('submit-btn');

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

    // --- Local Data Library ---
    const wisdomLibrary = {
        공허함: {
            "인간관계": [
                {
                    intro: "사람들 속에 있어도 문득 혼자인 것만 같은 차가운 공허함이 당신을 찾아왔군요.",
                    wisdom: "산에 피어 있는 꽃은 누가 봐주지 않아도 제 몫을 다합니다.",
                    author: "법륜 스님",
                    deepening: "꽃의 목적은 누군가에게 예쁘게 보이는 것이 아니라, 그저 피어나는 그 자체에 있습니다. 당신의 가치 또한 누군가의 인정을 받기 위한 수단이 아닙니다. 지금 이 자리에 숨 쉬고 있는 것, 그것이 당신의 가장 위대한 성취입니다.",
                    closing: "애쓰지 않아도 당신은 이미 충분히 빛나는 사람입니다.",
                    mission: "지금 바로 찬물 한 잔을 입안에 머금고 그 시원한 감각을 느껴보세요."
                },
                {
                    intro: "타인의 시선에 맞추느라 정작 '나'를 잃어버린 듯한 허전함이 느껴질 때가 있죠.",
                    wisdom: "진정한 소명은 자기 자신에게로 이르는 길을 찾는 것이다.",
                    author: "헤르만 헤세",
                    deepening: "우리는 종종 밖에서 답을 찾으려 헤매지만, 헤세는 모든 답이 결국 내면으로 향하는 길목에 있다고 말합니다. 타인이 만든 기준에 당신을 끼워 맞추지 마세요. 당신은 오직 당신이 되기 위해 이 땅에 왔습니다.",
                    closing: "당신이라는 유일한 별은 그 자체로 이미 완전합니다.",
                    mission: "거울 속의 나를 가만히 바라보며 '고생했어'라고 작게 속삭여보세요."
                }
            ],
            "일과 진로": [ // Changed from 일과진로
                {
                    intro: "열심히 달려왔지만 정작 손에 쥔 것이 없는 것 같아 마음이 텅 빈 날인가요?",
                    wisdom: "인생이란, 당신이 다른 계획을 세우느라 바쁠 때 당신에게 일어나는 것이다.",
                    author: "존 레논",
                    deepening: "미래의 거창한 목표를 달성해야만 삶의 의미가 생기는 것은 아닙니다. 지금 이 순간, 당신이 겪는 사소한 일들이 모여 이미 당신의 인생을 만들고 있습니다. 결과가 없다고 해서 당신의 시간이 사라진 것은 아닙니다.",
                    closing: "성취보다 중요한 것은 당신이 지나온 그 모든 과정입니다.",
                    mission: "책상 위 물건 중 가장 오랫동안 자리를 지킨 물건 하나를 정성껏 닦아주세요."
                }
            ],
            "나 자신": [ // Changed from 나자신
                {
                    intro: "내가 누구인지, 왜 사는지 도무지 알 수 없어 가슴 한구석이 서늘해질 때...",
                    wisdom: "텅 빈 충만, 그 역설의 의미를 체득해야 한다.",
                    author: "법정 스님",
                    deepening: "비어있다는 것은 부족함이 아니라, 무엇이든 채울 수 있는 가능성을 뜻합니다. 마음의 공허함은 당신의 영혼이 잠시 쉬어 가고 싶다는 신호일지 모릅니다. 무언가로 억지로 채우려 하기보다 그 비어있음을 가만히 응시해 보세요.",
                    closing: "비워진 만큼 당신은 더 넓고 깊어질 것입니다.",
                    mission: "방 안의 불을 모두 끄고 1분간 어둠의 고요함을 온전히 누려보세요."
                }
            ]
        },

        // --- [카테고리 2: 무기력함] ---
        "무기력함": {
            "나 자신": [ // Changed from 나자신
                {
                    intro: "손가락 하나 까딱할 힘조차 없고, 모든 게 덧없게 느껴져 답답해 돌아버릴 것 같을 때...",
                    wisdom: "다람쥐도 살고 토끼도 사는데, 사람이 못 살 이유가 뭐가 있습니까.",
                    author: "법륜 스님",
                    deepening: "삶에 거창한 의미가 꼭 있어야 하는 것은 아닙니다. 그저 태어났기에 살아가고, 살아있기에 오늘을 맞이하는 것만으로도 생명의 도리를 다하는 것입니다. 의미를 찾지 못해 괴로워하는 당신에게 스님은 '그냥 살아도 괜찮다'고 말합니다.",
                    closing: "오늘은 그저 무사히 하루를 보낸 당신 자신을 칭찬해 주세요.",
                    mission: "자리에서 일어나 기지개를 크게 한 번 켜고 몸의 근육이 늘어나는 것을 느껴보세요."
                },
                {
                    intro: "아무것도 하고 싶지 않은 무력함이 당신을 짓누르고 있나요?",
                    wisdom: "나를 죽이지 못하는 것은 나를 더 강하게 만들 뿐이다.",
                    author: "프리드리히 니체",
                    deepening: "무기력은 당신이 너무 강하게 버티려다 잠시 방전된 상태일 뿐입니다. 이 깊은 침잠의 시간 또한 당신을 더 단단하게 만드는 과정입니다. 아무것도 하지 않는 지금의 당신도 여전히 성장하고 있습니다.",
                    closing: "잠시 멈춰 서 있는 당신을 응원합니다.",
                    mission: "눈을 감고 가장 깊고 느린 호흡을 세 번만 반복해 보세요."
                }
            ],
            "일과 진로": [ // Changed from 일과진로
                {
                    intro: "해야 할 일은 쌓여있는데 도무지 의욕이 생기지 않을 때...",
                    wisdom: "가장 큰 위험은 너무 조심하는 것이다.",
                    author: "괴테",
                    deepening: "실패에 대한 두려움이 우리를 무기력하게 만듭니다. 완벽하게 해내려 하지 마세요. 아주 작고 사소한 시작이 무기력의 벽을 깨는 유일한 망치입니다. 결과보다 당신이 내딛는 그 첫걸음이 더 중요합니다.",
                    closing: "작은 시도가 모여 당신만의 길을 완성할 것입니다.",
                    mission: "오늘 할 일 중 가장 사소한 것 하나(예: 샤워하기)만 지금 해보세요."
                }
            ]
        },

        // --- [카테고리 3: 불안함] ---
        "불안함": {
            "미래": [
                {
                    intro: "오지 않은 내일이 두려워 잠 못 이루고 가슴이 답답해지는 밤인가요?",
                    wisdom: "우리가 두려워하는 것들의 대부분은 현실보다 상상 속에서 더 크다.",
                    author: "세네카",
                    deepening: "불안은 미래의 불확실성을 상상으로 채울 때 발생합니다. 하지만 당신이 걱정하는 일의 90%는 실제로 일어나지 않습니다. 상상이 당신의 현재를 잠식하게 두지 마세요. 당신에게는 지금 이 순간만이 실재합니다.",
                    closing: "걱정은 내일에게 맡기고, 당신은 오늘을 누릴 자격이 있습니다.",
                    mission: "불안한 생각 하나를 종이에 적고, 그 종이를 구겨서 쓰레기통에 던져버리세요."
                },
                {
                    intro: "앞이 보이지 않는 막막함에 숨이 턱끝까지 차오를 때...",
                    wisdom: "가장 깊은 밤이 지나야 새벽이 온다.",
                    author: "작자 미상",
                    deepening: "어둠이 가장 짙다는 것은 곧 해가 뜨기 직전이라는 뜻이기도 합니다. 지금 당신이 겪는 이 혹독한 불안은 당신의 인생에서 가장 빛나는 아침을 맞이하기 위한 전조일 뿐입니다. 조금만 더 버텨주세요.",
                    closing: "당신의 새벽은 반드시 밝아올 것입니다.",
                    mission: "창문을 아주 살짝만 열어 차가운 밤공기가 얼굴에 닿는 감각을 느껴보세요."
                }
            ],
            "인간관계": [
                {
                    intro: "주변의 시선과 관계 때문에 마음이 흔들리고 불안할 때...",
                    wisdom: "세상이란 우리가 보고 싶어 하는 방식으로만 존재한다.",
                    author: "헤르만 헤세",
                    deepening: "타인의 평가가 곧 당신의 정체성은 아닙니다. 당신을 흔드는 것은 타인의 말 자체가 아니라, 그 말을 받아들이는 당신의 마음일지 모릅니다. 당신의 시선을 조금만 돌려 당신을 아껴주는 사람들의 온기를 바라보세요.",
                    closing: "당신은 누군가의 편견보다 훨씬 더 크고 아름다운 존재입니다.",
                    mission: "당신이 가장 편안함을 느끼는 사람의 이름을 마음속으로 세 번 불러보세요."
                }
            ]
        }
    };


    // --- State ---
    const userSelections = { emotion: [], cause: [], need: [] }; // need is not used in wisdomLibrary for now
    let currentStep = 1;
    let autoAdvanceTimer = null; // To manage auto-advance delay

    // --- Functions ---
    function handleOptionClick(event) {
        const button = event.target;
        const { value } = button.dataset;
        const step = parseInt(button.closest('.question-step').id.split('-')[1]);
        const category = Object.keys(userSelections)[step - 1];
        
        // Allow only one selection per step for auto-advance to work cleanly
        // If already selected, deselect
        if (userSelections[category].includes(value)) {
            userSelections[category] = [];
            button.classList.remove('selected');
        } else {
            // Otherwise, select this one (and deselect others in the same category)
            userSelections[category] = [value];
            // Remove 'selected' from all other buttons in this step
            button.closest('.options-grid').querySelectorAll('.option-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            button.classList.add('selected');
        }
        
        // Clear previous auto-advance timer if exists
        if (autoAdvanceTimer) {
            clearTimeout(autoAdvanceTimer);
        }

        // Auto-advance logic
        if (step < 3) {
            if (userSelections[category].length > 0) {
                // Set a short delay to allow visual feedback and quick reconsideration
                autoAdvanceTimer = setTimeout(() => {
                    advanceToStep(step + 1);
                }, 300); // 300ms delay
            }
        } else { // For step 3, enable submit button
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

    function getWisdom() {
        questionContainer.classList.add('hidden');
        loadingSpinner.classList.remove('hidden');

        setTimeout(() => { 
            const emotion = userSelections.emotion[0] || '공허함';
            const cause = userSelections.cause[0] || '관계'; // Changed default to '관계'
            const need = userSelections.need[0] || '다정한'; // Not directly used for lookup but can be for future filtering

            let wisdomSet = wisdomLibrary[emotion]?.[cause];
            
            // Fallback logic
            if (!wisdomSet || wisdomSet.length === 0) {
                // Try to find any wisdom for the selected emotion from any cause
                const emotionCauses = wisdomLibrary[emotion];
                if (emotionCauses) {
                    const allCausesSets = Object.values(emotionCauses);
                    if (allCausesSets.length > 0) {
                        wisdomSet = allCausesSets[Math.floor(Math.random() * allCausesSets.length)];
                    }
                }
            }
            // If still no set found, pick a random set from all emotions/causes
            if (!wisdomSet || wisdomSet.length === 0) {
                 const allEmotions = Object.values(wisdomLibrary);
                 const randomEmotionSet = allEmotions[Math.floor(Math.random() * allEmotions.length)];
                 const allCausesOfRandomEmotion = Object.values(randomEmotionSet);
                 wisdomSet = allCausesOfRandomEmotion[Math.floor(Math.random() * allCausesOfRandomEmotion.length)];
            }


            let wisdom;
            if (wisdomSet && wisdomSet.length > 0) {
                // Filter by need (basic filtering)
                const filteredByNeed = wisdomSet.filter(w => {
                    if (need === '다정한') return w.closing.includes('당신') || w.deepening.includes('사랑');
                    if (need === '현실적인') return w.mission.includes('지금') || w.mission.includes('하나');
                    if (need === '철학적인') return w.author.includes('니체') || w.author.includes('카뮈') || w.author.includes('사르트르');
                    if (need === '따끔한') return w.deepening.includes('직시') || w.deepening.includes('직면');
                    return true; // No specific filter
                });
                
                if (filteredByNeed.length > 0) {
                    wisdom = filteredByNeed[Math.floor(Math.random() * filteredByNeed.length)];
                } else {
                    wisdom = wisdomSet[Math.floor(Math.random() * wisdomSet.length)];
                }
            } else {
                // Ultimate fallback
                wisdom = { 
                    id: "fallback-wisdom",
                    intro: "당신을 위한 지혜를 찾았지만, 깊이를 더하기 어려웠어요.", 
                    wisdom: "선택하지 않은 길 또한 당신의 일부입니다.", 
                    author: "누군가의 지혜", 
                    deepening: "어떤 선택을 하든, 당신의 길은 가치가 있습니다. 이 길의 끝에서 또 다른 길이 당신을 기다리고 있을 것입니다.", 
                    closing: "스스로를 믿고 나아가세요.", 
                    mission: "하늘을 보며 크게 심호흡을 세 번 해보세요." 
                };
            }
            
            // Populate the ticket with new structure
            resultElements.intro.textContent = wisdom.intro;
            resultElements.mainText.textContent = wisdom.wisdom;
            resultElements.author.textContent = `— ${wisdom.author}`;
            resultElements.deepening.textContent = wisdom.deepening;
            resultElements.closing.textContent = wisdom.closing;
            resultElements.mission.textContent = wisdom.mission;

            loadingSpinner.classList.add('hidden');
            resultOverlay.style.display = 'flex';
        }, 50); // Reduced delay to 50ms
    }

    function reset() {
        resultOverlay.style.display = 'none';
        questionContainer.classList.remove('hidden');
        
        document.querySelectorAll('.option-btn.selected').forEach(btn => {
            btn.classList.remove('selected');
        });
        document.querySelectorAll('.next-btn').forEach(btn => { // The next-btn class no longer exists on HTML, but this code is still here
            btn.classList.add('hidden');
        });

        questionSteps[1].classList.remove('hidden');
        questionSteps[2].classList.add('hidden');
        questionSteps[3].classList.add('hidden');
        currentStep = 1;
        userSelections.emotion = [];
        userSelections.cause = [];
        userSelections.need = [];
        submitBtn.classList.add('hidden'); // Hide submit button on reset
    }

    // --- Event Listeners ---
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', handleOptionClick);
    });

    submitBtn.addEventListener('click', getWisdom); 
    
    saveBtn.addEventListener('click', () => {
        html2canvas(resultTicketEl, { 
            backgroundColor: null,
            scale: 2 
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = '오늘의-지혜.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });

    retryBtn.addEventListener('click', reset);
    closeBtn.addEventListener('click', reset);

    // Initial state: ensure only first step is visible
    reset(); // Call reset to set initial state correctly
});