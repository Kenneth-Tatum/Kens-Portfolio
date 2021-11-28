// changing the intro head onmouseover and mouseout
var intro = document.getElementById("intro")
intro.onmouseover = changeIntro
intro.onmouseout = changeBack

function changeIntro() {
    intro.innerHTML = "Hello and welcome to my portfolio!"
    intro.style.fontSize="50px"
    intro.style.backgroundColor="#34E4C9"
}
function changeBack() {
    intro.innerHTML = "I'm a self-taught soon to be Software Engineer."
    intro.style.fontSize="25px"
    intro.style.backgroundColor=""
}
// grabbing all button elements
var htmlBut = document.getElementById("html")
var cssBut = document.getElementById("css")
var javaBut = document.getElementById("java")

// grabbing all respective list elements
var htmlItems = document.querySelectorAll("li.htmlItem")
var cssItems = document.querySelectorAll("li.cssItem")
var jsItems = document.querySelectorAll("li.jsItem")

function changeHTML() {
    htmlItems.classList.toggle("bgColor")
}

function changeCSS() {
    cssItems.classList.toggle("italics")
}

function changeJs() {
    jsItems.
}