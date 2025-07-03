// Map Container anbinden und konfigurieren
// Mehr Info: https://leafletjs.com/reference.html#map-example

var map = L.map("map-container", {
	center: [52.52, 13.42],
	zoom: 10,
	minZoom: 9,
	maxZoom: 12
});

map.zoomControl.setPosition("bottomleft");
/*
//
var map = L.map("map-container").setView([52.4867, 13.4898], 10); // Koordinaten für Berlin

// Füge OpenStreetMap Tile-Layer hinzu
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//
L.marker([52.4867, 13.4898]).addTo(map).bindPopup("<b>Spielplatz Berlin</b><br>Beschreibung hier.").openPopup();
*/