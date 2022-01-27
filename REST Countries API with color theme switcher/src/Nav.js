import React from "react";
function Nav(){
    let i = 0 ;
    let changeMode = ()=>{
        if(i%2 === 0){
            document.body.classList.remove("dark-mode")
            document.body.classList.add("light-mode")
        }
        else {
            document.body.classList.remove("light-mode")
            document.body.classList.add("dark-mode")
        }
        i++ ;
    }
    return(
        <nav>
            <div className="container">
                <h2>Where in the world ?</h2>
                <p className="switch" onClick={changeMode}> <i className="fas fa-moon"></i> Dark mode</p>
            </div>
        </nav>
    ); 
}

export default Nav ; 