var intro = document.getElementById("intro")
intro.onmouseover = changeIntro
intro.onmouseout = changeBack
function changeIntro() {
    intro.innerHTML = "Hello and welcome to my portfolio!"
}
function changeBack() {
    intro.innerHTML = "I'm a self-taught soon to be Software Engineer."
}