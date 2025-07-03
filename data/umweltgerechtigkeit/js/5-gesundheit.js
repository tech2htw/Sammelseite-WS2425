

// Funktion zur Erstellung von Labels
function createLabel(feature) {
  var esixSchicht = feature.properties["esix_schicht"] || "N/A";
  return L.divIcon({
    className: "esix-label", // CSS-Klasse für Styling
    html: `<div>${esixSchicht}</div>`, // Der Wert wird angezeigt
    iconSize: [30, 15], // Größe des Labels
    iconAnchor: [15, 7] // Position relativ zum Punkt
  });
}

// Funktion für jeden GeoJSON-Feature
function funktionenGesundheit(feature, layer) {
  // var content = `<b>${feature.properties["plr_name"] || "Planungsraum"}</b><br>`;
  // content += `Index: ${feature.properties["esix_schicht"] || "N/A"}`;
  // layer.bindPopup(content);

  layer.setStyle({
    fillColor: "#000000",
    fillOpacity: 0.5,
    color: "#000",
    weight: 1
  });
}

// Funktion zum Anwenden von Filtern
function applyFilter(data, selectedValue) {
  if (mapGesundheit) {
    map.removeLayer(mapGesundheit); // Entferne alten Layer
  }

  // Aktualisierten Layer mit Filter erstellen
  mapGesundheit = L.geoJSON(data, {
    filter: function (feature) {
      var value = feature.properties["esix_schicht"];
      if (selectedValue === "all") {
        return true; // Zeige alle Werte
      } else {
        return value == selectedValue; // Nur ausgewählte Zahl anzeigen
      }
    },
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { icon: createLabel(feature) }); // Zahlen als Label
    },
    onEachFeature: funktionenGesundheit
  }).addTo(map);
}

// GeoJSON laden und initiale Karte erstellen
var mapGesundheit;
$.getJSON("maps/gesundheit.geojson", function (data) {
  // Initiale Karte ohne Filter
  mapGesundheit = L.geoJSON(data, {
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { icon: createLabel(feature) });
    },
    onEachFeature: funktionenGesundheit
  }).addTo(map);

  // Dropdown-Event-Listener hinzufügen
  $("#filter-dropdown").on("change", function () {
    var selectedValue = $(this).val(); // Ausgewählte Filteroption
    applyFilter(data, selectedValue); // Filter anwenden
  });
});

