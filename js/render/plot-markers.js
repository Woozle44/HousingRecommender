function plotMarkers(myLatLong, location, id, totalCrime){

	if(totalCrime > 800){
		var image = "img/pins/red/1.png"
	}else if(totalCrime > 600 && totalCrime =< 800){
		var image = "img/pins/orange/1.png"
	}else if(totalCrime > 400 && totalCrime =< 600){
		var image = "img/pins/yellow/1.png"
	}else if(totalCrime > 200 && totalCrime =< 400){
		var image = "img/pins/line/1.png"
	}else (totalCrime > 0 && totalCrime =< 200){
		var image = "img/pins/green/1.png"
	}
	
	var marker = new google.maps.Marker({
		position: myLatLong,
		title: location,
		icon: image
	});

	var contentString = "<strong>Total Crimes Committed:</strong> " + totalCrime + " crimes committed."

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});

	marker.setMap(map);

}