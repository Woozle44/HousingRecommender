function plotMarkers(myLatLong, location, id, totalCrime){

	
	console.log(totalCrime);	
	if(totalCrime > 1000){
		var image = "img/pins/red/1.png"
	}else if(totalCrime < 1000 && totalCrime > 500){
		var image = "img/pins/orange/1.png"
	}else if(totalCrime > 0 && totalCrime < 500){
		var image = "img/pins/green/1.png"
	}
	
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