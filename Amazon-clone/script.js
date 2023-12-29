function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve form inputs
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm-password");
  
    // Check if passwords match
    if (passwordInput.value !== confirmPasswordInput.value) {
      alert("Passwords do not match");
      return;
    }
  
    // Perform additional validation or submit the form to the server
    // You can use AJAX or fetch to send the form data to the server for further processing
    // For the sake of simplicity, we will just display a success message here
    alert("Login successful!");
  }
  