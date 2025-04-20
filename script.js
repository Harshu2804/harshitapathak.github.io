// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = '🌓 Toggle Dark Mode';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.bottom = '20px';
    darkModeToggle.style.right = '20px';
    darkModeToggle.style.padding = '10px';
    darkModeToggle.style.borderRadius = '5px';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.cursor = 'pointer';
    darkModeToggle.style.zIndex = '1000';
    darkModeToggle.style.backgroundColor = '#9333ea';
    darkModeToggle.style.color = 'white';
    
    document.body.appendChild(darkModeToggle);
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            document.body.style.backgroundColor = '#121212';
            document.body.style.color = '#ffffff';
            document.querySelector('.nav-bar').style.background = 'linear-gradient(135deg, #121212, #9333ea)';
            document.querySelector('.hero').style.background = 'linear-gradient(135deg, #1e1e1e, #9333ea)';
            document.querySelectorAll('.card').forEach(card => {
                card.style.backgroundColor = '#1e1e1e';
            });
        } else {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
            document.querySelector('.nav-bar').style.background = 'linear-gradient(135deg, #f8fbff, #9333ea)';
            document.querySelector('.hero').style.background = 'linear-gradient(135deg, #eaedf1, #9333ea)';
            document.querySelectorAll('.card').forEach(card => {
                card.style.backgroundColor = '#a56cdb';
            });
        }
    });
    
    // Scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.style.position = 'fixed';
    scrollToTopBtn.style.bottom = '70px';
    scrollToTopBtn.style.right = '20px';
    scrollToTopBtn.style.padding = '10px 15px';
    scrollToTopBtn.style.borderRadius = '50%';
    scrollToTopBtn.style.border = 'none';
    scrollToTopBtn.style.cursor = 'pointer';
    scrollToTopBtn.style.backgroundColor = '#9333ea';
    scrollToTopBtn.style.color = 'white';
    scrollToTopBtn.style.fontSize = '20px';
    scrollToTopBtn.style.display = 'none';
    scrollToTopBtn.style.zIndex = '1000';
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});