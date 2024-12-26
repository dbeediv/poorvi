document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'user' && password === 'password123') {
    window.location.href = 'instructions.html'; // Redirect to instructions page
  } else {
    document.getElementById('errorMessage').textContent = 'Invalid credentials, please try again.';
  }
});
