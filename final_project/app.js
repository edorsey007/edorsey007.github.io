/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = 'c46fd0ff002546aebabebbbf7e5c955e'; // client id
var client_secret = '5608ac60ec44499c96eb4121f2957048'; // secret
var redirect_uri = 'http://localhost:8888/callback'; // redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

var app = express();

app.use(express.static(__dirname + '/public'))
   .use(cookieParser());

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // application requests authorization
  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

app.get('/callback', function(req, res) {

  // application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  console.log(req.query)

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body);
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect('/#' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  // }
});

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

console.log('Listening on 8888');
app.listen(8888);

// additional functionailty
// populating playlists
// curl -X GET "https://api.spotify.com/v1/browse/featured-playlists?country=US&limit=2" -H "Accept: application/json" -H "Authorization: Bearer BQArUpyPc3JnmoRIEUIgw8kcLv5tAZscp6E7k1VKOWztGtmKfP1dZ4jTJPbI-PoWVjh7QgBC7UtL9-cxCP1rkFcoySSgNVjP0D7vnNoNt885DecQzEvPn1xmVw9MdVVb9irE53VbVU-4ftjDY8qcQx-ZEDbWEtSZ08f5Qlaf0sNi8yNnDjYu1qkeYyMupCJ7hJG9VnHVcMlFn8zqUGSEcYZXGN4Ip3iwLYTdfhs_yCipPMMjNk_x6-uhmFo"

// function pullPlaylist(){
//   $.ajax(
//   {
//       url: "https://api.spotify.com/v1/browse/featured-playlists",
//       type: "GET",
//       success: function (response){
//         console.log(response.data.feed[0].content.title_alt);
//         console.log(response.data.feed[0].content.media.images[0].original_url);

//         $.each(response.data.feed, function(index, playlistObj){
//           var playlist_struct = '<playlist class="playlist">';
//           var playlist_pic = '<section class="featuredImage">' +'<img src="'+playlistObj.content.media.images[0].url+'" alt="" />' + '</section>';
//           var playlist_content = '<section class="playlistContent"> <a href ="'+playlistObj.content.original_url+'"><h3>'+ index + ' ' + playlistObj.content.title_alt+'</h3></a><h6>'+playlistObj.content.domain+'</h6></section>';
//           var impressions = '<section class="impressions">' + playlistObj.diggs.count + '</section>';
//           $('#playlist').append(playlist_struct + playlist_pic + playlist_content+impressions+'<div class="clearfix"></div></playlist>');
//         });

//       },
//   });
// }

// pullPlaylist()
