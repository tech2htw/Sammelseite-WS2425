
// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/Licht.json", function (data) {

	var mapLicht = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#ffe200",
				weight: 0.4,
				fillColor: "#ffe200",
				fillOpacity: 1
		
			};
		},
		onEachFeature: funktionenLicht
	
	}).addTo(map);
});


// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten
function funktionenLicht(feature, layer) {

}


