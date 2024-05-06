const form = document.querySelector(".login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailInput = form.elements.email.value.trim();
  const passwordInput = form.elements.password.value.trim();

  if (!emailInput || !passwordInput) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailInput,
    password: passwordInput,
  };

  console.log(formData);
  form.reset();
});
