
// Use this stub flag when testing on emulators / simulators that does not suppoort geolocation
var STUB_IT = "false";


function doClickAddText(e){
	Ti.API.info("doClickAddText");
	var coords = getLocation();
	Ti.API.info("Result:" + coords.timestamp);
}

// Stub method returning hardcoded coords
function stub(){
	var coords = {
		accuracy: 10,
		altitude: 0,
		altitudeAccuracy: 10,
		heading: 0,
		latitude: 65.9667,
		longtitude: -18.5333,
		speed: 0,
		timestamp: new Date().getTime()
	};
	return coords;
}
function getLocation(){
	
	// TODO this is a stub and should be removed when the location is up and running on emulators and simulators
	if(STUB_IT)	return stub();
	

	if(OS_ANDROID){
		if( Titanium.Geolocation.locationServicesEnabled === false ) {
		    Ti.API.debug('Your device has GPS turned off. Please turn it on.');
		}

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
			Ti.API.error("Return error: " + e.error);
		}
		if(e.success){
			
			return e.coords;
		}		
		
	});
}

$.index.open();
