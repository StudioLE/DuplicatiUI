$(function() {

	/**
	 * Backups list
	 */
	// Get the template
	$.get('assets/mst/backup-list.mustache', function(template) {

		// Get data 
		$.getJSON('assets/demo/demo-list-backups.json', function(data) {
			// Deprecated Mustache in favour of Handlebars
			// Render the template
			//var rendered = Mustache.render(template, {
			//	'backups': data
			//});
		
			var compiled_template = Handlebars.compile(template);
			var rendered = compiled_template({
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
	$.get('assets/mst/backup-list-append.mustache', function(template) {
		// Render the template with lang data
		var rendered = Mustache.render(template, {
			'titles': lang.backup_list_append
		});
		
		// Output the template
		$('#b-list-append').html(rendered);
	});

});