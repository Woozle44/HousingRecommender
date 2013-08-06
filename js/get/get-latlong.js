var messageQueue = [];
var messageHandlerID = null;

function messageQueueInit(location, id){
	if(messageHandlerID === null){

		$('.loading').css('display','block');

		$('#map-canvas').css('display','none');
		google.maps.event.trigger(map, 'resize')

		messageHandlerID = setInterval(function(){

			var location = messageQueue.pop();

			var geocoder = new google.maps.Geocoder();
			var address = '' + location + ', UK';

			if (geocoder) {
				geocoder.geocode({ 'address': address }, function (results, status) {

					var myLatLong = new google.maps.LatLng(results[0].geometry.location.lb,results[0].geometry.location.mb);
					

					console.log(getTotalCrime(myLatLong, location, id));



				});
			} 

			if(messageQueue.length === 0){
				clearInterval(messageHandlerID);
				messageHandlerID = null;
				$('.loading').css('display','none');
				$('#map-canvas').css('display','block');
				google.maps.event.trigger(map, 'resize')
			}

		},1000);
	}
}	

function getLatLong(location, id){
	messageQueue.push(location);
	messageQueueInit(location, id);
	console.log(id)
}