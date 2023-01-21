function checkPassword() {
  // Get the password from the form
  var password = document.getElementById("password").value;

  // Initialize the password strength variable
  var strength = 0;

  // Check if the password is at least 8 characters long
  if (password.length >= 8) {
    strength += 1;
  }

  // Check if the password contains at least one uppercase letter
  if (password.match(/[A-Z]/)) {
    strength += 1;
  }

  // Check if the password contains at least one lowercase letter
  if (password.match(/[a-z]/)) {
    strength += 1;
  }

  // Check if the password contains at least one number
  if (password.match(/[0-9]/)) {
    strength += 1;
  }

  // Check if the password contains at least one special character
  if (password.match(/[!@#$%^&*]/)) {
    strength += 1;
  }

  // Update the password strength message
  var passwordStrength = document.getElementById("password-strength");
  if (strength == 0) {
    passwordStrength.innerHTML = "Too Weak";
  } else if (strength == 1) {
    passwordStrength.innerHTML = "Weak";
  } else if (strength == 2) {
    passwordStrength.innerHTML = "Good";
  } else if (strength == 3) {
    passwordStrength.innerHTML = "Strong";
  } else if (strength >= 4) {
    passwordStrength.innerHTML = "Very Strong";
  }
}
