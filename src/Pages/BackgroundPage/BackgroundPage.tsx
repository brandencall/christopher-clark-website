import Experience from "../../Components/Experience.tsx";
import Achievements from "../../Components/Achievements/Achievements.tsx";
import "./BackgroundPage.css";

function BackgroundPage() {
    return (
        <div className="background-page-container">
            <div className="content-section">
                <h1 className="section-header">Experience</h1>
                <div className="experience-container">
                    <Experience />
                </div>
            </div>

            <div className="content-section">
                <h1 className="section-header">Education</h1>
                <div className="education-container">
                    <Education />
                </div>
            </div>

            <div className="content-section">
                <h1 className="section-header">Certifications</h1>
                <div className="certification-container">
                    <Achievements />
                </div>
            </div>
        </div>
    );
}

export default BackgroundPage;
