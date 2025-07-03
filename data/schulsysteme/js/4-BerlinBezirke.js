// Erstellen einer Leaflet GeoJSON-Schicht und Hinzufügen zur Karte
// Dokumentation zum Styling der GeoJSON-Daten: https://leafletjs.com/reference.html#path


$.getJSON("maps/BasicBezirke.geojson", function (data) {
	var mapBerlinBezirke = L.geoJSON(data, {
		style: function (feature) {
			return {
				color: "#b685c1",
				weight: 1,
				fillColor: "#d6d6d6",
				fillOpacity: 0.1
			};
		},
		onEachFeature: funktionenBezirke
	}).addTo(map);

	toggleLayer(mapBerlinBezirke, "#CheckboxBerlinBezirke");

	
	setTimeout(delay, 1000);
	
	function delay(){
		map.addLayer(mapBerlinBezirke);
		mapBerlinBezirke.bringToFront();
	}
	
});

function funktionenBezirke(feature, layer) {
  var titel;
  var privateSchu = feature.properties["private"];
  var oeffenSchu = feature.properties["oeff"];

  if (feature.properties["namgem"]) {
    titel = feature.properties["namgem"];
  } else {
    titel = "blabal";
  }

  var content = `
    <div class='popup-container'>
      <div class='left'>
        <div class='privateDaten'>${privateSchu}</div>
        <div class='privatetext'>Private</div>
      </div>
      <div class='separator'></div>
      <div class='right'>
        <div class='oeffDaten'>${oeffenSchu}</div>
        <div class='oefftext'>Öffentliche</div>
      </div>
    </div>
  `;

  layer.bindPopup(content, { 
    className: 'PopupContent',
    pane: 'popupPane' 
  });
  
  layer.bindTooltip(titel, {
    permanent: true,
    direction: 'center',
    className: 'custom-tooltip',
    pane: 'markerPane'
  });
}