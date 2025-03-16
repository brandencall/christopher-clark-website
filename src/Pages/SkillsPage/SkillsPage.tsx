import "./SkillsPage.css";
import Experience from "../../Components/Experience.tsx";

function SkillsPage() {
    return (
        <div className="skill-page-container">
            <div>
                <h1 className="section-header">Skills</h1>
                <div className="skill-container">
                    <h2 className="skill-title">Skill Title</h2>
                    <p className="skill-description">A bunch of skills listed out here like Kevins Portfolio</p>
                </div>
                <div className="skill-container">
                    <h2 className="skill-title">Skill Title 2</h2>
                    <p className="skill-description">A bunch of skills listed out here like Kevins Portfolio</p>
                </div>
                <div className="skill-container">
                    <h2 className="skill-title">Skill Title 3</h2>
                    <p className="skill-description">A bunch of skills listed out here like Kevins Portfolio</p>
                </div>
                <div className="skill-container">
                    <h2 className="skill-title">Skill Title 4</h2>
                    <p className="skill-description">A bunch of skills listed out here like Kevins Portfolio</p>
                </div>
            </div>
            <div className="experience-section">
                <h1 className="section-header">Experience</h1>
                <div className="experience-container">
                    <Experience />
                </div>
            </div>
        </div>
    );
}

export default SkillsPage;
