<?php

    require_once 'connect.php';
    //$request_body = file_get_contents('php://input');
    //$data = json_decode($request_body, true);
    //$data = $data['edit'];
    //var_dump($data);

    //$short_bio = $data['short_bio'];
    //$favoriteFood = $data['fFood'];
    
    $customer_id = $_SESSION['customer_id'];
    
    $result = $mysql->query("SELECT * FROM `list` WHERE `customer_id` = '$customer_id'");
    
    if($recipe)
    {
        $list = $result->fetch_assoc();
        $product = $list['product'];
        die(json_encode(['products' => $product]));
    }
    else{
        die("Продуктів не знайдено");
    }
  
    $mysql->close();
    
    exit();

?>