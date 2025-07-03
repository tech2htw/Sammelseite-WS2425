// Funktion zur Farbkodierung basierend auf Kategorie
function getColor(kategorie) {
  switch (kategorie) {
    case "keine starke Belastung":
      return "#ffb3f4"; // Grün
    case "einfach":
      return "#ff64e2"; // Gelb
    case "zweifach":
      return "#ff571d"; // Orange
    case "dreifach":
      return "#a31b00"; // Rot
    case "vierfach":
      return "#541200"; // Rot
    default:
      return "#BDC3C7"; // Grau
  }
}

// Funktion zur Stil-Definition basierend auf Kategorie
function styleByCategory(feature) {
  var kategorie = feature.properties["kategorie"];
  return {
    fillColor: getColor(kategorie), // Farbe abhängig von Kategorie
    weight: 0.5, // Randbreite
    color: "#333", // Randfarbe
    opacity: 1, // Randtransparenz
    fillOpacity: 1 // Transparenz der Füllung
  };
}

// GeoJSON-Daten laden und zur Karte hinzufügen
$.getJSON("maps/umwelt.geojson", function (data) {
  var mapUmwelt = L.geoJSON(data, {
    style: styleByCategory, // Stil basierend auf Kategorie anwenden
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng); // Marker für Punkte
    },
    onEachFeature: funktionenUmwelt // Popup-Funktion
  }).addTo(map);

  /*
  // Layer-Toggle-Logik
  toggleLayer(mapUmwelt, "#CheckboxUmwelt");
  */
});

// Funktion für Popups (unverändert)
function funktionenUmwelt(feature, layer) {
  var titel = feature.properties["plr_name"] || "Planungsraum";

  var UmweltPlanungsraum = feature.properties["plr_name"] || "N/A";
  var UmweltGrünfläche = feature.properties["gruenfl"] || "N/A";
  var UmweltLärm = feature.properties["laerm"] || "N/A";
  var UmweltBioklima = feature.properties["bioklima"] || "N/A";
  var UmweltLuft = feature.properties["luft"] || "N/A";

  var content = `
    <b>${titel}</b><br><br>
    <div class="Umweltkategorie">Grünfläche:</div> <div class="Bewertung">${UmweltGrünfläche}</div><br>
    <div class="Umweltkategorie">Lärm:</div> <div class="Bewertung">${UmweltLärm}</div><br>
    <div class="Umweltkategorie">Bioklima:</div> <div class="Bewertung">${UmweltBioklima}</div><br>
    <div class="Umweltkategorie">Luft:</div> <div class="Bewertung">${UmweltLuft}</div>
  `;

  layer.bindPopup(content);
}
