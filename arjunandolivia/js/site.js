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
	$("#pause").hide();
	$("#audio-controls").css('display','none');
	$("nav").css('display','none');
	$("header").hide();
	$(".image-container").hide();
	$("#couple").hide();
	$("#proposal").hide();
	$("#wedding").hide();
	$("#accommodation").hide();
	$("#rsvp").hide();
	$("#gifts").hide();
	$("footer").hide();
	$("body").css({"display":"flex","align-items":"center"});
});

// ceremony guestlist
var ceremony = [
	"ceremony test",
	"coralie mansfield",
	"timothy edwards",
	"tim edwards",
	"isabella mansfield",
	"paul roy",
	"alice mansfield",
	"luke haynes",
	"debbie emerton",
	"ray emerton",
	"craig emerton",
	"elinor purvis",
	"gemma emerton",
	"zdenek masin",
	"zdeněk mašín",
	"maria burrell",
	"chris burrell",
	"dilly baker",
	"chris baker",
	"flossie baker",
	"theo baker",
	"audrey rich",
	"joan ranson",
	"annie lloyd",
	"katrina cole",
	"barbara king",
	"patricia bent",
	"pat bent",
	"onika bent",
	"jonathan edwards",
	"rachel edwards",
	"mitch haynes",
	"annette haynes",
	"stella",
	"heather innes",
	"jacynth hamill",
	"eileen welland",
	"james welland",
	"nick hill",
	"samantha hill",
	"viswanath mahadevan",
	"vishy mahadevan",
	"neila mahadevan",
	"janaki o'connor",
	"tom o'connor",
	"mary o'connor",
	"sunil gandhi",
	"anita jones",
	"martyn jones",
	"lucas jones",
	"alanah jones",
	"jyoti milne",
	"jo milne",
	"andrew milne",
	"hannah milne",
	"mike mladenovic",
	"miodrag mladenovic",
	"raman mahadevan",
	"kamini mahadevan",
	"jayant mahadevan",
	"divya mahadevan",
	"usha mahadevan",
	"santosh kumar",
	"anasuya kumar",
	"lakshmi",
	"diwakar",
	"bankim patel",
	"manda patel",
	"kat welland",
	"owen watley",
	"christina barnett",
	"isadora darke",
	"jamie robinson",
	"leanne kinnie",
	"andrea monogenie",
	"donal sweeney",
	"hannah mcnamara",
	"glen dalton",
	"charli-max baldwin",
	"sabina cardoso",
	"kensey green",
	"casey lister",
	"elliot bertram",
	"hannah bertram",
	"mohamed kalash",
	"harriet badby",
	"louis leeson",
	"romayne etwaroo",
	"ted mendez",
	"gemma cole",
	"rob mcrae",
	"robert mcrae",
	"sam wood",
	"luke schram",
	"james gibbs",
	"luke evans",
	"lauren o'donaghue",
	"la o'donaghue",
	"jaswinder blackwell-pal",
	"jaz blackwell-pal",
	"paul antony",
	"alex wilson",
	"simon winkler",
	"richard pacy",
	"min-hwee lim",
	"bella pace",
	"tom rosenthal",
	"nick smart",
	"andrew rickett",
	"rosie o'driscoll",
	"candy hilton",
	"simon lodge",
	"jolene pringle",
	"matt pringle",
	"matthew pringle",
	"vasiliki antonopolou",
	"kate pearson",
	"manuel almansa",
	"lucy howe",
	"shane roberts"
];
// reception guestlist
var reception = [
	"reception test",
	"marian ballance",
	"mike ballance",
	"jo elliott",
	"simon elliott",
	"john brushe",
	"jenny brucemitford",
	"jeremy satchwell",
	"avril satchwell",
	"naimish gandhi",
	"smita gandhi",
	"lalita banerjee",
	"lolly banerjee",
	"sandeep gandhi",
	"usha gandhi",
	"kartik hariharan",
	"kim hariharan",
	"nathan hariharan",
	"krishnan hariharan",
	"thumri rogers",
	"dan rogers",
	"john bartlett",
	"claire bartlett",
	"krishnamurthi",
	"kalpana",
	"timothy forge",
	"magdalena gustafsson",
	"magda gustafsson",
	"roisin stallard",
	"tom randall",
	"jess whiteley",
	"matt whiteley",
	"eugenie scrase",
	"joe crowdy",
	"brittany hoie",
	"kate duncan",
	"shane noonan",
	"shane claydon",
	"vicky samuel",
	"luke dibbens",
	"roxy minter",
	"julian boys",
	"agata adamowicz",
	"zaziah wood",
	"zaz wood",
	"jackie brett-holt",
	"sam cook",
	"samuel cook",
	"emily parry",
	"susie harris",
	"rayner camp",
	"emilio vanni",
	"andy sykes",
	"yuliya kravchenko",
	"alessandro gaudiosi",
	"jonny holloway"
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
		$("#validate").hide();
		$("#invalid").hide();
		$("#audio-controls").css('display','block');
		$("nav").css('display','block');
		$("header").show();
		$(".image-container").show();
		$("#couple").show();
		$("#proposal").show();
		$("#wedding").show();
		$("#accommodation").show();
		$("#rsvp").show();
		$("#gifts").show();
		$("footer").show();
		$("body").css({"display":"block","align-items":"stretch"});
	} else if (correct2 >= 0) {
	// show hide rules for reception
		$("#validate").hide();
		$("#invalid").hide();
		$("#audio-controls").css('display','block');
		$("nav").css('display','block');
		$("header").show();
		$(".image-container").show();
		$("#couple").show();
		$("#proposal").show();
		$("#wedding").show();
		$("#accommodation").show();
		$("#ceremony").hide();
		$("#rsvp").show();
		$("#gifts").show();
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
	  $('.pause').hide();
	  $('.play').css('display', 'inline-block');
	  audioElement.pause();
	});

// audio controls

var audioElement = new Audio('assets/cornershop_topknot.mp3');

$('.play').on('click', function() {
  $(this).hide();
  $('.pause').css('display', 'inline-block');
  audioElement.play();
  // NEED TO PAUSE VIMEO HERE
});

$('.pause').on('click', function() {
  $(this).hide();
  $('.play').css('display', 'inline-block');
  audioElement.pause();
});



