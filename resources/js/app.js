import '../css/app.css';
import './bootstrap';

const supportedLanguages = ['id', 'en'];
const storageKey = 'rk_lang';

const syncLanguage = () => {
    const currentUrl = new URL(window.location.href);
    const queryLanguage = currentUrl.searchParams.get('lang');
    const storedLanguage = window.localStorage.getItem(storageKey);
    const modal = document.querySelector('[data-language-modal]');
    const applyLanguage = (language) => {
        if (!supportedLanguages.includes(language)) {
            return;
        }

        const currentLanguage = currentUrl.searchParams.get('lang') || document.body.dataset.currentLang;

        if (currentLanguage === language) {
            if (modal) {
                modal.hidden = true;
            }

            return;
        }

        window.localStorage.setItem(storageKey, language);
        currentUrl.searchParams.set('lang', language);

        document.documentElement.classList.add('language-is-switching');

        const navigate = () => window.location.assign(currentUrl.toString());

        if (document.startViewTransition) {
            document.startViewTransition(navigate);
            return;
        }

        window.setTimeout(navigate, 120);
    };

    document.querySelectorAll('[data-language-option]').forEach((button) => {
        button.addEventListener('click', () => applyLanguage(button.dataset.languageOption || 'id'));
    });

    if (supportedLanguages.includes(queryLanguage || '')) {
        window.localStorage.setItem(storageKey, queryLanguage);
        return;
    }

    if (supportedLanguages.includes(storedLanguage || '')) {
        currentUrl.searchParams.set('lang', storedLanguage);
        window.location.replace(currentUrl.toString());
        return;
    }

    if (modal) {
        modal.hidden = false;
    }
};

syncLanguage();
