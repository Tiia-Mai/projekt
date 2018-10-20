<?php

//
// Written by Tiia-Mai Truup / Projekt- DT173G Webbutveckling III
//
//
// POST            Creates a new resource.
// GET             Retrieves a resource.
// PUT             Updates an existing resource.
// DELETE          Deletes a resource.
//
// Database name: weatherrest, Username: root, Password: '', Table: posts 
// --------------------------------------------------------------------------------------------
// | ID (int, AI, PRIMARY KEY) | city (varchar(50)) | temp (varchar(50)) | info (varchar(50)) |
// --------------------------------------------------------------------------------------------

//
// Get HTTP method, path and input of the request
$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/',trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);

if($request[0] != "posts"){ 
	http_response_code(404);
	exit();
}

//
// Send return header information
header("Content-Type: application/json; charset=UTF-8");

$conn = mysqli_connect("localhost","root","","weatherrest") or die("Error connecting to database.");

$db_connected = mysqli_select_db($conn, "weatherrest"); // Work with the database named 'testrest' 

//
// HTTP method implementations of GET, POST, PUT and DELETE
switch ($method){
	case "GET":
		$sql = "SELECT ID, temp, info, city FROM posts";
		if(isset($request[1])) $sql = $sql . " WHERE ID = " . $request[1] . ";";
		break;
	//case "PUT":
	//	$sql = "UPDATE posts SET city = '" . $input['city'] . "', temp = '" . $input['temp'] . "', info = '" . $input['info'] . "' WHERE ID = " . $request[1] . ";";
    //	break;
	//case "POST":
		$sql = "INSERT INTO posts (city, temp, info) VALUES('".$input['city'] ."','".$input['temp']."','".$input['info']."');";
		break;

	case "DELETE":
   		$sql = "DELETE FROM posts WHERE ID = " . $request[1] . ";";
   		break;
}

//
// Always response with json array of posts except for GET /post/id
	$result = mysqli_query($conn,$sql) or die(mysqli_error($conn));

	$harr = [];
	if($method != "GET") $sql = "SELECT ID, temp, info, city FROM posts";
	$result = mysqli_query($conn,$sql) or die(mysqli_error($conn));
    while($row = mysqli_fetch_assoc($result)){
			$row_arr['ID'] = $row['ID'];
			$row_arr['city'] = $row['city'];
			$row_arr['temp'] = $row['temp'];
			$row_arr['info'] = $row['info'];
			array_push($harr,$row_arr);
	}
	mysqli_close($conn);
	
	echo json_encode($harr);

	// "SELECT posts.ID, posts.temp, city.name FROM posts INNER JOIN city ON posts.city_ID=city.ID";