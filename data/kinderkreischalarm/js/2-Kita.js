// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentaion zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/Kita.geojson", function(data) {
	var mapHTW = L.geoJSON(data, {
	style: function (feature) {
			return {
				color: "rgba(159, 8, 77, 0.87)",
				weight: 0.5,
				fillColor: "rgba(171, 11, 99, 0.22)",
				fillOpacity: 100
			};
		},
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

	if(feature.properties["nam"]){
		titel = feature.properties["nam"] 
	} else {
		titel = "Kindergärten";
	}

	var content = 	"<b>"
					+ titel
					+ "</b><br>" 
					+ feature.properties["namlag"];

	layer.bindPopup(content);
}

