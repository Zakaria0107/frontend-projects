document.querySelectorAll('.tab-item').forEach(li => {
    li.onclick = () => {
        document.querySelectorAll('.tab-item').forEach(elt => {
            elt.classList.remove("active")
        })
        li.classList.add("active")
    }
})
for(i=0 ; i < document.querySelectorAll('.tab-item').length ; i++){
    document.querySelectorAll('.tab-item')[0].onclick = () => {
        if(i==0){
            document.querySelector(".tab-content h1 ").innerHTML = "Bookmark in one click"
            document.querySelector(".tab-content p ").innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
        }
        if(i==1){
            document.querySelector(".tab-content h1 ").innerHTML = "Intelligent search"
            document.querySelector(".tab-content p ").innerHTML = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.."
        }
        if(i==2){
            document.querySelector(".tab-content h1 ").innerHTML = "Share your bookmarks"
            document.querySelector(".tab-content p ").innerHTML = " Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
        }
    }
}
/*

  

  More Info

  

  

  More Info

  

 

  More Info
*/