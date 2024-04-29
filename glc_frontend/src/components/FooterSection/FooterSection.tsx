import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "./FooterSection.css";
import Logo from "../../assets/Logo.png";
import navLinks from "../Navbar/Navlinks";

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
    });
};

const FooterSection = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section footer-branding">
                    <img src={Logo} alt="Greater Light Church Logo" />
                    <p>&copy; COPYRIGHT GREATER LIGHT CHURCH 2024</p>
                    <p>(480) 555-0103</p>
                    <p>80 MOTT STREET, BIRMINGHAM B19 3HD</p>
                    <p>INFO@GREATERLIGHTCHURCH.COM</p>
                </div>
                <div className="footer-section footer-quicklinks">
                    <h4>Quicklinks</h4>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <NavLink to={link.path} onClick={scrollToTop}>
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer-section footer-connect">
                    <h4>Connect</h4>
                    <div className="social-icons">
                        <SocialIcon
                            style={{ height: 40, width: 40 }}
                            bgColor="#ff7f50"
                            className="social-icon facebook"
                            url="https://www.facebook.com/greaterlightchurchbirminghamuk"
                        />
                        <SocialIcon
                            bgColor="#ff7f50"
                            style={{ height: 40, width: 40 }}
                            className="social-icon instagram"
                            url="https://www.instagram.com/greaterlightchurchbirminghamuk/"
                        />
                        <SocialIcon
                            style={{ height: 40, width: 40 }}
                            bgColor="#ff7f50"
                            className="social-icon youtube"
                            url="https://www.youtube.com/@greaterlightchurch2686"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
