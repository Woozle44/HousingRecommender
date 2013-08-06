function getAllCrime(myLatLong){

	console.log(myLatLong);

	$.ajax({
		url: "http://housingrecommender.jacob.uk.com/api/getAllCrimes.php?lat=" + myLatLong.lb + "&long=" + myLatLong.mb + "",
		dataType: "jsonp",
		
		success: function(data){
			for(var i = 0; i < data.length; i++){
				console.log(data[i].category);
			}
			
		}
	})


}