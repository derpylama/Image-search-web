class ApiWrapper {

    constructor(){

    }

    SearchImages(query, pageNum = 1, perPage = 30, orderBy = "relevant", orientation = "") {
        if(orientation != ""){
            var apiUrl = "api/searchimages.php?query=" + query + "&pageNum=" + pageNum + "&perPage=" + perPage + "&orderBy=" + orderBy + "&orientation=" + orientation
        }
        else{
            var apiUrl = "api/searchimages.php?query=" + query + "&pageNum=" + pageNum + "&perPage=" + perPage + "&orderBy=" + orderBy
        }

        return fetch(apiUrl)
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON response
            })
            .then(data => {
            return data
            })
            .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            });
    }    
    
    GetRandomImages(count = 30, query, orientation) {
        var apiUrl = "api/getrandomimages.php?count=" + count
        
        if(query != null){
            apiUrl + "&query=" + query
        }

        if(orientation != null){
            apiUrl + "&orientation=" + orientation
        }

        return fetch(apiUrl)
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON response
            })
            .then(data => {
            
            return data
            })
            .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            });
    }

    GetPhotoData(photoID){
        return fetch("api/getphotodata.php?photoID=" + photoID)
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON response
            })
            .then(data => {
            
            return data
            })
            .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            });
    }
}