
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



image_box_list.addEventListener('click', async (event) => {
    var large_image_box = document.createElement("div")
    large_image_box.classList = ("border_radius_large large_box")

    var image_var = document.createElement("img")
    
   
    var text_container = document.createElement("div")
    text_container.classList = ("text_image_container")
    
    
    if (event.target.tagName == "IMG") {
      var image = event.target
      let photoID = null;
      Array.from(image.parentElement.children).forEach(element => {
        if (element.tagName === "P") {
          photoID = element.textContent.trim(); // safer than innerHTML
        }
      });
    
      console.log(photoID)
      var photoData = await wrapper.GetPhotoData(photoID)
      console.log(photoData)
  
      image_var.src = photoData["urls"]["regular"]
      if (document.querySelector(".large_box") != null) {
          main_body.removeChild(document.querySelector(".large_box"))
      }
      large_image_box.appendChild(image_var)
        
      main_body.appendChild(large_image_box)
        
      
      large_image_box.appendChild(image_var)
      large_image_box.appendChild(text_container)
      main_body.appendChild(large_image_box)

    }
  }
)