const searchInput = document.querySelector('.search_top');

var wrapper = new ApiWrapper()

/*
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const searchValue = searchInput.value;
        console.log('Sökterm:', searchValue);
    }
});*/

var search_input = document.getElementById("search_top")
var main_body = document.getElementsByClassName("main_container")[0]


var large_image_box = document.createElement("div")

large_image_box.classList = ("border_radius_large large_box")


var image_box_list = document.getElementsByClassName("image_box")[0]
var p = document.createElement("p4")
p.innerText = "Country of origin:"
large_image_box.appendChild(p)




search_input.addEventListener("input", (event) => {
    var search_query = event.target.value
    main_body.appendChild(large_image_box)

    console.log(search_query)

    var data = wrapper.SearchImages(search_query, 1, 30, "relevant")

    console.log(data)
    /*
    fetch('Api/searchImages.php?query=cat&pageNum=1&perPage=30')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse JSON response
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });*/
}

)

image_box_list.addEventListener('click', (event) => {
    console.log(event.target.tagName)
    var image_var = document.createElement("img")
    var image = event.target.src

    image_var.src = image
    if (event.target.tagName == "IMG") {
        large_image_box.appendChild(image_var)
        
        main_body.appendChild(large_image_box)
        


        
    }
    


}

)