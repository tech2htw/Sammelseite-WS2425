function handleFeature(feature, layer) {
    // Hier können Sie Interaktionen definieren, wie Popups oder Tooltips
}

$.getJSON("maps/denkmal.geojson", function(data) {
    var denkmalSpez = L.geoJSON(data, {
        style: function (feature) {
            return {
                color: "#ffffff",
                weight: 10,
                fillColor: "#ffffff",
                fillOpacity: 1
            };
        },
        onEachFeature: handleFeature // Korrekte Funktionsreferenz
    }).addTo(map);
    
    denkmalSpez.bringToFront();
});

