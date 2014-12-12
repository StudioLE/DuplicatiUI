$(function() {

	process_bar();

	function process_bar() {
		var bar = $('#percent');
		var percent = 0;

		var files = $('#files-remain');
		var gb = $('#gb-remain');

		var files_o = Number(files.html());
		var gb_o = Number(gb.html());

		var files_c = Number(files.html());
		var gb_c = Number(gb.html());

		bar.css('left', percent);
		var interval = setInterval(function() {
			percent += 1;
			bar.css('left', percent + '%');
			gb_c = gb_o * ( (100 - percent) / 100);
			files_c = files_o * ( (100 - percent) / 100);
			gb.html(gb_c.toFixed(2));
			files.html(files_c.toFixed(0));
			if (percent >= 100) {
				clearInterval(interval);
				$('#process-status').html('Backup complete');
			}
		}, 500);
	}

});