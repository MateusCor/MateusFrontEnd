/*let button = document.getElementById("menu-bar")

let menu = document.getElementById("menu-2")

let lilBars = document.getElementsByClassName("menu-icon")

button.addEventListener("click", function() {
    if (menu.style.display === "none") {
        menu.style.display = "block"
    } else {
        menu.style.display ="none"
    }
})*/

let button = document.getElementById("menu-bar")

let menu = document.getElementById("nav-list")

let lilBars = document.getElementsByClassName("menu-icon")

let hiddenMenu = document.getElementById("nav-list-hidden")

let hiddenDiv = document.getElementById("nav-div-hidden")

function menuAbakadabra() {
    if (window.innerWidth <= "800") {
        menu.style.display = "none"
        button.style.display = "block"
    } else {
        menu.style.display = "flex"
        button.style.display = "none"
    }
}

button.addEventListener("click", function() {
/*    if (hiddenDiv.style.display === "none") {
        hiddenDiv.style.display = "block"
    } else {
        hiddenDiv.style.display = "none"
    }*/
    if (hiddenMenu.style.display === "none") {
        hiddenMenu.style.display = "block"
    } else {
        hiddenMenu.style.display = "none"
    }
})

setInterval(menuAbakadabra, 1);

/*button.addEventListener("click", function() {
    if (menu.style.display === "none") {
        menu.style.display = "block"
    } else {
        menu.style.display ="none"
    }
*/