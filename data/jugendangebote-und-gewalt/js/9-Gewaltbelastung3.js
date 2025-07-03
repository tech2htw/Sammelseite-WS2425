$.getJSON("maps/Gewaltbelastung3.geojson", function (data) {
	var mapGewaltbelastung3 = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#000000",
				weight: 0.4,
				fillColor: "#7163cb",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionenGewaltbelastung3
	}).addTo(map);
});

// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten
function funktionenGewaltbelastung3(feature, layer) {
	layer.setStyle({
		fillOpacity: feature.properties["points_count"] / 5
	});
}
