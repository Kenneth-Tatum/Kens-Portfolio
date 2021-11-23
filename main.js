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

// grabbing all repective list elements
var htmlItems = document.querySelectorAll("htmlItem")
var cssItems = document.querySelectorAll("cssItem")
var jsItems = document.querySelectorAll("jsItem")

function changeHTML() {
    htmlItems
}

function changeCSS() {
    cssItems
}

function changeJs() {
    jsItems
}