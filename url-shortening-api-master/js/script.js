let menu = document.querySelector(".list-items")
document.querySelector("#burgger-menu").onclick = () => {
    menu.classList.toggle("show")
    menu.classList.toggle("animate__bounceIn")
}

document.querySelector("#getShort").onclick = () => {
    document.querySelector(".shorts").innerHTML += `<div class="box animate__animated animate__rubberBand">
    <p class="original">https://www.youtube.com/</p>
    <p class="shorted">https://www.youtube.com/</p>
    <button type="button" class="btn" >copie!</button>
  </div>`
}