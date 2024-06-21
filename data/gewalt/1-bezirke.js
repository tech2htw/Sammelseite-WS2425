// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
$.getJSON("maps/bezirke.geojson", function(data) {
	var mapBezirke = L.geoJSON(data, {
		style: function(feature) {
			return {
				color: '#333',
				weight: 1,
				lineJoin: 'round',
				fillColor: '#e54343',
				fillOpacity: 0.4,
				interactive: true
			};
		},
		onEachFeature: funktionenBezirke,

	}).addTo(map);
});

function funktionenBezirke(feature, layer) {
	// Erstmal die Popups mit Inhalt füllen
	var bezirkName = feature.properties["Gemeinde_name"];
	var anzahlNotunterkuenfte = feature.properties["Anzahl Notunterkünfte"];

	var content =
			"<b>"
		+ bezirkName
		+ "</b><br>"
		+ "Anzahl Notunterkünfte: "
		+ anzahlNotunterkuenfte
		+ " "

	layer.bindPopup(content);
};