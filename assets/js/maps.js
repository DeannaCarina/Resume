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
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}