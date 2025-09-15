class ApiWrapper {

    constructor(){

    }

    SearchImages(query, pageNum = 1, perPage = 30, orderBy = "relevant", orientation) {
        if(orientation != null){
            var apiUrl = "Api/searchImages.php?query=" + query + "&pageNum=" + pageNum + "&perPage=" + perPage + "&orderBy=" + orderBy + "&orientation=" + orientation
        }
        else{
            var apiUrl = "Api/searchImages.php?query=" + query + "&pageNum=" + pageNum + "&perPage=" + perPage + "&orderBy=" + orderBy
        }

        fetch(apiUrl)
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON response
            })
            .then(data => {
            console.log(data);
            return data
            })
            .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            });
    }    
    
    GetRandomImages(count = 30, query, orientation) {
        var apiUrl = "Api/getRandomImages.php?count=" + count
        
        if(query != null){
            apiUrl + "&query=" + query
        }

        if(orientation != null){
            apiUrl + "&orientation=" + orientation
        }

        fetch(apiUrl)
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON response
            })
            .then(data => {
            console.log(data);
            return data
            })
            .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            });
    }

    GetPhotoData(photoID){
        fetch("Api/getPhotoData.php?photoID=" + photoID)
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON response
            })
            .then(data => {
            console.log(data);
            return data
            })
            .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            });
    }
}