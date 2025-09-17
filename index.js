
const imageBox = document.querySelector(".image_container");


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
var image_box_list = document.getElementsByClassName("image_container")[0]


search_input.addEventListener("keydown", async (event) => {
  if (event.key === 'Enter') {

    imageBox.replaceChildren();

    var search_query = event.target.value

    var orderBy = document.getElementById("select_sort").value
    var orientation = document.getElementById("frame_sort").value

    if(orientation === "all"){
      var photos = await wrapper.SearchImages(search_query, 1, 30, orderBy)
    }
    else{
      var photos = await wrapper.SearchImages(search_query, 1, 30, orderBy, orientation)
    }

    photos["results"].forEach(element => {
      
      var img = document.createElement("img")
      var div = document.createElement("div")
      var photoIDCon = document.createElement("p")
      photoIDCon.style.display = "none"
      photoIDCon.id = "photoID"

      photoIDCon.innerHTML = element["id"]

      img.src = element["urls"]["small"]

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


    image_var.src = image.src
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
      
      city.innerHTML = "City: " + photoData["location"]["city"]
      country.innerHTML = "country: " + photoData["location"]["country"]

      text_container.appendChild(city)
      text_container.appendChild(country)
    }
    
    //Check if latitude exists and if so create a element with the information
    if(photoData["location"]["position"]["latitude"] != null){
      var longitudeP = document.createElement("p")
      var latitudeP = document.createElement("p")

      latitude = photoData["location"]["position"]["latitude"]
      longitude = photoData["location"]["position"]["longitude"]

      longitude.innerHTML = latitude
      latitude.innerHTML = longitude
      
      text_container.appendChild(longitudeP)
      text_container.appendChild(latitudeP)

      var mapIframe = document.createElement("iframe")
      mapIframe.src =
      "https://www.openstreetmap.org/export/embed.html?" +
      "bbox=" +
      (longitude - 0.005) + "," +  // left (min lon)
      (latitude - 0.005) + "," +   // bottom (min lat)
      (longitude + 0.005) + "," +  // right (max lon)
      (latitude + 0.005) +         // top (max lat)
      "&layer=mapnik" +
      "&marker=" + latitude + "," + longitude;
      text_container.appendChild(mapIframe)

    }
    
    var tagCon = document.createElement("div")
    tagCon.classList.add("tag_con")

    photoData["tags"].forEach((element) =>{
      var tag = document.createElement("p")
      tag.innerHTML = element["title"]
      tag.classList.add("tag_item")

      tagCon.appendChild(tag)
    })

    

    image_var.src = photoData["urls"]["regular"]
    image_var.alt = photoData["alt_description"]

    if (document.querySelector(".large_box") != null) {
      main_body.removeChild(document.querySelector(".large_box"))
    }
    large_image_box.appendChild(image_var)
    large_image_box.appendChild(text_container)
    large_image_box.appendChild(tagCon)
    
    main_body.appendChild(large_image_box)
    
    large_image_box.appendChild(text_container)

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
  if (!clickedOutside(".image_container > div",event)) {
    console.log("Pressed image")

  }



})

function clickOutside(element) {
  document.body.addEventListener("click", event => {
    if (!element.contains(event.target)){

    }
  })
}