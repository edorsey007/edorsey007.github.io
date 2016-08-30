var express = require('express');
var path = require('path');
var faker = require('faker');
var request = require('request');

var app = express();

// tells express where static assets are stored
app.use(express.static('public'));

//app.get - enpoints are listening for a get request to the server (to the root)
//app.get(endPoint, callBack)
//ROUTES
app.get('/', function (req, res) {
res.send('index.html');
});

 app.get('/geo', function (req, res) {
  var latitude = faker.address.latitude();
  var longitude = faker.address.longitude();

  var weatherKey = 'd7f017e930317476320b78490dcf1815';
  var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + weatherKey;

  request(weatherURL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send({
        weather: JSON.parse(body),
        lat: latitude,
        lng: longitude,
      });
    }
  });
});

//kick off the app
app.listen(1337, function () {
console.log('The magic is going down on 1337!')
});