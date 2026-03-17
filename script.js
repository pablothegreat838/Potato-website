// Load banner
document.addEventListener("DOMContentLoaded", () => {
  let banner = localStorage.getItem("banner") || "Welcome to Potato-SMPP!";
  let bannerEl = document.getElementById("bannerText");
  if (bannerEl) bannerEl.innerText = banner;

  loadReports();
});

// Submit report
function submitReport() {
  let type = document.getElementById("type").value;
  let user = document.getElementById("user").value;
  let message = document.getElementById("message").value;

  let reports = JSON.parse(localStorage.getItem("reports")) || [];

  reports.push({ type, user, message });
  localStorage.setItem("reports", JSON.stringify(reports));

  alert("Report submitted!");
}

// Load reports (staff page)
function loadReports() {
  let container = document.getElementById("reports");
  if (!container) return;

  let reports = JSON.parse(localStorage.getItem("reports")) || [];

  container.innerHTML = "";
  reports.forEach(r => {
    container.innerHTML += `
      <div>
        <b>${r.type}</b><br>
        User: ${r.user}<br>
        Message: ${r.message}
        <hr>
      </div>
    `;
  });
}

// Login
function login() {
  let pass = document.getElementById("pass").value;

  if (pass === "0923") {
    document.getElementById("login").style.display = "none";
    document.getElementById("panel").style.display = "block";
  } else {
    alert("Wrong password!");
  }
}

// Change banner
function changeBanner() {
  let newBanner = document.getElementById("newBanner").value;
  localStorage.setItem("banner", newBanner);
  alert("Banner updated!");
}