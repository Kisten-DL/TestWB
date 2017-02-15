<?php
//* http://php.net/manual/ru/function.mysqli-connect.php
$link = new mysqli("127.0.0.1", "root", "", "people");

if ($link->connect_errno) {
    printf("Не удалось подключиться: %s\n", $link->connect_error);
    exit();
}
//НИКОГДА НЕ ИСПОЛЬЗУЙ GET ДЛЯ РЕГИСТРАЦИИ ИЛИ ПОДОБНОГО РОДА ВЕЩЕЙ, ПРОЧИТАЙ РАЗНИЦУ МЕЖДУ GET И POST!
$firstname = filter_input(INPUT_POST, 'firstname', FILTER_SANITIZE_SPECIAL_CHARS);
$lastname  = filter_input(INPUT_POST, 'lastname', FILTER_SANITIZE_SPECIAL_CHARS);
$email     = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_SPECIAL_CHARS);
$address     = filter_input(INPUT_POST, 'address', FILTER_SANITIZE_SPECIAL_CHARS);
$phone     = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS);

if (!empty($firstname) && !empty($lastname) && !empty($email)) {
    if ($link->query("INSERT INTO `people`.`about` (`id`, `first_name`, `last_name`, `email`, `address`, `phone`) VALUES (NULL, '$firstname', '$lastname', '$email', '$address', '$phone');")
        === TRUE) {
		$id = mysqli_insert_id($link);
		echo json_encode (array('res'=>'success','id'=>$id));
        unset($_POST, $email, $lastname, $firstname,$phone,$address);
      //  echo "success";
    } else {
		echo json_encode (array('res'=>'dberror','id'=>0));
        exit();
    }
} else {
	echo json_encode (array('res'=>'fieldserror','id'=>0));
}

mysqli_close($link);