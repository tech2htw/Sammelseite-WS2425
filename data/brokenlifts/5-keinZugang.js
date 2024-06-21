// Map "KeinZugang" Standorte hinzufügen
$.getJSON("maps/keinZugang.geojson", function(data) {
	var mapKeinZugang = L.geoJSON(data, {
		style: {
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, { icon: iconKeinZugang });
		},
		onEachFeature: funktionenKeinZugang,
	}).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconKeinZugang = L.icon({
	iconUrl: 'img/Aufzug_keinZugang.svg',
	iconSize: [25],
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenKeinZugang(feature, layer) {
	var bahnhof = feature.properties["Bahnhof"];
	var bemerkung = feature.properties["Bemerkung"];
	var aufzuegeGesamt = feature.properties["Aufzüge gesamt"];
	var aufzuegeDefekt = feature.properties["Aufzüge defekt"];

	var content = "<b>"
		+ bahnhof
		+ "</b><br>"
		+ "<br>Aufzüge gesamt: "
		+ aufzuegeGesamt
		+ "<br>Aufzüge defekt: "
		+ aufzuegeDefekt
		+ "<br>Bemerkung: "
		+ bemerkung


	layer.bindPopup(content, { className: 'eigenerStil' });
};

