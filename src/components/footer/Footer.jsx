import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Kavindu Jayakody</h1>
            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>
                <li>
                    <a href="#protfolio" className="footer_link">Projects</a>
                </li>
                
            </ul>
            <div className="footer_social">
        <a href="mailto:jayakodyk2@gmail.com" className="footer_social-link" target="_blank"><i class="bx bxl-gmail"></i></a>
        
        <a href="https://www.linkedin.com/in/kavindu-jayakody-1b1284223?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B40nYKnMoTx%2BlS%2F88jvF6lg%3D%3D" className="footer_social-link" target="_blank"><i class="bx bxl-linkedin-square"></i></a>
        
        <a href="https://github.com/kavindu919" className="footer_social-link" target="_blank"><i class="bx bxl-github"></i></a>
        
            </div>
            <span className="footer_copy">&#169; Kavindu Jayakody. All Rigths Reserved </span>
        </div>
    </footer>
  )
}

export default Footer