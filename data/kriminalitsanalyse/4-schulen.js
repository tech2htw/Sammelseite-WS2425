
$.getJSON("maps/schulen2.geojson", function(data) {
  var mapSchulen = L.geoJSON(data, {
  style: {		
  },
  pointToLayer: function(feature,latlng){
    return L.marker(latlng,{icon: iconHTW});
  },
  onEachFeature: funktionenHTW,
  }).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconHTW = L.icon({
  iconUrl: 'img/point1.svg',
  iconSize: [4.5],
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenHTW(feature, layer){
  var nameSchule = feature.properties["name"];
  var schulart = feature.properties["schulart"];

  var content = 	"<b>"
          + nameSchule 
          + "</b><br>"
          + schulart


  layer.bindPopup(content, {className: 'eigenerStil'});
};