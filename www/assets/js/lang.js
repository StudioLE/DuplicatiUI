var lang = {

	/**
	 * Options to append to backups list
	 */
	backup_list_append: [
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
	],
	
	/**
	 * Sections and form elements for backup edit
	 */	
	backup_edit: [
		{
			id: 'name',
			label: 'Name',
			content: 'My Docs',
			section: [
				{
					'label': 'DOCS',
					'text': true
				}
			]
		},
		{
			id: 'folders',
			label: 'Folders',
			content: 'C:\\...\\Work\\, C:\\...\\Finances\\',
			section: [
				{
					'label': 'FOLDERS',
					'text': true
				}
			]
		},
		{
			id: 'destination',
			label: 'Destination',
			content: 'S3 Bucket: backups',
			section: [
				{
					'label': 'Destination',
					'select': true,
					'options': [
						'S3 Compatible',
						2, 3, 4, 5
					]
				},
				{
					'label': 'Server Name',
					'text': true
				},
				{
					'label': 'AWS Secret Key',
					'text': true
				},
				{
					'label': 'Bucket Name',
					'text': true
				},
				{
					'label': 'Bucket Region',
					'select': true,
					'options': [
						'US-1',
						'US-2',
						'EU',
						2, 3, 4, 5
					]
				},
				{
					'label': 'Use RRS',
					'checkbox': true
				}
			]
		},
		{
			id: 'schedule',
			label: 'Schedule',
			content: 'Daily at 1pm',
			section: [
				{
					'label': 'SCHEDULE',
					'text': true
				}
			]
		},
		{
			id: 'options',
			label: 'Options',
			content: 'None specified',
			section: [
				{
					'label': 'OPTIONS',
					'text': true
				}
			]
		}
	]
};