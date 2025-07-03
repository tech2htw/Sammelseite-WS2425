// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/map_colored.geojson", function (data) {
	var mapBezirke = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "rgba(49, 66, 33, 0.47)",
				weight: 4,
				fillColor: "#70b32c",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionenBezirke
	}).addTo(map);
});

// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten
function funktionenBezirke(feature, layer) {

    var pro1000 = (anzahlBetten[feature.properties["namgem"]] / feature.properties["Einwohneranzahl"]) * 1000;
    pro1000 = pro1000.toFixed(2); 

    var content = 
        "<b>" 
        + feature.properties["namgem"] 
        + "</b><br>Anzahl Betten: "
        + anzahlBetten[feature.properties["namgem"]]
        + "<br>Anzahl Einwohner: "
        + feature.properties["Einwohneranzahl"]
        + "<br>pro 1000 Einwohner: "
        + pro1000;


    layer.bindPopup(content);

    layer.setStyle({
        fillOpacity: pro1000/10
    });

}



