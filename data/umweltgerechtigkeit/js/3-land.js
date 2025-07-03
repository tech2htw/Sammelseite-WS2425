// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/land.geojson", function (data) {
	var mapLand = L.geoJSON(data, {
		//style: function (feature) {
			//return {
				//color: "#ffb3f4",
				//weight: 4,
				//fillOpacity: 0,
			//};
		},
	}).addTo(map);

	layer.setStyle({
    fillColor: "#ffb3f4",
    color: "#ffb3f4",
    weight: 6
    
  });






