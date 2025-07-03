// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/bezirke.geojson", function (data) {
	var mapBezirke = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#2F6DAC",
				weight: 0.4,
				fillColor: "#2d91f7",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionenBezirke
	}).addTo(map);
});

// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten
function funktionenBezirke(feature, layer) {
	console.log(feature.properties["Kind pro Spielplatz"] / 500);
	layer.setStyle({
		fillOpacity: feature.properties["Kind pro Spielplatz"] / 500
	});

	var content = 
		"<b>"
		+ feature.properties["name"]
		+ "</b><hr>"
		+ "<b> Kinder pro Spielplatz:</b> " 
		+ feature.properties["Kind pro Spielplatz"]
		+ "<br><b>Spielplätze:</b> "
		+ feature.properties["Spielplätze"]
		+ "<br><b>Kinder:</b> "
		+ feature.properties["Kinder"]
	
	
	layer.bindPopup(content);
}
