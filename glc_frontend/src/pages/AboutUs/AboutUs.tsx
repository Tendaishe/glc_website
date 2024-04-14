import { ReadingImg } from "../../assets/images";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <>
            <section id="hero">
                <div className="hero-content">
                    <h1>
                        Let your light shine and you will never walk in darkness
                        again.
                    </h1>
                </div>
                {/* <img src={ReadingImg} alt="Church Poster" className="poster" /> */}
            </section>

            <section id="mission">
                <h2>Our Mission & Vision</h2>
                <p>
                    We are a bible believing church that solely believes and
                    teaches the death and resurrection of Jesus Christ on the
                    third day for the remissions of sins. Which is the salvation
                    of man. (Romans 10:8–9)
                </p>
                <p>
                    Matthew 4:16-17 "The people which sat in darkness saw great
                    light; and to them which sat in the region and shadow of
                    death light is sprung up."
                </p>
                <p>
                    It is our vision to plant Greater Light Churches all over
                    the world, create Bible study groups, home cell groups,
                    orphanages, biblical and educational institutions, and to
                    build up broken communities through the love of God and
                    charity works.
                </p>
            </section>

            <section id="values">
                <h2>Heart Of Greater Light Church</h2>
                <p>SHARE UNCONDITIONAL LOVE OF GOD WITH EVERYONE AROUND US…</p>
                <p>You are created for greater things.</p>
            </section>

            <section id="faith">
                <h2>Our Statement Of Faith/Belief</h2>
                <p>
                    BIBLE (THE WORD OF GOD) BOTH OLD AND NEW TESTAMENT IS
                    INFALLIBLE AUTHORITATIVE AND IS WITHOUT ERROR…
                </p>
            </section>

            <section id="contact">
                <h2>Contact Us</h2>
                <p>
                    Facebook:{" "}
                    <a href="https://facebook.com/GreaterLightChurchBirmingham">
                        Greater Light Church Birmingham
                    </a>
                </p>
                <p>
                    Instagram:{" "}
                    <a href="https://instagram.com/glcchurch_">glcchurch_</a>
                </p>
                <p>
                    Website:{" "}
                    <a href="http://greaterlightchurch.com">
                        http://greaterlightchurch.com
                    </a>
                </p>
                <p>
                    YouTube:{" "}
                    <a href="https://www.youtube.com/@greaterlightchurch2686">
                        Visit our channel
                    </a>
                </p>
            </section>
        </>
    );
};

export default AboutUs;
