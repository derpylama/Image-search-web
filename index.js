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