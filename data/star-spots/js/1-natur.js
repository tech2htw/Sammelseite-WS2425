
// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/natur.geojson", function (data) {
	var mapnatur = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#00a707",
				weight: 0.4,
				fillColor: "#00a707",
				fillOpacity: 1
		
			};
		},
		onEachFeature: funktionennatur
	}).addTo(map);
});



// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten
function funktionennatur(feature, layer) {

}


