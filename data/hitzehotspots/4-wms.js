// Einfügen eines Tile-Layers (rasterbasierte Karten)

var wmsLayer = 
 L.tileLayer('./maps/therm/{z}/{x}/{y}.png', {
	maxZoom: 13,
	attribution: ''
}).addTo(map);


wmsLayer.bringToFront();