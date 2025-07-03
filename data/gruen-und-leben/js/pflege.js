// 전역 변수 정의
var mapPflege = null; // Pflege 데이터 레이어를 저장

// GeoJSON 데이터를 추가하는 함수
function addPflegeLayer() {
  $.getJSON("maps/pflege.geojson", function (data) {
    mapPflege = L.geoJSON(data, {
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: L.icon({
            iconUrl: "img/yellow.svg", // 커스텀 아이콘 경로
            iconSize: [20, 20]        // 아이콘 크기
          })
        });
      },
      onEachFeature: function (feature, layer) {
        // 각 마커에 팝업 추가
        var popupContent = `
          <b>${feature.properties.einrichtung_name || "Unbekannt"}</b><br>
          ${feature.properties.gc_strasse || "Keine Adresse"}`;
        layer.bindPopup(popupContent);
      }
    }).addTo(map);
  });
}

// 체크박스 상태 변화에 따른 로직
document.getElementById("pflegecheckbox").addEventListener("change", function () {
  var isChecked = this.checked;

  if (isChecked) {
    // 체크박스가 선택되었을 때: 데이터 레이어 추가
    addPflegeLayer();
  } else {
    // 체크박스가 해제되었을 때: 데이터 레이어 제거
    if (mapPflege) {
      mapPflege.clearLayers(); // 지도에서 제거
      mapPflege = null;        // 변수 초기화
    }
  }
});