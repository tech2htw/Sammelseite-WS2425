// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentaion zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/Wohnen.geojson", function(data) {
	var mapHTW = L.geoJSON(data, {
	style: function (feature) {
			return {
				color: "rgba(208, 203, 205, 0.22)",
				weight: 0.1,
				fillColor: "rgba(141, 127, 135, 0.22)",
				fillOpacity: 1
			};
		},
	pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: iconSwimpants});
	},
	// onEachFeature: funktionenStandorte,
	}).addTo(map);
});


// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenStandorte(feature, layer){
	var titel;

	if(feature.properties["nam"]){
		titel = feature.properties["nam"] 
	} else {
		titel = "Wohngebäude";
	}

	var content = 	"<b>"
					+ titel
					+ "</b><br>" 
					+ feature.properties["namlag"];

	// layer.bindPopup(content);
}

