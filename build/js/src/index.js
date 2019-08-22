$(document).ready(function() {
  // update the button state
  var update = function(active){
    $('button').parent().each(function(){
      $(this).removeClass('active');
    });  
    active.parent().addClass('active');
  };

  $('.board button').on('click', function(event){
    event.preventDefault();
    update($(this));
  });

  // update image board
  var updateImage = function(){
    var   image = $('.image input').val(),
          cover = $('.image select').val();  
        
    $('main.result').html('<div class="image background-style-'+cover+'" style="background-image:url('+image+')"></div>');
  };

  // update message board
  var updateNotice = function(){
    var   message = $('.notice input').val(),
          backgroundColor = $('.notice select').val(); 
    $('main.result').html('<div class="notice background-color-'+backgroundColor+'"><h1>'+message+'</h1></div>');
  };

  // update video board
  var updateVideo = function(){
    var   video = $('.video input').val();
    $('main.result').html('<div class="video"><iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/'+video+'?autoplay=1&loop=1&mute=1" frameborder="0"></iframe></div>');
  };

  // fire message board on button click
  $('.notice button').on('click', function(event){
    event.preventDefault();
    updateNotice();
  });

  $('.image button').on('click', function(event){
    event.preventDefault();
    updateImage();
  });

  $('.video button').on('click', function(event){
    event.preventDefault();
    updateVideo();
  });
});
