let currentTheme = 'light';

function toggleTheme() {
    if (currentTheme === 'light') {
        document.body.classList.add('dark');
        currentTheme = 'dark';
    } else {
        document.body.classList.remove('dark');
        currentTheme = 'light';
    }
}

function changeLanguage(language) {
    const langData = languages[language];

    document.getElementById('title').textContent = langData.title;
    document.getElementById('intro-text').textContent = langData.introText;
    document.getElementById('features-title').textContent = langData.featuresTitle;
    document.getElementById('example-title').textContent = langData.exampleTitle;
    document.getElementById('future-plans-title').textContent = langData.futurePlansTitle;
    document.getElementById('future-plans-text').textContent = langData.futurePlansText;
	document.getElementById('install-title').textContent = langData.installTitle;
	document.getElementById('install-text').textContent = langData.installText;
    document.getElementById('system-requirements-title').textContent = langData.systemRequirementsTitle;

    const features = document.querySelectorAll('.card');
    features[0].querySelector('h3').textContent = langData.feature1;
    features[0].querySelector('p').textContent = langData.feature1Description;
    features[1].querySelector('h3').textContent = langData.feature2;
    features[1].querySelector('p').textContent = langData.feature2Description;
    features[2].querySelector('h3').textContent = langData.feature3;
    features[2].querySelector('p').textContent = langData.feature3Description;
    features[3].querySelector('h3').textContent = langData.feature4;
    features[3].querySelector('p').textContent = langData.feature4Description;
    features[4].querySelector('h3').textContent = langData.feature5;
    features[4].querySelector('p').textContent = langData.feature5Description;
	
	const systemRequirementsList = document.getElementById('system-requirements-list');
    systemRequirementsList.innerHTML = '';
    langData.systemRequirements.forEach(req => {
        const li = document.createElement('li');
        li.textContent = req;
        systemRequirementsList.appendChild(li);
    });
    document.getElementById('faq-title').textContent = langData.faqTitle;
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems[0].querySelector('.faq-question').textContent = langData.faqQuestion1;
    faqItems[0].querySelector('.faq-answer').textContent = langData.faqAnswer1;
    faqItems[1].querySelector('.faq-question').textContent = langData.faqQuestion2;
    faqItems[1].querySelector('.faq-answer').textContent = langData.faqAnswer2;
    faqItems[2].querySelector('.faq-question').textContent = langData.faqQuestion3;
    faqItems[2].querySelector('.faq-answer').textContent = langData.faqAnswer3;
	faqItems[3].querySelector('.faq-question').textContent = langData.faqQuestion4;
    faqItems[3].querySelector('.faq-answer').textContent = langData.faqAnswer4;
	
    document.getElementById('option-pricing').querySelector('img').src = langData.screenshots.optionPricing;
    document.getElementById('monte-carlo').querySelector('img').src = langData.screenshots.monteCarlo;
    document.getElementById('historical-data').querySelector('img').src = langData.screenshots.historicalData;
    document.getElementById('volatility-analysis').querySelector('img').src = langData.screenshots.volatilityAnalysis;

    // Update language switcher buttons
    document.getElementById('lang-en').classList.toggle('active', language === 'en');
    document.getElementById('lang-ru').classList.toggle('active', language === 'ru');

    // Update tab texts
    document.querySelector(`.tab-button[onclick="showTab('option-pricing')"]`).textContent = langData.tabOptionPricing;
    document.querySelector(`.tab-button[onclick="showTab('monte-carlo')"]`).textContent = langData.tabMonteCarlo;
    document.querySelector(`.tab-button[onclick="showTab('historical-data')"]`).textContent = langData.tabHistoricalData;
    document.querySelector(`.tab-button[onclick="showTab('volatility-analysis')"]`).textContent = langData.tabVolatilityAnalysis;
}

function showAbout() {
    document.getElementById('about-modal').style.display = 'block';
}

function closeAbout() {
    document.getElementById('about-modal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => observer.observe(card));

    // Set initial language
    changeLanguage('en');
});

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => tab.classList.remove('active'));
    tabButtons.forEach(button => button.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');
}
