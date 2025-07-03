// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentaion zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/spielplaetze.geojson", function(data) {
	var mapHTW = L.geoJSON(data, {
	style: {},
	pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: iconPlay});
	},
		onEachFeature: funktionenStandorte,
	}).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconPlay = L.icon({
	iconUrl: 'img/playground-svgrepo-com.svg',
	iconSize: [16],
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenStandorte(feature, layer){
	var titel;



	var content = 	"<b>"
					+ "Spielplatz"
					+ "</b><br>" 
					+ feature.properties["planname"];

	layer.bindPopup(content);
}

