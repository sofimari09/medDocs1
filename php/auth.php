<?php
require_once 'connect.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$data = $data['customer'];
//var_dump($data);
if (!isset($data['email'])) {
    die('Enter email');
}
if (!isset($data['password'])) {
    die('Enter password');
}
$email = $data['email'];
$password = $data['password'];

$password = md5($password . "wqdjkas123d");

$result = $mysql->query("SELECT * FROM `customer` WHERE `mail` = '$email' AND `password` = '$password'");
$customer = $result->fetch_assoc();

if (!$customer) {
    print("Такого користувача не знайдено");
} else {
    $_SESSION['customer_id'] = $customer['customer_id'];
    $result_response = json_encode($customer);
    setcookie('customer', $customer['first_name'], time() + 3600 * 24, "/");
    print("Успішна авторизація");
}
$mysql->close();
exit();
