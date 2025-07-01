// List of users with usernames and passwords
const users = [
  { username: "yasin", password: "1234" },
  { username: "emirhan", password: "123456789" },
  { username: "sema", password: "123321" },
  { username: "zeynep", password: "zey123" },
  { username: "admin", password: "admin" }
];

// Toggle password visibility on eye icon click
document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordInput = document.getElementById('inputPassword');
  // Check if the current input type is password
  const isPassword = passwordInput.getAttribute('type') === 'password';
  // Switch input type between 'text' and 'password'
  passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
  // Toggle eye icon classes to indicate visibility
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
});

// Login form submission handler
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  const usernameOrEmail = document.getElementById('inputEmail').value.trim().toLowerCase();
  const enteredPassword = document.getElementById('inputPassword').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  // Check if any input field is empty
  if (!usernameOrEmail || !enteredPassword) {
    errorMsg.style.display = 'block';
    errorMsg.textContent = "Please fill in all fields.";
    return;
  }

  // Verify if user credentials match any user in the list
  const userMatch = users.find(user =>
    user.username.toLowerCase() === usernameOrEmail &&
    user.password === enteredPassword
  );

  if (userMatch) {
    // Hide error message and proceed on successful login
    errorMsg.style.display = 'none';
    alert("Login successful!");
    window.location.href = 'home.html'; // Redirect to home page
  } else {
    // Show error message on failed login attempt
    errorMsg.style.display = 'block';
    errorMsg.textContent = "Incorrect username or password.";
  }
});
