<?php
//* http://php.net/manual/ru/function.mysqli-connect.php
$link = new mysqli("127.0.0.1", "root", "", "people");

if ($link->connect_errno) {
    printf("Не удалось подключиться: %s\n", $link->connect_error);
    exit();
}

$id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_SPECIAL_CHARS);

if (!empty($id)) {
    if ($link->query("DELETE FROM `people`.`about` WHERE `about`.`id` = $id;")
        === TRUE) {
        unset($_POST, $id);
        echo "success";
    } else {
		echo "dberror";
        exit();
    }
} else {
	echo "fieldserror";
}

mysqli_close($link);
