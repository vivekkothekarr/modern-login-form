document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = form.querySelector("input[type='text']");
  const passwordInput = form.querySelector("input[type='password']");
  const togglePassword = document.getElementById("togglePassword");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || password === "") {
      alert("⚠️ Please fill in both email/phone and password.");
      return;
    }

    alert("✅ Login successful! (This is just a simulation)");
  });

  // Toggle password visibility
  togglePassword.addEventListener("change", function () {
    if (this.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
});
