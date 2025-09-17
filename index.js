
const imageBox = document.querySelector(".image_box");


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


search_input.addEventListener("keydown", async (event) => {
  if (event.key === 'Enter') {

    imageBox.replaceChildren();

    var search_query = event.target.value

    const query = document.querySelector("#search_top").value;

    var photos = await wrapper.SearchImages(search_query, 1, 30, "relevant")
    
    photos["results"].forEach(element => {
      
      var img = document.createElement("img")
      var div = document.createElement("div")
      var photoIDCon = document.createElement("p")
      photoIDCon.style.display = "none"
      photoIDCon.id = "photoID"


      photoIDCon.innerHTML = element["id"]

      img.src = element["urls"]["thumb"]

      div.appendChild(img)
      div.appendChild(photoIDCon)


      imageBox.appendChild(div)
    });
  }
})




document.body.addEventListener('click', async (event) => {


  
  if (event.target.tagName == "IMG" && document.querySelector(".large_box") === null) {
    //Creates the popup box
    var large_image_box = document.createElement("div")
    large_image_box.classList = ("border_radius_large large_box")
  
    var image_var = document.createElement("img")
    
    //Sets the image to the lower res tumbnail one while it waits for the api to give the higher res one
    image_var.src = event.target.src
    var text_container = document.createElement("div")
    text_container.classList = ("text_image_container")
    var image = event.target
    let photoID = null;

    //Gets the photo id from the p tag in the image div
    Array.from(image.parentElement.children).forEach(element => {
      if (element.tagName === "P") {
        photoID = element.textContent.trim();
      }
    });
    large_image_box.appendChild(image_var)
    main_body.appendChild(large_image_box)
    
    var photoData = await wrapper.GetPhotoData(photoID)
    
    var user = document.createElement("p");
    var desc = document.createElement("p")
    console.log(photoData)
    user.innerHTML = "photographer: " + photoData["user"]["first_name"]
    desc.innerHTML = photoData["description"]
    
    text_container.appendChild(user)
    text_container.appendChild(desc)
    
    image_var.src = photoData["urls"]["regular"]
    if (document.querySelector(".large_box") != null) {
      main_body.removeChild(document.querySelector(".large_box"))
    }
    large_image_box.appendChild(image_var)
    large_image_box.appendChild(text_container)
    
    main_body.appendChild(large_image_box)
    
    
    
    }
    else if (event.target.tagName === "IMG"){
      console.log("image clicked")
    }
})


function clickedOutside(element,event) {
  console.log(event.target,"TEXT",element)
  if (!element.includes(event.target)) {
    return true
  }
}



document.body.addEventListener('click', async (event) => {
  if (!clickedOutside(".image_box > div",event)) {
    console.log("Pressed image")

  }



})

)
function clickOutside(element) {
  document.body.addEventListener("click", event => {
    if (!element.contains(event.target)){

    }
  })
}



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