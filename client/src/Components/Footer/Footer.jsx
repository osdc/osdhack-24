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
          <h3>Quick Links</h3>
          <ul className='quicklinks'>
            <Link to="/">Home</Link>
            <Link to="/team">Team</Link>
            <Link to="/gallery">Gallery</Link>
            <a href="">Register</a>
          </ul>
        </div>
        <div className="footer-info">
          <h3>Contact Info</h3>
          <div>
            <p>Student Coordinator:<br />Shivang Sharma</p>
            <p>osdcjiit@*********</p>
          </div>
        </div>
        <div className="footer-social">
          <h3>Find Us here</h3>
          <div className="social-icons">
            <a href=""><FaGithub /></a>
            <a href=""><FaLinkedin /></a>
            <a href=""><FaInstagramSquare /></a>
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
