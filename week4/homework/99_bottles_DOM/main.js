$(document).ready(function(){
  
  $('#song-lyrics').click(function(){
  for (var i = 99; i >= 1; i--) {
    if (i != 1) {
        bottles = 'bottles';
    } else { 
        bottles = 'bottle';
    }
    $('#bottles').append('<li class = "bottle">'+i+" "+bottles+" of beer on the wall.");
    if (i < 99) {
    $('#bottles').append('<li class = "bottle">'+" ");
    $('#bottles').append('<li class = "bottle">'+i+" "+bottles+" of beer on the wall.");
    }
    $('#bottles').append('<li class = "bottle">'+i+" "+bottles+" of beer.");
    $('#bottles').append('<li class = "bottle">'+"Take one down.");
    $('#bottles').append('<li class = "bottle">'+"Pass it around.");
    if (i === 1) {
    $('#bottles').append('<li class = "bottle">'+"No bottles of beer on the wall.");
    }
};
  });

});