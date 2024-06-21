// Map 2 Standorte hinzufügen
$.getJSON("maps/mapradtotepkw.geojson", function(data) {
	var LKW = L.geoJSON(data, {
	style: {		
	},
	pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: iconCar});
	},
	onEachFeature: popups,
	}).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconCar = L.icon({
	iconUrl: 'img/car2.svg',
	iconSize: [40],
});
