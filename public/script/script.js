$(document).ready(function() {
	$( "#loading" ).animate({
		fontSize: "10px"
	}, 4000, function() {
    	// loading complete
	});
		
	//location services must be on
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var latitude = position.coords.latitude;
			var longitude = position.coords.longitude;
			var geolookup = "https://api.darksky.net/forecast/" + config.DARKSKY_KEY + "/" + latitude + "," + longitude + "?exclude=minutely,hourly,alerts,flags";
			$.getJSON(geolookup, function(json) {
				$("#loading").remove();
				$(".hidden").removeClass("hidden");
				console.log("api up & running");
				var weatherType = json.currently.summary;
				var temperatureF = json.currently.temperature.toFixed(10);
				var temperatureC = ((temperatureF - 32) / 1.8).toFixed(10);
				//default temp shown in fahrenheit
				$("#temperature").html(temperatureF);
				$("#weather-main").html(weatherType);
				
				$("#f").click(function() {
					$("#f").html('<strong>F</strong>');
					$("#c").html('C');
					$("#temperature").text(temperatureF);
				});
				$("#c").click(function() {
					$("#f").html('F');
					$("#c").html('<strong>C</strong>');
					$("#temperature").text(temperatureC);
				});
						
				weatherType = weatherType.toLowerCase();
						
				var now = json.currently.time;
				var sunset = json.daily.data[0].sunsetTime;
				var clearDay = weatherType.indexOf("clear") !== -1 && now < sunset;
				var clearNight = weatherType.indexOf("clear") !== -1 && now > sunset;
				var rain = weatherType.indexOf("rain") !== -1 || weatherType.indexOf("drizzle" !== -1);
				var snow = weatherType.indexOf("snow") !== -1;
				var cloudyDay = weatherType.indexOf("cloudy") !== -1 && now < sunset;
				var cloudyNight = weatherType.indexOf("cloudy") !== -1 && now > sunset;
				var storm = weatherType.indexOf("storm") !== -1;
				
				switch (true) {
					case clearDay:
						$("body").css('background-image', 'url("https://media.giphy.com/media/ivcVZnZAEqhs4/giphy.gif")');
						$("body").css('color', "#000");
						break;
					case clearNight:
						$("body").css('background-image', 'url("https://media.giphy.com/media/VjJUzwAJ8iIJq/giphy.gif")'); 
						break;
					case rain:
						$("body").css('background-image', 'url("https://media.giphy.com/media/uQN6bqGE66H2E/giphy.gif")'); 
						break;
					case snow:
						$("body").css('background-image', 'url("https://media.giphy.com/media/xTcnTehwgRcbgymhTW/giphy.gif")');     
						break;
					case cloudyDay:
						$("body").css('background-image', 'url("https://media.giphy.com/media/LDlY014tgkONq/giphy.gif")');   
						$("body").css("color", "#000");
						break;
					case cloudyNight:
						$("body").css('background-image', 'url("https://media.giphy.com/media/3o7rc6sa2RvKo8K5EI/giphy.gif")');     
						break;
					case storm:
						$("body").css('background-image', 'url("https://media.giphy.com/media/pbhw4D4n2Vcwo/giphy.gif")');     
						break;
					default:
						$("body").css('background-image', 'url("https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif")');
						$("body").css('color', '#000');
				};
					
				//finds city/state info because darkweatherAPI doesn't include that information
				$.getJSON("https://ipapi.co/json/", function(json) {
				$("#city-name").html(json.city + ", " + json.region_code);
				});
			});
		});
	} else {
		$('#body').html("Location services need to be enables to use this website");
		console.log("turn on location services");
	}

});