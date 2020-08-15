import React from 'react'

function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer className="footer">
            <p className="copyright">Copyright ⓒ {currentYear}</p>
        </footer>
    )
}

export default Footer;
