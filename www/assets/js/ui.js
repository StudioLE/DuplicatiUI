$(function() {


	/*
	 * Log click
	 */
	$('a[rel="log"], a[rel="log-close"]').click(function(e) {
		e.preventDefault();

		// Show the log
		$('#log').slideToggle();
	});


	/*
	 * Title click
	 */
	$('.b-title').click(function(e) {
		// Close all currently open panels
		close_all();

		// If this status is not already visible
		if( ! $(this).hasClass('active')) {

			// Get the backup id
			var b_id = $(this).attr('id').substr(4);

			// Show the status with id
			$('#b-s-' + b_id).fadeIn();

			$(this).addClass('active');
		}
	});


	/*
	 * Panel click
	 */
	$('a[rel="edit"], a[rel="actions"]').click(function(e) {
		e.stopPropagation();

		// Close all currently open panels
		close_all();

		// Title element
		var b_title = $(this).parents('.b-title');
		// Backup ID
		var b_id = $(this).attr('href').substr(1);
		// Rel method first letter
		var method = $(this).attr('rel').substr(0,1);
	
		b_title.addClass('active');

		// Show the status
		$('#b-s-' + b_id).show(0, function(){

			// Show the operation / edit section
			$('#b-' + method + '-' + b_id).slideDown();
		});
	});


	/*
	 * Section click
	 */
	$('a[rel="section"]').click(function(e) {
		e.stopPropagation();

		// Close all currently open sections
		close_sections();
		
		// Get the requested section id
		var p_id = $(this).attr('href').substr(1);

		// Show the section with id
		$('#b-' + p_id).slideDown();

		// Hide the trigger element
		$(this).hide();
	});


	/**
	 * Close all currently open sections
	 */
	function close_sections() {
		$('.b-section:visible').each(function() {
			//console.log($(this).attr('id'));
			$('#' + $(this).attr('id')).slideUp();
			$('#' + $(this).attr('id') + '-trigger').slideDown();
		});
	}


	/**
	 * Close all currently open .b-status, .b-edit, b-actions
	 * 
	 */
	function close_all(type) {
		if(type) {
			$('.b-' + type).hide();
		}
		else {
			$('.b-status, .b-actions, .b-edit').hide();
			$('.b-title').removeClass('active');
		}
	}

});