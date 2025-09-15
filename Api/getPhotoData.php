<?php
require "./ApiHandler.php";
header('Content-Type: application/json');

$handler = new RequestHandler();

try{
    if(isset($_GET["photoID"])){
        $data = $handler -> GetPhotoData($_GET["photoID"]);
        http_response_code(200);
    }
    else{
        throw new Exception("photoID was not sent in get request");
    }

    echo json_encode($data);
}
catch(Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage(),
        "code" => $e->getCode()
    ]);
}


?>