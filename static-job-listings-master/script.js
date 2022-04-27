main = document.querySelector(".main")
collection = ""
let skillButtons 
async function getData(){
    let responce = await fetch("./data.json")
    let data = await responce.json()
    setdata(data)
}
function setdata(data){
    data.forEach(element => {
        new_featured = ""
        if(element.new== true) new_featured +="<button class='new'>NEW!</button>"
        if(element.featured== true) new_featured +="<button class='featured'>FEATURED</button>"
        languages  = ""
        element.languages.forEach(l => languages += "<button>"+l+"</button> " )
        element.tools.forEach(t => languages += "<button>"+t+"</button> ")
        collection += `
            <div class="employee">
                <img src=${element.logo}>
                <div class="informations"> 
                    <p>${element.company} ${new_featured}</p>
                    <h3>${element.position}</h3>
                    <p>${element.postedAt}  -  ${element.contract}  -  ${element.location}</p>
                </div>
                <hr>
                <div class="skills">
                    <button>${element.role}</button>
                    <button>${element.level}</button>
                    ${languages}
                </div>
            </div>
        `
    });
    main.innerHTML = collection
    skillButtons = document.querySelectorAll(".skills button")
    console.log(skillButtons)
    skillButtons.forEach(btn => {
        btn.onclick  = ()=>{
            document.querySelector(".searchBar div").innerHTML += `<div><span>${btn.textContent}</span><img src="./images/icon-remove.svg" ></div>`
        }
    })
}
getData()
document.querySelector("#clear").onclick = ()=>{
    document.querySelector(".searchFor").innerHTML = ""
}

