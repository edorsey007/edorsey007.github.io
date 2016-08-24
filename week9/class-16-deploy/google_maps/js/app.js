$(document).ready(function() {

  var myMap;

  function initMap() {
    myMap = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7127, lng: -74.0059},
      zoom: 12
    });
  }

  // build map before adding any objects!
  initMap();

 //  	var cityHall = new google.maps.Marker({
	// 	position: {
	// 		lat: 40.7128, 
	// 		lng: -74.0059
	// 	},
	// 	map: myMap,
	// 	title: 'New York, NY'
	// });

// GET CITI BIKE AJAX REQUEST
function pullBikes(){
  $.ajax(
  {
      url: "http://api.citybik.es/citi-bike-nyc.json",
      type: "GET",
      success: function (response) {
        // console.log(response[0].lat);
        // console.log(response[0].lng);
        // console.log(response[0].name);
        // console.log(response[0].bikes);
        // console.log(response[0].free);

        response.forEach(function(item){
        	console.log(item);

        	var makeMarker = new google.maps.Marker({
				position: {
					lat: item.lat / 1000000,
					lng: item.lng / 1000000
				},
				map: myMap,
				title: item.name
			});


			// PUT THE BONUS SHIT HERE

        });

      },
  });
}




pullBikes()

//LOOP OVER RESPONSE AND RENDER STATIONS w/ MARKERS


})






	// $.each(response[0]., function(index, articleObj){
	//   var article_struct = '<article class="article">';
	//   var article_pic = '<section class="featuredImage">' +'<img src="'+articleObj.content.media.images[0].url+'" alt="" />' + '</section>';
	//   var article_content = '<section class="articleContent"> <a href ="'+articleObj.content.original_url+'"><h3>'+ index + ' ' + articleObj.content.title_alt+'</h3></a><h6>'+articleObj.content.domain+'</h6></section>';
	//   var impressions = '<section class="impressions">' + articleObj.diggs.count + '</section>';
	//   $('#main').append(article_struct + article_pic + article_content+impressions+'<div class="clearfix"></div></article>');
	// });


