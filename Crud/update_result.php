<?php
	$id = $_GET["id"];
	$f0 = $_GET["f0"];
	$f1 = $_GET["f1"];

	require_once('db_connect.php');
	$connect = mysqli_connect( HOST, USER, PASS, DB )
		or die("Can not connect");

	$query 	= "UPDATE t0 SET f0='$f0', f1='$f1' WHERE id = $id";
	echo $query;

	mysqli_query( $connect, $query )
		or die("Can not execute query");

	echo "<p>Record updated:<br> f0 = $f0 <br> f1 = $f1";

	echo "<p><a href=read.php>READ all records</a>";
?>