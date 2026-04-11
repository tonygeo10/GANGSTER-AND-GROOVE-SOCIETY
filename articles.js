document.addEventListener('DOMContentLoaded', () => {
    // Φόρτωση εικονιδίων Lucide για το Section
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Hover Effect Logic για τα άρθρα
    const articles = document.querySelectorAll('.article-card');
    
    articles.forEach(article => {
        article.addEventListener('mouseenter', () => {
            // Μπορείς να προσθέσεις custom hover logic εδώ
            const arrow = article.querySelector('.arrow-icon');
            if(arrow) arrow.style.transform = 'translateX(8px)';
        });

        article.addEventListener('mouseleave', () => {
            const arrow = article.querySelector('.arrow-icon');
            if(arrow) arrow.style.transform = 'translateX(0)';
        });

        article.addEventListener('click', () => {
            const title = article.querySelector('.card-title').innerText;
            console.log(`Opening article: ${title}`);
            // Εδώ θα έμπαινε το link για το άρθρο
        });
    });

    // View All Button Action
    const viewAllBtn = document.querySelector('.view-all-btn');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            alert('Redirecting to full archive...');
        });
    }
});