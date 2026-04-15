document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    // Function to Open Menu
    const openMenu = () => {
        if (!mobileMenu || !menuOverlay) return;
        
        menuOverlay.classList.remove('hidden');
        setTimeout(() => menuOverlay.classList.add('opacity-100'), 10);
        
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        
        document.body.style.overflow = 'hidden';
    };

    // Function to Close Menu
    const closeMenu = () => {
        if (!mobileMenu || !menuOverlay) return;

        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
        
        menuOverlay.classList.remove('opacity-100');
        setTimeout(() => menuOverlay.classList.add('hidden'), 300);
        
        document.body.style.overflow = 'auto';
    };

    // Listeners
    if(menuBtn) menuBtn.addEventListener('click', openMenu);
    if(closeBtn) closeBtn.addEventListener('click', closeMenu);
    if(menuOverlay) menuOverlay.addEventListener('click', closeMenu);

    // Close menu when clicking a link
    if (mobileMenu) {
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});