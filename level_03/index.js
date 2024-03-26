// Hole HTML-Elemente anhand ihrer IDs
const vokabelFeld = document.getElementById("vokabel");
const antwortFeld = document.getElementById("antwort");
const ergebnisFeld = document.getElementById("ergebnis");
const punktestandElement = document.getElementById("punktestand-zaehler");
const punktestandMaxElement = document.getElementById("punktestand-maximal");
const eingabeButton = document.getElementById("eingabe");

// Initialisiere Variablen
let aktuelleVokabel = null;
let animationsTimer = null;
let punktestand = 0;

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

// Diese Methode entfernt die aktuelle Vokabel aus der Liste
function entferneVokabel() {
  vokabeln = vokabeln.filter((item) => {
    return item !== aktuelleVokabel;
  });
}

// Diese Methode startet das Spiel neu
function neustart() {
  vokabelFeld.innerText = "Super gemacht!";
  setTimeout(() => {
    alert(
      "Glückwunsch, du hast alle Vokabeln richtig! \n Klick auf OK um das Spiel neu zu starten."
    );
    window.location.reload();
  }, 1000);
}

// Diese Methode vergleicht die Antwort des Benutzers mit der richtigen Antwort
function vergleicheAntwort() {
  const antwort = antwortFeld.value;
  if (antwort.toLowerCase() === aktuelleVokabel.englisch.toLowerCase()) {
    zaehlePunkte();
    entferneVokabel();
    zeigeErgebnis("Das war richtig! Super!", "green");
    if (vokabeln.length > 0) {
      neueVokabelAnzeigen();
    } else {
      neustart();
    }
  } else {
    zeigeErgebnis("Das war leider falsch. Versuche es noch einmal!", "red");
  }
  antwortFeld.value = "";
}

// Diese Methode zeigt das Ergebnis der Antwort des Benutzers an
function zeigeErgebnis(text, farbe) {
  ergebnisFeld.innerText = text;
  ergebnisFeld.style.color = farbe;
  animationsTimer && clearTimeout(animationsTimer);
  ergebnisFeld.classList.add("animation");
  animationsTimer = setTimeout(() => {
    ergebnisFeld.classList.remove("animation");
  }, 1000);
}

// Diese Methode erhöht den Punktestand, wenn die Antwort des Benutzers korrekt ist
function zaehlePunkte() {
  punktestand++;
  punktestandElement.innerText = punktestand;
}

// Diese Methode setzt den maximalen Punktestand
function setzeMaximalePunktzahl() {
  punktestandMaxElement.innerText = vokabeln.length;
}

// Diese Methode initialisiert das Spiel
function init() {
  setzeMaximalePunktzahl();
  neueVokabelAnzeigen();
  eingabeButton.addEventListener("submit", (e) => {
    e.preventDefault();
    vergleicheAntwort();
  });
  antwortFeld.focus();
}

init();
