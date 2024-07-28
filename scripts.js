document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const menu = document.querySelector('.menu');
    
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('modeToggle');
    const body = document.body;

    // Check for saved user preference and apply theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    // Toggle theme on button click
    themeToggleButton.addEventListener('click', function() {
        body.classList.toggle('light-theme');
        body.classList.toggle('dark-theme');

        // Save user preference to local storage
        const currentTheme = body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
        localStorage.setItem('theme', currentTheme);
    });
});
