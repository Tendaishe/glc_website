import "./EventsSection.css";
import { ReadingImg } from "../../assets/images";
const EventsSection = () => {
    return (
        <div className="events-section">
            <h1 className="events-title">Events</h1>
            <div className="events-container">
                <div className="event-card">
                    <img
                        src={ReadingImg}
                        alt="First Event"
                        className="event-image"
                    />
                    <div className="event-info">
                        <p className="event-date">Monday, May 22 at 6h30 PM</p>
                        <h3 className="event-name">
                            FIRST FEATURED EVENT NAME
                        </h3>
                        <p className="event-description">ON NEXT WEEK</p>
                    </div>
                </div>
                <div className="event-card">
                    <img
                        src={ReadingImg}
                        alt="Second Event"
                        className="event-image"
                    />
                    <div className="event-info">
                        <p className="event-date">Monday, May 22 at 6h30 PM</p>
                        <h3 className="event-name">
                            FIRST FEATURED EVENT NAME
                        </h3>
                        <p className="event-description">ON NEXT WEEK</p>
                    </div>
                </div>
            </div>
            <button className="timetable-button">TIMETABLE</button>
        </div>
    );
};

export default EventsSection;
