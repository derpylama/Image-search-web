<?php
require "../apihandler.php";
header('Content-Type: application/json');

$handler = new RequestHandler();

try{
    if(isset($_GET["query"]) && isset($_GET["pageNum"]) && isset($_GET["perPage"]) && isset($_GET["orderBy"]) && isset($_GET["orientation"])){
        $query = $_GET["query"];
        $pageNum = (int)$_GET["pageNum"];
        $perPage = (int)$_GET["perPage"];

        $data = $handler->SearchPhoto($pageNum, $query, $perPage, $_GET["orderBy"], $_GET["orientation"]);
        echo json_encode($data);
    }
    else if(isset($_GET["query"]) && isset($_GET["pageNum"]) && isset($_GET["perPage"]) && isset($_GET["orderBy"])){
        $query = $_GET["query"];
        $pageNum = (int)$_GET["pageNum"];
        $perPage = (int)$_GET["perPage"];

        $data = $handler->SearchPhoto($pageNum, $query, $perPage, $_GET["orderBy"]);
        echo json_encode($data);
    }
    else
    {
        echo json_encode([
            "status" => "error",
            "message" => "Missing parameter in request",
            "code" => 400
        ]);
    }

}
catch(Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage(),
        "code" => $e->getCode()
    ]);
}