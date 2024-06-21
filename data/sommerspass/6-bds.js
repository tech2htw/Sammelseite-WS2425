
$.getJSON("maps/badestellen.geojson", function(data) {
  var mapBDS = L.geoJSON(data, {
  style: {        
  },
  pointToLayer: function(feature,latlng){
    return L.marker(latlng,{icon: iconBDS});
  },
  onEachFeature: funktionenBDS,
  }).addTo(map);
});


// Einbinden des Piktogramm als Icon
var iconBDS = L.icon({
  iconUrl: 'img/bdsMarker.svg',
  iconSize: [30],
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenBDS(feature, layer){
  var title = feature.properties["title"];
  var ortsteil = feature.properties.data["badname"] +  '</br> ' + feature.properties.data["bezirk"];

  var content =   "<b>"
          + title 
          + "</b><br>"
          + ortsteil


  layer.bindPopup(content, {className: 'eigenerStil'});
};