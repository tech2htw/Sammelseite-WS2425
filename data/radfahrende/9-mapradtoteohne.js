// Map 2 Standorte hinzufügen
$.getJSON("maps/mapradtoteohne.geojson", function(data) {
	var LKW = L.geoJSON(data, {
	style: {		
	},
	pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: iconRAD});
	},
	onEachFeature: popups,
	}).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconRAD = L.icon({
	iconUrl: 'img/bike2.svg',
	iconSize: [40],
});
