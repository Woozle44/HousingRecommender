var messageQueue = [];
var messageHandlerID = null;

function messageQueueInit(location, id){
	if(messageHandlerID === null){
		messageHandlerID = setInterval(function(){

			var location = messageQueue.pop();

			var geocoder = new google.maps.Geocoder();
			var address = '' + location + ', UK';

			if (geocoder) {
				geocoder.geocode({ 'address': address }, function (results, status) {

					var myLatLong = new google.maps.LatLng(results[0].geometry.location.lb,results[0].geometry.location.mb);
					

					getTotalCrime(myLatLong, location, id)



				});
			} 

			if(messageQueue.length === 0){
				clearInterval(messageHandlerID);
				messageHandlerID = null;
			}

		},1000);
	}
}	

function getLatLong(location, id){
	messageQueue.push(location);
	messageQueueInit(location, id);
	console.log(id)
}