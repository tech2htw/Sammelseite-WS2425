// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
$.getJSON("maps/Bezirke_final_final.geojson", function(data) {
	var mapBezirke = L.geoJSON(data, {
		style: function(feature) {
			return {
				color: '#000',
				weight: 1,
				lineJoin: 'round',
				fillColor: '#00008B'
        
			};
		},
    onEachFeature: FBezirke,

  
	}).addTo(map);
});

function FBezirke(feature, layer){
// Erstmal die Popups mit Inhalt füllen
var BezirkName = feature.properties["Gemeinde_name"];
var Geburten = feature.properties["Geburtenrate:"];
var Kitaplatz = feature.properties["Kitaplatz"]
  var content = 	"<b>"
        + BezirkName 
        + "</b><br>"
        + "Neugeborene auf 1000 Menschen: " 
        + Geburten
        +"<br>"
        +"<br>"
        +"Kitaplätze auf 1000 Kinder (0-6): "
        + Kitaplatz
        

layer.bindPopup(content, {className: 'eigenerStil'});

var color=feature.properties["color_opacity"];
  layer.setStyle({
    fillOpacity: color,
  })

};