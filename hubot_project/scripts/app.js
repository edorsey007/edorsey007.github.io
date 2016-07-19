module.exports = function(robot) {

    robot.hear(/hello|hi/i, function(res) {
            return res.send("Hello, World!");
    });

	robot.hear(/cat/i, function (res) {
		return res.send('meooooow');
	});

	robot.respond(/how are you?/i, function (res) {
		return res.send('I am feeling mighty fine!');
	});

	robot.respond(/my name is (.*)/i, function(res) {
	var name = res.match[1];
		return res.reply('Hello, ' + name);
  	});

  	robot.hear(/add (.*) and (.*)/i, function (res) {
		var x = parseInt(res.match[1]);
	 	var y = parseInt(res.match[2]);
		var sum = x + y;

	  return msg.reply(x + " plus " + y + " = " + sum);
  	});

  	//Would really like to learn how to make HTTP call work correctly. Essentially, I wanted the Hubot to reply with the weather forecast of the day.
  	//robot.hear(/what's the weather today?/i, function (res) {
  	// process.env.HUBOT_WEATHER_API_URL ||=
  	// 'http://api.openweathermap.org/data/2.5/weather'
  	// robot.hear /weather in (\w+)/i, (res) ->
  	// 	city = res.match[1]
  	// query = { units: process.env.HUBOT_WEATHER_UNITS, q: city }
  	// url = process.env.HUBOT_WEATHER_API_URL
  	// res.robot.http(url).query(query).get() (err, res, body) ->
  	// 	data = JSON.parse(body)
  	// 	weather = [ "#{Math.round(data.main.temp)} degrees" ]
  	// 	for w in data.weather
  	// 		weather.push w.description
  	// 	res.reply "It's #{weather.join(', ')} in #{data.name}, #{data.sys.country}"

  	//-});

  	robot.hear(/sing me a song/i, function (res) {
  		return res.send("It's getting hot in here, so take off all your clothes...");
  	});



}



