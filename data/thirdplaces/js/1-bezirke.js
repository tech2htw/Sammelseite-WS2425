// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/Prozent.geojson", function (data) {
	var mapProzent = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#225cad",
				weight: 0.4,
				fillColor: "#225cad",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionenProzent
	}).addTo(map);

});

// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten

function funktionenProzent(feature, layer) {
		layer.setStyle({
		fillOpacity: feature.properties["points_count"] / 5
	});
		
	if (feature.properties["namgem"] == "Mitte") {
		layer.setStyle({
			fillColor: "#02A0DB"
		});
	}
	
	if (feature.properties["namgem"] == "Friedrichshain-Kreuzberg") {
		layer.setStyle({
			fillColor: "#01B2E7"
		});
	}
	if (feature.properties["namgem"] == "Treptow-Köpenick") {
		layer.setStyle({
			fillColor: "#02AAE2"
		});
	}
	if (feature.properties["namgem"] == "Neukölln") {
		layer.setStyle({
			fillColor: "#02A6DF"
		});
	}
	
	if (feature.properties["namgem"] == "Pankow") {
		layer.setStyle({
			fillColor: "#01BCEE"
		});
	}
	if (feature.properties["namgem"] == "Lichtenberg") {
		layer.setStyle({
			fillColor: "#01B5E9"
		});
	}
	if (feature.properties["namgem"] == "Marzahn-Hellersdorf") {
		layer.setStyle({
			fillColor: "#02AAE2"
		});
	}
	
	if (feature.properties["namgem"] == "Tempelhof-Schöneberg") {
		layer.setStyle({
			fillColor: "#01BFF0"
		});
	}
	if (feature.properties["namgem"] == "Steglitz-Zehlendorf") {
		layer.setStyle({
			fillColor: "#02ADE4"
		});
	}
	if (feature.properties["namgem"] == "Charlottenburg-Wilmersdorf") {
		layer.setStyle({
			fillColor: "#02AAE2"
		});
	}
	
	if (feature.properties["namgem"] == "Spandau") {
		layer.setStyle({
			fillColor: "#01B0E6"
		});
	}
	if (feature.properties["namgem"] == "Reinickendorf") {
		layer.setStyle({
			fillColor: "#0397D5"
		});
	}
	
	var content = 	"<b>"
		+ feature.properties["namgem"]
		+ "</b><br>"
		+ "Anzahl Gebäude Typ I:"
		+ "<br>"
		+ feature.properties["I"]
		+ "<br>"
		+ "Anzahl Gebäude Typ II:"
		+ "<br>"
		+ feature.properties["II"]
		+ "<br>"
		+ "Anzahl Gebäude Typ III:"
		+ "<br>"
		+ feature.properties["III"] 
		+ "<br>"
		+ "Anzahl Gebäude insgesamt:"
		+ "<br>"
		+ feature.properties["insgesamt"]
	layer.bindPopup(content);
	
}


