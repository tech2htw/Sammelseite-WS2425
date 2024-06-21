// Map Container anbinden und konfigurieren

var map = L.map('map-container', 
{ 
  center: [52.51, 13.45], 
  zoom: 10 
});

map.zoomControl.setPosition('bottomright');
map.attributionControl.remove('');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  minZoom: 8,
}).addTo(map);