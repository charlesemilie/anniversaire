console.log("password.js chargé");

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnValider");

  btn.addEventListener("click", () => {
    console.log("bouton cliqué");
    const motdepasseInput = document.getElementById("motdepasse").value.trim();
    const motdepasseCorrect = "test";

    if (motdepasseInput === motdepasseCorrect) {
      console.log("Mot de passe correct, redirection...");
      window.location.href = "accueil.html";
    } else {
      alert("Mot de passe incorrect, essaie encore !");
    }
  });
});
