// Function to display a confirmation message when an order is placed
function placeOrder() {
  alert("Thank you for placing your order! We will prepare it shortly.");
}

// Function to display a message when the user submits feedback
function submitFeedback() {
  alert("Thank you for your feedback! We appreciate your input.");
}

// Function to validate the contact form before submission
function validateContactForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all the fields.");
    return false;
  }

  return true;
}

// Function to handle form submission for the contact page
function submitContactForm() {
  var isValid = validateContactForm();
  
  if (isValid) {
    alert("Thank you for contacting us! We will get back to you soon.");
    document.getElementById("contact-form").reset();
  }
}