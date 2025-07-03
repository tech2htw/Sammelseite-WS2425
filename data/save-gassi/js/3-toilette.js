// Einbinden des Piktogramm als Icon
var iconKlo = L.icon({
  iconUrl: "img/klo.svg",
  iconSize: [10],
});

// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentaion zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/-ffentliche-Toiletten.geojson", function (data) {
  var mapToi = L.geoJSON(data, {
    style: {},
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { icon: iconKlo });
    },
    onEachFeature: funktionenToi,
  }).addTo(map);

  toggleLayer(mapToi, "#CheckboxToi");
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
  function funktionenToi(feature, layer){
	var content = 	"<b>"
					+ feature.properties["betreiber"]
					+ "</b><br>"
					+ "Barrierefrei: "
					+ feature.properties["barrierefrei"]
					+ "<br>"
					+ "Wo ist es? "
					+ feature.properties["standort"]

	layer.bindPopup(content);
}

