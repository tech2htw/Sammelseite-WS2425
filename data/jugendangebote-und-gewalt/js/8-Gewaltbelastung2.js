$.getJSON("maps/Gewaltbelastung2.geojson", function (data) {
	var mapGewaltbelastung2 = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#000000",
				weight: 0.4,
				fillColor: "#a5a0ee",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionenGewaltbelastung2
	}).addTo(map);
});

// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten
function funktionenGewaltbelastung2(feature, layer) {
	layer.setStyle({
		fillOpacity: feature.properties["points_count"] / 5
	});
}
