// Map Container anbinden und konfigurieren
var map = L.map('map-container', { 
	center: [52.52, 13.42], 
	zoom: 10,
	minZoom: 9,
	maxZoom: 12
});

map.zoomControl.setPosition('bottomleft');

// ArcGIS Basemap hinzufügen
L.tileLayer(
	'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
		maxZoom: 16, // ArcGIS max Zoom
		minZoom: 9 // ArcGIS min Zoom
	}
).addTo(map);

// 마스크 추가
L.mask('maps/landesgrenzen.geojson', {
	color: '#a5e0b0',      // 마스크 경계선 색상
	weight: 1,          // 경계선 두께
	fillOpacity: 0    // 외부 영역의 투명도
}).addTo(map);