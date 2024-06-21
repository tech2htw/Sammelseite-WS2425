// Map 2 HTW Standorte hinzufügen
$.getJSON("maps/saunen.geojson", function(data) {
	var mapHTW = L.geoJSON(data, {
	style: {		
	},
	pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: iconSauna});
	},
	onEachFeature: funktionenSauna,
	}).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconSauna = L.icon({
	iconUrl: 'img/Standort.svg',
	iconSize: [30]
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenSauna(feature, layer){
	var name = feature.properties["Name"];
  var adresse = feature.properties["Adresse"];
  var webseite = feature.properties["Webseite"];

	var content = 	"<b>"
					+ name 
					+ "</b><br>"
					+ adresse
          + "<br><br><a href='"
          + webseite
          + "'>"
          + webseite
          + "</a>"


	layer.bindPopup(content, {className: 'eigenerStil'});
};

