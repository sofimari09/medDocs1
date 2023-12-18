<?php

 require_once 'connect.php';
 
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$data = $data['customer'];
//var_dump($data);
if (!isset($data['first_name'])) {
  die('Enter first_name');
}
if (!isset($data['last_name'])) {
  die('Enter last_name');
}
if (!isset($data['birth'])) {
  die('Enter birth');
}
if (!isset($data['email'])) {
    die('Enter email');
}
if (!isset($data['password'])) {
    die('Enter password');
}

 $first_name = $data['first_name'];
 $last_name = $data['last_name'];
 $birth = $data['birth'];
 $email = $data['email'];
 $password = $data['password'];

 $password = md5($password."wqdjkas123d");

 $mysql->query("INSERT INTO `customer` ( `first_name`, `last_name`, `birthday`, `mail`, `password`)
 VALUES('$first_name', '$last_name', '$birth', '$email', '$password')");

 $mysql->close();
 exit();
 ?>