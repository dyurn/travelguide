document.addEventListener("DOMContentLoaded", function() {
    L.mapquest.key = 'tZBGkRKfWqyywOqCl8P3SCPKYNBxvUtV';

    var map = L.mapquest.map('map', {
        center: [36.8007, -121.9473],
        layers: L.mapquest.tileLayer('map'),
        zoom: 10
    });

    L.marker([36.8007, -121.9473], {
        icon: L.mapquest.icons.marker()
    }).addTo(map);
});
