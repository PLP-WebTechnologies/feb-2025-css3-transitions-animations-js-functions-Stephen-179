const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }
});

// Toggle between light and dark mode
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Save theme to localStorage
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});