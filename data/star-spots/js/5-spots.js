// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentaion zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/spots.geojson", function(data) {
	var mapspots = L.geoJSON(data, {
	style: {},
	pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: iconSwimpants});
	},
	onEachFeature: funktionenspots,
	}).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconSwimpants = L.icon({
	iconUrl: 'img/home.svg',
	iconSize: [20],
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenspots(feature, layer){
	var content = 	"<b>"
					+ "STAR SPOTS"
					+ "</b><br>" 
					+ feature.properties["description"];

	layer.bindPopup(content);
}

