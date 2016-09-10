// burger menu

$(document).ready(function() {
	$("a.burger-menu").on("click", function() {
    $("nav").slideToggle();
    return false;
  });
});

// ease scroll

$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html,body').animate({
	        scrollTop: target.offset().top
	      }, 800);
	      return false;
	    }
	  }
	});
});

// lightbox on / swap image

$("div#content_thumb img").on("click", function(){
	var imageSrc = $(this).attr("src");
	$("div#lightbox img").attr("src", imageSrc);
	$("div#lightbox").fadeIn(600);
});
// lightbox off
	$("div#lightbox").on("click", function(){
	$("div#lightbox").fadeOut();
});

// toggle contact sheet

$(document).ready(function(){
	// hide thumbs on load
	$("#content_thumb").hide();
	$("#icon_full").css('background-image','url(../../icons/icon_full_active.png)');
	// thumbs on / full off / icons
  $("#icon_thumb").click(function(){
    $("#content_full").hide();
    $("#content_thumb").show();
    $("#icon_full").css('background-image','url(../../icons/icon_full_inactive.png)');
    $("#icon_thumb").css('background-image','url(../../icons/icon_thumb_active.png)');
  });
  // thumbs off / full on / icons
  $("#icon_full").click(function(){
    $("#content_thumb").hide();
    $("#content_full").show();
    $("#icon_full").css('background-image','url(../../icons/icon_full_active.png)');
    $("#icon_thumb").css('background-image','url(../../icons/icon_thumb_inactive.png)');
  });
});