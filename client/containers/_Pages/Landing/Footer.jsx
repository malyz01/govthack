import React from 'react'

function Footer(){
    const currentYear = new Date().getFullYear()
    return(
        <footer className="footer">
             <p className="copyright">Copyright ⓒ {currentYear}</p>
            <div className="socials">
            <img aria-label= 'Youtube link' src='./assets/images/youtube.svg' />
            <img aria-label= 'Github link' src='./assets/images/github.svg' />
            </div>
        </footer>
    )
}

export default Footer;
