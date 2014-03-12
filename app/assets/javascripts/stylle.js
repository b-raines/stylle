$(document).ready( function() {

	$('.thumbs-up').click(function(event) {
		event.preventDefault();
		$this = $(this);
		var top = $(window).scrollTop();
		var shoeHeight = $('.shoe').outerHeight();
		var src = '/assets/thumbs_up_color.png';
		$this.attr('src', src);
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

	$('.thumbs-down').click(function(event) {
		event.preventDefault();
		$this = $(this);
		var src = '/assets/thumbs_down_color.png';
		$this.attr('src', src);
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
