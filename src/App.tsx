/* App.tsx */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import BackgroundPage from "./Pages/BackgroundPage/BackgroundPage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import SkillsPage from "./Pages/SkillsPage/SkillsPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Fixed navbar sits above all routes */}
      <Navbar />

      {/* Global page wrapper: applies max-width, gutters, and navbar offset */}
      <div className="app-page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/background" element={<BackgroundPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
