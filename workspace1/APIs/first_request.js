var request = require('request');
request('https://api.open-meteo.com/v1/forecast?latitude=-1.2833&longitude=36.8167&current_weather=true', function(error, response, body){
	if(!error && response.statusCode == 200){
		var parsedData = JSON.parse(body);
		console.log(parsedData);
	}
});
