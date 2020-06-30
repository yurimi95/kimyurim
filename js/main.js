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

    $('.web_design1').hover(
      function(){$(this).css('opacity', '0.7').stop().attr('src', 'img/lufth_sub.png').animate({opacity:1},700)},
      function(){$(this).css('opacity', '0.7').stop().attr('src', 'img/lufth_main2.png').animate({opacity:1},700)},
    );

    $('.web_design2').mouseenter(function(){
      if(!$(this).is(':animated')){
        $(this).fadeOut();
        $('.lincoln_sub').animate({marginTop: "-1500px"},3000).animate({marginTop: "0"},1000);
        $('.web_design2').delay(4000).fadeIn();
      }
    });

    $('.web_design3').mouseenter(function(){
      if(!$(this).is(':animated')){
        $('.web_design3').animate({marginTop: "-1500px"},2000).animate({marginTop:"0"},1000);
      }
    });

    $('.web_design4').hover(
      function(){$(this).css('opacity', '0.7').stop().attr('src', 'img/hibrow_main1.png').animate({opacity:1},700)},
      function(){$(this).css('opacity', '0.7').stop().attr('src', 'img/hibrow_main.png').animate({opacity:1},700)},
    );

    $('.web_design5').mouseenter(function(){
      if(!$(this).is(':animated')){
        $('.web_design5').animate({marginTop: "-760px"},2000).animate({marginTop:"0"},1000);
      }
    });
});
