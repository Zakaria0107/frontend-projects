btn = document.querySelector("#another")
advice_id = document.querySelector("#advice_id")
advice = document.querySelector("#advice")
 
loadData = async () => {
    let responce = await fetch("https://api.adviceslip.com/advice")
    let data = await responce.json()
    advice_id.innerHTML = `Advice #${data.slip.id}`
    advice.innerHTML = data.slip.advice
}
loadData()
window.addEventListener("resize",changeWidth);
function changeWidth(){
    if(window.innerWidth < 550)
        document.querySelector("#pattern").setAttribute("src" , "./images/pattern-divider-mobile.svg")
    else 
        document.querySelector("#pattern").setAttribute("src" , "./images/pattern-divider-desktop.svg")
    console.log(window.innerWidth)
}
btn.onclick = loadData