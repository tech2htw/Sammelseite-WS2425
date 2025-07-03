// Daten und Marker hinzufügen
const erholungsorte = [
	{ name: "Tiergarten", lat: 52.5145, lng: 13.3501, adresse: "Straße des 17. Juni, 10557 Berlin" },
	{ name: "Volkspark Friedrichshain", lat: 52.5286, lng: 13.4272, adresse: "Am Friedrichshain, 10407 Berlin" },
	{ name: "Tempelhofer Feld", lat: 52.4736, lng: 13.4028, adresse: "Tempelhofer Damm, 12099 Berlin" },
	{ name: "Viktoriapark", lat: 52.4882, lng: 13.3758, adresse: "Kreuzbergstraße, 10965 Berlin" },
	{ name: "Hasenheide", lat: 52.4831, lng: 13.4228, adresse: "Hasenheide, 10967 Berlin" },
	{ name: "Görlitzer Park", lat: 52.4966, lng: 13.4443, adresse: "Görlitzer Straße, 10997 Berlin" },
	{ name: "James-Simon-Park", lat: 52.5212, lng: 13.3964, adresse: "Am Kupfergraben, 10178 Berlin" },
	{ name: "Park am Gleisdreieck", lat: 52.4939, lng: 13.3727, adresse: "Möckernstraße, 10963 Berlin" },
	{ name: "Natur-Park Südgelände", lat: 52.4626, lng: 13.3551, adresse: "Prellerweg 47-49, 12157 Berlin" },
	{ name: "Monbijoupark", lat: 52.5233, lng: 13.3926, adresse: "Oranienburger Straße, 10178 Berlin" },
	{ name: "Schillerpark", lat: 52.5527, lng: 13.3498, adresse: "Barfusstraße, 13349 Berlin" },
	{ name: "Comenius-Garten", lat: 52.4898, lng: 13.4323, adresse: "Richardstraße 35, 12055 Berlin" },
	{ name: "Volkspark Rehberge", lat: 52.5626, lng: 13.3452, adresse: "Otawistraße, 13351 Berlin" },
	{ name: "Volkspark Humboldthain", lat: 52.548, lng: 13.3821, adresse: "Brunnenstraße, 13355 Berlin" },
	{ name: "Volkspark Wilmersdorf", lat: 52.4728, lng: 13.3244, adresse: "Wilhelmsaue, 10713 Berlin" },
	{ name: "Treptower Park", lat: 52.4936, lng: 13.4695, adresse: "Alt-Treptow, 12435 Berlin" },
	{ name: "Schlosspark Charlottenburg", lat: 52.5202, lng: 13.2847, adresse: "Spandauer Damm 10, 14059 Berlin" },
	{ name: "Mauerpark", lat: 52.5414, lng: 13.4023, adresse: "Gleimstraße 55, 10437 Berlin" },
	{ name: "Köllnischer Park", lat: 52.5144, lng: 13.415, adresse: "Rungestraße, 10179 Berlin" }
];

// Einbinden des Piktogramm als Icon
var iconPin = L.icon({
	iconUrl: "img/pin4.svg",
	iconSize: [12]
});

// Marker hinzufügen
erholungsorte.forEach((location) => {
	const marker = L.marker([location.lat, location.lng], { icon: iconPin }).addTo(map);

	// Popup mit Adresse und Name
	marker.bindPopup(`
    <b>${location.name}</b><br>
    Adresse: ${location.adresse}
  `);
});
