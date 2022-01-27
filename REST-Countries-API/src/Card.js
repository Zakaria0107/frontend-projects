import React from "react";
function Card(props){
    return (
        <div className="Card">
            <img src={props.image_url}/>
            <div className="infos">
                <h4>{props.name}</h4>
                <p>Population: <span>{props.population.toLocaleString('en-US')}</span></p>
                <p>Region: <span>{props.region}</span></p>
                <p>Capital: <span>{props.capital}</span></p>
            </div>
        </div>
    );

}
export default Card ;