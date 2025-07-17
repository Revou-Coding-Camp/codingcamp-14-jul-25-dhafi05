// Menyapa user dari localStorage
function greetUser() {
  const name = localStorage.getItem("username");
  if (name) {
    const welcomeEl = document.getElementById("welcome-message");
    if (welcomeEl) {
      welcomeEl.textContent = `Hi ${name}, Welcome to Website`;
    }
  } else {
    window.location.href = "login.html"; // redirect kalau belum login
  }
}

// Submit form pesan
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const msgBox = document.getElementById("form-message");

  if (form && msgBox) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !phone || !message) {
        alert("Harap lengkapi semua kolom!");
        return;
      }

      msgBox.textContent = "Terima kasih, pesan Anda telah dikirim!";
      form.reset();
    });
  }
});
