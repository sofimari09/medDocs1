<?php
    require_once 'connect.php';
    //require_once 'list.php';
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $data = $data['uplist'];
    var_dump($data);

    $product = $data['product'];
    $id = $data['id'];
    //$list_id = $id['list_id'];
    //$customer_id = $_SESSION['customer_id'];
    //$customer_id = mysqli_select_id($mysql);
    //$customer_id = mysql->query("SELECT customer_id FROM `customer`")
    $result1 = $mysql->query("UPDATE `list` SET `product` = '$product' WHERE `list_id` = '$id'");
    if(!$result1)
    {
        die("Змінення продукту не вдалося");
        $mysql->close();
    
        exit();
        
    }
    if($result1)
    {
        die("Продукт успішно змінений");
        $mysql->close();
    
        exit();
        
    }
    $mysql->close();

    exit();

?>