import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SkillsPage from "./Pages/SkillsPage";
import ContactPage from "./Pages/ContactPage";
import Navbar from "./Components/Navbar";

function App() {

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Skills" element={<SkillsPage />} />
                    <Route path="/Contact" element={<ContactPage/>} />
                </Routes>
            </Router>
        </>
    )
}

export default App
