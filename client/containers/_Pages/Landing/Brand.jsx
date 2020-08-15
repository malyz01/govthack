import React from 'react'

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
