/*
  Please add all Javascript code to this file.
*/


// Simple function to call an array 
var arr = ['Digg', 'Mashable', 'Reddit']
	$.each(arr, function(item, val) {

		$('#newsSources').append('<li id=' + val + '><a href = "">' + val + '</a></li>');
		$('#' + val).click(function(e) {
		});
 });


// $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results) {

//     console.log(results);

//     results.data.feed.forEach(function(result){
//         $('.articleContent').append('<h3>'+result.content.title+'</h3>')
//     })
//     results.data.feed.forEach(function(result){
//     	$('.featuredImage').append('<img src='+result.content.media.images.image_url+' alt="" />')
//     })
// })

function pullDigg(){
  $.ajax(
  {
      url: "https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json",
      type: "GET",
      success: function (response){
        console.log(response.data.feed[0].content.title_alt);
        console.log(response.data.feed[0].content.media.images[0].original_url);

        $.each(response.data.feed, function(index, articleObj){
          var article_struct = '<article class="article">';
          var article_pic = '<section class="featuredImage">' +'<img src="'+articleObj.content.media.images[0].url+'" alt="" />' + '</section>';
          var article_content = '<section class="articleContent"> <a href ="'+articleObj.content.original_url+'"><h3>'+ index + ' ' + articleObj.content.title_alt+'</h3></a><h6>'+articleObj.content.domain+'</h6></section>';
          var impressions = '<section class="impressions">' + articleObj.diggs.count + '</section>';
          $('#main').append(article_struct + article_pic + article_content+impressions+'<div class="clearfix"></div></article>');
        });

      },
  });
}

function pullMash(){
  $.ajax(
  {
    url: "https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json",
    type: "GET",
    success: function (response){

      $.each(response.new, function(index, articleObj){
        var article_struct = '<article class="article">';
        var article_pic = '<section class="featuredImage">' +'<img src="'+articleObj.responsive_images[0].image+'" alt="" />' + '</section>';
        var article_content = '<section class="articleContent"> <a href ="'+articleObj.link+'"><h3>'+ index + ' ' + articleObj.title+'</h3></a></section>';
        var impressions = '<section class="impressions">' + articleObj.shares.total + '</section>';
        $('#main').append(article_struct + article_pic + article_content + impressions + '<div class="clearfix"></div></article>');
      });
    },
  });
}

function pullReddit(){
  $.ajax(
  {
    url: "https://www.reddit.com/top.json",
    type: "GET",
    success: function (response){
      console.log(response.data.children[1].data.preview.images[0].source.url);

      $.each(response.data.children[1], function(index, articleObj){
        var article_struct = '<article class="article">';
        var article_pic = '<section class="featuredImage">' +'<img src="'+articleObj.data.preview.images[0].source.url+'" alt="" />' + '</section>';
        $('#main').append(article_struct + article_pic + '<div class="clearfix"></div></article>');

      });
    }
  });
}

pullDigg()
pullMash()
pullReddit()

//OR
// array.foreach(populateLi)
// function ()

//sample helper function
var help = models
help.hello("world")














