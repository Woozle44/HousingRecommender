function plotMarkers(myLatLong, location){

	var marker = new google.maps.Marker({
		position: myLatLong,
		title: location
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