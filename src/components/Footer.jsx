import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import Icon from "../assets/images/favicon.png";

const Footer = () => {
  return (
    <footer className="footer bg-opacity-90 backdrop-blur-xl relative w-full z-20 bottom-0 left-0 px-6 py-4 shadow-2xl rounded-l">
      <div className="footer-container">
        <div className="footer-left">
			<h3>
				SkyLine Digital
			</h3>
          	<p>35 Boulevard Saint-Germain, Paris 75005, France</p>
          	<p>Phone : +1 (312) 772-2041</p>
        </div>

        <div className="footer-middle">
          <h4>PRODUCTS</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 SkyLine Digital | Privacy Notice | Website Terms of Use | Trust Center</p>
      </div>
    </footer>
  );
};

export default Footer;
