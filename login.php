<?php 
    require "db.php";
    require "user.php";

    if(isset($_POST["submit"])) {
        $name = $_POST["name"];
        $number = $_POST["number"];
        $user = new user();
        $user->insertuser($name, $number);
    }

?>