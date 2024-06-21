// Map 2 Standorte hinzufügen
$.getJSON("maps/mapradtotelkw.geojson", function(data) {
	var LKW = L.geoJSON(data, {
		style: {
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, { icon: iconLKW });
		},
		onEachFeature: popups,
	}).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconLKW = L.icon({
	iconUrl: 'img/lkw2.svg',
	iconSize: [40],
});


