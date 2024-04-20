import "./EventsSection.css";
import { BiblePrayer, ServiceTimes } from "../../assets/images";
const EventsSection = () => {
    return (
        <div className="events-section">
            <h1 className="events-title">Service Times</h1>
            <div className="events-container">
                <div className="event-card">
                    <img
                        src={BiblePrayer}
                        alt="First Event"
                        className="event-image"
                    />
                    <div className="event-info">
                        <p className="event-date">@ 11am - 2pm</p>
                        <h3 className="event-name">Sunday Service</h3>
                    </div>
                </div>
                <div className="event-card">
                    <img
                        src={ServiceTimes}
                        alt="Second Event"
                        className="event-image"
                    />
                    <div className="event-info">
                        <p className="event-date">@ 19:00 – 21:00</p>
                        <h3 className="event-name">Friday Prayers</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsSection;
