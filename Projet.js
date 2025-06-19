document.getElementById("formulaire-contact").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l’envoi réel

    // Affiche le message de confirmation
    document.getElementById("confirmation").textContent = "Merci pour votre message !";

    // Réinitialise tous les champs du formulaire
    document.getElementById("formulaire-contact").reset();
});
