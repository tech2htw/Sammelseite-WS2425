// Einbinden des Piktogramm als Icon
var iconSwimpants = L.icon({
  iconUrl: "img/swimpants.svg",
  iconSize: [10],
});

// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentaion zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path

$.getJSON("maps/Apothekenstandorte.geojson", function (data) {
  var mapApo = L.geoJSON(data, {
    style: {},
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { icon: iconSwimpants });
    },
    onEachFeature: funktionenApo,
  }).addTo(map);

  toggleLayer(mapApo, "#CheckboxApo");
});

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
  function funktionenApo(feature, layer){
	var content = 	"<b>"
					+ feature.properties["aponame"]
					+ "</b><br>"
					+ "<br>"
					+ "Wo? "
					+ feature.properties["gc_strasse"]
                  + "<br>"
                    + feature.properties["gc_haus"]
    					+ ", "
                    + feature.properties["gc_plz"]
    	             + " Berlin"


	layer.bindPopup(content);
}

