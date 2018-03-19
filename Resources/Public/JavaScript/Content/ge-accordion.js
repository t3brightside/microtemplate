$(document).ready(function() {
	function close_accordion_section() {
		$('.ge-accordion .ge-accordion-section-title').removeClass('active');
		$('.ge-accordion .ge-accordion-section-content').slideUp(300).removeClass('open');
	}

	$('.ge-accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');

		if($(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			$(this).addClass('active');
			// Open up the hidden content panel
			$('.ge-accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
		}
		e.preventDefault();
	});
});