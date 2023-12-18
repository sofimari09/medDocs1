<?php

    require_once 'connect.php';
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $data = $data['edit'];
    var_dump($data);

    if (!isset($data['short_bio'])) {
        die('Enter short_bio');
      }
      if (!isset($data['fFood'])) {
        die('Enter favoriteFood');
      }

    $short_bio = $data['short_bio'];
    $favoriteFood = $data['fFood'];

    $customer_id = $_SESSION['customer_id'];
    
    $result = $mysql->query("UPDATE `customer` SET `short_bio` = '$short_bio', `favoriteFood` = '$favoriteFood' WHERE `customer_id` = '$customer_id'");
    
    if($result)
    {
        die("Профіль успішно змінений");
    }
    else{
        die("Виникла помилка");
    }
  
    $mysql->close();
    
    exit();

?>