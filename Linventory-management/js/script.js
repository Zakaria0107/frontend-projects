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

// CREATE 
document.querySelector(".create").onclick = () => {
    if(title.value != "" && price.value != "" && taxes.value != "" &&  
        ads.value != "" && discount.value != "" && total.textContent != "" && category.value != "" ){
        let product = new Product(title.value , price.value , taxes.value , 
            ads.value , discount.value , total.textContent , category.value)
        Allproducts.push(product);
        document.querySelector("#productsList").innerHTML += `
            <tr>
                <td>${Allproducts.length}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.taxes}</td>
                <td>${product.ads}</td>
                <td>${product.discount}</td>
                <td>${product.total}</td>
                <td>${product.category}</td>
                <td><button class="table-btn update">update</button></td>
                <td><button class="table-btn delete">delete</button></td>
            </tr>
        `
        title.value=price.value=taxes.value=ads.value=discount.value=total.textContent=category.value = ""
        
        
    }else {
        alert("you should put all values")
    } 
}


//DELETE
document.querySelectorAll(".delete").forEach(deleteBtn => {
    deleteBtn.onclick = ()=>{
        console.log(deleteBtn.parentElement.parentElement.children[0])
        deleteBtn.parentElement.parentElement.remove();
    }
});