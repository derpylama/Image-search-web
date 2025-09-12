    <?php
    require "ApiHandler.php";
    
    $apiHandler = new RequestHandler();
    
    $apiHandler->loadEnv();
    
    $imgData = $apiHandler->GetPhotoData("Nyvq2juw4_o");
    
    ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bildsök</title>
    <link rel="stylesheet" href="index.css">
    <script src="index.js"></script>
</head>
<body>
    <div>

        <div id="main">
            <div class="main_container">


                <div class="topbar"> 
                    <input class="search_top" name="Sök" type="search" />
                </div>

                <div class="image_box">
                    <?php
                    foreach ($imgData["results"] as $img){
                        echo "<div><img src=" . $img["urls"]["thumb"] . "></div>";
                    }
                    ?>
                    <div>
                        <img src="bilder/waves.jpg">

                    </div>
                    <div>
                        <img src="bilder/Landskapsbild.png">
                    </div>
                    <div>
                        <img src="bilder/Katt.jpg">

                    </div>
                    <div>
                        <img src="bilder/Fönsterbräda sktech sida.PNG">
                    </div>
                    <div>5</div>
                    <div>6</div>
                </div>
            </div>
            

        </div>

    </div>

    <?php 
    echo "Bild" . "\n";
    echo "Php print"
    
    ?>
</body>
</html>
