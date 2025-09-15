    <?php
    require "ApiHandler.php";
    
    $apiHandler = new RequestHandler();
    
    $apiHandler->loadEnv();

    
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


                <div id="topbar"> 
                    <div class="top_button_container">
                        
                    </div>
                    <input id="search_top" name="q" type="search" placeholder="Sök" />
                    
                    <div class="top_button_container">
                        <select name="sort" id="select_sort">
                            <option value="relevant">Relevant</option>
                            <option value="latest">Latest</option>
                        </select>
                        <select name="sort" id="select_sort">
                            <option value="landscape">Landscape</option>
                            <option value="portrait">Portrait</option>
                            <option value="squareish">Squareish</option>

                        </select>

                    </div>
                    

                    </div>
                </div>
                <div class="image_box">

                </div>
            </div>
            

        </div>

    </div>
</body>
</html>
