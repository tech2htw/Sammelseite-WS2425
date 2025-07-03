$.getJSON("maps/Gewaltbelastung1.geojson", function (data) {
	var mapGewaltbelastung1 = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#000000",
				weight: 0.4,
				fillColor: "#bfe5fb",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionenGewaltbelastung1
	}).addTo(map);
});

// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten
function funktionenGewaltbelastung1(feature, layer) {
	layer.setStyle({
		fillOpacity: feature.properties["points_count"] / 5
	});
}
