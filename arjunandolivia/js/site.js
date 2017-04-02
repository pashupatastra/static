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
	$("#invalid").hide();
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
var ceremony = [
	"name one",
	"name two"
];
// reception guestlist
var reception = [
	"name three",
	"name four"
];

$('#validate').on('submit', function(e) {
	e.preventDefault();
	// catch submit result and change to lowercase
	var submitted = $('input').val().toLowerCase();
	// check submit result in ceremony guestlist
	var correct = ceremony.indexOf(submitted);
	// check submit result in reception guestlist
	var correct2 = reception.indexOf(submitted);
	if (correct >= 0){
	// show hide rules for ceremony
		$("#topknot").trigger('play');
		$("#validate").hide();
		$("#invalid").hide();
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
		$("#rsvp-reception").hide();
		$("#contact-image").show();
		$("#contact").show();
		$("footer").show();
		$("body").css({"display":"block","align-items":"stretch"});
	} else if (correct2 >= 0) {
	// show hide rules for reception
		$("#topknot").trigger('play');
		$("#validate").hide();
		$("#invalid").hide();
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
		$("#rsvp-ceremony").hide();
		$("#contact-image").show();
		$("#contact").show();
		$("footer").show();
		$("body").css({"display":"block","align-items":"stretch"});
	} else {
	// show hide rules for not on the list
		$("#validate").hide();
		$("#invalid").show();
	}
});

// vimeo / audio

var iframe = document.querySelector('iframe');
	var player = new Vimeo.Player(iframe);

	player.on('play', function() {
		$("#topknot").trigger('pause');
	});
	player.on('pause', function() {
		$("#topknot").trigger('play');
	});
	player.on('ended', function() {
		$("#topknot").trigger('play');
	});

// rsvp form submit

$(function() {

	// Get the form.
	var form = $('#ajax-rsvp');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			// $('#name').val('');
			// $('#email').val('');
			// $('#attend').prop('checked',false);
			// $('#diet').val('');
			// $('#transport').prop('checked',false);
			// $('#message').val('');
			$("#ajax-rsvp").hide();
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('An error occurred and your message could not be sent.');
			}
		});

	});

});





