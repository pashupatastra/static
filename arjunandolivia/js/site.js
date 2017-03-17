$(document).ready(function() {
	// scolling
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
	// hide content on load:
	$("#validate").show();
	$("nav").hide();
	$("header").hide();
	$("#couple-image").hide();
	$("#couple").hide();
	$("#proposal-image").hide();
	$("#proposal").hide();
	$("#wedding-image").hide();
	$("#wedding").hide();
	$("#accomodation-image").hide();
	$("#accomodation").hide();
	$("#rsvp-image").hide();
	$("#rsvp").hide();
	$("#contact-image").hide();
	$("#contact").hide();
	$("footer").hide();
	$("body").css({"display":"flex","align-items":"center"});
});

// ceremony guestlist
var ceremony = ["ceremony test"];
// reception guestlist
var reception = ["reception test"];

$('form').on('submit', function(e) {
	e.preventDefault();
	// catch submit result and change to lowercase
	var submitted = $('input').val().toLowerCase();
	// check submit result in ceremony guestlist
	var correct = ceremony.indexOf(submitted);
	// check submit result in reception guestlist
	var correct2 = reception.indexOf(submitted);
	if (correct >= 0){
	// show hide rules for ceremony
		$("#validate").hide();
		$("nav").show();
		$("header").show();
		$("#couple-image").show();
		$("#couple").show();
		$("#proposal-image").show();
		$("#proposal").show();
		$("#wedding-image").show();
		$("#wedding").show();
		$("#accomodation-image").show();
		$("#accomodation").show();
		$("#rsvp-image").show();
		$("#rsvp").show();
		$("#contact-image").show();
		$("#contact").show();
		$("footer").show();
		$("body").css({"display":"block","align-items":"stretch"});
	} else if (correct2 >= 0) {
	// show hide rules for reception
		$("#validate").hide();
		$("nav").show();
		$("header").show();
		$("#couple-image").show();
		$("#couple").show();
		$("#proposal-image").show();
		$("#proposal").show();
		$("#wedding-image").show();
		$("#wedding").show();
		$("#accomodation-image").show();
		$("#accomodation").show();
		$("#ceremony").hide();
		$("#rsvp-image").show();
		$("#rsvp").show();
		$("#contact-image").show();
		$("#contact").show();
		$("footer").show();
		$("body").css({"display":"block","align-items":"stretch"});
	} else {
	// show hide rules for not on the list
	}
});