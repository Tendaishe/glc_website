import "./BibleSection.css"; // Make sure to create and include this CSS file
import { ReadingImg } from "../../assets/images";

const BibleSection = () => {
    return (
        <div className="bible-section">
            <h1 className="bible-header">Bible</h1>
            <div className="bible-section-container">
                <div className="bible-text-container">
                    <h2>PRAYER OF THE DAY</h2>
                    <p className="prayer-of-the-day">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                    <cite>Romans 8:38-39</cite>
                </div>
                <div className="bible-image-container">
                    <img src={ReadingImg} alt="Person reading a Bible" />
                </div>
            </div>
        </div>
    );
};

export default BibleSection;
