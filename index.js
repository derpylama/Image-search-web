
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


var main = document.getElementById("main")




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
    })
    };
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



    image_var.src = image
    if (document.getElementsByClassName("large_box")[0] != null) {
        main_body.removeChild(document.querySelector(".large_box"))
        console.log("Removed large box")
    }

    //Gets the photo id from the p tag in the image div
    Array.from(image.parentElement.children).forEach(element => {
      if (element.tagName === "P") {
        photoID = element.textContent.trim()
      }
    });

    large_image_box.appendChild(image_var)
    main_body.appendChild(large_image_box)
    
    var photoData = await wrapper.GetPhotoData(photoID)
    
    console.log(photoData)
    
    //Display photo information
    var user = document.createElement("p")
    var desc = document.createElement("p")

    user.innerHTML = "photographer: " + photoData["user"]["first_name"]
    desc.innerHTML = photoData["description"]
    
    text_container.appendChild(user)
    text_container.appendChild(desc)

    if(photoData["location"]["city"] != null){
      var city = document.createElement("p")
      var country = document.createElement("p")
      
      city.innerHTML = photoData["location"]["city"]
      country.innerHTML = photoData["location"]["country"]

      text_container.appendChild(city)
      text_container.appendChild(country)
    }
    
    if(photoData["location"]["position"]["latitude"] != null){
      var longitude = document.createElement("p")
      var latitude = document.createElement("p")

      longitude.innerHTML = photoData["location"]["position"]["latitude"]
      latitude.innerHTML = photoData["location"]["position"]["longitude"]
      
      text_container.appendChild(longitude)
      text_container.appendChild(latitude)
    }
    
    image_var.src = photoData["urls"]["regular"]
    image_var.alt = photoData["alt_description"]

    if (document.querySelector(".large_box") != null) {
      main_body.removeChild(document.querySelector(".large_box"))
    }
    large_image_box.appendChild(image_var)
    
    main_body.appendChild(large_image_box)
    
    large_image_box.appendChild(text_container)
    }
    else if (event.target.tagName === "IMG"){
      console.log("image clicked")
    }
  })



main.addEventListener('click', (event) => {
  imageElement = document.querySelector(".large_box")
  if (!imageElement == null) {
    console.log(event, "TEST")
  }
  console.log("Text")
  

}

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
