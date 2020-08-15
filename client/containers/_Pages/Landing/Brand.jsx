import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Brand(){
    return(
        <header className="header-section" id="header">
            <div>
                <h1 className="header-title">Wheelie</h1>
                <img className="header-image" src={`/assets/images/logo.png`} alt="Wheelie Logo"></img>
            </div>  
        </header>
    )
}

export default Brand;
