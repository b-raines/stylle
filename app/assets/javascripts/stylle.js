$(document).ready( function() {

	$('.like').click(function(event) {
		event.preventDefault();
		$this = $(this);
		var top = $(window).scrollTop();
		var shoeHeight = $('.shoe').outerHeight();
		$('.improving').fadeIn(setTimeout(function() {
			$('.improving').fadeOut(function() {
				$('.stream').animate({
					opacity: 0
				}, setTimeout(function() {
					$(window).scrollTop( top + shoeHeight);
					$('.stream').animate({
						opacity: 1
					});
				}, 50));
			});
		}, 2000));
	});

	$('.dislike').click(function(event) {
		event.preventDefault();
		$this = $(this);
		$('.improving').fadeIn(setTimeout(function() {
			$('.improving').fadeOut(function() {
				$('.stream').animate({
						opacity: 0
					}, setTimeout(function() {
					$this.closest('.shoe').hide();
					$('.stream').animate({
						opacity: 1
					});
				}, 50));
			});
		}, 2000));
	});

})
