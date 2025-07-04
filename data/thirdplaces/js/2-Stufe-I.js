// Einbinden des Piktogramm als Icon
var iconKreis1 = L.icon({
  iconUrl: "img/Kreis1.svg",
  iconSize: [5],
});

// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentaion zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/Stufe-I-non-profit-.geojson", function (data) {
  var mapStandorte = L.geoJSON(data, {
    style: {},
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { icon: iconKreis1 });
    },
    onEachFeature: funktionenStandorte,
  }).addTo(map);

  toggleLayer(mapStandorte, "#CheckboxI");
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenStandorte(feature, layer) {
  var titel;

  if (feature.properties["nam"]) {
    titel = feature.properties["nam"];
  } else {
    titel = "StufeI";
  }

  var content = "<b>" + titel + "</b><br>" + feature.properties["namlag"];

  layer.bindPopup(content);
}
