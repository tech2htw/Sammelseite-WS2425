
// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/natur2.geojson", function (data) {
	var mapnatur2 = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#00a707",
				weight: 0.4,
				fillColor: "#00a707",
				fillOpacity: 1
		
			};
		},
		onEachFeature: funktionennatur2
	}).addTo(map);
});



// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten
function funktionennatur2(feature, layer) {

}


