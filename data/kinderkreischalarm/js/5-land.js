// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/land.geojson", function (data) {
	var mapLand = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#ddd9d9",
				weight: 1
			};
		},
	}).addTo(map);
});




