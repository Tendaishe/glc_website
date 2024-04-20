import { useEffect, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import navLinks from "./Navlinks";

const Navbar = () => {
    const location = useLocation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (e: any) => {
        e.preventDefault();
        toggleMenu();
        window.location.href = "/#contact-section";
    };

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [location]);

    return (
        <nav className="navbar">
            <div className="navbar-logo">GREATER LIGHT CHURCH</div>
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
                                onClick={toggleMenu}
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

                <Link
                    className="navbar-button"
                    to="/#contact-section"
                    onClick={handleNavigation}
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
