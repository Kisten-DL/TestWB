<?php 
$link = new mysqli("127.0.0.1", "root", "", "people");

if ($link->connect_errno) {
    printf("Не удалось подключиться: %s\n", $link->connect_error);
    exit();
}

$get = filter_input(INPUT_POST, 'get');

if ($get=='true'){
	if ($data = $link->query("SELECT * FROM `about`")){
		$result = array();
		while($res = $data->fetch_assoc()){
			$result[] = $res;
		}
	
		if(!empty($result)){
			echo json_encode($result);
		}
	} else {
		echo 'fetcherror';
	}
}

