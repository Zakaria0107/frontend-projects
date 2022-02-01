import React , {useEffect, useState}from "react";
import {Link} from "react-router-dom" ;
import Card from "./Card";
function Home(){
    let [items , setItems] = useState([])
    let getData = async () =>{
        const responce = await fetch("https://restcountries.com/v2/all")
        const data = await responce.json()
        setItems(data)
    }
    let searchByName = async () =>{
        let name = document.querySelector("input").value ;
        if(name == "")
             getData()
        else {
            let responce = await fetch(`https://restcountries.com/v2/name/${name}`);
            let data = await responce.json();
            if(data.status == 404) setItems([])
            else setItems(data)
        }
    }
    useEffect(async () => {
        getData();
      },[]);
    return (
        <>
        <form >
            <div className="container">
                <input type="text" onChange={searchByName} placeholder="Search for country..."/>
            </div>
        </form>
        <div className="countries container">
        {
            items.map((item,index) =>
                <Link key={index} to={`about/${item.name}`}>
                    <Card 
                        image_url={item.flag} 
                        name = {item.name}
                        population={item.population}
                        region={item.region}
                        capital={item.capital}
                        key={index}
                    /> 
                </Link>
            )
        }
        </div>
       
        </>
    );
}
export default Home ;