import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import BackgroundPage from "./Pages/BackgroundPage/BackgroundPage"; // ✅ new import
import SkillsPage from "./Pages/SkillsPage/SkillsPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Navbar from "./Components/Navbar";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/background" element={<BackgroundPage />} /> {/* ✅ new route */}
                    <Route path="/skills" element={<SkillsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
