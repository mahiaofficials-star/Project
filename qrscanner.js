document.addEventListener("DOMContentLoaded", () => {
  const qrScanner = new Html5Qrcode("qrScanner");
  const scanResult = document.getElementById("scanResult");
  const nextBtn = document.getElementById("nextBtn");

  // Start camera
  qrScanner.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    qrCodeMessage => {
      try {
        const data = JSON.parse(qrCodeMessage);

        // Success message
        scanResult.textContent = "✅ Successfully scanned!";
        scanResult.style.color = "green";

        // Enable Next button
        nextBtn.disabled = false;
        nextBtn.classList.add("enabled");

        // Stop scanner immediately after success
        qrScanner.stop();
      } catch (e) {
        scanResult.textContent = "❌ Invalid QR code!";
        scanResult.style.color = "red";
        nextBtn.disabled = true;
        nextBtn.classList.remove("enabled");
      }
    },
    errorMessage => {
      console.log("Scan error:", errorMessage);
    }
  ).catch(err => {
    console.error("Unable to start scanner:", err);
  });

  // Auto-stop camera after 30 seconds
  setTimeout(() => {
    qrScanner.stop().then(() => {
      console.log("Camera stopped after 30 seconds");
      if (scanResult.textContent === "") {
        scanResult.textContent = "⏱️ Time expired, please refresh to try again.";
        scanResult.style.color = "orange";
      }
    }).catch(err => console.error("Error stopping camera:", err));
  }, 30000);

  // Next button click
  nextBtn.addEventListener("click", () => {
    if (!nextBtn.disabled) {
      alert("Proceeding to next step...");
      window.location.href = "history.html"; // example redirect
    }
  });
});
