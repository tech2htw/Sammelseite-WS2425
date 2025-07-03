// Holt alle Accordion-Buttons
var accordions = document.getElementsByClassName("accordion");

// Fügt jedem Button ein Event-Listener hinzu
for (var i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function() {
    // Toggle des aktiven Buttons (Wechsel von "active" Klasse)
    this.classList.toggle("active");
    
    // Holt das Panel (Textbereich), der zum Button gehört
    var panel = this.nextElementSibling;
    
    // Toggle zwischen anzeigen und verstecken
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
