/* This function was taken from https://www.w3schools.com/js/js_cookies.asp */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
	}
    return "";
}

$(document).ready(function() {
	/* run function when its clicked at h2 */
	$('#news-box h2').click(function() {
		// check if div is displayed
		if ($('#news-box div').css('height') != '0px') {
			// hide box with animation
			$('#news-box div').animate({height: '0px'}, function() {$('#news-box div').hide();} );
			// store info about box state to cookies
			document.cookie = 'box=0';
		}
		else {
			// show box with animation
			$('#news-box div').animate({height: '200px'});
			$('#news-box div').show();
			// store info about box state to cookies
			document.cookie = 'box=200';
		}
	});

	// check cookies, default display box with news
	if (getCookie('box') == "") {
		$('#news-box div').css('height', '200px');
	}
	else { // use box data from cookies
		$('#news-box div').css('height', getCookie('box'));
	}

	// if user have left box hidden -> hide box
	if (getCookie('box') == '0') {
		$('#news-box div').hide();
	}
})