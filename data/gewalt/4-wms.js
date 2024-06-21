// Einfügen eines Tile-Layers (rasterbasierte Karten)

var wmsLayer = 
 L.tileLayer('./maps/gewaltgebiete/{z}/{x}/{y}.png', {
	maxZoom: 13,
	attribution: ''
}).addTo(map);


// wmsLayer.bringToBack();