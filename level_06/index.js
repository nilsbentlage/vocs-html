// Hole HTML-Elemente anhand ihrer IDs
const vokabelFeld = document.getElementById("vokabel");
const antwortFeld = document.getElementById("antwort");
const ergebnisFeld = document.getElementById("ergebnis");
const eingabeButton = document.getElementById("eingabe");

// Initialisiere Variablen
let aktuelleVokabel = null;

// Definiere eine Liste von Vokabeln
let vokabeln = [
  { deutsch: "Haus", englisch: "house" },
  { deutsch: "Auto", englisch: "car" },
  { deutsch: "Hund", englisch: "dog" },
  { deutsch: "Katze", englisch: "cat" },
  { deutsch: "Maus", englisch: "mouse" },
];

// Diese Methode zeigt eine zufällige Vokabel an
function neueVokabelAnzeigen() {
  aktuelleVokabel = vokabeln[Math.floor(Math.random() * vokabeln.length)];
  vokabelFeld.innerText = aktuelleVokabel.deutsch;
}

// Diese Methode vergleicht die Antwort des Benutzers mit der richtigen Antwort
function vergleicheAntwort() {
  const antwort = antwortFeld.value;
  if (antwort.toLowerCase() === aktuelleVokabel.englisch.toLowerCase()) {
    zeigeErgebnis("Das war richtig! Super!", "green");
    neueVokabelAnzeigen();
  } else {
    zeigeErgebnis("Das war leider falsch. Versuche es noch einmal!", "red");
  }
  antwortFeld.value = "";
}

// Diese Methode zeigt das Ergebnis der Antwort des Benutzers an
function zeigeErgebnis(text, farbe) {
  ergebnisFeld.innerText = text;
  ergebnisFeld.style.color = farbe;
  setTimeout(() => {
    ergebnisFeld.innerText = "";
  }, 1000);
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
