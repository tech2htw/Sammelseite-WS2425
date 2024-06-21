// Map Container anbinden und konfigurieren
var map = L.map('map-container', { 
	center: [52.51, 13.45], 
	zoom: 11 
});

map.zoomControl.setPosition('bottomright');
map.attributionControl.remove('');