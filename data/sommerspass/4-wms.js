// Einfügen eines Tile-Layers (rasterbasierte Karten)

var wmsLayer = 
 L.tileLayer('./maps/sozialstatus/{z}/{x}/{y}.png', {
	maxZoom: 12,
	attribution: ''
}).addTo(map);


wmsLayer.bringToFront();