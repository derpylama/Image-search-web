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
                    <!--Used for filling the left side of the topbar-->
                    <div class="top_button_container"></div>
                    <!--Topbar search bar-->
                    <input id="search_top" name="q" type="search" placeholder="Sök" />
                    <!--The right side topbar container used for sort dropdown buttons-->
                    <div class="top_button_container">
                        <select name="sort" id="select_sort">
                            <option value="relevant">Relevant</option>
                            <option value="latest">Latest</option>
                        </select>
                        <select name="searchBy" id="frame_sort">
                            <option value="all">&#9675All</option>
                            <option value="landscape">&#9645Landscape</option>
                            <option value="portrait">&#9647Portrait</option>
                            <option value="squareish">&#9635Squareish</option>
                        </select>
                    </div>



                </div>
                <!--Search result image container -->
                <div class="image_box">
                </div>
            </div>
        </div>
    </div>
</body>
</html>
