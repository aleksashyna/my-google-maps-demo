var markersData = [
    {
        lat: 49.2240513,
        lng: 28.5186877,
        name: "Vinnitsa",
        phone:"(0432) 99 99 99",
        address:"Gladkova st", 
    },
    {
        lat: 50.4478809,
        lng: 30.5221355,
        name: "Kiev",
        phone:"(044) 999 99 99",
        address:"Khreshchatyk st",
    },
];
var map, infoWindow;

// functions
function initMap() {
    var centerLatLng = new google.maps.LatLng(49.11336764, 31.57231304);
    var mapOptions = {
        center: centerLatLng,
        zoom: 6,
        scrollwheel: false
    };
  
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    infoWindow = new google.maps.InfoWindow();
  
    google.maps.event.addListener(map, "click", function() {
        infoWindow.close();
    });
    
    for (var i = 0; i < markersData.length; i++){
        var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var name = markersData[i].name;
        var address = markersData[i].address;
        var phone = markersData[i].phone;
        var phone1 = phone.replace(/[^0-9]/gim,'');
        addMarker(latLng, name, address, phone, phone1);
    }
}

function addMarker(latLng, name, address, phone, phone1) {
    var image =  'images/marker.png';
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: image,
        title: name
    });

    google.maps.event.addListener(marker, "click", function() {
        var contentString = '<div id="info-window-content">'+
        '<div class="info-window-title">'+ name + '</div>'+
            '<div class="info-window-phone">'+
                '<a href="tel:+38' + phone1 +'">'+ phone +'</a>'+
            '</div>'+
            '<div class="info-window-adress">'+ address +'</div>'+
        '</div>';
  
        infoWindow.setContent(contentString);
        infoWindow.open(map, marker);
    });
}