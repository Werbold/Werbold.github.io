$(document).ready(function () {
	$('.slider').on('click', function () {
		if ($('.active').next('.slide').length) {
			$('.active').removeClass('active').next('.slide').addClass('active');
		} else {
			$('.active').removeClass('active');
			$('.slide').first().addClass('active');
		}
	});
});