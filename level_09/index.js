// Hole HTML-Elemente anhand ihrer IDs
const vokabelFeld = document.getElementById("vokabel");
const antwortFeld = document.getElementById("antwort");
const ergebnisFeld = document.getElementById("ergebnis");
const eingabeButton = document.getElementById("eingabe");

// Diese Methode zeigt eine zufällige Vokabel an
function neueVokabelAnzeigen() {
  console.log("Hier wird eine neue Vokabel angezeigt");
}

// Diese Methode vergleicht die Antwort des Benutzers mit der richtigen Antwort
function vergleicheAntwort() {
  console.log("Hier wird die Antwort verglichen");
}

// Diese Methode initialisiert das Spiel
function init() {
  neueVokabelAnzeigen();
  eingabeButton.addEventListener("submit", (e) => {
    e.preventDefault();
    vergleicheAntwort();
  });
  antwortFeld.focus();
}

init();
