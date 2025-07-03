$.getJSON("maps/Jugendfreizeiteinrichtungen.geojson", function(data) {
	var mapHTW = L.geoJSON(data, {
	style: {},
	pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: iconKreisOrange});
	},
	onEachFeature: funktionenJugendfreizeiteinrichtungen,
	}).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconKreisOrange = L.icon({
	iconUrl: 'img/Kreis Orange.png',
	iconSize: [8],
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenJugendfreizeiteinrichtungen(feature, layer){
	var titel;

	if(feature.properties["nam"]){
		titel = feature.properties["nam"] 
	} else {
		titel = "Jugendfreizeiteinrichtung ";
	}

	var content = 	"<b>"
					+ titel
					+ "</b><br>" 
					+ feature.properties["namlag"];

	layer.bindPopup(content);
}
