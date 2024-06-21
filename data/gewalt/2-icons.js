// Map 2 HTW Standorte hinzufügen
$.getJSON("maps/icons.geojson", function(data) {
	var mapHTW = L.geoJSON(data, {
		style: {
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, { icon: iconHand });
		},
	}).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconHand = L.icon({
	iconUrl: 'img/iconHand.png',
	iconSize: [24],
});
