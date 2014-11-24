
<!DOCTYPE html>
<html lang="en">
<head>
<title>Duplicati</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
<link rel="stylesheet/less" href="assets/css/duplicati2.less">
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.0.0/less.min.js"></script>
<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<link rel="shortcut icon" href="assets/icons/duplicati-favicon.png">
<link rel="apple-touch-icon-precomposed" href="assets/icons/duplicati-touch-icon.png">
<link rel="author" href="/humans.txt" type="text/plain">
</head>
<body>

<div class="slate">
<div class="limit">

<div class="container-fluid">

	<div class="row head">
		<div class="col-sm-offset-1 col-sm-5">
			<a href="#" class="logo">Duplicati</a>
		</div>
		<div class="col-sm-5">
			<ul class="nav nav-pills">
				<li role="presentation"><a href="#pause" rel="pause"><i class="fa fa-pause"></i></a></li>
				<li role="presentation"><a href="#log" rel="log">log</a></li>
				<li role="presentation"><a href="#updates">updates</a></li>
				<li role="presentation"><a href="#options">options</a></li>
				<li role="presentation"><a href="#about">about</a></li>
			</ul>
		</div>

	</div>

	<!-- 
			// Status bar
	 -->

	<div class="row process-bar">
		<div class="col-xs-1">
			
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
			// Log
	 -->

	<div class="row" id="log">
		<div class="col-xs-offset-1 col-xs-10 log">
			<div class="row">
				<div class="col-xs-5">
					<label for="i1">Log Data</label>
					<select id="i2">
					  <option>Live</option>
					  <option>2</option>
					  <option>3</option>
					  <option>4</option>
					  <option>5</option>
					</select>
				</div>
				<div class="col-xs-5">
					<label for="i2">Log Level</label>
					<select id="i2">
					  <option>Profiling</option>
					  <option>2</option>
					  <option>3</option>
					  <option>4</option>
					  <option>5</option>
					</select>
				</div>
				<div class="col-xs-2 right">
					<a href="#" rel="log-close"><i class="fa fa-close"></i></a>
				</div>
			</div> <!-- .row -->
			<div id="log-box">
11/20/2014, 6:28:04 PM The operation List has started
11/20/2014, 6:28:04 PM Starting - ExecuteScalar: INSERT INTO “Operation” (”Description”, “Timestamp”) VALUES (?, ?); SELECT last_insert_rowid();
11/20/2014, 6:28:04 PM ExecuteScalar: INSERT INTO “Operation” (”Description”, “Timestamp”) VALUES (?, ?); SELECT last_insert_rowid(); took 00:00:00.007
11/20/2014, 6:28:04 PM Starting - ExecuteReader: SELECT “ID”, “Timestamp” FROM “Fileset” ORDER BY “Timestamp” DESC
11/20/2014, 6:28:04 PM Starting - ExecuteNonQuery: CREATE TEMPORARY TABLE “Filenames-49CD070F40E1A84AAB29C9E8381B016F” (”Path” TEXT NOT NULL)
11/20/2014, 6:28:04 PM ExecuteNonQuery: CREATE TEMPORARY TABLE “Filenames-49CD070F40E1A84AAB29C9E8381B016F” (”Path” TEXT NOT NULL) took 00:00:00.001
11/20/2014, 6:28:04 PM Starting - ExecuteNonQuery: INSERT INTO “Filenames-49CD070F40E1A84AAB29C9E8381B016F” SELECT DISTINCT “Path” FROM “File” WHERE “Path” 
“Filesets-AF71BB74915E6C45A01A43A475CED90A” AS SELECT DISTINCT “ID” AS “FilesetID”, “Timestamp” AS “Timestamp” FROM “Fileset” WHERE “Timestamp” = ? took 

			</div> <!-- #log-box -->
		</div>
	</div> <!-- .row -->

	<!-- 
			// Backups list
	 -->

	<div id="b-list">

	</div> <!-- #b-list -->

	<!-- 
			// Options list
	 -->

	<div id="b-list-append">

	</div> <!-- #b-list-append -->
	
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
<script src="//cdnjs.cloudflare.com/ajax/libs/mustache.js/0.8.1/mustache.js"></script>
<script src="assets/js/lang.js"></script>
<script src="assets/js/controller.js"></script>
<script src="assets/js/ui.js"></script>
<script src="assets/js/demo.js"></script>

</body>
</html>