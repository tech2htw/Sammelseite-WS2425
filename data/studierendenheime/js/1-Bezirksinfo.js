// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/Bezirksinfo.geojson", function (data) {
	var mapBezirksinfo = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#858585",
				weight: 0.5,
				fillColor: "#9de129",
				fillOpacity: 3
			};
		},
		onEachFeature: funktionenBezirksinfo
	}).addTo(map);
});

// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten
function funktionenBezirksinfo(feature, layer) {
	layer.setStyle({
		fillOpacity: feature.properties['points_count'] / 5
	});
}


