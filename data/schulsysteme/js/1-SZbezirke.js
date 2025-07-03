// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/sozialgebiete.geojson", function (data) {
	var mapSZBezirke = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#2F6DAC",
				weight: 4,
				fillColor: "#2d91f7",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionenSZBezirke
	}).addTo(map);

	toggleLayer(mapSZBezirke, "#CheckboxSZBezirke");
	map.addLayer(mapSZBezirke);
});

// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten
function funktionenSZBezirke(feature, layer) {
	// niedriger/sehr niedriger Statusindex
	if(feature.properties["kategorie"] == "niedriger/sehr niedriger Statusindex"){
		layer.setStyle({
			fillOpacity: 1,
			fillColor: "#3c006f",
			color: "#3c006f" // stroke
		});
	}
	// 	mittlerer Statusindex
	
	if(feature.properties["kategorie"] == "mittlerer Statusindex"){
		layer.setStyle({
			fillOpacity: 1,
			fillColor: "#6100b4",
			color: "#6100b4" // stroke
		});
	}
	// hoher Statusindex
	if(feature.properties["kategorie"] == "hoher Statusindex"){
		layer.setStyle({
			fillOpacity: 1,
			fillColor: "#8904fa",
			color: "#8904fa" 
		});
	}
	
	if(feature.properties["kategorie"] == "Other"){
		layer.setStyle({
			fillOpacity: 1,
			fillColor: "#383838",
			color: "#383838" 
		});
	}

}


