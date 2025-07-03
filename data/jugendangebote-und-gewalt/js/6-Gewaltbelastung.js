$.getJSON("maps/Gewaltbelastung0.geojson", function (data) {
	var mapGewaltbelastung0 = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#000000",
				weight: 0.4,
				fillColor: "#ffffff",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionenGewaltbelastung0
	}).addTo(map);
});

// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten
function funktionenGewaltbelastung0(feature, layer) {
	layer.setStyle({
		fillOpacity: feature.properties["points_count"] / 5
	});
}
