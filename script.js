 
 /* script.js */

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Effect for Nav Bar
    const navbar = document.getElementById('navbar');
    
    // Smoothly shrink/fade the nav bar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // lucide.createIcons(); // Initialize Icons if needed
});