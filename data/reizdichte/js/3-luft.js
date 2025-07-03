// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/Luftbelastung.geojson", function (data) {
	var mapLuft = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#000000",
				weight: 0.4,
				fillColor: "#3a5a00",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionenLuft
	}).addTo(map);

	toggleLayer(mapLuft, "#CheckboxLuft");
	//map.addLayer(mapRuhe);
});

// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten
function funktionenLuft(feature, layer) {
	layer.setStyle({
		fillOpacity: feature.properties["ew2023"]
	});
	
		if (feature.properties["kategorie"] == "mittel") {
		layer.setStyle({
			fillColor: "#5d80b9"
		});
	}
	
	if (feature.properties["kategorie"] == "hoch") {
		layer.setStyle({
			fillColor: "#4b5582"
		});
	}
	if (feature.properties["kategorie"] == "gering") {
		layer.setStyle({
			fillColor: "#b2deff"
		});
	}
	var content = 	"<b>"
					+ "Standort: "
					+ "</b><br>"
					+ feature.properties["plr_name"]
					+ "</b><br>"
					+ "Luftbelastung: "
					+ feature.properties["kategorie"]


	layer.bindPopup(content);

	}

