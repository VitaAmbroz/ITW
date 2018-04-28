$(document).ready(function() {
	/* run function when its clicked at h2 */
	$('#news-box h2').click(function() {
		// check if div is displayed
		if ($('#news-box div').css('height') != '0px') {
			// hide box with animation
			$('#news-box div').animate({height: '0px'}, function() {$('#news-box div').hide();} );
			// store info about state to web storage
			window.localStorage.box = 0;
		}
		else {
			// show box with animation
			$('#news-box div').animate({height: '200px'});
			$('#news-box div').show();
			// store info about state to web storage
			window.localStorage.box = 200;
		}
	});

	// check web storage, default display div with news
	if (window.localStorage.box == null) {
		$('#news-box div').css('height', '200px');
	}
	else { // use data from web storage
		$('#news-box div').css('height', window.localStorage.box);
	}

	// if user have left box hidden -> hide box 
	if (window.localStorage.box == 0) {
		$('#news-box div').hide();
	}
})