import "./ContactSection.css";

const ContactSection = () => {
    return (
        <div id="contact-section" className="contact-section">
            <h2>SEND US A MESSAGE</h2>
            <form className="contact-form">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" required />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                />
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                ></textarea>
                <button type="submit">SEND</button>
            </form>
        </div>
    );
};

export default ContactSection;
