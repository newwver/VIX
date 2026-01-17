
document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const themeToggle = document.getElementById('theme-toggle');
    const getResultBtn = document.getElementById('get-result-btn');
    const birthdateInput = document.getElementById('birthdate');
    const radioLabels = document.querySelectorAll('input[name="style"] + label');

    // Result section elements
    const resultSection = document.getElementById('result-section');
    const resultCard = document.getElementById('result-card');
    const totalScoreEl = document.getElementById('total-score');
    const marketAnalysisEl = document.getElementById('market-analysis');
    const destinyAnalysisEl = document.getElementById('destiny-analysis');
    const luckAnalysisEl = document.getElementById('luck-analysis');
    const notifyBtn = document.getElementById('notify-btn');
    const shareBtn = document.getElementById('share-btn');

    // --- Theme Toggling (Dark Mode by Default) ---
    const userTheme = localStorage.getItem('theme');

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            themeToggle.textContent = '🌙';
        } else {
            document.documentElement.classList.remove('dark');
            themeToggle.textContent = '☀️';
        }
    };

    if (userTheme === 'light') {
        applyTheme('light');
    } else {
        applyTheme('dark');
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '🌙' : '☀️';
    });

    // --- Radio Button Selection UI ---
    radioLabels.forEach(label => {
        label.addEventListener('click', (e) => {
            radioLabels.forEach(lbl => {
                lbl.classList.remove('bg-indigo-100', 'dark:bg-indigo-900', 'border-indigo-500');
                lbl.classList.add('border-gray-300', 'dark:border-gray-600');
            });
            e.currentTarget.classList.add('bg-indigo-100', 'dark:bg-indigo-900', 'border-indigo-500');
            e.currentTarget.classList.remove('border-gray-300', 'dark:border-gray-600');
        });
    });

    // --- Birthdate Validation and Result Generation ---
    getResultBtn.addEventListener('click', () => {
        if (!birthdateInput.value) {
            alert('생년월일을 선택해주세요.');
            return;
        }

        // 1. Horoscope Score (0-50)
        const birthDate = new Date(birthdateInput.value);
        const dayOfYear = (Date.UTC(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate()) - Date.UTC(birthDate.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
        const horoscopeScore = Math.round(((Math.sin(dayOfYear / 365 * 2 * Math.PI) + 1) / 2) * 50);

        // 2. Market Score (0-50, based on fear index 45)
        const fearIndex = 45;
        const marketScore = 50 - Math.abs(fearIndex - 50);

        // 3. Total Investment Score (0-100)
        const totalScore = Math.min(100, Math.round((horoscopeScore + marketScore) / 100 * 95) + 5); // Ensure score is between 5 and 100

        // 4. Generate Detailed Analysis
        const marketMessages = {
            extremeFear: "시장에 극심한 공포가 만연해 있습니다. 이는 종종 과매도 신호로 해석될 수 있어, 용감한 투자자에게는 기회가 될 수 있습니다.",
            fear: "투자자들의 불안감이 시장을 지배하고 있습니다. 신중한 접근이 필요하지만, 가치 있는 자산을 저가에 매수할 기회를 포착할 수도 있습니다.",
            neutral: "시장이 중립적인 상태로, 뚜렷한 방향성을 보이지 않고 있습니다. 관망하며 다음 시장 움직임을 기다리는 것이 현명할 수 있습니다.",
            greed: "탐욕이 시장을 주도하고 있습니다. 단기적인 상승세에 편승할 수 있지만, 변동성에 대비하고 과도한 추격 매수는 자제해야 합니다.",
            extremeGreed: "시장이 극도의 탐욕 상태에 있습니다. 이는 과열 신호일 수 있으므로, 이익 실현을 고려하고 리스크 관리에 집중해야 할 때입니다."
        };
        
        let marketStatus;
        if (fearIndex <= 20) marketStatus = 'extremeFear';
        else if (fearIndex <= 40) marketStatus = 'fear';
        else if (fearIndex <= 60) marketStatus = 'neutral';
        else if (fearIndex <= 80) marketStatus = 'greed';
        else marketStatus = 'extremeGreed';

        const zodiacSigns = ["물병자리", "물고기자리", "양자리", "황소자리", "쌍둥이자리", "게자리", "사자자리", "처녀자리", "천칭자리", "전갈자리", "사수자리", "염소자리"];
        const sign = zodiacSigns[birthDate.getMonth()];
        const destinyMessages = {
            "물병자리": "혁신적인 사고가 빛을 발하는 날입니다. 남들이 주목하지 않는 새로운 기술주에 관심을 가져보세요.",
            "물고기자리": "직관력이 극대화됩니다. 데이터보다는 당신의 감을 믿고 장기적인 관점에서 투자처를 선택해보세요.",
            "양자리": "도전 정신이 투자를 성공으로 이끌 수 있습니다. 단기적인 트레이딩으로 빠른 수익을 노려보는 것도 좋습니다.",
            "황소자리": "안정적인 투자가 행운을 가져다줍니다. 가치주나 배당주처럼 꾸준한 자산에 집중하는 것이 유리합니다.",
            "쌍둥이자리": "정보 수집 능력이 뛰어난 날입니다. 다양한 뉴스와 보고서를 분석하여 투자 기회를 찾아보세요.",
            "게자리": "보수적인 접근이 필요한 시기입니다. 위험 자산보다는 안전 자산의 비중을 높여 포트폴리오를 방어하세요.",
            "사자자리": "자신감 있는 결단이 큰 수익으로 이어질 수 있습니다. 시장의 리더 주에 과감하게 투자해보세요.",
            "처녀자리": "꼼꼼한 분석이 강점으로 작용합니다. 재무제표를 깊이 파고들어 저평가된 우량주를 발굴해보세요.",
            "천칭자리": "균형 감각을 발휘할 때입니다. 공격적인 투자와 안정적인 투자를 적절히 분배하여 리스크를 관리하세요.",
            "전갈자리": "위기 속에서 기회를 찾는 능력이 뛰어납니다. 시장의 조정 국면을 역이용하는 전략이 유효합니다.",
            "사수자리": "해외 투자에서 좋은 성과를 기대할 수 있습니다. 시야를 넓혀 글로벌 시장으로 눈을 돌려보세요.",

            "염소자리": "장기적인 안목으로 투자할 때입니다. 단기적인 변동에 흔들리지 말고 목표를 향해 꾸준히 나아가세요."
        };

        const luckyItems = [
            { color: "로열 블루", action: "오전 10시에 따뜻한 차 한 잔과 함께 투자 계획을 세우세요.", time: "오전 10시" },
            { color: "에메랄드 그린", action: "중요한 결정은 점심 식사 직후에 내리는 것이 좋습니다.", time: "오후 1시" },
            { color: "선셋 오렌지", action: "장 마감 1시간 전에 포트폴리오를 검토하고 리밸런싱하세요.", time: "오후 3시" },
            { color: "골드", action: "금이나 금 관련 ETF에 소액 투자하여 부의 기운을 끌어오세요.", time: "오후 2시" },
            { color: "실버", action: "오늘의 투자 아이디어를 은색 펜으로 기록해두면 행운이 따릅니다.", time: "아무때나" }
        ];
        const luckyItem = luckyItems[Math.floor(Math.random() * luckyItems.length)];

        // 5. Display Results
        marketAnalysisEl.textContent = marketMessages[marketStatus];
        destinyAnalysisEl.textContent = destinyMessages[sign];
        luckAnalysisEl.textContent = `오늘의 행운 색상은 '${luckyItem.color}'입니다. ${luckyItem.action}`;

        // Animate score and show section
        resultSection.classList.remove('hidden');
        resultCard.classList.remove('animate-dramatic-appear');
        void resultCard.offsetWidth; // Reflow to restart animation
        resultCard.classList.add('animate-dramatic-appear');

        animateValue(totalScoreEl, 0, totalScore, 1000);

        resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    // --- Button Event Listeners ---
    notifyBtn.addEventListener('click', () => {
        alert('기능 준비 중입니다. 매일 찾아와서 운세를 확인해주세요! ✨');
    });

    shareBtn.addEventListener('click', () => {
        alert('공유 기능 준비 중입니다. 친구에게 이 서비스를 직접 알려주세요! 🚀');
    });
});
