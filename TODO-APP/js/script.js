//variables
let form = document.querySelector("form"),
    nbrItems = document.querySelector("#nbrItems"),
    cross = document.querySelectorAll('.cross'),
    input = document.querySelector(".field input"),
    list = document.querySelector("#todos-list"),
    i = 0 ;
nbrItems.innerHTML = i ;

//add new todo
form.onsubmit = function(event){
    event.preventDefault();
    list.innerHTML += `<li class="mession">
    <span class="circle"></span><p>${input.value}</p><i class="cross"><img src="images/icon-cross.svg" alt=""></i>
    </li>`
    input.value = ""; 
    nbrItems.innerHTML = ++i; 
}

// checked or delete
list.addEventListener("click",function(event){
    if(event.target.tagName === "IMG"){
        father = event.target.parentElement;
        father.parentElement.remove();
        nbrItems.innerHTML = --i; 
    }
    if(event.target.tagName === "SPAN"){
        event.target.innerHTML = `<i class="check"><img src="images/icon-check.svg" alt=""></i>`
        event.target.classList.add("checked");
        father = event.target.parentElement;
        father.parentElement.classList.add("check");
    }     
})


// to show all or specefic messsoin 
let all = document.querySelector('#all'),
    active = document.querySelector('#active'),
    completed = document.querySelector('#completed'),
    clear = document.querySelector('#clear');
//show all
all.addEventListener("click" , function(){
    messions = document.querySelectorAll(".mession");
   for (let j = 0; j < messions.length; j++)
     messions[j].style.display="flex";
})
//show not completed todos
active.addEventListener("click" , function(){
    let messions = document.querySelectorAll(".mession span");
    for(j=0;j<messions.length;j++)
       if(messions[j].classList.contains("checked"))
            messions[j].parentElement.style.display = "none";
       else
          messions[j].parentElement.style.display = "flex"; 
})
//show completed todos
completed.addEventListener("click", function(){
  let messions = document.querySelectorAll(".mession span");
  for(j=0;j<messions.length;j++)
    if(messions[j].classList.contains("checked"))
        messions[j].parentElement.style.display = "flex";
    else
       messions[j].parentElement.style.display = "none"; 
})
//delete completed todos
clear.addEventListener("click",function(){
    let messions = document.querySelectorAll(".mession span");
    k=0;
    for (let j = 0; j < messions.length; j++) 
      if(messions[j].classList.contains("checked")){
        messions[j].parentElement.remove();
        k++;
      }
    i -=k ;
    nbrItems.innerHTML = i ; 
})


// change theme
let theme = document.querySelector("#theme");
let icon = document.querySelector("#theme img");
var nbClicks = 0;
theme.addEventListener("click" , function(){
  if(nbClicks%2 == 0){
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    icon.setAttribute("src","images/icon-moon.svg");      
  }
  else{
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    icon.setAttribute("src","images/icon-sun.svg");   
  }
  ++nbClicks;
})