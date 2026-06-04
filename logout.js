// Logout button → go to login page
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      // Clear session data
      sessionStorage.clear();

      // Redirect to login page
      window.location.href = "login.html";
    });
  }
});
