
function doClickAddText(e){
	Ti.API.info("doClickAddText");
	var coords = getLocation();
	
}

function getLocation(){
	
	if( Titanium.Geolocation.locationServicesEnabled === false ) {
	    Ti.API.debug('Your device has GPS turned off. Please turn it on.');
	}

	if(OS_ANDROID){
		gpsProvider = Ti.Geolocation.Android.createLocationProvider({
	    	name: Ti.Geolocation.PROVIDER_GPS,
		    minUpdateTime: 60, 
		    minUpdateDistance: 100
		});
		Ti.Geolocation.Android.addLocationProvider(gpsProvider);
	}else{
		Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;	
	}
	
	
	
	Titanium.Geolocation.getCurrentPosition(function(e){
		if(e.error){
			Ti.API.error(e.error);
		}
		if(e.success){
			Ti.API.info("success: " + e.coords);
			return e.coords;
		}		
		
	});
}

$.index.open();
