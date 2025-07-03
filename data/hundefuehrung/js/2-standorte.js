// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentaion zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/standorte.geojson", function (data) {
  var mapStandorte = L.geoJSON(data, {
    style: {},
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { icon: iconPfote });
    },
    onEachFeature: funktionenStandorte,
  }).addTo(map);

  toggleLayer(mapStandorte, "#CheckboxBadenmitHund");
  map.addLayer(mapStandorte);
});


// Einbinden des Piktogramm als Icon
var iconPfote = L.icon({
	iconUrl: 'img/Pfote.svg',
	iconSize: [32],
});

function funktionenStandorte() {
  
}