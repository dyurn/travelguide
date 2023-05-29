document.addEventListener("DOMContentLoaded", function() {
    L.mapquest.key = 'tZBGkRKfWqyywOqCl8P3SCPKYNBxvUtV';

    var map = L.mapquest.map('map', {
        center: [36.8007, -121.9473],
        layers: L.mapquest.tileLayer('map'),
        zoom: 10
    });

    function addMarker(lat, lng, title) {
        L.marker([lat, lng], {
            icon: L.mapquest.icons.marker(),
            title: title
        }).addTo(map);
    }

    function geocodeAddress(address, callback) {
        L.mapquest.geocoding().geocode(address, function(error, result) {
            if (error) {
                console.error("Geocoding error: ", error);
                return;
            }
    
            var latLng = result.results[0].locations[0].displayLatLng;
            callback(latLng.lat, latLng.lng);
        });
    }

    geocodeAddress('100 Campus Center, Seaside, CA 93955', function(lat, lng) {
        addMarker(lat, lng, 'University');
    });

    geocodeAddress('886 Cannery Row, Monterey, CA 93940', function(lat, lng) {
        addMarker(lat, lng, 'Cannery Row');
    });
    
    geocodeAddress('Monterey Bay Aquarium, Monterey, CA', function(lat, lng) {
        addMarker(lat, lng, 'Monterey Bay Aquarium');
    });
    

    //addMarker(36.8007, -121.9473, 'Monterey Bay');
    addMarker(36.653934, -121.801676, 'University');
    
});






