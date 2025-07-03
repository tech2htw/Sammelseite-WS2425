// Map Container anbinden und konfigurieren
// Mehr Info: https://leafletjs.com/reference.html#map-example

const map = L.map('map', { 
	center: [52.5003, 13.3939], 
	zoom: 10,
	minZoom: 9,
	maxZoom: 13
});

map.zoomControl.setPosition('topleft');