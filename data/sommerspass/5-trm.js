// Map 4 Trödelmarkt Standorte hinzufügen
$.getJSON("maps/troedelmarkt-standorte.geojson", function(data) {
  var mapTRM = L.geoJSON(data, {
  style: {		
  },
  pointToLayer: function(feature,latlng){
    return L.marker(latlng,{icon: iconTRM});
  }, 
  onEachFeature: funktionenTRM,
  }).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconTRM = L.icon({
  iconUrl: 'img/trmMarker.svg',
  iconSize: [30],
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenTRM(feature, layer){
  var title = feature.properties["title"];
  var ortsteil = feature.properties.data["strasse"] +  '</br> ' + feature.properties.data["plz"] + ' Berlin';

  var content = 	"<b>"
          + title 
          + "</b><br>"
          + ortsteil


  layer.bindPopup(content, {className: 'eigenerStil'});
};



