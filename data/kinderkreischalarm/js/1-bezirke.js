// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/bezirke.geojson", function (data) {
	var mapBezirke = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "rgba(181, 181, 181, 0.65)",
				weight: 0.1,
				fillColor: "rgba(206, 206, 206, 0.22)",
				fillOpacity: 10
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
}


