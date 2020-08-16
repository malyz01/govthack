import React from 'react'
import './style.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="copyright">Copyright ⓒ {currentYear}</p>
      <div className="socials">
        <a href="#">
          <img
            className="footerImage"
            aria-label="Youtube link"
            src={`/assets/images/youtube.svg`}
          />
        </a>
        <a href="https://github.com/malyz01/govthack">
          <img
            className="footerImage"
            aria-label="Github link"
            src={`/assets/images/github.svg`}
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
