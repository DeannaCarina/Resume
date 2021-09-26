function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1,
        center: {
            lat: 40.619261,
            lng: -5.134766
        }
    });

    var labels = " ";

    var locations = [
        { lat: 53.476990, lng: -2.243460 },//Manchester
        { lat: 53.763622, lng: -2.707455 },//Preston
        { lat: 53.405177, lng: -2.992213 },//Liverpool
        { lat: 52.888133, lng: -4.417981 },//Pwllheli
        { lat: 55.947383, lng: -3.206051 },//Edinburgh
        { lat: 51.505700, lng: -0.025493 },//London
        { lat: 52.453837, lng: -1.715993 },//Birmingham 
        { lat: 48.864363, lng: 2.347029 },//Paris
        { lat: 52.371447, lng: 4.900444 },//Amsterdam 
        { lat: 52.513442, lng: 13.397128 },//Berlin 
        { lat: 43.732941, lng: 7.415972 },//Monaco 
        { lat: 41.915347, lng: 12.512850 },//Rome 
        { lat: 45.437891, lng: 12.324283 },//Venice 
        { lat: 43.543503, lng: 10.307312 },//Livorno  
        { lat: 42.642843, lng: 18.104371 },//Dubrovnik 
        { lat: 44.125867, lng: 15.234112 },//Zadar 
        { lat: 43.510609, lng: 16.439858 },//Split 
        { lat: 45.652052, lng: 13.773284 },//Trieste 
        { lat: 35.898063, lng: 14.511641 },//Valletta 
        { lat: 41.923186, lng: 8.739336 },//Ajaccio 
        { lat: 44.870058, lng: 13.844104 },//Pula
        { lat: 28.060693, lng: -16.728615 },//Tenerife 
        { lat: 41.405220, lng: 2.182114 },//Barcelona
        { lat: 13.096880, lng: -59.616408 },//Barbados
        { lat: 12.106197, lng: -68.934150 },//Curacao 
        { lat: 12.517851, lng: -70.035120  },//Aruba 
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}