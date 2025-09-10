<?php
require "ApiHandler.php";

$apiHandler = new RequestHandler();

$apiHandler->loadEnv();

$imgData = $apiHandler->SearchPhoto(1, "tree");

foreach ($imgData["results"] as $img){
    echo "<img src=" . $img["urls"]["thumb"] . ">";
}
?>