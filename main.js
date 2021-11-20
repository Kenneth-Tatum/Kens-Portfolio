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