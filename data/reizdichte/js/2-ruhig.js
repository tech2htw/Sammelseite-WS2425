// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/ruhig.geojson", function (data) {
	var mapRuhe = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#000000",
				weight: 0.4,
				fillColor: "#303e17",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionenRuhe
	}).addTo(map);

	toggleLayer(mapRuhe, "#CheckboxRuhe");
	//map.addLayer(mapRuhe);
});

// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten
function funktionenRuhe(feature, layer) {
	layer.setStyle({
		fillOpacity: feature.properties["points_count"] / 5
	});
  
  var content = 	"<b>"
					+ "Standort: "
					+ "</b><br>"
					+ feature.properties["name"]

	layer.bindPopup(content);
}
