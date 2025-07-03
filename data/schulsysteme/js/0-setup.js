// Map Container anbinden und konfigurieren
// Mehr Info: https://leafletjs.com/reference.html#map-example

var map = L.map("map-container", {
  center: [52.52, 13.42],
  zoom: 10,
  minZoom: 10,
  maxZoom: 14,
});

map.zoomControl.setPosition("bottomright");

function toggleLayer(layer, id) {
  map.removeLayer(layer);
  var checkbox = document.querySelector(id);
  checkbox.addEventListener("change", toggle);

  function toggle(e) {
    var state = e.target.checked;
    console.log(state);

    if (state == true) {
      map.addLayer(layer);
    } else {
      map.removeLayer(layer);
    }
  }
}

