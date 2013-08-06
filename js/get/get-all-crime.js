function getTotalCrime(myLatLong, location, id){
	
	var antiSocialBehaviour = 0;
	var bicycleTheft = 0;
	var burglary = 0;
	var criminalDamageArson  = 0;
	var drugs = 0;
	var otherTheft = 0;
	var possessionOfWeapons = 0;
	var publicOrder = 0;
	var robbery = 0;
	var shoplifting = 0;
	var theftFromThePerson = 0;
	var vehicleCrime = 0;
	var violentCrime = 0;
	var otherCrime  = 0;

	var totalCrime = 0;

	$.ajax({
        url: "http:/bestplacestolive.jacob.uk.com/api/getAllCrimes.php?lat=" + myLatLong.lb + "&long=" + myLatLong.mb + "",
		dataType: "jsonp",
		

		success: function(data){
			for(var i = 0; i < data.length; i++){
				switch(data[i].category){
					case "anti-social-behaviour":
						antiSocialBehaviour++;
					break;
					case "bicycle-theft":
						bicycleTheft++
					break;
					case "burglary":
						burglary++
					break;
					case "criminal-damage-arson":
						criminalDamageArson++
					break;
					case "drugs":
						drugs++
					break;
					case "other-theft":
						otherTheft++
					break;
					case "possession-of-weapons" :
						possessionOfWeapons++
					break;
					case "public-order":
						publicOrder++
					break;
					case "robbery":
						robbery++
					break;
					case "shoplifting":
						shoplifting++
					break;
					case "theft-from-the-person":
						theftFromThePerson++
					break;
					case "vehicle-crime":
						vehicleCrime++
					break;
					case "violent-crime":
						violentCrime++
					break;
					case "other-crime":
						otherCrime++
					break;
					
				}
			}
			
			totalCrime = antiSocialBehaviour+bicycleTheft+burglary+criminalDamageArson+drugs+otherTheft+possessionOfWeapons+publicOrder+robbery+shoplifting+theftFromThePerson+vehicleCrime+violentCrime+otherCrime
		
			plotMarkers(myLatLong, location, id, totalCrime)

		}
		
		
	})

	return totalCrime;

}
