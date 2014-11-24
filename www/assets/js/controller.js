$(function() {

	/**
	 * Backups list
	 */
	// Get the template
	$.get('assets/mst/backup-list.mst', function(template) {
		// Render the template
		var rendered = Mustache.render(template, {
			'backups': [
{
	"Schedule": {
		"Time": "2014-11-25T13:00:00Z",
		"Repeat": "1D",
		"LastRun": "2014-11-24T14:42:55Z",
	},
    "Backup": {
		"ID": "1",
		"Name": "My Docs"
	}
},
{
	"Schedule": {
		"Time": "2014-11-25T13:00:00Z",
		"Repeat": "1D",
		"LastRun": "2014-11-24T14:42:55Z",
	},
    "Backup": {
		"ID": "2",
		"Name": "Secret Documents"
	}
},
{
	"Schedule": {
		"Time": "2014-11-25T13:00:00Z",
		"Repeat": "1D",
		"LastRun": "2014-11-24T14:42:55Z",
	},
    "Backup": {
		"ID": "3",
		"Name": "Photos 2014"
	}
},
{
	"Schedule": {
		"Time": "2014-11-25T13:00:00Z",
		"Repeat": "1D",
		"LastRun": "2014-11-24T14:42:55Z",
	},
    "Backup": {
		"ID": "4",
		"Name": "Movies"
	}
}
			]
		});
		
		// Output the template
		$('#b-list').html(rendered);
	});


	/**
	 * Append options to backups list
	 */
	// Get the template
	$.get('assets/mst/backup-list-append.mst', function(template) {
		// Render the template
		var rendered = Mustache.render(template, {
			'titles': [
				{
					title: 'Add new backup',
					icon: 'plus'
				},
				{
					title: 'Import backup job',
					icon: 'reply'
				},
				{
					title: 'Restore from target',
					icon: 'crosshairs'
				}
			]
		});
		
		// Output the template
		$('#b-list-append').html(rendered);
	});

});