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
	
	var who = $("#des").offset().top - 90;
	$("#learn-btn").click(function() {
		$('html, body').animate({
			scrollTop: who
		}, 1000);
	});

});