    <?php
    require "ApiHandler.php";
    
    $apiHandler = new RequestHandler();
    
    $apiHandler->loadEnv();
    
    $imgData = $apiHandler->SearchPhoto(1, "tree", 30);
    
    ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bildsök</title>
    <link rel="stylesheet" href="index.css">
    <script src="apiWrapper.js"></script>
    <script src="index.js" defer></script>

</head>
<body>
    <div>

        <div id="main">
            <div class="main_container">


                <div class="topbar"> 
                    <input id="search_top" name="q" type="search" placeholder="Sök" />

                </div>

                <div class="image_box">

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
</body>
</html>
