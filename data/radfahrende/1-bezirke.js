// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
$.getJSON("maps/map (1).geojson", function(data) {
  var mapBezirke = L.geoJSON(data, {
    style: function(feature) {
      return {
        color: '#333',
        weight: 1,
        lineJoin: 'round',
        interactive: false
      };
    },

    // neben der "style:"-Funktion, sagen wir hier, das beim Laden eines jeden Features eine Funktion ausgeführt werden soll (vergleichbar wie das bei den Popups gemacht wird)
    onEachFeature: colorBezirk
  }).addTo(map);
});


// Das ist die Funktion für die für jeden Eintrag im Feature ausgeführt werden soll und da jeder Eintrag eine andere Farbe enthält funktioniert das dann auch
function colorBezirk(feature, layer){
  layer.setStyle({
    fillColor: feature.properties["farbeBezirk"],
    fillOpacity:.4
  });
};
