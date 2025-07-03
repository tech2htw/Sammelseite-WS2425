// Einbinden des Piktogramm als Icon
var iconKreis3 = L.icon({
  iconUrl: "img/Kreis3.svg",
  iconSize: [5],
});

// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentaion zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/Stufe-III-profit-.geojson", function (data) {
  var mapStandorte = L.geoJSON(data, {
    style: {},
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { icon: iconKreis3 });
    },
    onEachFeature: funktionenStandorte,
  }).addTo(map);

  toggleLayer(mapStandorte, "#CheckboxIII");
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenStandorte(feature, layer) {
  var titel;

  if (feature.properties["nam"]) {
    titel = feature.properties["nam"];
  } else {
    titel = "StufeIII";
  }

  var content = "<b>" + titel + "</b><br>" + feature.properties["namlag"];

  layer.bindPopup(content);
}
