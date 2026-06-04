// Load session info
let subject = sessionStorage.getItem("sessionSubject") || "Unknown Subject";
let description = sessionStorage.getItem("sessionDesc") || "";
let duration = parseInt(sessionStorage.getItem("sessionDuration")) || 60; // duration in seconds

// Show subject + description
document.getElementById("subjectName").textContent = subject;
document.getElementById("sessionDesc").textContent = description;

// Timer countdown based on seconds input
let timeLeft = duration; 
let timerElement = document.getElementById("timer");

function updateTimer() {
  if (timeLeft > 0) {
    timerElement.textContent = `${timeLeft} sec`;
    timeLeft--;
  } else {
    // When time becomes 0 → show "Session expired"
    timerElement.textContent = "Session expired";
    clearInterval(timerInterval);

    // Optional: remove QR code after expiry
    document.getElementById("qrCode").innerHTML = "";
  }
}

let timerInterval = setInterval(updateTimer, 1000);

// Generate QR code once per session
function generateQR() {
  const sessionId = Date.now(); // unique ID per session
  const qrData = `SESSION:${sessionId}|SUBJECT:${subject}|DURATION:${duration}s`;

  document.getElementById("qrCode").innerHTML = "";
  new QRCode(document.getElementById("qrCode"), {
    text: qrData,
    width: 200,
    height: 200
  });

  sessionStorage.setItem("currentSessionId", sessionId);
}


// Initialize QR on page load
generateQR();
