function main ()
{
    $('.fa-facebook-official').mouseover(function(){
    $('#facebook').css({'color' : "#3B5998" }) ;
  }).mouseout(function(){
  	    $('#facebook').css({'color' : "#333" }) ;
  });

  $('.fa-twitter-square').mouseover(function(){
    $('#twitter').css({'color' : "#00aced" }) ;
  }).mouseout(function(){
  	    $('#twitter').css({'color' : "#333" }) ;
  });

  $('.fa-google-plus-square').mouseover(function(){
    $('#google').css({'color' : "#d34836" }) ;
  }).mouseout(function(){
  	    $('#google').css({'color' : "#333" }) ;
  });



}


$(document).ready(main);
