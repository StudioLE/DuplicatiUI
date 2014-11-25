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
	backup_edit_sections: [
		{
			id: 'name',
			label: 'Name',
			content: 'My Docs'
		},
		{
			id: 'folders',
			label: 'Folders',
			content: 'C:\\...\\Work\\, C:\\...\\Finances\\'
		},
		{
			id: 'destination',
			label: 'Destination',
			content: 'S3 Bucket: backups'
		},
		{
			id: 'schedule',
			label: 'Schedule',
			content: 'Daily at 1pm'
		},
		{
			id: 'options',
			label: 'Options',
			content: 'None specified'
		}
	]
};