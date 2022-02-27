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

btn.onclick = loadData