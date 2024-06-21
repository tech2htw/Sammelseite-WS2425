document.addEventListener("DOMContentLoaded", function() {
  var mapApo = null;


  var iconApo = L.icon({
    iconUrl: 'img/apotheken.svg',
    iconSize: [10],
    interactive: false
  });


  document.getElementById("loadApoCheckbox").addEventListener("change", function() {
    var isChecked = this.checked;

    if (isChecked) {
      $.getJSON("maps/apothekenstandorte.geojson", function(data) {
        mapApo = L.geoJSON(data, {
          style: {},
          pointToLayer: function(feature, latlng) {
            return L.marker(latlng, {icon: iconApo});
          }
        }).addTo(map);
      });
    } else {
      if (mapApo !== null) {
        mapApo.clearLayers();
        mapApo = null;
      }
    }
  });
});