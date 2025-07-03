// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentaion zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/friedhof-spezifisch.geojson", function(data) {
	var mapFriedhofSpez = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#260c0c",
				weight: 4,
				fillColor: "#260c0c",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionenStandorteSpez
	}).addTo(map);
	
	//mapFriedhofSpez.bringToFront();
});


// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenStandorteSpez(feature, layer){
	var titel;

	if(feature.properties["nam"]){
		titel = feature.properties["nam"] 
	} else {
		titel = "Friedhof ";
	}

	var content = 	"<b>"
					+ titel
					+ "</b><br>" 
					+ feature.properties["name"];

	layer.bindPopup(content);
}

