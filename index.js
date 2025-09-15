var search_input = document.getElementById("search_top")
var main_body = document.getElementsByClassName("main_container")[0]





var image_box_list = document.getElementsByClassName("image_box")[0]
var p = document.createElement("p4")

p.innerText = "Country of origin:"












image_box_list.addEventListener('click', (event) => {
    console.log(event.target.tagName)
    var large_image_box = document.createElement("div")
    large_image_box.classList = ("border_radius_large large_box")

    var image_var = document.createElement("img")
    var image = event.target.src

    var text_container = document.createElement("div")
    text_container.classList = ("text_image_container")
    text_container.appendChild(p)
    

    image_var.src = image
    if (document.getElementsByClassName("large_box")[0] != null) {
        main_body.removeChild(document.querySelector(".large_box"))
    }
    
    if (event.target.tagName == "IMG") {
        large_image_box.appendChild(image_var)
        large_image_box.appendChild(text_container)
        main_body.appendChild(large_image_box)
    }
    


}

)
window.onload = function () {
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
    });
}
