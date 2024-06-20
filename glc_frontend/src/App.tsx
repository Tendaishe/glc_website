import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import "./App.css";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ServiceTimes from "./pages/ServiceTimes/ServiceTimes";
import Bible from "./pages/Bible/Bible";
import { FooterSection } from "./components/index";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
    return (
        <>
            <div className="container">
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/service-times" element={<ServiceTimes />} />
                <Route path="/bible" element={<Bible />} />
                <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
            <FooterSection />
        </>
    );
};

export default App;
