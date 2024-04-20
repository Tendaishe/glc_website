import {
    Banner,
    OurVisionSection,
    PrayerofTheDay,
    EventsSection,
    GallerySection,
    ContactSection,
} from "../../components/index";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <OurVisionSection></OurVisionSection>
            <PrayerofTheDay></PrayerofTheDay>
            <EventsSection></EventsSection>
            <GallerySection limit={4}></GallerySection>
            <ContactSection></ContactSection>
        </>
    );
};

export default Home;
