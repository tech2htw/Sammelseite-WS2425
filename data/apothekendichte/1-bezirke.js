// Einrichtung der Map 3 mit den LOR-Räumen

// Eine leere Variable erstellen, mithilfe derer später der flächengrößte Bezirk ermittelt wird, um damit die dynamische Färbung der LOR-Räume zu ermöglichen

$.getJSON("maps/bezirke.geojson", function(data) {

	var mapBezirke = L.geoJSON(data, {
		style: function(feature) {
			return {
				color: '#000078',
				weight: 1,
				lineJoin: 'round',
				fillColor: '#db0044',
			};
		},
		onEachFeature: popupsApo,

	}).addTo(map);

});


function popupsApo(feature, layer) {

	// Erstmal die Popups mit Inhalt füllen
	var nameGemeinde = feature.properties["Gemeinde_name"];
	var apotheken = feature.properties["Apotheken"];
	var senioren = feature.properties["Senioren_pro_Apo"];
	var content = "<p>"
    + "<div class='Gemeinde'>"
		+ nameGemeinde
    + "</div>"
		+ "<br>"
    + apotheken
		+ " Apotheken"
		+ "<br><br>"
    + "<div class='Senioren'>"
    + senioren
    + "</div>"
    + "<br>"
		+ "Senior:innen pro Apotheke"


	layer.bindPopup(content, { className: 'PopupContent' });

  
	// Hier wird der Style angepasst, in dem Falle wird mittels Dreisatz ermittelt wie sich die Größe von diesem exakten Kiez zum größten flächenmäßig verhält und ist demensprechend transparent
  var color = feature.properties["color_index"];
  
	layer.setStyle({
		fillOpacity: color,
	});

  
};