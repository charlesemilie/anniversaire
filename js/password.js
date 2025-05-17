function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    console.log("Mot de passe saisi :", input);
    if (input === "test") {
        console.log("Mot de passe correct, redirection...");
        window.location.href = "accueil.html";
    } else {
        console.log("Mot de passe incorrect");
        alert("Mot de passe incorrect");
    }
}
