
const imageBox = document.querySelector(".image_container");
var currentPage;
var orientationSort;
var orderBy;
var searchQuery;

var wrapper = new ApiWrapper()

var search_input = document.getElementById("search_top")
var main_body = document.getElementsByClassName("main_container")[0]
var image_box_list = document.getElementsByClassName("image_container")[0]


search_input.addEventListener("keydown", async (event) => {
  if (event.key === 'Enter') {

    imageBox.replaceChildren();

    searchQuery = event.target.value

    orderBy = document.getElementById("select_sort").value
    orientationSort = document.getElementById("frame_sort").value

    if(orientationSort === "all"){
      var photos = await wrapper.SearchImages(searchQuery, 1, 30, orderBy)
    }
    else{
      var photos = await wrapper.SearchImages(searchQuery, 1, 30, orderBy, orientationSort)
    }

    main_body.removeChild(document.querySelector(".centered_text"));

    currentPage = 1;

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
    large_image_box.classList.add("border_radius_large", "large_box")

    if (event.target.width < event.target.height) {

      large_image_box.classList.add("popup_image_container_vertical")
    }
    else {

      large_image_box.classList.add("popup_image_container_horizontal")
    }

    var image_var = document.createElement("img")
    
    //Sets the image to the lower res tumbnail one while it waits for the api to give the higher res one
    image_var.src = event.target.src
    var text_container = document.createElement("div")
    text_container.classList = ("text_image_container")
    var image = event.target
    var photoID = null;

    image_var.src = image.src
    if (document.getElementsByClassName("large_box")[0] != null) {
        main_body.removeChild(document.querySelector(".large_box"))

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
    
    
    image_info_container = document.createElement("div")
    image_info_container.classList = ("photo_info_container")
    image_info_container.appendChild(text_container)
    
    //Check if latitude exists and if so create a element with the information
    if(photoData["location"]["position"]["latitude"] != null){
      var mapMargin = 0.005
      
      latitude = photoData["location"]["position"]["latitude"]
      longitude = photoData["location"]["position"]["longitude"]

      var mapIframe = document.createElement("iframe")
      mapIframe.src =
      "https://www.openstreetmap.org/export/embed.html?" +
      "bbox=" +
      (longitude - mapMargin) + "," +  // left (min lon)
      (latitude - mapMargin) + "," +   // bottom (min lat)
      (longitude + mapMargin) + "," +  // right (max lon)
      (latitude + mapMargin) +         // top (max lat)
      "&layer=mapnik" +
      "&marker=" + latitude + "," + longitude;
      
      
      var map_container = document.createElement("div")
      map_container.classList = "map_container"
      map_container.appendChild(mapIframe)

      image_info_container.appendChild(map_container)
    }

    image_info_container.appendChild(tagCon)
    large_image_box.appendChild(image_info_container)
    
    main_body.appendChild(large_image_box)
    
  }
  else if(document.querySelector(".large_box") && !event.target.closest(".large_box")){
      var large_image_box = document.querySelector(".large_box")
      document.querySelector(".main_container").removeChild(large_image_box)
    }
})

document.getElementById("load_more_btn").addEventListener("click", async (event) => {
  var imageCon = document.querySelector(".image_container");
  
  currentPage++


  if (orientationSort === "all"){
    var photos = await wrapper.SearchImages(searchQuery, currentPage, 30, orderBy)    
  }
  else{
    var photos = await wrapper.SearchImages(searchQuery, currentPage, 30, orderBy, orientationSort)
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


    imageCon.appendChild(div)
  })
})