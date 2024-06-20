import { useState, useEffect } from "react";
import Modal from "react-modal";
import "./EventsSection.css";
import sanityClient from "../../utils/sanityClient";

interface Event {
    name: string;
    description?: string;
    date?: string;
    startTime: string;
    endTime: string;
    imageUrl: string;
}

const EventsSection = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `
            *[_type == "event"]{
                name,
                description,
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

    const openModal = (event: Event) => {
        setSelectedEvent(event);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedEvent(null);
    };

    return (
        <div className="events-section">
            <h1 className="events-title">Events</h1>
            <div className="events-container">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="event-card"
                        onClick={() => openModal(event)}
                    >
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
                                @{event.startTime}-{event.endTime}
                            </p>
                            <h3 className="event-name">{event.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
            {selectedEvent && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Event Modal"
                    className="event-modal"
                    overlayClassName="event-modal-overlay"
                >
                    <button
                        onClick={closeModal}
                        className="event-modal-close-button"
                    >
                        &times;
                    </button>
                    <img
                        src={selectedEvent.imageUrl}
                        alt={selectedEvent.name}
                        className="event-modal-image"
                    />
                    <h2 className="event-modal-name">{selectedEvent.name}</h2>
                    <p className="event-modal-date">
                        {selectedEvent.date && (
                            <span className="event-date">
                                {new Date(
                                    selectedEvent.date
                                ).toLocaleDateString()}
                            </span>
                        )}{" "}
                        @{selectedEvent.startTime}-{selectedEvent.endTime}
                    </p>

                    {selectedEvent.description && (
                        <p className="event-description">
                            {selectedEvent.description}
                        </p>
                    )}
                </Modal>
            )}
        </div>
    );
};

export default EventsSection;
