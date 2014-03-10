$(document).ready( function() {

	$('.like').click(function() {
		$this = $(this);
		$('.improving').fadeIn(setTimeout(function() {
			$('.improving').fadeOut(function() {
				$('.stream').fadeOut(setTimeout(function() {
					$('.stream').fadeIn();
				}, 50));
			});
		}, 2000));
	});

	$('.dislike').click(function() {
		$this = $(this);
		$('.improving').fadeIn(setTimeout(function() {
			$('.improving').fadeOut(function() {
				$('.stream').fadeOut(setTimeout(function() {
					$this.closest('.shoe').hide();
					$('.stream').fadeIn();
				}, 50));
			});
		}, 2000));
	});

})
