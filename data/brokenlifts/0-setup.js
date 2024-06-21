// Map Container anbinden und konfigurieren
var map = L.map('map-container', { 
	center: [52.51, 13.45], 
	zoom: 10 
});

map.zoomControl.setPosition('bottomright');
map.attributionControl.remove('');

// https://tile.openstreetmap.org/{z}/{x}/{y}.png
// https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png
// https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png
// https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}

L.tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {
	minZoom: 9,
	maxZoom: 16,
	opacity: 0.6
}).addTo(map);

L.mask('maps/landesgrenzen.geojson', {
	color: '#666',
	weight: 2,
	fillOpacity: 0.4
}).addTo(map);
