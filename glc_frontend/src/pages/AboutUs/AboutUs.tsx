import { useEffect, useState } from "react";
import AboutTimelineComponent from "../../components/AboutTimelineComponent/AboutTimelineComponent";
import "./AboutUs.css";
import sanityClient from "../../utils/sanityClient";

interface AboutUsData {
    bannerUrl: string;
    posterUrl: string;
    heading: string;
    text: string;
}

const AboutUs = () => {
    const [aboutUsData, setAboutUsData] = useState<AboutUsData | null>(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `
                *[_type == "aboutUs"][0]{
                    "bannerUrl": banner.asset->url,
                    "posterUrl": poster.asset->url,
                    heading,
                    text,
            }
             `
            )
            .then((data) => setAboutUsData(data))
            .catch(console.error);
    }, []);

    if (!aboutUsData) return <div>Loading...</div>;

    return (
        <main className="about-main">
            <section id="about-section" className="about-hero">
                <img
                    src={aboutUsData.bannerUrl}
                    alt="Church Banner"
                    className="hero-image"
                />
                <div className="hero-text">
                    <h1>{aboutUsData.heading}</h1>
                    <p>{aboutUsData.text}</p>
                    <a href="#about-content" className="btn-primary">
                        Learn More
                    </a>
                </div>
                <img
                    className="poster"
                    src={aboutUsData.posterUrl}
                    alt="Church Poster"
                />
            </section>

            <section id="vision-section" className="our-vision-text">
                <h2>Our Vision</h2>
                <p>
                    It is our vision to plant Greater Light Churches all over
                    the world, Bible study groups, Home cell groups, Orphanage,
                    Biblical institutions, Educational institutions and to build
                    up broken communities through the love of God and charity
                    works.
                </p>
            </section>
            <section id="belief-section" className="timeline">
                <h2 className="timeline-heading">Our Beliefs</h2>
                <AboutTimelineComponent />
            </section>
        </main>
    );
};

export default AboutUs;
