import React from 'react';
import './Footer.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className="footer-links">
          <h3 className='footer-heading'>&lt;quick links&gt;</h3>
          <p className='footerLinks'><a href="/">home</a> <a href="/gallery">gallery</a> <a href="/">register</a></p>
        </div>
        <div className="footer-info">
          <h3 className='footer-heading'>&lt;contact info&gt;</h3>
          <div>
            <p className='email'>osdcjiit@gmail.com</p>
          </div>
        </div>
        <div className="footer-social">
          <h3 className='footer-heading'>&lt;find us here&gt;</h3>
          <div className="social-icons">
            <a href="https://github.com/osdc"><FaGithub /></a>
            <a href="https://www.linkedin.com/company/osdcjiit/about/"><FaLinkedin /></a>
            <a href="https://www.instagram.com/osdcjiit/"><FaInstagramSquare /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; OPEN SOURCE DEVELOPERS COMMUNITY</p>
      </div>
    </footer>
  );
}

export default Footer;
