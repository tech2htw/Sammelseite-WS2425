// Map Container anbinden und konfigurieren
// Mehr Info: https://leafletjs.com/reference.html#map-example

var map = L.map('map-container', { 
	center: [52.52, 13.42], 
	zoom: 10,
	minZoom: 9,
	maxZoom: 12
});

// Переменная для хранения маркеров больниц
var hospitalMarkers = [];
var isHospitalsVisible = true;  // Переменная для отслеживания состояния тумблера (включен/выключен)


map.zoomControl.setPosition('bottomleft');



const toggle = document.querySelector('.toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    // Переключаем класс активного состояния
    toggle.classList.toggle('active');

    // Проверяем, включен ли тумблер
    if (toggle.classList.contains('active')) {
      isHospitalsVisible = true;  // Показываем маркеры
    } else {
      isHospitalsVisible = false;  // Скрываем маркеры
    }

    // Обновляем видимость маркеров
    updateMarkersVisibility();
  });
}

// Функция для обновления видимости маркеров на основе состояния тумблера
function updateMarkersVisibility() {
  hospitalMarkers.forEach(function(marker) {
    if (isHospitalsVisible) {
      marker.addTo(map);  // Показываем маркер на карте
    } else {
      map.removeLayer(marker);  // Убираем маркер с карты
    }
  });
}


var anzahlBetten = {};