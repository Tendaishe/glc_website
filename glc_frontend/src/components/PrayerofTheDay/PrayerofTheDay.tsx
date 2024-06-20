import { useState, useEffect } from "react";
import "./PrayerofTheDay.css";
import sanityClient from "../../utils/sanityClient";
import IPrayer from "./IPrayer";

const BibleSection = () => {
    const [prayer, setPrayer] = useState<IPrayer | null>(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "prayerOfTheDay"][0] {
                    text,
                    citation,
                    "imageUrl": image.asset->url
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
            <h1 className="bible-header">PRAYER OF THE DAY</h1>
            <div className="bible-section-container">
                <div className="bible-text-container">
                    <p className="prayer-of-the-day">{prayer.text}</p>
                    <cite>{prayer.citation}</cite>
                </div>
                <div className="bible-image-container">
                    <img
                        src={prayer.imageUrl}
                        alt="Prayer Image"
                        className="interactive-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default BibleSection;
