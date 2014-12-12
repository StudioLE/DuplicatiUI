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
					'label': 'Name',
					'text': true
				},
				{
					'label': 'Encryption',
					'options': [
						'None', 'aes', 'gpg'
					]
				},
				{
					'label': 'Passphrase',
					'password': true
				},
				{
					'label': 'Repeat',
					'password': true
				}
			]
		},
		{
			id: 'folders',
			label: 'Folders',
			content: 'C:\\...\\Work\\, C:\\...\\Finances\\',
			section: [
				{
					'label': 'Folders',
					'text': true
				},
				{
					'label': 'Source data filters',
					'textbox': true
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
					'label': 'Schedule',
					'checkbox': true
				},
				{
					'label': 'Next time',
					'text': true
				},
				{
					'label': 'Next day',
					'text': true
				},
				{
					'label': 'Run again every',
					'text': true
				},
				{
					'label': 'Run period',
					'select': true,
					'options': [
						'hours',
						'days',
						'weeks',
						'months',
						'years'
					]
				},
				{
					'label': 'Mondays',
					'chckbox': true
				},
				{
					'label': 'Tuesdays',
					'chckbox': true
				},
				{
					'label': 'Wednesdays',
					'chckbox': true
				},
				{
					'label': 'Thursdays',
					'chckbox': true
				},
				{
					'label': 'Fridays',
					'chckbox': true
				},
				{
					'label': 'Saturdays',
					'chckbox': true
				},
				{
					'label': 'Sundays',
					'chckbox': true
				}
			]
		},
		{
			id: 'options',
			label: 'Options',
			content: 'None specified',
			section: [
				{
					'label': 'Max backup file size',
					'checkbox': true
				},
				{
					'label': 'Unit',
					'select': true,
					'options': [
						'KByte',
						'MByte',
						'GByte',
						'TByte'
					]
				},
				{
					'label': 'Keep backups',
					'select': true,
					'options': [
						'for a specific time',
						'forever',
						'a specific number',
						'months',
						'years'
					]
				},
				{
					'label': 'Keep for',
					'text': true
				},
				{
					'label': 'Unit',
					'select': true,
					'options': [
						'hours',
						'days',
						'weeks',
						'months',
						'years'
					]
				},
				{
					'label': 'Options',
					'textbox': true
				}
			]
		}
	]
};