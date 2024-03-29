import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Homepage = ({ openMyComponent }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div className="navbar-fixed">
                <div className="navBar">

                    <div className="hamburger" onClick={toggleMobileMenu}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    {/* <div id="osdc">
                        <Link  className="clubName"  to='/'>OSDHack</Link>
                    </div> */}
                    <div
                        className={`navbar-items ${isMobileMenuOpen ? "mobilemenu" : ""}`}
                    >
                        <Link to='/coc' onClick={closeMobileMenu}>&lt; code of conduct &gt;</Link>
                        <Link to='/gallery' className="galleryNav" onClick={closeMobileMenu}>&lt; gallery &gt;</Link>
                        <a href='/' onClick={closeMobileMenu}>&lt; register &gt;</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;
