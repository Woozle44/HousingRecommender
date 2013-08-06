function plotMarkers(myLatLong, location, id){

	getAllCrime(myLatLong);

	var image = "img/pins/green/1.png"


	var marker = new google.maps.Marker({
		position: myLatLong,
		title: location,
		icon: image
	});

	var contentString = "<strong>Force:</strong> " + location + ""

	var infowindow = new google.maps.InfoWindow({
		content: contentString
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});

	marker.setMap(map);

}