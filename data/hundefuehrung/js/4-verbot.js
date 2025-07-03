// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path
$.getJSON("maps/Bade.geojson", function (data) {
	var map = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#950606",
				weight: 1,
				fillColor: "#f00",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionen
	}).addTo(map);

	toggleLayer(map, "#CheckboxVerbot");
});
// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionen(feature, layer) {
  var content = 
	  			"<b>Naturschutzgebiet" 
  				+ "</b><br>"
  				+ feature.properties["gebietsname"]
  				+ "<br><br>"
  				+ feature.properties["bezeichnung"]

  layer.bindPopup(content);
}

$.getJSON("maps/Spielplaetze.geojson", function (data) {
	var map = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#950606",
				weight: 1,
				fillColor: "#f00",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionen
	}).addTo(map);

	toggleLayer(map, "#CheckboxVerbot");
	
});
// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenspielplaetze(feature, layer) {
  var content = 
	  			"<b>Spielplatz" 
  				+ "</b><br>"
  				+ feature.properties["gebietsname"]
  				+ "<br><br>"
  				+ feature.properties["bezeichnung"]

  layer.bindPopup(content);
}


$.getJSON("maps/Naturschutzgebiet.geojson", function (data) {
	var mapNSG = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#950606",
				weight: 1,
				fillColor: "#db2121",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionenNSG
	}).addTo(map);

	toggleLayer(mapNSG, "#CheckboxVerbot");
	mapNSG.bringToFront();
});
// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenNSG(feature, layer) {
  var content = 
	  			"<b>Naturschutzgebiet" 
  				+ "</b><br>"
  				+ feature.properties["gebietsname"]
  				+ "<br><br>"
  				+ feature.properties["bezeichnung"]

  layer.bindPopup(content);
}

