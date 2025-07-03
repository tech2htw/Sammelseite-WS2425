// Map Container anbinden und konfigurieren
// Mehr Info: https://leafletjs.com/reference.html#map-example

var map = L.map('map-container', { 
	center: [52.52, 13.42], 
	zoom: 10,
	minZoom: 10,
	maxZoom: 20
});

map.zoomControl.setPosition('bottomleft');
