document.addEventListener("DOMContentLoaded", () => {
  const sessionBox = document.getElementById("sessionBox");

  // Example: fetch active sessions (empty for now)
  const activeSessions = []; // if empty → show "No active sessions"

  if (activeSessions.length === 0) {
    sessionBox.innerHTML = "<p>No active sessions – Please mark attendance when available.</p>";
  } else {
    sessionBox.innerHTML = activeSessions.map(s => `
      <div class="session-item">
        <h3>${s.subject}</h3>
        <p>Code: ${s.code}</p>
        <p>Expires: ${s.expiry}</p>
        <p>Duration: ${s.duration} min</p>
      </div>
    `).join("");
  }
});
