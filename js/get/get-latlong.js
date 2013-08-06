var messageQueue = [];
var messageHandlerID = null;

function messageQueueInit(){
	if(messageHandlerID === null){
		messageHandlerID = setInterval(function(){

			var location = messageQueue.pop();

			var geocoder = new google.maps.Geocoder();
			var address = '' + location + ', UK';

			if (geocoder) {
				geocoder.geocode({ 'address': address }, function (results, status) {

					var myLatLong = new google.maps.LatLng(results[0].geometry.location.lb,results[0].geometry.location.mb);

					plotMarkers(myLatLong, location)

				});
			} 

			if(messageQueue.length === 0){
				clearInterval(messageHandlerID);
				messageHandlerID = null;
			}

		},1000);
	}
}	

function getLatLong(location){
messageQueue.push(location);
messageQueueInit();
}