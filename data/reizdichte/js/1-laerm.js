// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/2022-Umweltatlas.geojson", function (data) {
	var mapLaerm = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "rgba(0, 0, 0, 0.71)",
				weight: 0.4,
				fillColor: "#ffffff",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionenLaerm
	}).addTo(map);

	toggleLayer(mapLaerm, "#CheckboxLaerm");
	//map.addLayer(mapLaerm);
});

// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten

function funktionenLaerm(feature, layer) {
		layer.setStyle({
		fillOpacity: feature.properties["points_count"] / 5
	});
		
	if (feature.properties["kategorie"] == "mittel") {
		layer.setStyle({
			fillColor: "#f7886c"
		});
	}
	
	if (feature.properties["kategorie"] == "hoch") {
		layer.setStyle({
			fillColor: "#e24b26"
		});
	}
	if (feature.properties["kategorie"] == "gering") {
		layer.setStyle({
			fillColor: "#fecbbb"
		});
	}
	
	var content = 	"<b>"
					+ "Standort: "
					+ "</b><br>"
					+ feature.properties["plr_name"]
					+ "</b><br>"
					+ "Lärmbelastung: "
					+ feature.properties["kategorie"]


	layer.bindPopup(content);
}


