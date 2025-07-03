// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentaion zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/jfe.geojson", function (data) {
	var mapHTW = L.geoJSON(data, {
		style: {},
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, { icon: iconSwimpants });
		},
		onEachFeature: funktionenJfe
	}).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconSwimpants = L.icon({
	iconUrl: "img/jfe-bild.png",
	iconSize: [15]
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenJfe(feature, layer) {
	var titel;

	if (feature.properties["nam"]) {
		titel = feature.properties["nam"];
	} else {
		titel = "Jugendfreizeiteinrichtung";
	}

	var content = "<b>" + titel + "</b><br>" + feature.properties["e_name"];

	layer.bindPopup(content);
}
