<?php
	$f0 = $_GET["f0"];
	$f1 = $_GET["f1"];

	require_once('db_connect.php');
	$connect = mysqli_connect( HOST, USER, PASS, DB )
		or die("Can not connect");

	mysqli_query( $connect, "INSERT INTO t0 VALUES ( '', '$f0', '$f1' )" )
		or die("Can not execute query");

	echo "Record inserted:<br> f0 = $f0 <br> f1 = $f1";

	echo "<p><a href=read.php>READ all records</a>";
?>