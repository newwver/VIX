
document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const themeToggle = document.getElementById('theme-toggle');
    const getResultBtn = document.getElementById('get-result-btn');
    const resultSection = document.getElementById('result-section');
    const resultCard = document.getElementById('result-card');
    const resultAttitude = document.getElementById('result-attitude');
    const resultMessage = document.getElementById('result-message');
    const birthdateInput = document.getElementById('birthdate');
    const radioLabels = document.querySelectorAll('input[name="style"] + label');

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

    // Default to dark mode unless 'light' is explicitly saved in localStorage
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
            // Reset styles
            radioLabels.forEach(lbl => {
                lbl.classList.remove('bg-indigo-100', 'dark:bg-indigo-900', 'border-indigo-500');
                lbl.classList.add('border-gray-300', 'dark:border-gray-600');
            });
            // Apply style to clicked label
            e.currentTarget.classList.add('bg-indigo-100', 'dark:bg-indigo-900', 'border-indigo-500');
            e.currentTarget.classList.remove('border-gray-300', 'dark:border-gray-600');
        });
    });

    // --- Result Generation and Animation ---
    getResultBtn.addEventListener('click', () => {
        if (!birthdateInput.value) {
            alert('생년월일을 입력해주세요.');
            return;
        }

        // 1. Horoscope Score (0-50) - Mock logic based on birth month
        const birthMonth = new Date(birthdateInput.value).getMonth() + 1;
        const horoscopeScore = Math.abs((birthMonth - 6.5) * 4) % 51; // Simple mock score

        // 2. Market Score (Fixed at 45)
        const marketScore = 45;

        // 3. Total Score
        const totalScore = Math.round(horoscopeScore + marketScore);

        // 4. Determine Investment Attitude
        let attitude, message, colorClass;
        if (totalScore > 80) {
            attitude = '적극 매수';
            message = '시장의 에너지가 당신의 운과 일치합니다. 과감한 투자를 고려할 때입니다.';
            colorClass = 'text-red-500';
        } else if (totalScore > 60) {
            attitude = '수익 실현';
            message = '성공적인 투자의 결실을 맺을 시기입니다. 분할 매도로 수익을 확보하세요.';
            colorClass = 'text-blue-500';
        } else if (totalScore > 40) {
            attitude = '관망';
            message = '시장의 방향성이 불분명합니다. 서두르지 말고 시장을 관찰하는 지혜가 필요합니다.';
            colorClass = 'text-yellow-500';
        } else if (totalScore > 20) {
            attitude = '리스크 관리';
            message = '하락의 기운이 감지됩니다. 보수적으로 자산을 운용하며 리스크를 관리하세요.';
            colorClass = 'text-green-500';
        } else {
            attitude = '휴식';
            message = '투자를 잠시 멈추고 재충전의 시간을 가질 때입니다. 현금 비중을 늘리세요.';
            colorClass = 'text-gray-500';
        }

        // 5. Display Result with Animation
        resultAttitude.textContent = attitude;
        resultMessage.textContent = message;
        
        // reset color classes
        resultAttitude.className = 'text-4xl font-extrabold mb-2';
        resultAttitude.classList.add(colorClass);

        resultSection.classList.remove('hidden');
        resultCard.classList.remove('animate-dramatic-appear');
        
        // We need a reflow to restart the animation. 
        // https://css-tricks.com/restart-css-animation/
        void resultCard.offsetWidth;

        resultCard.classList.add('animate-dramatic-appear');
        
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});
