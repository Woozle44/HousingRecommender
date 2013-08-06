$.ajax({
	url: "http://data.police.uk/api/forces",
	dataType: "jsonp",
	async: false,

	success: function(data){

		var stop = 0;

		_.forEach(data, function(force){
			
				getLatLong(force.name, force.id);
			stop++;
		});

	}
})
