<?php
require "../apihandler.php";
header('Content-Type: application/json');

$handler = new RequestHandler();

try{
    if(isset($_GET["photoID"])){
        $data = $handler -> GetPhotoData($_GET["photoID"]);
        http_response_code(200);
        echo json_encode($data);
    }
    else{
        throw new Exception("photoID was not sent in get request");
    }

    
}
catch(Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage(),
        "code" => $e->getCode()
    ]);
}


?>