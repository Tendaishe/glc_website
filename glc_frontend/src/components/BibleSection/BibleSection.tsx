import { useState, useEffect } from "react";
import "./BibleSection.css";
import { ReadingImg } from "../../assets/images";
import sanityClient from "../../utils/sanityClient";
import IPrayer from "./IPrayer";

const BibleSection = () => {
    const [prayer, setPrayer] = useState<IPrayer | null>(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "prayerOfTheDay"][0] {
                    text,
                    citation
                }`
            )
            .then((data) => {
                setPrayer(data);
            })
            .catch((error) => console.error(error));
    }, []);

    if (!prayer) return <div>Loading...</div>;

    return (
        <div className="bible-section">
            <h1 className="bible-header">Bible</h1>
            <div className="bible-section-container">
                <div className="bible-text-container">
                    <h2>PRAYER OF THE DAY</h2>
                    <p className="prayer-of-the-day">{prayer.text}</p>
                    <cite>{prayer.citation}</cite>
                </div>
                <div className="bible-image-container">
                    <img src={ReadingImg} alt="Person reading a Bible" />
                </div>
            </div>
        </div>
    );
};

export default BibleSection;
