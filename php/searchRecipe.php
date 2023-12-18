<?php
    require_once 'connect.php';

    
    $result = $mysql->query("SELECT * FROM `recipe`");
    //$recipe = $result->fetch_assoc();
    
    $recipe_arr = array();
    while($recipe = $result->fetch_assoc())
    {
        $recipe_name1 = $recipe['recipe_name'];
        $instruction = $recipe['instruction'];
        $photo = $recipe['photo'];
        $ingred = json_decode($recipe['ingredients']);
        $list_arr[$recipe['recipe_id']] = ['recipe_name' => $recipe_name1,
                         'ingredients' => $ingred,
                         'instruction' => $instruction,
                         'photo' => $photo];
    }
    //var_dump($list_arr);
    die(json_encode($list_arr));
    $mysql->close();
    
    exit();
        
?>