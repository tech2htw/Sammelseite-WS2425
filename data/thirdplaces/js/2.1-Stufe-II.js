// Einbinden des Piktogramm als Icon
var iconKreis2 = L.icon({
  iconUrl: "img/Kreis2.svg",
  iconSize: [5],
});

// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentaion zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/Stufe-II-non-profit-.geojson", function (data) {
  var mapStandorte = L.geoJSON(data, {
    style: {},
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { icon: iconKreis2 });
    },
    onEachFeature: funktionenStandorte,
  }).addTo(map);

  toggleLayer(mapStandorte, "#CheckboxII");
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenStandorte(feature, layer) {
  var titel;

  if (feature.properties["nam"]) {
    titel = feature.properties["nam"];
  } else {
    titel = "StufeII";
  }

  var content = "<b>" + titel + "</b><br>" + feature.properties["namlag"];

  layer.bindPopup(content);
}
