// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/land.geojson", function (data) {
	var mapLand = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#ef7f7f",
				weight: 5,
				interactive: false
			};
		},
	}).addTo(map);
});




