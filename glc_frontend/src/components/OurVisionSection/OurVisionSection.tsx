import {
    AboutUsIcon,
    GetInvolvedIcon,
    GivingBackIcon,
} from "../../assets/icons";
import "./OurVisionSection.css";

const OurVision = () => {
    return (
        <div className="our-vision-container">
            <h2 className="our-vision-title">Our Vision</h2>
            <div className="cards-container">
                <div className="card">
                    <img src={AboutUsIcon} alt="About us" />
                    <h3>About Us</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
                <div className="card">
                    <img src={GetInvolvedIcon} alt="Get Involved" />
                    <h3>Get Involved</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
                <div className="card">
                    <img src={GivingBackIcon} alt="Giving Back" />
                    <h3>Giving Back</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurVision;
