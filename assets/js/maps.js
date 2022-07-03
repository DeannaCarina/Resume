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
        { lat: 53.735388, lng: -2.459979 },//RBH
        { lat: 53.750324, lng: -2.488124 },//BCW
        { lat: 53.759647, lng: -2.367326 },//AVH
        { lat: 53.809569, lng: -2.227980 },//BGH
        { lat: 53.700433, lng: -2.280974 },//RPHC
        { lat: 53.883147, lng: -2.374288 },//CCH
        { lat: 53.838597, lng: -2.211329 },//PCH
    ];
    
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}