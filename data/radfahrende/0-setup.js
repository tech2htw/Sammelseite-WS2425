// Map Container anbinden und konfigurieren
var map = L.map('map-container', { 
	center: [52.51, 13.45], 
	zoom: 10
});

map.zoomControl.setPosition('bottomright');
// map.attributionControl.remove('');


// https://tile.openstreetmap.org/{z}/{x}/{y}.png
// https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png
// https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png
// https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}


L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	minZoom: 9,
	opacity: 1
}).addTo(map);

L.mask('maps/landesgrenzen.geojson', {
	color: '#666',
	weight: 2,
	fillOpacity: 0.6
}).addTo(map);

// Diese Funktion wird für jedes Feature ausgeführt (Popup anbinden an jeden Standort)
function popups(feature, layer){
	var opfer = feature.properties["Opfer"];
	var todesdatum = feature.properties["Todesdatum (Unfalldatum)"];
	var extLink = feature.properties["mehr Informationen"];
  var ursache = feature.properties["Todesursache"];

	var content = 	"<b>"
					+ opfer 
					+ "</b><br><br>Todesursache: "
					 + ursache
				   + "<br><br><b>Todesdatum: </b>"
					+ todesdatum
					+ "<br><br>mehr Informationen: "
					+ "<a target='_blank' href='"
					+ extLink
					+ "'>Link zum ADFC</a>"


	layer.bindPopup(content, {className: 'eigenerStil'});
};
