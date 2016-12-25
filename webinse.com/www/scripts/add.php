<?php

$link = new mysqli("127.0.0.1", "root", "", "people");

if ($link->connect_errno) {
    printf("Не удалось подключиться: %s\n", $link->connect_error);
    exit();
}

$firstname = filter_input(INPUT_POST, 'firstname', FILTER_SANITIZE_SPECIAL_CHARS);
$lastname  = filter_input(INPUT_POST, 'lastname', FILTER_SANITIZE_SPECIAL_CHARS);
$email     = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_SPECIAL_CHARS);

if (!empty($firstname) && !empty($lastname) && !empty($email)) {
    if ($link->query("INSERT INTO `people`.`about` (`id`, `first_name`, `last_name`, `email`) VALUES (NULL, '$firstname', '$lastname', '$email');")
        === TRUE) {
		$id = mysqli_insert_id($link);
		echo json_encode (array('res'=>'success','id'=>$id));
        unset($_POST, $email, $lastname, $firstname);
      //  echo "success";
    } else {
		echo json_encode (array('res'=>'dberror','id'=>0));
        exit();
    }
} else {
	echo json_encode (array('res'=>'fieldserror','id'=>0));
}

mysqli_close($link);