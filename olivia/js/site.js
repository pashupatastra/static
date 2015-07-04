$(document).ready(function() {

// Scroll ease

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

// Fix homepage nav on scroll

	$(window).bind('scroll', function() {
		var navHeight = $( window ).height() - 70;
		if ($(window).scrollTop() > navHeight) {
			$('#nav_home').addClass('fixed');
		}
		else {
			$('#nav_home').removeClass('fixed');
		}
	});

// Decrease background opac on scroll
	
	var target = $('.background');
	var targetHeight = target.outerHeight();

	$(document).scroll(function(e){
		var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
		if(scrollPercent >= 0){
			target.css('opacity', scrollPercent);
		}
	});

});