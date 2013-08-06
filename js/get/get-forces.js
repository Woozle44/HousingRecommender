$.ajax({
	url: "http://data.police.uk/api/forces",
	dataType: "jsonp",
	success: function(data){

		var stop = 0;

		_.forEach(data, function(force){
			
			if(stop > 0){
			}else{
				getLatLong(force.name);
			}	

			stop++;
		});

	}
})
