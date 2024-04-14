import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import "./App.css";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Bible from "./pages/Bible/Bible";
import { FooterSection } from "./components/index";

const App = () => {
    return (
        <>
            <div className="container">
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/bible" element={<Bible />} />
            </Routes>
            <FooterSection />
        </>
    );
};

export default App;
