//login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate login
    if (username === 'admin' && password === '12345') {
        alert('Login successful!');
        redirectToMainPage();
    } else {
        alert('Invalid username or password.');
    }
});

function redirectToMainPage() {
    window.location.href = 'TODOLIST.html';
}


