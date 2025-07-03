// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/bezirke.geojson", function (data) {
	var mapBezirke = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#2F6DAC",
				weight: 0.4,
				fillColor: "#f72d2d",
				fillOpacity: 0.2
			};
		},
		onEachFeature: funktionenBezirke
	}).addTo(map);
});


// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten
function funktionenBezirke(feature, layer) {
	layer.setStyle({
		fillOpacity: feature.properties["points_count"] / 5
	});

	
	// Popups

	var content = "<b>Bezirk</b><br>" + feature.properties["namgem"];

	layer.bindPopup(content);
}


