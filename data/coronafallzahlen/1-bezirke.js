// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte

$.getJSON("maps/bezirke.geojson", function(data) {
  var mapBezirke = L.geoJSON(data, {
    style: function(feature) {
      return {
        color: '#100',
        weight: 1,
        lineJoin: 'round',
        fillOpacity: 0,
        interactive: true
      };
    },
    onEachFeature: function(feature, layer) {
      if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name); // Hier fügen Sie den Namen als Popup hinzu
      }
    }
  }).addTo(map);
});