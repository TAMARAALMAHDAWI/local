window.onload = function () {
    const username = localStorage.getItem('username');
    if (!username) {
        window.location.href = 'login.html'; 
    }

    document.getElementById('welcomeMessage').textContent = `Welcome, ${username}`;

   
    document.getElementById('logoutBtn').addEventListener('click', function () {
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        window.location.href = 'login.html';
    });
};
