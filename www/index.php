
<!DOCTYPE html>
<html lang="en">
<head>
<title>Duplicati</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
<link rel="stylesheet/less" href="/assets/css/duplicati2.less">
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.0.0/less.min.js"></script>
<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<link rel="shortcut icon" href="/assets/icons/duplicati-favicon.png">
<link rel="apple-touch-icon-precomposed" href="/assets/icons/duplicati-touch-icon.png">
<link rel="author" href="/humans.txt" type="text/plain">
</head>
<body>

<div class="slate">
<div class="limit">

	<div class="head"></div>

<div class="container-fluid">

	<!-- 
			// Status bar
	 -->

	<div class="row process-bar">
		<div class="col-xs-1">
			BLANK
		</div>
		<div class="col-xs-3">
			<div class="valign">
				<span>Running</span> <span class="title">My Docs</span>
			</div>
		</div>
		<div class="col-xs-7">
			<div id="percent"></div>
			<div class="valign right">
				<span id="files-remain">1452</span> files, <span id="gb-remain">2.01</span> GB remaining
			</div>
		</div>
	</div> <!-- .row -->

	<!-- 
			// Backups list
	 -->

<?php 

$b_id = 0;

foreach(array(
	array('My Docs', 'running'),
	array('Secret Documents', 'scheduled for 1pm tomorrow'),
	array('Photos 2014', 'scheduled for 6pm friday'),
	array('Movies', 'not scheduled'),
) as $b):

$b_id++; ?>

	<div class="row">

	 	<!-- // Backup title -->
		<div class="col-sm-offset-1 col-sm-5 b-title" id="b-t-<?=$b_id?>">
			<div class="valign right">
				<span class="title">
					<?=$b[0]?>
				</span>
				<span>
					<?=$b[1]?>
				</span>
				<span>
					<a href="#<?=$b_id?>" rel="edit"><i class="fa fa-pencil-square-o"></i></a><a href="#<?=$b_id?>" rel="operations"><i class="fa fa-cog"></i></a>
				</span>
			</div> <!-- .valign -->
		</div>

		<!-- // Backup status -->
		<div class="col-sm-5 b-status" id="b-s-<?=$b_id?>">
			<div class="valign">
				<div>
					<span class="l">Last backup</span> <span>23 hours, 15 minutes ago</span>
				</div>
				<div>
					<span class="l">Changes</span> <span>2 files, 15 MB</span>
				</div>
				<div>
					<span class="l">Total</span> <span>271 files, 365 MB</span>
				</div>
			</div>
		</div>

		<!-- // Backup close -->
		<!--div class="col-sm-1 b-close" id="b-c-<?=$b_id?>">
		</div-->

		<!-- // Backup edit -->
		<div class="col-sm-5 b-edit" id="b-e-<?=$b_id?>">
			<div>
				<span class="l">Name</span> <span>My Docs</span>
			</div>
			<div>
				<span class="l">Folders</span> <span>C:\...\Work\, C:\...\Finances\,</span>
			</div>
			<div>
				<span class="l">Destination</span> <span>S3 Bucket: backups</span>
			</div>
			<div class="b-panel">
				<div class="">
					<label for="i1">Destination</label>
					<select id="i2">
					  <option>S3 Compatible</option>
					  <option>2</option>
					  <option>3</option>
					  <option>4</option>
					  <option>5</option>
					</select>
				</div>
				<div class="">
					<label for="i2">Server Name</label>
					<input type="text" id="i2">
				</div>
				<div class="">
					<label for="i3">AWS Access ID</label>
					<input type="text" id="i3">
				</div>
				<div class="">
					<label for="i4">AWS Secret Key</label>
					<input type="password" id="i4">
				</div>
				<div class="">
					<label for="i5">Bucket Name</label>
					<input type="text" id="i5">
				</div>
				<div class="">
					<label for="i6">Bucket Region</label>
					<select id="i2">
					  <option>US-1</option>
					  <option>US-2</option>
					  <option>EU</option>
					  <option>4</option>
					  <option>5</option>
					</select>
				</div>
				<div class="">
					<label for="i2">Use RRS</label>
					<input type="checkbox">
				</div>
			</div>
			<div>
				<span class="l">Schdule</span> <span>Daily at 1pm</span>
			</div>
			<div>
				<span class="l">Options</span> <span>None specified</span>
			</div>

		</div>

		<!-- // Backup operations -->
		<div class="col-sm-5 b-edit" id="b-o-<?=$b_id?>">			
				<div>
					<span class="l">Backup</span> <a href="">Run now</a>
				</div>
				<div>
					<span class="l"></span> <a href="">Restore files</a>
				</div>
				<div>
					<span class="l"></span> <a href="">Export</a>
				</div>
				<div>
					<span class="l"></span> <a href="" class="warn">Delete</a>
				</div>		
				<div>
					<span class="l">Advanced</span> <a href="">Verify backup files</a>
				</div>
				<div>
					<span class="l"></span> <a href="">Repair local database</a>
				</div>
				<div>
					<span class="l"></span> <a href="" class="warn">Delete local database</a>
				</div>
				<div>
					<span class="l">Reporting</span> <a href="">Show log</a>
				</div>
				<div>
					<span class="l"></span> <a href="">Create bug report</a>
				</div>
		</div>


	</div> <!-- .row -->

<?php endforeach; ?>

	<!-- 
			// Options list
	 -->

<?php 

foreach(array(
	array('Add new backup', 'plus'),
	array('Import backup job', 'reply'),
	array('Restore from target', 'crosshairs'),
) as $b):

$b_id++; ?>

<div class="row">

	 	<!-- // Backup title -->
		<div class="col-sm-offset-1 col-sm-5 b-title-sm" id="b-t-<?=$b_id?>">
			<div class="valign">
				<span class="title">
					<i class="fa fa-<?=$b[1]?>"></i> &nbsp; <?=$b[0]?>
				</span>
			</div> <!-- .valign -->
		</div>

	</div> <!-- .row -->

<?php endforeach; ?>

	
</div> <!-- .container-fluid -->
</div> <!-- .limit -->
</div> <!-- .slate -->



<!-- 
		// Footer
 -->

<div id="foot">
	<div class="valign">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xs-offset-1 col-xs-5">
					<a href="">Duplicati</a>
				</div>
				<div class="col-xs-5 right">
					<a href=""><i class="fa fa-facebook-square"></i></a>
					<a href=""><i class="fa fa-google-plus"></i></a>
					<a href=""><i class="fa fa-github-alt"></i></a>
					<a href=""><i class="fa fa-paypal"></i></a>
					<a href=""><i class="fa fa-btc"></i></a>
				</div>
			</div> <!-- .row -->
		</div> <!-- .container-fluid -->
	</div> <!-- .valign -->
</div> <!-- .foot -->



<!-- 
		// Javascript
 -->

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
<script src="/assets/js/ui.js"></script>

</body>
</html>