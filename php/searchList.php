<?php

    require_once 'connect.php';
    
    //var_dump($_SESSION);
    if(!isset($_SESSION['customer_id'])){
        exit();
    }

    $customer_id = $_SESSION['customer_id'];
    $result = $mysql->query("SELECT `product`, `list_id` FROM `list` WHERE `customer_id` = '$customer_id'");
    
    
    
    
    $list_arr = array();
    while($list = $result->fetch_assoc())
    {
        $list_arr[$list['list_id']] = $list['product'];
        
    }
    die(json_encode($list_arr));

    
    $mysql->close();
    
    exit();
        
?>