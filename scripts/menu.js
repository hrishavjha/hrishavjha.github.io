let menuCheck = document.getElementById("toggleBox")
let menuToggle = document.getElementById("menuToggle")
let menuCont = document.getElementById("floatNav")

function menuSlide(){
    if(menuCheck.checked){
        menuCont.style.right = "-50%"
        menuToggle.classList.remove("menuToggleActive")
    } else{
        menuCont.style.right = "0"
        menuToggle.classList.add("menuToggleActive")
    }
}