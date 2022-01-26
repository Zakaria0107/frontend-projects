let i = 0 
document.querySelector(".hamburger").addEventListener("click" , function(){
    if(i%2 == 0)document.querySelector(".list-items").style.display = "flex"
    else document.querySelector(".list-items").style.display = "none"
    i++
})
