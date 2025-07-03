// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path


/*
$.getJSON("maps/Jahrgang-2022.geojson", function (data) {
	var mapBezirke = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#7b95ca",
				weight: 4,
				fillColor: "#2F4A80",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionenBezirke
	}).addTo(map);
});
*/

$.getJSON("maps/bezirke.geojson", function (data) {
	var mapBezirke = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#5d88ff",
				weight: 5,
				fillColor: "#c6b0ff",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionenBezirke
	}).addTo(map);
	
});

// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten
function funktionenBezirke(feature, layer) {
	layer.setStyle({
		fillOpacity: feature.properties["points_count"] / 5
	});

	var content = "<b>" + feature.properties["namgem"] + "</b>";

	layer.bindPopup(content);
}

// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/Gr-nanlagen.geojson", function (data) {
	var mapGruenanlagen = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#8dfa9a",
				weight: 0.4,
				fillColor: "#099a84",
				fillOpacity: 1
			};
		},
	onEachFeature: funktionenGruenanlagen
	}).addTo(map);
	
	toggleLayer(mapGruenanlagen, "#CheckboxGruenanlagen");
	map.addLayer(mapGruenanlagen)

});



// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten
function funktionenGruenanlagen(feature, layer) {
	var content = "<b>" + feature.properties["bezirkname"] + "</b><br>" + feature.properties["namenr"];

	layer.bindPopup(content);
}
// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

/*
$.getJSON("maps/Verkehrsbedingte-Luftbelastung-Im-Stra-enraum-2020-Und-2025-Umweltatlas-.geojson", function (data) {
	var mapBezirke = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#f6b556",
				weight: 0.4,
				fillColor: "#eedf37",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionenBezirke
	}).addTo(map);
});
*/

$.getJSON("maps/toiletten.geojson", function (data) {
	var maptoiletten = L.geoJSON(data, {
		style: {},
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, { icon: iconSwimpants });
		},
		onEachFeature: funktionentoiletten
	}).addTo(map);
	
	toggleLayer(maptoiletten, "#Checkboxtoiletten");
	map.addLayer(maptoiletten)
});

// Einbinden des Piktogramm als Icon
var iconSwimpants = L.icon({
	iconUrl: "img/klo.png",
	iconSize: [15]
});

function funktionentoiletten(feature, layer) {
	var content =
		"<b>" +
		feature.properties["betreiber"] +
		"</b><br>" +
		"Barrierefrei: " +
		feature.properties["barrierefrei"] +
		"<br>" +
		"Wo ist es? " +
		feature.properties["standort"];

	layer.bindPopup(content);
}



$.getJSON("maps/Spielplatz.geojson", function (data) {
	var mapSpielplatz = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#fd7979",
				weight: 5,
				fillColor: "#fd7979",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionenSpielplatz
	}).addTo(map);
	
	toggleLayer(mapSpielplatz, "#CheckboxSpielplatz");
	map.addLayer(mapSpielplatz)
});


function funktionenSpielplatz(feature, layer) {
	var content =
		"<b>" +
		feature.properties["namenr"] +
		
		"<br>" +
		"Wo ist es? " +
		feature.properties["namenr"];

	layer.bindPopup(content);
}