$.getJSON("maps/Coronazahlen.geojson", function(data) {
  var mapDatensatz = L.geoJSON(data, {
    style: function(feature) {
      // Definieren Sie eine Farbskala basierend auf den Zahlenwerten
      var colorScale = chroma.scale(['#d8e450', 'ff3000']).domain([90000, 167997]); // Beispiel Farben und Wertebereich

      // Holen Sie den Zahlenwert für die Farbskala
      var zahl = feature.properties.Fallzahlen;

      // Wählen Sie die Farbe basierend auf dem Zahlenwert
      var fillColor = colorScale(zahl).hex(); // HEX-Wert der Farbe

      return {
        fillColor: fillColor,
        color: '#000',
        weight: 1,
        fillOpacity: 0.7
      };
    },
    onEachFeature: function(feature, layer) {
      var popupContent = "<b>Gemeinde:</b> " + feature.properties.Gemeinde_name +
                        "<br><b>Fallzahlen:</b> " + feature.properties.Fallzahlen;

      layer.bindPopup(popupContent);
    }
  }).addTo(map);
});
