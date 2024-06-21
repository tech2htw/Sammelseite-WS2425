// Map 2 Standorte hinzufügen
$.getJSON("maps/mapradtote.geojson", function(data) {
	var LKW = L.geoJSON(data, {
	style: {		
	},
	pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: iconBIKE});
	},
	onEachFeature: popups,
	}).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconBIKE = L.icon({
	iconUrl: 'img/bike.svg',
	iconSize: [40],
});

