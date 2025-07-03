// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentaion zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/Hochschulen.geojson", function(data) {
	var mapHTW = L.geoJSON(data, {
	style: {},
	pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: iconCircle_orange});
	},
	onEachFeature: funktionenStandorte,
	}).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconCircle_orange = L.icon({
	iconUrl: 'img/Circle_orange.svg',
	iconSize: [10],
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenStandorte(feature, layer){
	var titel;

	if(feature.properties["bezgfk"]){
		titel = feature.properties["bezgfk"] 
	} else {
		titel = "Hochschulen";
	}

	var content = 	"<b>"
					+ titel
					+ "</b><br>" 
					+ feature.properties["namlag"];

	layer.bindPopup(content);
}

