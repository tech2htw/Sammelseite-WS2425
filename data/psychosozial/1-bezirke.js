// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte

var maxprozent = 0;
var maxPSHA = 0;
var maxMittelwert = 0;

$.getJSON("maps/bezirke_14_25.geojson", function(data) {

    var arr = data.features;

    for (var i=0 ; i<arr.length ; i++) {
      if (arr[i].properties["prozent"] > maxprozent){
        maxprozent = arr[i].properties["prozent"];
      } }
  
    for (var i=0 ; i<arr.length ; i++) {
      if (arr[i].properties["Mittelwert"] > maxMittelwert){
        maxMittelwert = arr[i].properties["Mittelwert"];
      } }
  
    for (var i=0 ; i<arr.length ; i++) {
      if (arr[i].properties["PSHA"] > maxPSHA){
        maxPSHA = arr[i].properties["PSHA"];
      } };
  
	var mapBezirke = L.geoJSON(data, {
		style: function(feature) {
			return {
				color: '#6966ff',
				weight: 1,
				lineJoin: 'round',
				fillOpacity: 1,
				interactive: true,
			};
		}, 
    onEachFeature: funktionenBezirke,
	}).addTo(map);

    mapBezirke.bringToBack();
});

  // Hier wieder eine bei der Einbindung erwähnte Funktion die wir onEachFeature, als für jedes eingetragene Feature (also jeden Kiez) ausführen möchten 
  function funktionenBezirke(feature, layer){

    // Erstmal die Popups mit Inhalt füllen
    var bezirkName = feature.properties["Gemeinde_name"];
    var bezirkprozent = feature.properties["prozent"];
    var bezirkPSHA = feature.properties["PSHA"];
    var content = 	"<b>" 
      + "<div class='bezirkName'>"
      + bezirkName 
      + "</div>"   

      +"</b><br>"
      + "<div class='Text'>"
      +"Kieztaten </div>"
      
            + "<div class='prozent'>"
            + bezirkprozent
            +  "% von Berlin</div>"
     + "<div class='Text'>"
      +"Psychosoziale Hilfsangebote</div>"
      
            + "<div class='PSHA'>"
            + bezirkPSHA
            + "% von Berlin</div>"

    layer.bindPopup(content);

// Hier wird der Style angepasst, in dem Falle wird mittels Dreisatz ermittelt wie sich die Größe von diesem exakten Kiez zum größten flächenmäßig verhält und ist demensprechend transparent
   layer.setStyle({
   fillOpacity: feature.properties["Mittelwert"] /  maxMittelwert,
   });
  };



