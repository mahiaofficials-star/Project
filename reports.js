

// Handle report generation
document.getElementById("reportForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  if (!startDate || !endDate) {
    alert("Please select both start and end dates.");
    return;
  }

  document.getElementById("reportResult").innerHTML = `
    <p>Report generated for <strong>${startDate}</strong> to <strong>${endDate}</strong>.</p>
    <p>(Later this will show actual attendance data from the database.)</p>
  `;
});
