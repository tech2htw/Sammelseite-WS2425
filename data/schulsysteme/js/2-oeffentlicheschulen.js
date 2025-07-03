// Einbinden des Piktogramm als Icon
//ÖFFENTLICH
var iconOffenBuch = L.icon({
  iconUrl: "img/OFFIS.svg",
  iconSize: [15],
});



// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentaion zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/oeffis.geojson", function (data) {
  var mapOffentliche = L.geoJSON(data, {
    style: {},
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { icon: iconOffenBuch });
    },
    onEachFeature: funktionenOStandorte,
  }).addTo(map);

  toggleLayer(mapOffentliche, "#CheckboxOeffentliche");
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenOStandorte(feature, layer) {
  var titel;

  if (feature.properties["nam"]) {
    titel = feature.properties["nam"];
  } else {
    titel = "Öffentlich";
  }

  var content = "<b>" + titel + "</b><br>" + feature.properties["namlag"];

  //layer.bindPopup(content);
}
