// Map 2 HTW Standorte hinzufügen
$.getJSON("maps/baeume.geojson", function(data) {
  var mapHTW = L.geoJSON(data, {
    style: {
      fillColor: "#e20074",
      fillOpacity: 0,
      color: "#333",
      weight: 0

    },
    pointToLayer: function(feature, latlng) {
      return L.marker(latlng, { icon: iconHTW });
    },
    onEachFeature: funktionenBaeume,
  }).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconHTW = L.icon({
  iconUrl: 'img/Ahorn.svg',
  iconSize: [40],
});



// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function funktionenBaeume(feature, layer) {
  var bezirk = feature.properties["Gemeinde_name"];
  var ahorn = feature.properties["Ahorn"];
  var linde = feature.properties["Linde"];
  var eiche = feature.properties["Eiche"];
  var plantane = feature.properties["Plantane"];
  var kastanie = feature.properties["Kastanie"];

  var content = "<b>"
    + bezirk
    + "</b><br>"
    + "Ahorn: "
    + ahorn
    + "<br>Linden: "
    + linde
    + "</b><br>"
    + "Eichen: "
    + eiche
    + "</b><br>"
    + "Plantanen: "
    + plantane
    + "</b><br>"
    + "Kastanien: "
    + kastanie

  layer.bindPopup(content, { className: 'eigenerStil' });
};


// Einbinden der Piktogramme als Icon
var iconAhorn = L.icon({
  iconUrl: 'img/Ahorn.svg',
  iconSize: [40],
});

var iconLinde = L.icon({
  iconUrl: 'img/Linde.svg',
  iconSize: [40],
});

var iconEiche = L.icon({
  iconUrl: 'img/Eiche.svg',
  iconSize: [40],
});

var iconPlantane = L.icon({
  iconUrl: 'img/Plantane.svg',
  iconSize: [40],
});

// Reinickendorf
L.marker([52.6160, 13.2879], { icon: iconAhorn }).addTo(map);

// Charlottenburg Wilmersdorf
L.marker([52.5211, 13.2758], { icon: iconLinde }).addTo(map);

// Steglitz-Zehlendorf
L.marker([52.4581, 13.2527], { icon: iconLinde }).addTo(map);

// Spandau
L.marker([52.5565, 13.1833], { icon: iconEiche }).addTo(map);

// Tempelhof-Schöneberg
L.marker([52.4455, 13.3861], { icon: iconLinde }).addTo(map);

// Neukölln
L.marker([52.4869, 13.4441], { icon: iconLinde }).addTo(map);

// Treptow-Köpenick
L.marker([52.4313, 13.6168], { icon: iconLinde }).addTo(map);

// Pankow
L.marker([52.6180, 13.4397], { icon: iconPlantane }).addTo(map);

// Lichtenberg
L.marker([52.5645, 13.5134], { icon: iconAhorn }).addTo(map);

// Marzahn-Hellersdorf
L.marker([52.5318, 13.5783], { icon: iconAhorn }).addTo(map);

// Mitte
L.marker([52.5465, 13.3616], { icon: iconAhorn }).addTo(map);

// Friedrichshain-Kreuzberg
L.marker([52.5512, 13.4408], { icon: iconLinde }).addTo(map);