// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
$.getJSON("maps/bezirke.geojson", function(data) {
	var mapBezirke = L.geoJSON(data, {
		style: function(feature) {
			return {
				color: '#678',
				weight: 2,
				lineJoin: 'round',
				fillOpacity: 0,
				interactive: false
			};
		}
	}).addTo(map);
});
