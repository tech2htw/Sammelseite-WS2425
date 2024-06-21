  // Einrichtung der Map 3 mit den LOR-Räumen

// Eine leere Variable erstellen, mithilfe derer später der flächengrößte Bezirk ermittelt wird, um damit die dynamische Färbung der LOR-Räume zu ermöglichen
var maxGroesse = 0;



$.getJSON("maps/bezirke.geojson", function(data) {
    // Maximum aus dem Array der Kiezflächengrößen herausfinden
    var arr = data.features;

    for (var i=0 ; i<arr.length ; i++) {
      if (arr[i].properties["Land_name"] > maxGroesse){
        maxGroesse = arr[i].properties["Land_name"];
      }
    };

    // Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
     var mapKieze = L.geoJSON(data, {
    style: function (feature) {
      return {
        color: '#aaa',
        lineJoin: 'round',
        weight: 0,
        fillColor: 'rgb(80,132,140)'
      };
    },
    onEachFeature: funktionenKieze,
  }).addTo(map);

  // Ähnlich wie in allen Grafikprogrammen, werden die Layer bzw. Ebenen angeordnet und dieser Layer macht eben als unterste Ebene am meisten Sinn
  mapKieze.bringToBack();
});

// Hier wieder eine bei der Einbindung erwähnte Funktion die wir onEachFeature, als für jedes eingetragene Feature (also jeden Kiez) ausführen möchten 
function funktionenKieze(feature, layer){

  // Erstmal die Popups mit Inhalt füllen
  var kiezName = feature.properties["Gemeinde_name"];
  var kiezSchuelerinnen = feature.properties["Schüler:innen"].toLocaleString("de-DE",{maximumFractionDigits: 0});
  var kiezRaube = feature.properties["Raube"].toLocaleString("de-DE", {maximumFractionDigits: 0});
  var kiezEinwohnerzahl = feature.properties["Einwohnerzahl"].toLocaleString("de-DE", {maximumFractionDigits: 0});
  var RaubeaufSchülerinnen = 
  feature.properties["Raube auf Schüler:innen"].fontsize(7);
 
  var content = 	"<b>"
          + kiezName 
    + "</b><br><br>"
    + "Raube auf die Gesamtzahl"
    + "<br>"
    +"der Schüler:innen: " 
     + "<b><br>"
    + RaubeaufSchülerinnen
          + "</b><br><br>"
          + "Raube: " 
          + kiezRaube
          + "<br>"
          + "Schüler:innen: " 
          + kiezSchuelerinnen
          + "<br>"
          + "Einwohner:innen: " 
          + kiezEinwohnerzahl
          + "<br>"
        
 
         

  layer.bindPopup(content);

  // Hier wird der Style angepasst, in dem Falle wird mittels Dreisatz ermittelt wie sich die Größe von diesem exakten Kiez zum größten flächenmäßig verhält und ist demensprechend transparent
  
  
  layer.setStyle({
    fillOpacity: feature.properties["Gemeinde_name"] / maxGroesse,
   
  });

};

