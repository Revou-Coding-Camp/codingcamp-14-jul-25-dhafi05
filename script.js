const userName = "Visitor";
document.getElementById("greeting").textContent = `Hi ${userName}`;

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Please fill in all fields.");
    return;
  }

  document.getElementById("formResponse").textContent = "Thank you for your message!";
  this.reset();
});
