//메뉴
$(document).ready(function () {

  $("#nav_bottom li").mouseover(function(){
    $(this).css("background-image","url(img/nav_bg.png)");
    $(this).children().css("color","#000");
  });

  $("#nav_bottom li").mouseleave(function(){
    $(this).css("background-image","none");
    $(this).children().css("color","#666");
  });


  $( window ).scroll( function() {
  	if ( $( this ).scrollTop() > 200 ) {
  		$( '.top' ).fadeIn();
  	} else {
  		$( '.top' ).fadeOut();
  	}
  } );

  $( '.top' ).click( function() {
	  $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	    return false;

    });
  $( '#home' ).click( function() {
	  $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	    return false;
  });
});


$(function(){

    $('.web_design3').mouseenter(function(){
      if(!$(this).is(':animated')){
        $('.web_design3').animate({marginTop: "-1000px"},2000).animate({marginTop:"0"},1000);
      }
    });

});
