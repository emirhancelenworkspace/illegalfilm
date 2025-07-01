// Toggle visibility of the password field
document.getElementById('togglePassword').addEventListener('click', function () {
  const password = document.getElementById('password');
  // Toggle input type between 'password' and 'text'
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // Toggle the eye icon between open and closed states
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
});

// Toggle visibility of the confirm password field
document.getElementById('toggleConfirmPassword').addEventListener('click', function () {
  const password = document.getElementById('confirmPassword');
  // Toggle input type between 'password' and 'text'
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // Toggle the eye icon between open and closed states
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
});

// Form submission event handler
document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  const pass = document.getElementById('password').value;
  const confirm = document.getElementById('confirmPassword').value;
  const error = document.getElementById('registerError');

  // Check if passwords match
  if (pass !== confirm) {
      error.style.display = 'block';
      error.textContent = "Passwords do not match!";
  } else {
      error.style.display = 'none';
      alert("Registration successful!");
      this.reset(); // Reset the form fields
  }
});
