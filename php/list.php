<?php
    require_once 'connect.php';

    //require 'auth.php';
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $data = $data['list'];

    $product = $data['text'];
    //var_dump($_SESSION);
    $customer_id = $_SESSION['customer_id'];
    //$customer_id = mysqli_select_id($mysql);
    //$customer_id = mysql->query("SELECT customer_id FROM `customer`")
    $result1 = $mysql->query("INSERT INTO `list` ( `product`, `customer_id` )
    VALUES( '$product','$customer_id')");

    //$result2 = $mysql->query("SELECT * FROM `list` WHERE `product` = '$product' AND `customer_id` = '$customer_id'");
    //$list = $result2->fetch_assoc();
    //$list_id = $list['list_id'];

    if(!$result1)
    {
        die("Додавання продукту не вдалося");
        $mysql->close();
    
        exit();
        
    }
    if($result1)
    {
        $result2 = $mysql->query("SELECT * FROM `list` WHERE `product` = '$product' AND `customer_id` = '$customer_id'");
        $list = $result2->fetch_assoc();
        //$_SESSION['list_id'] = $list['list_id'];
        //$list_id = $list['list_id'];
        //$product1 = $list['product'];
        $list_arr = array();
        $list_arr[$list['list_id']] = $list['product'];
        die(json_encode($list_arr));
        //die(json_encode(['list_id' => $list_id,
         //               'product' => $product1]));
        $mysql->close();
    
        exit();
        
    }
?>