// Map Container anbinden und konfigurieren
// Mehr Info: https://leafletjs.com/reference.html#map-example

var map = L.map('map-container', { 
	center: [52.52, 13.42], 
	zoom: 10,
	minZoom: 9,
	maxZoom: 12
});

map.zoomControl.setPosition('bottomleft');
