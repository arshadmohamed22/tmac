$(document).ready(function(){
	var event1 = $("#event1").offset().top - 100;
	var event2 = $("#event2").offset().top - 100;
	var event3 = $("#event3").offset().top - 100;
	var event4 = $("#event4").offset().top - 100;
	var event5 = $("#event5").offset().top - 100;
	var event6 = $("#event6").offset().top - 100;
	var event7 = $("#event7").offset().top - 100;
	var event8 = $("#event8").offset().top - 100;
	var event9 = $("#event9").offset().top - 100;
	var event10 = $("#event10").offset().top - 100;
	var event11 = $("#event11").offset().top - 100;
	var event12 = $("#event12").offset().top - 100;
	var event13 = $("#event13").offset().top - 100;

	$("#e1").click(function() {
		$('html, body').animate({
			scrollTop: event1
		}, 1000);
	});
	$("#e2").click(function() {
		$('html, body').animate({
			scrollTop: event2
		}, 1000);
	});
	$("#e3").click(function() {
		$('html, body').animate({
			scrollTop: event3
		}, 1000);
	});
	$("#e4").click(function() {
		$('html, body').animate({
			scrollTop: event4
		}, 1000);
	});
	$("#e5").click(function() {
		$('html, body').animate({
			scrollTop: event5
		}, 1000);
	});
	$("#e6").click(function() {
		$('html, body').animate({
			scrollTop: event6
		}, 1000);
	});
	$("#e7").click(function() {
		$('html, body').animate({
			scrollTop: event7
		}, 1000);
	});
	$("#e8").click(function() {
		$('html, body').animate({
			scrollTop: event8
		}, 1000);
	});
	$("#e9").click(function() {
		$('html, body').animate({
			scrollTop: event9
		}, 1000);
	});
	$("#e10").click(function() {
		$('html, body').animate({
			scrollTop: event10
		}, 1000);
	});
	$("#e11").click(function() {
		$('html, body').animate({
			scrollTop: event11
		}, 1000);
	});
	$("#e12").click(function() {
		$('html, body').animate({
			scrollTop: event12
		}, 1000);
	});
	$("#e13").click(function() {
		$('html, body').animate({
			scrollTop: event13
		}, 1000);
	});

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	        document.getElementById("top").style.display = "block";
	    } else {
	        document.getElementById("top").style.display = "none";
	    }
	}

	// When the user clicks on the button, scroll to the top of the document
	$("#top").click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
});