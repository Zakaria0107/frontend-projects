// DECLARATION
class Product {
    constructor(title , price , taxes , ads , discount , total , category){
        this.title = title ; 
        this.price = price ;  
        this.taxes = taxes ;
        this.ads   = ads ; 
        this.discount = discount ; 
        this.total = total ; 
        this.category = category ; 
    }
}

title = document.querySelector("#title")
price = document.querySelector("#price")
taxes = document.querySelector("#taxes")
ads = document.querySelector("#ads")
discount = document.querySelector("#discount")
total = document.querySelector("#total")
category = document.querySelector("#category")
//declation of array that contain all the products from the local storge if this last was exist
let Allproducts = []
if(localStorage.getItem("collection") != null){ 
    Allproducts = JSON.parse(localStorage.getItem("collection"))
}
showData(Allproducts)


//CALCUL TOTAL PRICE
function calculPrice(){
    let resultat ; 
    if(price.value != "" && taxes.value != "" && ads.value != "" && discount.value != ""){
        resultat = +price.value + +taxes.value + +ads.value - +discount.value
        total.innerHTML = resultat 
    }
}
price.onkeyup = calculPrice
taxes.onkeyup = calculPrice
ads.onkeyup = calculPrice
discount.onkeyup = calculPrice

//SHOW DATA IN THE TABLE
function showData(Arr){
    title.value=price.value=taxes.value=ads.value=discount.value=total.textContent=category.value = "" 
    document.querySelector("#productsList").innerHTML = ""
    for( i = 0 ; i < Arr.length ; i++){
        document.querySelector("#productsList").innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${Arr[i].title}</td>
                <td>${Arr[i].price}</td>
                <td>${Arr[i].taxes}</td>
                <td>${Arr[i].ads}</td>
                <td>${Arr[i].discount}</td>
                <td>${Arr[i].total}</td>
                <td>${Arr[i].category}</td>
                <td><button onclick="updateData(${i})" class="table-btn update">update</button></td>
                <td><button onclick="deleteData(${i})" class="table-btn delete">delete</button></td>
            </tr>
        `
    }
}

// CREATE  A PRODUCT IN THE TABLE
document.querySelector(".create").onclick = () => {
    if(title.value != "" && price.value != "" && taxes.value != "" &&  
        ads.value != "" && discount.value != "" && total.textContent != "" && category.value != "" ){
        let product = new Product(title.value , price.value , taxes.value , 
            ads.value , discount.value , total.textContent , category.value)
        Allproducts.push(product);
        localStorage.setItem("collection" , JSON.stringify(Allproducts))
        showData(Allproducts);
    }else {
        alert("you should put all values")
    } 
}


//DELETE A PRODUCTE FROM THE TABLE
function deleteData(i){
    Allproducts.splice(i , 1)
    localStorage.setItem("collection" , JSON.stringify(Allproducts))
    showData(Allproducts)
}

//UPDATE THE INFORMATION OF A PRODUCT
let index ; 
function updateData(i){
    title.value     = Allproducts[i].title ; 
    price.value     = Allproducts[i].price ;  
    taxes.value     = Allproducts[i].taxes ;
    ads.value       = Allproducts[i].ads ; 
    discount.value  = Allproducts[i].discount ; 
    total.innerHTML = Allproducts[i].total ; 
    category.value  = Allproducts[i].category ; 
    document.querySelector(".create").style.display = "none"
    document.querySelector(".updateData").style.display = "block"
    index = i ;
    
}
function changeData(){
    Allproducts[index].title = title.value  ; 
    Allproducts[index].price = price.value ;  
    Allproducts[index].taxes = taxes.value ;
    Allproducts[index].ads   = ads.value  ; 
    Allproducts[index].discount = discount.value  ; 
    Allproducts[index].total = total.innerHTML ; 
    Allproducts[index].category = category.value; 
    document.querySelector(".create").style.display = "block"
    document.querySelector(".updateData").style.display = "none"
    localStorage.setItem("collection" , JSON.stringify(Allproducts))
    showData(Allproducts)
}
document.querySelector(".updateData").onclick = changeData


//SEARCH
//searcj for products by there category
search = document.querySelector("#search")
let resultat = []
document.querySelector("#byCategory").onclick = () => {
    if(search.value != ""){
        for(i = 0 ; i < Allproducts.length ; i++){ 
           if(Allproducts[i].category.includes(search.value)){
                resultat.push(Allproducts[i])
           } 
        }
        showData(resultat)
        resultat =  []
    }
}
//search for products by there names
document.querySelector("#byTitle").onclick = () => {
    if(search.value != ""){
        for(i = 0 ; i < Allproducts.length ; i++){ 
            if(Allproducts[i].title.includes(search.value)){
                 resultat.push(Allproducts[i])
            } 
         }
        showData(resultat)
        resultat =  []
    }
}
search.onkeyup = function emptySearch(){
    if(search.value == "") showData(Allproducts)
}