import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import navLinks from "./Navlinks";

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
                    {navLinks.map((link) => (
                        <li key={link.path} className="navbar-item">
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <button onClick={toggleMenu} className="navbar-button">
                    Contact
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
