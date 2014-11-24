$(function() {

	/**
	 * Backups list
	 */
	// Get the template
	$.get('assets/mst/backup-list.mst', function(template) {

		// Get data 
		$.getJSON('assets/demo/demo-list-backups.json', function(data) {
			// Render the template
			var rendered = Mustache.render(template, {
				'backups': data
			});
			
			// Output the template
			$('#b-list').html(rendered);
		});
	});


	/**
	 * Append options to backups list
	 */
	// Get the template
	$.get('assets/mst/backup-list-append.mst', function(template) {
		// Render the template with lang data
		var rendered = Mustache.render(template, lang.backup_list_append);
		
		// Output the template
		$('#b-list-append').html(rendered);
	});

});