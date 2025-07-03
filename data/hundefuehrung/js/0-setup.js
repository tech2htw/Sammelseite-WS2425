// Map Container anbinden und konfigurieren
// Mehr Info: https://leafletjs.com/reference.html#map-example
// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path



var map = L.map("map-container", { 
  center: [52.52, 13.42],
  zoom: 10,
  minZoom: 10,
  maxZoom: 15,
});

map.zoomControl.setPosition("bottomleft");

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

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	minZoom: 8
}).addTo(map);


$.getJSON("maps/Bezirksgrenzen.geojson", function (data) {
	var mapBezirke = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#000000",
				weight: 0.4,
				fillColor: "rgba(75, 250, 46, 0)",
				fillOpacity: 1
			};
		},
		onEachFeature: funktionenBezirke
	}).addTo(map);

});

// Hier eine bei der Einbindung erwähnte Funktion die wir onEachFeature, also für jedes eingetragene Feature (also jeden Bezirk) ausführen möchten
function funktionenBezirke(feature, layer) {
	layer.setStyle({
		//fillOpacity: feature.properties["points_count"] / 5
	});
}
