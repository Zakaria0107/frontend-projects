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
Allproducts = [] 

//CALCUL TOTAL
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

//SHOW DATA
function showData(){
    title.value=price.value=taxes.value=ads.value=discount.value=total.textContent=category.value = "" 
    document.querySelector("#productsList").innerHTML = ""
    for( i = 0 ; i < Allproducts.length ; i++){
        document.querySelector("#productsList").innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${Allproducts[i].title}</td>
                <td>${Allproducts[i].price}</td>
                <td>${Allproducts[i].taxes}</td>
                <td>${Allproducts[i].ads}</td>
                <td>${Allproducts[i].discount}</td>
                <td>${Allproducts[i].total}</td>
                <td>${Allproducts[i].category}</td>
                <td><button onclick="updateData(${i})" class="table-btn update">update</button></td>
                <td><button onclick="deleteData(${i})" class="table-btn delete">delete</button></td>
            </tr>
        `
    }
}

// CREATE 
document.querySelector(".create").onclick = () => {
    if(title.value != "" && price.value != "" && taxes.value != "" &&  
        ads.value != "" && discount.value != "" && total.textContent != "" && category.value != "" ){
        let product = new Product(title.value , price.value , taxes.value , 
            ads.value , discount.value , total.textContent , category.value)
        Allproducts.push(product);
        showData();
        console.log(Allproducts)
    }else {
        alert("you should put all values")
    } 
}


//DELETE
function deleteData(i){
    Allproducts.splice(i , 1)
    showData()
}

//UPDATE
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
    showData()
}
document.querySelector(".updateData").onclick = changeData
