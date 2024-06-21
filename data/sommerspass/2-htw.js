// Map 2 HTW Standorte hinzufügen
$.getJSON("maps/htw-standorte.geojson", function(data) {
	var mapHTW = L.geoJSON(data, {
	style: {		
	},
	pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: iconHTW});
	},
	onEachFeature: funktionenHTW,
	}).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconHTW = L.icon({
	iconUrl: 'img/FB5_KD_kl.svg',
	iconSize: [40],
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenHTW(feature, layer){
	var standort = feature.properties["Standort"];
	var ortsteil = feature.properties["Ortsteil"];

	var content = 	"<b>"
					+ standort 
					+ "</b><br>"
					+ ortsteil


	layer.bindPopup(content, {className: 'eigenerStil'});
};

