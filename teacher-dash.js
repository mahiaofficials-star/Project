// Demo values (later connect to DB)
let activeSessions = 0;
let studentsToday = 0;

// Update dashboard stats
document.getElementById("activeSessions").textContent = activeSessions;
document.getElementById("studentsToday").textContent = studentsToday;

// Quick actions
function createSession() {
     window.location.href = "create-session.html";
  
}

function viewReports() {
  
  window.location.href = "reports.html";
}
