// login.js - Interactive JavaScript for login page

document.addEventListener('DOMContentLoaded', function() {
    const signInBtn = document.querySelector('.signin-btn');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    signInBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Basic validation
        if (!email || !password) {
            alert('Please fill in both email and password fields.');
            return;
        }

        // Simple email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // In a real application, you would send a request to the server for authentication
        // For this demo, we'll simulate a successful login and redirect to dashboard
        alert('Login successful! Redirecting to dashboard...');
        window.location.href = './dashboard.html';
    });

    // Optional: Add enter key support for form submission
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            signInBtn.click();
        }
    });
});