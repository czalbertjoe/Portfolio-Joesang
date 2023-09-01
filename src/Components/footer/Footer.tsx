import React from 'react'
import "./footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">End of trial dear reader</h1> 
                <h2 className="footer_subtitle">Don't forget to contact me at my social media!</h2>
                <ul className="footer_list">
                    <li>
                        <a href="#home" className="footer_link">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer_link">Skills</a>
                    </li>
                    <li>
                        <a href="#work" className="footer_link">Works</a>
                    </li>
                    <li>
                        <a href="#journey" className="footer_link">Journey</a>
                    </li>
                </ul>
                <div className="footer_social"> 
                    <a href="https://github.com/JoZhang06" className="footer_social-icon" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jchang-z/" className="footer_social-icon" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/joe.changzavala" className="footer_social-icon" target="_blank">
                        <i className="bx bxl-facebook"></i>
                    </a>
                </div>
                <span className="footer_copy">Chang Joesang : All rights reserved</span>
            </div>
        </footer>
  )
}
export default Footer
