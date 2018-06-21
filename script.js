$(document).ready(function() {
	
	$(window).scroll(function() {
		if ($(window).scrollTop() > 10) {
			$('#header').addClass('small-header');
			$('#title').addClass('small-title');
			$('#header-box').addClass('transparant-header');
			$('#btn-group').addClass('small-btn-group');
		} else {
			$('#header').removeClass('small-header');
			$('#title').removeClass('small-title');
			$('#header-box').removeClass('transparant-header');
			$('#btn-group').removeClass('small-btn-group');
		}
	});
	
	$("#logo").click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
	
	var who = $("#about").offset().top - 60;
	$("#learn-btn").click(function() {
		$('html, body').animate({
			scrollTop: who
		}, 1000);
	});

	$("#menu-btn").click(function() {
		if ($('#btn-group').hasClass("show-menu")) {
			$('#btn-group').removeClass("show-menu");
        	$('#btn-group').slideUp( "slow", function() {
    			// Animation complete.
  			});
    	} else {
    		$('#btn-group').addClass("show-menu");
    		$('#btn-group').slideDown( "slow", function() {
    			// Animation complete.
  			});
    	}
		
	});
});
