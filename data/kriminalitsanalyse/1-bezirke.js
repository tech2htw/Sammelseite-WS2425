// Variable zur Speicherung des aktuellen Zustands des Farbschemas
var currentStyle = 1; // Standardmäßig das erste Farbschema

// Laden der GeoJSON-Daten und Erstellen der Karte
$.getJSON("maps/bezirke.geojson", function(data) {
  var mapBezirke = L.geoJSON(data, {
    style: {
      color: '#333',
      weight: 1,
      lineJoin: 'round',
      interactive: false
    }
  }).addTo(map);

  // Funktion zum Einfärben der Bezirke für das erste Farbschema (zum Beispiel)
  function colorBezirkeStyle1() {
    console.log("Farbschema 1 wird angewendet.");
    mapBezirke.eachLayer(function(layer) {
      if (layer.feature && layer.feature.properties && layer.feature.properties.farbeBezirk) {
        layer.setStyle({
          fillColor: layer.feature.properties.farbeBezirk,
          fillOpacity: 1
        });
      }
    });
    // Hintergrundfarbe und Textfarbe des Buttons aktualisieren
    updateButtonColors("#E02929");
  }

  // Funktion zum Einfärben der Bezirke für das zweite Farbschema (zum Beispiel)
  function colorBezirkeStyle2() {
    console.log("Farbschema 2 wird angewendet.");
    mapBezirke.eachLayer(function(layer) {
      if (layer.feature && layer.feature.properties && layer.feature.properties.farbeBezirkAlt) {
        layer.setStyle({
          fillColor: layer.feature.properties.farbeBezirkAlt,
          fillOpacity: 1
        });
      }
    });
    // Hintergrundfarbe und Textfarbe des Buttons aktualisieren
    updateButtonColors("#E58719");
  }

  // Standardmäßig das erste Farbschema anzeigen
  colorBezirkeStyle1();

  // Event-Listener für den Button zum Wechseln des Farbschemas
  document.getElementById("style1Button").addEventListener("click", function() {
    // Ändern des aktuellen Zustands des Farbschemas
    currentStyle = (currentStyle === 1) ? 2 : 1;

    // Anwenden des entsprechenden Farbschemas
    if (currentStyle === 1) {
      colorBezirkeStyle1(); // Erster Stil
      updateButtonText("Raube nach Bezirk");
    } else {
      colorBezirkeStyle2(); // Zweiter Stil
      updateButtonText("Raube auf Gesamtzahl von Schüler:innen in %");
    }
  });

  // Funktion zur Aktualisierung des Button-Texts
  function updateButtonText(text) {
    var button = document.getElementById("style1Button");
    button.textContent = text;
    // Textfarbe des Buttons aktualisieren
    button.style.color = "#ffffff";
  }

  // Funktion zur Aktualisierung der Hintergrundfarbe des Buttons
  function updateButtonColors(backgroundColor) {
    var button = document.getElementById("style1Button");
    button.style.backgroundColor = backgroundColor;
  }
});
