<?php
require "../ApiHandler.php";

header('Content-Type: application/json');

$handler = new RequestHandler();

try{
    if(isset($_GET["count"]) && isset($_GET["query"]) && isset($_GET["orientation"])){
        $count = $_GET["count"];
        $query = $_GET["query"];
        $orientation = $_GET["orientation"];

        $data = $handler -> GetRandomImages($count, $orientation, $query);
        http_response_code(200);
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