import { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { Divide as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";

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
                    <li className="navbar-item">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink
                            to="/our-vision"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Our Vision
                        </NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink
                            to="/events"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Events
                        </NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink
                            to="/bible"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Bible
                        </NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink
                            to="/gallery"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Gallery
                        </NavLink>
                    </li>
                </ul>

                <button onClick={toggleMenu} className="navbar-button">
                    Contact
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
