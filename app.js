document.querySelector('form').addEventListener('submit', function(event) {
    const email1 = document.getElementById('email1').value;
    const email2 = document.getElementById('email2').value;
    const email3 = document.getElementById('email3').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex pour vérifier les emails.

    // Vérifie les e-mails avec la regex
    if (!emailRegex.test(email1)) {
        alert("Contact 1 : Veuillez entrer une adresse e-mail valide.");
        event.preventDefault();
    }

    if (email2 && !emailRegex.test(email2)) {
        alert("Contact 2 : Veuillez entrer une adresse e-mail valide.");
        event.preventDefault();
    }

    if (email3 && !emailRegex.test(email3)) {
        alert("Contact 3 : Veuillez entrer une adresse e-mail valide.");
        event.preventDefault();
    }
});