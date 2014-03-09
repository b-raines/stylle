$(document).ready( function() {

	$('.like').click(function() {
		$('.improving').fadeIn(setTimeout(function() {
			$('.improving').fadeOut();
		}, 2000));
	});

	$('.dislike').click(function() {
		$('.improving').fadeIn(setTimeout(function() {
			$('.improving').fadeOut();
		}, 2000));
	});

})
