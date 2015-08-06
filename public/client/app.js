(function(){
	"use strict";

	var geocoder;
	var map;

	var submitButton = document.getElementById("search-postal-code");

	var initializeMap = function() {
		geocoder = new google.maps.Geocoder();
		var latlng = new google.maps.LatLng(-34.397, 150.644);
		var mapOptions = {
			zoom: 8,
			center: latlng
		}
		map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	};

	var searchByAddress = function() {
		var address = document.getElementById("address").value;
		geocoder.geocode({
			"address": address
		}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				map.setCenter(results[0].geometry.location);
				var marker = new google.maps.Marker({
					map: map,
					position: results[0].geometry.location
				});
			} else {
				console.error("Geocode was not successful for the following reason: " + status);
			}
		});
	};

	google.maps.event.addDomListener(window, "load", initializeMap);
	submitButton.addEventListener("click", searchByAddress);
})();
