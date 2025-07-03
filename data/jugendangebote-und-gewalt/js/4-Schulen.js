$.getJSON("maps/Schulen.geojson", function(data) {
	var mapHTW = L.geoJSON(data, {
	style: {},
	pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: iconKreisGelb});
	},
	onEachFeature: funktionenSchulen,
	}).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconKreisGelb = L.icon({
	iconUrl: 'img/Kreis Gelb.png',
	iconSize: [8],
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenSchulen(feature, layer){
	var titel;

	if(feature.properties["nam"]){
		titel = feature.properties["nam"] 
	} else {
		titel = "Schule ";
	}

	var content = 	"<b>"
					+ titel
					+ "</b><br>" 
					+ feature.properties["namlag"];

	layer.bindPopup(content);
}
