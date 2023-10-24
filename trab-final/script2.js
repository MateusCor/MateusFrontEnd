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

// -------------


let button = document.getElementById("menu-bar")

let menu = document.getElementById("nav-list")

let lilBars = document.getElementsByClassName("menu-icon")

let hiddenMenu = document.getElementById("nav-list-hidden")

let hiddenDiv = document.getElementById("nav-div-hidden")

// remake after learning JQuery
/*
function menuAbakadabra() {
    if (window.innerWidth <= "800") {
        menu.style.display = "none"
        button.style.display = "block"
    } else {
        menu.style.display = "flex"
        button.style.display = "none"
    }
}

*/
button.addEventListener("click", function() {
    hiddenDiv.classList.toggle('nav-div-show')
})
/*
setInterval(menuAbakadabra, 1);


---
button.addEventListener("click", function() {
    if (menu.style.display === "none") {
        menu.style.display = "block"
    } else {
        menu.style.display ="none"
    }
*//*

let button = document.getElementById("menu-bar")

let menu = document.getElementById("nav-list")

let hiddenMenu = document.getElementById("nav-list-hidden")

let hiddenDiv = document.getElementById("nav-div-hidden")

button.addEventListener("click", function() {
})*/