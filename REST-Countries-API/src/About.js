import React, { useEffect, useState } from "react";
import { useParams , Link} from "react-router-dom";
function About(){
    let {title} = useParams();
    let [Info , setInfo] = useState([]);
    useEffect(async ()=>{
        let responce = await fetch(`https://restcountries.com/v2/name/${title}`);
        let data = await responce.json();
         setInfo(data[0])
    },[title])
    const { name, flag, population, region,
        capital, nativeName, subregion, topLevelDomain,
        borders, currencies, languages } = Info ;
    return(
        <div id="about" className="container">
            <Link to='/' ><button className="back"><i className="fas fa-arrow-left"></i> Back</button></Link>
            <div className="infos">
               <img src={flag} />    
                <div className="details">
                    <h2>{name}</h2>
                    <div className="all">
                        <div className="simpleDetails">
                            <p>Native Name : <span>{nativeName}</span></p>
                            <p>Population : <span>{population}</span></p>
                            <p>Region : <span>{region}</span></p>
                            <p>Sub Region : <span>{subregion}</span></p>
                            <p>Capital : <span>{capital}</span></p>
                        </div>
                        <div className="multiDetails">
                        <p>Top Level Domain : 
                            {topLevelDomain ? topLevelDomain.map(domain => (
                                        <span key={domain}>{domain}</span>
                                    )) : ''}
                        </p>
                        <p>Currencies :
                            {currencies
                                        ? currencies.map(currency => (
                                            <span key={currency.code}>{currency.code}</span>
                                        ))
                            : "don't have"}
                        </p>
                        <p >Languages:
                                    {languages ?languages.map(language => (
                                        <span key={language.name}>{language.name} ,</span>
                                    )): ''}
                        </p>
                        </div>
                    </div>  
                    <div className="borders">
                                <h4 >Border Countries : </h4>
                                {borders ?borders.map(border => (
                                    <button key={border}>{border}</button>
                                )): ""}
                        </div>
                </div>
    
            </div>
        </div>
    );
}
export default About ;