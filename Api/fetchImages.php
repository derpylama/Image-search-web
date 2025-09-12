<?php
require "../ApiHandler.php";

header('Content-Type: application/json');

$handler = new RequestHandler();

try{
    if(isset($_GET["count"])){
        $count = $_GET["count"];
        $data = $handler -> GetRandomImages($count);
    }
    else{
        $data = $handler -> GetRandomImages();
        http_response_code(200);
    }
}
catch(Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage(),
        "code" => $e->getCode()
    ]);
}

echo json_encode($data);
?>