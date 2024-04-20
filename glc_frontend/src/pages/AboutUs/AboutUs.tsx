import { Poster, ChurchBanner } from "../../assets/images";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <main className="about-main">
            <section className="about-hero">
                <img
                    src={ChurchBanner}
                    alt="Church Banner"
                    className="hero-image"
                />
                <div className="hero-text">
                    <h1>Welcome to Greater Light Church</h1>
                    <p>
                        Let your light shine and you will never walk in darkness
                        again.
                    </p>
                    <a href="#about-section" className="btn-primary">
                        Learn More
                    </a>
                </div>
                <img className="poster" src={Poster} alt="Church Poster" />
            </section>

            <section id="about-section" className="about-sections">
                <div className="section vision">
                    <h2>Our Vision</h2>
                    <div className="text">
                        <p>
                            We are a bible believing church that solely believes
                            and teaches the death and resurrection of Jesus
                            Christ on the third day for the remissions of sins.
                            Which is the salvation of man. (Romans 10:8–9)
                        </p>
                        <p>
                            Matthew 4:16-17 "The people which sat in darkness
                            saw great light; and to them which sat in the region
                            and shadow of death light is sprung up."
                        </p>
                        <p>
                            It is our vision to plant Greater Light Churches all
                            over the world, create Bible study groups, home cell
                            groups, orphanages, biblical and educational
                            institutions, and to build up broken communities
                            through the love of God and charity works.
                        </p>
                    </div>
                </div>

                <div className="section values">
                    <h2>Heart of Greater Light Church</h2>
                    <div className="text">
                        <p>
                            SHARE UNCONDITIONAL LOVE OF GOD WITH EVERYONE AROUND
                            US...
                        </p>
                        <p>You are created for greater things.</p>
                    </div>
                </div>

                <div className="section belief">
                    <h2>Our Statement Of Faith/Belief</h2>
                    <div className="text">
                        <p>
                            BIBLE (THE WORD OF GOD) BOTH OLD AND NEW TESTAMENT
                            IS INFALLIBLE AUTHORITATIVE AND IS WITHOUT ERROR…
                        </p>
                    </div>
                </div>

                <div className="section mission">
                    <h2>Our Mission</h2>
                    <div className="text">
                        <p>
                            Mark 26:15-18 And he said unto them, Go ye into all
                            the world, and preach the gospel to every creature.
                            16 He that believeth and is baptized shall be saved;
                            but he that believeth not shall be damned. 17 And
                            these signs shall follow them that believe; In my
                            name shall they cast out devils; they shall speak
                            with new tongues; 18 They shall take up serpents;
                            and if they drink any deadly thing, it shall not
                            hurt them; they shall lay hands on the sick, and
                            they shall recover.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutUs;
