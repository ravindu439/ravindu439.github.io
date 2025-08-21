// Theme Management System
class ThemeManager {
    constructor() {
        this.themes = ['auto', 'dark', 'light'];
        this.currentThemeIndex = 0;
        this.storageKey = 'themeChoice';
        this.init();
    }

    init() {
        this.loadStoredTheme();
        this.setupEventListeners();
        this.applyTheme();
        this.updateThemeIcon();
    }

    loadStoredTheme() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            if (stored && this.themes.includes(stored)) {
                this.currentThemeIndex = this.themes.indexOf(stored);
            }
        } catch (e) {
            console.warn('Could not access localStorage for theme:', e);
        }
    }

    getCurrentTheme() {
        return this.themes[this.currentThemeIndex];
    }

    setupEventListeners() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.cycleTheme());
        }

        // Listen for system theme changes when in auto mode
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', () => {
                if (this.getCurrentTheme() === 'auto') {
                    this.applyTheme();
                }
            });
        }
    }

    cycleTheme() {
        this.currentThemeIndex = (this.currentThemeIndex + 1) % this.themes.length;
        this.storeTheme();
        this.applyTheme();
        this.updateThemeIcon();
    }

    applyTheme() {
        const html = document.documentElement;
        const currentTheme = this.getCurrentTheme();
        
        // Remove existing theme classes
        html.classList.remove('light', 'dark');
        
        if (currentTheme === 'auto') {
            // Use system preference
            const prefersDark = window.matchMedia && 
                               window.matchMedia('(prefers-color-scheme: dark)').matches;
            html.classList.add(prefersDark ? 'dark' : 'light');
        } else {
            // Use selected theme
            html.classList.add(currentTheme);
        }
    }

    updateThemeIcon() {
        const themeIcon = document.querySelector('.theme-icon');
        if (!themeIcon) return;

        const icons = {
            auto: '🌓',
            dark: '🌙',
            light: '☀️'
        };

        const currentTheme = this.getCurrentTheme();
        themeIcon.textContent = icons[currentTheme] || icons.auto;
        
        // Update aria-label
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const nextTheme = this.themes[(this.currentThemeIndex + 1) % this.themes.length];
            themeToggle.setAttribute('aria-label', 
                `Current theme: ${currentTheme}. Click to switch to ${nextTheme}.`);
        }
    }

    storeTheme() {
        try {
            localStorage.setItem(this.storageKey, this.getCurrentTheme());
        } catch (e) {
            console.warn('Could not store theme in localStorage:', e);
        }
    }

    // Public method to get effective theme (resolves 'auto' to actual theme)
    getEffectiveTheme() {
        const currentTheme = this.getCurrentTheme();
        if (currentTheme === 'auto') {
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
                ? 'dark' : 'light';
        }
        return currentTheme;
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
});

// Export for module use if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeManager;
}
