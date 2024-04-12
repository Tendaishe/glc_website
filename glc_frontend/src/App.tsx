import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import "./App.css";
import Home from "./pages/Home/Home";

const App = () => {
    return (
        <>
            <div className="container">
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
};

export default App;
