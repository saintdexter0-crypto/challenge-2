// responsive.js - Hamburger menu toggle for mobile responsiveness

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const sidebar = document.querySelector('.sidebar');

    if (hamburgerBtn && sidebar) {
        hamburgerBtn.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', function(e) {
            if (!sidebar.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        });
    }
});