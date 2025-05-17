// js/password.js
document.getElementById("validateBtn").addEventListener("click", () => {
  const input = document.getElementById("passwordInput").value.trim();
  const message = document.getElementById("message");
  if (input === "test") {
    message.style.color = "#2a9d8f";
    message.textContent = "Mot de passe correct, redirection...";
    message.classList.add("show");
    setTimeout(() => {
      window.location.href = "accueil.html";
    }, 1000);
  } else {
    message.style.color = "#e63946";
    message.textContent = "Mot de passe incorrect, réessaie.";
    message.classList.add("show");
  }
});
