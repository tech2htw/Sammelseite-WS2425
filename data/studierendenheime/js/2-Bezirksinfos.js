// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentaion zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/Bezirksinfo.geojson", function(data) {
	var mapHTW = L.geoJSON(data, {
	style: {},
	pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: iconSwimpants});
	},
	onEachFeature: funktionenStandorte,
	}).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconSwimpants = L.icon({
	iconUrl: 'img/swimpants.svg',
	iconSize: [32],
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenStandorte(feature, layer){
	var titel;

	if(feature.properties["namgem"]){
		titel = feature.properties["namgem"] 
	} else {
		titel = "Bezirksinfo ";
	}

	var content = 	"<b>"
					+ titel
					+ "</b><br>" 
					+ feature.properties["namlag"];

	layer.bindPopup(content);
}

