
$.getJSON("maps/Krankenhauser-Mit-Bezirk.geojson", function (data) {
  var mapKrankenhauser = L.geoJSON(data, {
    style: {}, // Опционально: можно задать стили для данных
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { icon: iconSwimpants });
    },
    onEachFeature: funktionenStandorte, 
  }).addTo(map);
});


var iconSwimpants = L.icon({
  iconUrl: "img/hospital.svg", 
  iconSize: [10], 
});
function funktionenStandorte(feature, layer) {
  var anzahl;

  
  if (feature.properties["betten"]) {
    anzahl = feature.properties["betten"];
  } else if (feature.properties["betten_insgesamt"]) {
    anzahl = feature.properties["betten_insgesamt"];
  } else {
    anzahl = 0; // Если данных о кроватях нет, устанавливаем значение 0
  }

  
  var krankenhausName = feature.properties["namlag"] 
    ? feature.properties["namlag"] 
    : "Unbekanntes Krankenhaus";

  
  var content = "<b>" + anzahl + " Betten</b><br>" + krankenhausName;

 
  layer.bindPopup(content);

  
  hospitalMarkers.push(layer);

  
  if (isNaN(anzahlBetten[feature.properties["namgem"]])) {
    anzahlBetten[feature.properties["namgem"]] = 0;
  }

  var e = anzahlBetten[feature.properties["namgem"]];
  var summe = anzahl + e;
  anzahlBetten[feature.properties["namgem"]] = summe;
}
