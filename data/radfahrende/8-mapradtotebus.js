// Map 2 Standorte hinzufügen
$.getJSON("maps/mapradtotebus.geojson", function(data) {
	var LKW = L.geoJSON(data, {
	style: {		
	},
	pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: iconBUS});
	},
	onEachFeature: popups,
	}).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconBUS = L.icon({
	iconUrl: 'img/bus2.svg',
	iconSize: [40],
});
