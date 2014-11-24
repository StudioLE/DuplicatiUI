$(function() {


	/*$('.b-title').hover(function(e) {
		if( ! $(this).hasClass('active')) {
			var b_id = $(this).attr('id').substr(4);
			$('#b-s-' + b_id).show();
		}
	}, function() {
		if( ! $(this).hasClass('active')) {
			var b_id = $(this).attr('id').substr(4);
			$('#b-s-' + b_id).hide();
		}
	});*/


/*
	// Title click
*/

	$('.b-title').click(function(e) {
		close_all();
		if( ! $(this).hasClass('active')) {
			var b_id = $(this).attr('id').substr(4);
			$('#b-s-' + b_id).fadeIn();
			$(this).addClass('active');
		}
	});


/*
	// Edit click
*/

	$('a[rel="edit"], a[rel="operations"]').click(function(e) {
		e.stopPropagation();
		var b_title = $(this).parents('.b-title');
		var b_id = $(this).attr('href').substr(1);
		var method = $(this).attr('rel').substr(0,1);

		console.log('edit');
	
		b_title.addClass('active');
		$('#b-s-' + b_id).show(0, function(){
			$('#b-' + method + '-' + b_id).slideDown().position({
				my: 'right top',
				at: 'right bottom',
				of: '#b-s-' + b_id
			});
		});
	});

	$('a[rel="panel"]').click(function(e) {
		e.stopPropagation();
		var p_id = $(this).attr('href').substr(1);
		$('#b-' + p_id).slideDown();
		$(this).hide();
	});


	function close_all(type) {
		if(type) {
			$('.b-' + type).hide();
		}
		else {
			$('.b-status, .b-edit, b-operations').hide();
			$('.b-title').removeClass('active');
		}
	}

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
			}
		}, 500);
}

});