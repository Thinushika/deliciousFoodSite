import React from 'react'
import "./Footer.css";
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaTwitterSquare} from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="leftC">
            <img src="../logo.png" className="logoside" alt=" Delicious" />
            </div>
            <div className="centerC">
                <div className="detailL">
                    <p>Location</p>
                    <p>Menu</p>
                    <p>About</p>
                </div>
                <div className="detailR">
                    <p>Contact</p>
                    <p>+94 000 000 00</p>
                    <p>info@delicious.com</p>
                </div>
            </div>
            <div className="rightC">
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaLinkedin />
                <FaTwitterSquare />
            </div>
        </div>
    )
}

export default Footer
