// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
$.getJSON("maps/bezirke.geojson", function(data) {
	var mapBezirke = L.geoJSON(data, {
		style: function(feature) {
			return {
				color: '#bbb',
				weight: 1,
				lineJoin: 'round',
				fillOpacity: 0.4,
				fillColor: '#ccc',
				interactive: false
			};
		}
	}).addTo(map);
});




// Das ist die Funktion für die für jeden Eintrag im Feature ausgeführt werden soll und da jeder Eintrag eine andere Farbe enthält funktioniert das dann auch
function colorBezirk(feature, layer) {
	layer.setStyle({
		fillColor: feature.properties["farbeBezirk"],
		fillOpacity: 0.5
	});
};


