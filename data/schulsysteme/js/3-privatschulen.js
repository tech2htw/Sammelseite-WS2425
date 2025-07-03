// Einbinden des Piktogramm als Icon
//ÖFFENTLICH
var iconGeschlossenBuch = L.icon({
  iconUrl: "img/priv.svg",
  iconSize: [15],
  iconClassName: 'my-icon-class'  // Neue CSS-Klasse hinzufügen
});



// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentaion zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/privs.geojson", function (data) {
  var mapPrivate = L.geoJSON(data, {
    style: {},
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { icon: iconGeschlossenBuch });
    },
    onEachFeature: funktionenPStandorte,
  }).addTo(map);

  toggleLayer(mapPrivate, "#CheckboxPrivate");
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenPStandorte(feature, layer) {
  
}
