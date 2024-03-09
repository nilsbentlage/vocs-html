// Definiere eine Klasse namens VokabelTest
class VokabelTest {
  // Der Konstruktor wird aufgerufen, wenn ein neues Objekt erstellt wird
  constructor() {
    // Hole HTML-Elemente anhand ihrer IDs
    this.vokabelFeld = document.getElementById("vokabel");
    this.antwortFeld = document.getElementById("antwort");
    this.ergebnisFeld = document.getElementById("ergebnis");
    this.punktestandElement = document.getElementById("punktestand-zaehler");
    this.punktestandMaxElement = document.getElementById("punktestand-maximal");
    this.eingabeButton = document.getElementById("eingabe");
    this.modusFeld = document.getElementById("modus");

    // Initialisiere Variablen
    this.aktuelleVokabel = null;
    this.animationsTimer = null;
    this.frageModus = "deutsch";
    this.punktestand = 0;

    // Definiere eine Liste von Vokabeln
    this.vokabeln = [
      { deutsch: "Haus", englisch: "house" },
      { deutsch: "Auto", englisch: "car" },
      { deutsch: "Hund", englisch: "dog" },
      { deutsch: "Katze", englisch: "cat" },
      { deutsch: "Maus", englisch: "mouse" },
    ];

    // Rufe die init-Methode auf, um das Spiel zu starten
    this.init();
  }

  // Diese Methode zeigt eine zufällige Vokabel an
  neueVokabel() {
    this.aktuelleVokabel =
      this.vokabeln[Math.floor(Math.random() * this.vokabeln.length)];
    this.vokabelFeld.innerText = this.aktuelleVokabel[this.frageModus];
  }

  // Diese Methode entfernt die aktuelle Vokabel aus der Liste
  entferneVokabel() {
    this.vokabeln = this.vokabeln.filter((item) => {
      return item !== this.aktuelleVokabel;
    });
  }

  // Diese Methode startet das Spiel neu
  neustart() {
    this.vokabelFeld.innerText = 'GESCHAFFT!';
    setTimeout(() => {
      alert(
        "Glückwunsch, du hast alle Vokabeln richtig! \n Klick auf OK um das Spiel neu zu starten."
      );
      window.location.reload();
    }, 1000);
  }

  // Diese Methode vergleicht die Antwort des Benutzers mit der richtigen Antwort
  vergleicheAntwort() {
    const antwortModus = this.frageModus === "deutsch" ? "englisch" : "deutsch";
    const antwort = this.antwortFeld.value;
    if (
      antwort.toLowerCase() === this.aktuelleVokabel[antwortModus].toLowerCase()
    ) {
      this.zaehlePunkte();
      this.entferneVokabel();
      this.zeigeErgebnis("Das war richtig!", "green");
      if (this.vokabeln.length > 0) {
        this.neueVokabel();
      } else {
        this.neustart();
      }
    } else {
      this.zeigeErgebnis("Das war leider falsch", "red");
    }
    this.antwortFeld.value = "";
  }

  // Diese Methode zeigt das Ergebnis der Antwort des Benutzers an
  zeigeErgebnis(text, farbe) {
    this.ergebnisFeld.innerText = text;
    this.ergebnisFeld.style.color = farbe;
    this.animationsTimer && clearTimeout(this.animationsTimer);
    this.ergebnisFeld.classList.add("animation");
    this.animationsTimer = setTimeout(() => {
      this.ergebnisFeld.classList.remove("animation");
    }, 1000);
  }

  // Diese Methode erhöht den Punktestand, wenn die Antwort des Benutzers korrekt ist
  zaehlePunkte() {
    this.punktestand++;
    this.punktestandElement.innerText = this.punktestand;
  }

  // Diese Methode setzt den maximalen Punktestand
  setzeMaximalePunktzahl() {
    this.punktestandMaxElement.innerText = this.vokabeln.length;
  }

  // Diese Methode initialisiert das Spiel
  init() {
    this.setzeMaximalePunktzahl();
    this.neueVokabel();
    this.eingabeButton.addEventListener("submit", (e) => {
      e.preventDefault();
      this.vergleicheAntwort();
    });
    this.modusFeld.addEventListener("change", (e) => {
      this.frageModus = e.target.value;
      this.antwortFeld.value = "";
      this.neueVokabel();
    });
    this.antwortFeld.focus();
  }
}

// Erstelle eine neue Instanz der Klasse VokabelTest, um das Spiel zu starten
new VokabelTest();
