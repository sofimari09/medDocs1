<?php
    require_once 'connect.php';
    
    $customer_id = $_SESSION['customer_id'];
    
    $result = $mysql->query("SELECT * FROM `customer` WHERE `customer_id` = '$customer_id'");
    $customer = $result->fetch_assoc();
    
    if($customer)
    {
        $first_name = $customer['first_name'];
        $last_name = $customer['last_name'];
        $birth = $customer['birthday'];
        $email = $customer['mail'];
        $short_bio = $customer['short_bio'];
        $favoritefood = $customer['favoriteFood'];


        die(json_encode(['first_name' => $first_name,
                         'last_name' => $last_name,
                         'birth' => $birth,
                         'email' => $email,
                         'short_bio' => $short_bio,
                         'favoritefood' => $favoritefood
                        ]));
    }
    else{
        die("Виникла помилка");
    }
    $mysql->close();
    
    exit();
        
?>