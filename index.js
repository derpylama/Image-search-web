
const searchInput = document.querySelector('#search_top');

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




var image_box_list = document.getElementsByClassName("image_box")[0]
var p = document.createElement("p4")

p.innerText = "Country of origin:"




search_input.addEventListener("keydown", (event) => {
  if (event.key === 'Enter') {
    var search_query = event.target.value

    const query = document.querySelector("#search_top").value;
    fetch(`Api/searchImages.php?query=${encodeURIComponent(query)}&pageNum=1&perPage=30`)




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
    });
}*/


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
        
      main_body.appendChild(large_image_box)
        
      

      

        large_image_box.appendChild(image_var)
        large_image_box.appendChild(text_container)
        main_body.appendChild(large_image_box)

    }
    
    

  }
)

/*
class dropMenu {
  constructor() {

  }


}






const dropdown = document.querySelector(".dropdown_menu")




function clicked_dropdown() {
  console.log(dropdown.classList)
  if (dropdown.classList.contains("display_container")) {
    console.log("Removed")
    dropdown.classList.remove("display_container")

  }
  else {
    dropdown.classList += (" display_container")
    console.log("Added class")
  }
  console.log(dropdown.classList)

}

function clickedDropdown(menuId) {
  var dropdownMenu = getElementById(menuId)

}


*/

/*
window.onclick = function(event) {
  if (!event.target.matches("select_button_dropdown")) {
    dropdown_elements = document.getElementsByClassName("dropdown_menu")
    var i
    for (i = 0; i <dropdown_elements.length; i++) {
      if (dropdown_elements[i].classList.contains("display_container")) {
        dropdown_elements[i].classList.remove("display_container")
      }
    }
  }
}
*/