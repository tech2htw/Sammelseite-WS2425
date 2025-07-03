$.getJSON("maps/Gewaltbelastung4.geojson", function (data) {
	var mapGewaltbelastung4 = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#000000",
				weight: 0.4,
				fillColor: "#3b31d7",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionenGewaltbelastung4
	}).addTo(map);
});

// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten
function funktionenGewaltbelastung4(feature, layer) {
	layer.setStyle({
		fillOpacity: feature.properties["points_count"] / 5
	});
}
