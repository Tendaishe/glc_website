import { useRef } from "react";
import "./ContactSection.css";
import emailjs from "emailjs-com";

const ContactSection = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    "service_xl896jp",
                    "template_46z7j53",
                    form.current,
                    "RxNRn_2dNYhx5Agnq"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        alert("Message sent successfully");
                    },
                    (error) => {
                        console.log(error.text);
                        alert("Failed to send message");
                    }
                );
        }
    };
    return (
        <div id="contact-section" className="contact-section">
            <h2>SEND US A MESSAGE</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="from_name" required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="from_email" required />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">SEND</button>
            </form>
        </div>
    );
};

export default ContactSection;
