import { useState, useEffect } from "react";
import "./EventsSection.css";
import sanityClient from "../../utils/sanityClient";

interface Event {
    name: string;
    date?: string;
    startTime: string;
    endTime: string;
    imageUrl: string;
}

const EventsSection = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        sanityClient
            .fetch(
                `
            *[_type == "event"]{
                name,
                date,
                startTime,
                endTime,
                "imageUrl": image.asset->url
            } | order(date asc)
             `
            )
            .then((data) => {
                const currentEvents = data.filter((event: Event) => {
                    return !event.date || new Date(event.date) >= new Date();
                });
                setEvents(currentEvents);
            })
            .catch(console.error);
    }, []);

    return (
        <div className="events-section">
            <h1 className="events-title">Events</h1>
            <div className="events-container">
                {events.map((event, index) => (
                    <div key={index} className="event-card">
                        <img
                            src={event.imageUrl}
                            alt={event.name}
                            className="event-image"
                        />
                        <div className="event-info">
                            <p className="event-date">
                                {event.date && (
                                    <span className="event-date">
                                        {new Date(
                                            event.date
                                        ).toLocaleDateString()}
                                    </span>
                                )}{" "}
                                @ {event.startTime} - {event.endTime}
                            </p>
                            <h3 className="event-name">{event.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsSection;
