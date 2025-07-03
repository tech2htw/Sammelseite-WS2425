// Einbinden des Piktogramm als Icon
var iconSperr = L.icon({
  iconUrl: "img/ausrufe.svg",
  iconSize: [25],
});

// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentaion zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/sperrung.geojson", function (data) {
  var mapSperr = L.geoJSON(data, {
    style: {},
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { icon: iconSperr });
    },
    onEachFeature: funktionenSperr,
  }).addTo(map);

  toggleLayer(mapSperr, "#CheckboxSperr");
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenSperr(feature, layer) {
  var titel;

  if (feature.properties["street"]) {
    titel = feature.properties["subtype"] + ": " + feature.properties["street"];
  } else {
    titel = "subtype";
  }

  var content = "<b>" + titel + "</b><br>" + feature.properties["content"];

  layer.bindPopup(content);
}
