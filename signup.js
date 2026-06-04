document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", function(event) {
      event.preventDefault(); // stop default form submission

      // (Optional) collect form data if needed
      const name = signupForm.querySelector("input[type='text']").value;
      const email = signupForm.querySelector("input[type='email']").value;
      const role = document.getElementById("role").value;

      // You could save these in sessionStorage if needed
      sessionStorage.setItem("userName", name);
      sessionStorage.setItem("userEmail", email);
      sessionStorage.setItem("userRole", role);

      // Redirect to login page
      window.location.href = "login.html";
    });
  }
});
