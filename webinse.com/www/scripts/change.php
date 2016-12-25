<?php
//* http://php.net/manual/ru/function.mysqli-connect.php
$link = new mysqli("127.0.0.1", "root", "", "people");

if ($link->connect_errno) {
    printf("Не удалось подключиться: %s\n", $link->connect_error);
    exit();
}
$firstname = filter_input(INPUT_POST, 'firstname', FILTER_SANITIZE_SPECIAL_CHARS);
$lastname  = filter_input(INPUT_POST, 'lastname', FILTER_SANITIZE_SPECIAL_CHARS);
$email     = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_SPECIAL_CHARS);
$id 	=filter_input(INPUT_POST, 'id', FILTER_SANITIZE_SPECIAL_CHARS); 

if (!empty($firstname) && !empty($lastname) && !empty($email) && !empty($id)) {
    if ($link->query("UPDATE  `people`.`about` SET  `first_name` =  '$firstname',`last_name` =  '$lastname',`email` =  '$email' WHERE  `about`.`id` =$id;")
        === TRUE) {
        unset($_POST, $email, $lastname, $firstname,$id);
        echo "success";
    } else {
		echo "dberror";
        exit();
    }
} else {
	echo "fieldserror";
}