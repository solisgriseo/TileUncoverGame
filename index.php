<?php 
    require "db.php";
    require "user.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div id="title">
            <h3>Tile Game</h3>
        </div>
        <div id="buttons">
            <button onclick="startGame()">Start Game</button>
        </div>
        <div id="timer">
            <p>0:00</p>
        </div>
    </header>
    <main>
        <section>
            <div class="card" onclick="changeBG(this)" id="card1"></div>
            <div class="card" onclick="changeBG(this)" id="card2"></div>
            <div class="card" onclick="changeBG(this)" id="card3"></div>
            <div class="card" onclick="changeBG(this)" id="card4"></div>
            <div class="card" onclick="changeBG(this)" id="card5"></div>
            <div class="card" onclick="changeBG(this)" id="card6"></div>
            <div class="card" onclick="changeBG(this)" id="card7"></div>
            <div class="card" onclick="changeBG(this)" id="card8"></div>
            <div class="card" onclick="changeBG(this)" id="card9"></div>
            <div class="card" onclick="changeBG(this)" id="card10"></div>
        </section>
    </main>
    <div id="log">
        <form action="#" method="POST">
            <h1>TILE GAME</h1>
            <div id="form_layout">
                <input type="text" name="name" placeholder="Enter Your Name...">
                <input type="number" name="number" placeholder="Enter your Contact Number...">
            </div>
            <button type="submit" name="submit" onclick="startGame()">Start Game</button>
            <?php

            if(isset($_POST["submit"])) {
                $name = $_POST["name"];
                $number = $_POST["number"];
                $user = new user();
                $user->insertuser($name, $number);
            }

            ?>
        </form>
    </div>
</body>
<script src="logic.js"></script>
</html