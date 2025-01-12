document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');

    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Invalid email. Please enter a valid email address.";
        return;
    } else {
        emailError.textContent = "";
        const username = emailInput.value.split('@')[0]; 
        
        localStorage.setItem('username', username);
        localStorage.setItem('email', emailInput.value);

        
        window.location.href = 'home.html';
    }
});
