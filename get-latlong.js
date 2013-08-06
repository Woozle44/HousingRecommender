function getLatLong(location){

	$.ajax({
	url: "http://maps.googleapis.com/maps/api/geocode/json?address=m+UK&sensor=true",
	dataType: "jsonp",
	success: function(data){
	
		
	}
	})
}