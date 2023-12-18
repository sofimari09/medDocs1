<?php

   require_once 'connect.php';

   foreach ( $_COOKIE as $key => $value )
   {
        
       setcookie( $key, '', time() - 3600 * 24, '/' );
   }

?>