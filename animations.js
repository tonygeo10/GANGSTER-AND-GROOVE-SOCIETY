

 // Element SDK Initialization
const defaultConfig = {
    featured_title: 'ΤΟ ΝΕΟ TRACK ΤΗΣ ΕΒΔΟΜΑΔΑΣ',
    featured_description: 'Μια σύντομη περιγραφή του άρθρου που βοηθάει το SEO. Χρησιμοποίησε λέξεις-κλειδιά όπως "Rap", "GNG", "Music".',
    playlist_title: 'GNG WEEKLY PLAYLIST',
    interview_title: 'Συνέντευξη με Θρύλο',
    interview_text: 'Ένα βαθύ ντοκιμαντέρ με έναν από τους σημαντικότερους καλλιτέχνες της ελληνικής Rap σκηνής.'
};

let config = { ...defaultConfig };

const elementSdk = {
    defaultConfig,
    onConfigChange: async (newConfig) => {
        config = newConfig;
        updateUI();
    },
    mapToCapabilities: (config) => ({
        recolorables: [],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
    }),
    mapToEditPanelValues: (config) => new Map([
        ['featured_title', config.featured_title || defaultConfig.featured_title],
        ['featured_description', config.featured_description || defaultConfig.featured_description],
        ['playlist_title', config.playlist_title || defaultConfig.playlist_title],
        ['interview_title', config.interview_title || defaultConfig.interview_title],
        ['interview_text', config.interview_text || defaultConfig.interview_text]
    ])
};

function updateUI() {
    const ids = {
        'featured-title': config.featured_title,
        'featured-desc': config.featured_description,
        'playlist-title': config.playlist_title,
        'interview-title': config.interview_title,
        'interview-text': config.interview_text
    };

    for (const [id, value] of Object.entries(ids)) {
        const el = document.getElementById(id);
        if (el) el.textContent = value || defaultConfig[id.replace('-', '_')];
    }
}

// Initializations
document.addEventListener('DOMContentLoaded', () => {
    // Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Element SDK Init
    if (window.elementSdk) {
        window.elementSdk.init(elementSdk);
    }

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});