import React from 'react'
import "./footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Chang</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#" className="footer_link">About</a>
                    </li>
                    <li>
                        <a href="#" className="footer_link">Projects</a>
                    </li>
                    <li>
                        <a href="#" className="footer_link">Skills</a>
                    </li>
                    <li>
                        <a href="#" className="footer_link"></a>
                    </li>
                </ul>
                <div className="footer_social">
                    <a href="https://www.instagram.com/joesang06/" className="footer_social-icon" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>
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
                <span className="footer_copy">&#196; ChangJoesang. All rights reserved</span>
            </div>
        </footer>
  )
}
