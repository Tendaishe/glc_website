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
                        A Bible-believing church based in Birmingham, offering
                        Sunday services and prayer on Fridays. We are committed
                        to the community and aim to develop projects and
                        programmes that enhance community values for the benefit
                        of our wider community at Greater Life Church.
                    </p>
                </div>
                <div className="card">
                    <img src={GetInvolvedIcon} alt="Get Involved" />
                    <h3>Vision</h3>
                    <p>
                        Our vision is to establish Greater Light Churches
                        worldwide, including Bible study groups, home cell
                        groups, orphanages, biblical and educational
                        institutions. We strive to rebuild broken communities
                        through the love of God and charitable works.
                    </p>
                </div>
                <div className="card">
                    <img src={GivingBackIcon} alt="Giving Back" />
                    <h3>Faith</h3>
                    <p>
                        We are a bible believing church that solely believes and
                        teaches the death and resurrection of Jesus Christ on
                        the third day for the remissions of sins. Which is the
                        salvation of man.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurVision;
