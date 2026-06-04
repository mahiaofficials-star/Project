document.addEventListener("DOMContentLoaded", () => {
  // Generate random OTP
  const generatedOtp = Math.floor(1000 + Math.random() * 9000); // 4-digit
  document.getElementById("generatedOtp").textContent = generatedOtp;

  // Timer 30 sec
  let timeLeft = 30;
  const timerEl = document.getElementById("timer");
  timerEl.textContent = "⏱️ Time left: " + timeLeft + "s";

  const countdown = setInterval(() => {
    timeLeft--;
    timerEl.textContent = "⏱️ Time left: " + timeLeft + "s";

    if (timeLeft <= 0) {
      clearInterval(countdown);
      timerEl.textContent = "❌ OTP expired!";
      document.getElementById("generatedOtp").textContent = "";
    }
  }, 1000);

  // Verify OTP
  document.getElementById("verifyOtpBtn").addEventListener("click", () => {
    const enteredOtp = document.getElementById("otpInput").value;
    const otpResult = document.getElementById("otpResult");

    if (enteredOtp === generatedOtp.toString() && timeLeft > 0) {
      otpResult.textContent = "✅ Attendance marked successfully!";
      otpResult.style.color = "green";
    } else {
      otpResult.textContent = "❌ Invalid or expired OTP.";
      otpResult.style.color = "red";
    }
  });

  // Back button → Dashboard
  document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "student_dashboard.html";
  });
});
