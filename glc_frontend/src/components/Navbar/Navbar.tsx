import { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <img
                className="navbar-logo"
                src={Logo}
                alt="Greater Light Churh Logo"
            />
            <div className="hamburger-container">
                <Hamburger
                    toggled={isMenuOpen}
                    toggle={setIsMenuOpen}
                    color="#fff"
                />
            </div>
            <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
                <ul className="navbar-list">
                    <li className="navbar-item">Home</li>
                    <li className="navbar-item">Our Vision</li>
                    <li className="navbar-item">Events</li>
                    <li className="navbar-item">Bible</li>
                    <li className="navbar-item">Gallery</li>
                </ul>

                <button onClick={toggleMenu} className="navbar-button">
                    Contact
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
