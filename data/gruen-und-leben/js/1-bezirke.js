$.getJSON("maps/bezirke.geojson", function(data) {
	var Bezirke = L.geoJSON(data, {
		style: function(feature) {
			return {
				color: '#91bf8f', // 경계선 색상
				weight: 0.7,      // 경계선 두께
				lineJoin: 'round',
				fillOpacity: 0.8, // 기본 채우기 투명도
				fillColor: feature.properties.farbeBezirk, // 기본 채우기 색상
				interactive: true // 상호작용 활성화 (팝업용)
      };
    },
    onEachFeature: function (feature, layer) {
      // 팝업 내용 생성
      var gemeindeName = feature.properties.Gemeinde_name || "Unbekannter Bezirk";
      var immobilienPreisN = feature.properties.Immobilienpreis_n || "Keine Daten";
      var immobilienPreisH = feature.properties.Immobilienpreis_h || "Keine Daten";

      var popupContent = `
        <div class="Gemeinde">
          <strong></strong> ${gemeindeName}<br>
		          <div class="ImmoN">
          <strong></strong> ${immobilienPreisN} €<br>
		  		          <div class="ImmoH">

          <strong></strong> ${immobilienPreisH} € <span class="pro-quadrat">pro Quadrat</span></p>
        </div>
      `;

      // 팝업 추가
      layer.bindPopup(popupContent);
    }
  }).addTo(map);
});
