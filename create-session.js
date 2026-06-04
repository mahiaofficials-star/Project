document.getElementById("sessionForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const subject = document.getElementById("subject").value.trim();
  const description = document.getElementById("description").value.trim();
  const duration = parseInt(document.getElementById("duration").value);

  if (!subject || !duration) {
    alert("Please fill in subject and duration.");
    return;
  }

  // Save session info
  sessionStorage.setItem("sessionSubject", subject);
  sessionStorage.setItem("sessionDesc", description);
  sessionStorage.setItem("sessionDuration", duration);

  // Redirect to Active Session page
  window.location.href = "activesession.html";
});
