var request = require('request'); // "Request" library

var client_id = 'c46fd0ff002546aebabebbbf7e5c955e';
var client_secret = '5608ac60ec44499c96eb4121f2957048';
var redirect_uri = 'http://localhost:8888/callback'; // Redirect uri
// var redirect_uri = 'REDIRECT_URI'; // Redirect URI 

// application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // Use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/users/jmperezperez',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      console.log(body);
    });
  }
});