import "./SkillsPage.css";
import Experience from "../../Components/Experience.tsx";
import Achievements from "../../Components/Achievements/Achievements.tsx";

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
            <div className="content-section">
                <h1 className="section-header">Experience</h1>
                <div className="experience-container">
                    <Experience />
                </div>
            </div>
            <div className="content-section">
                <h1 className="section-header">Education</h1>
                <div className="education-card">
                    <div className="education-card-head">
                        <h2 className="education-card-head-title">Title of the Education</h2>
                        <p className="education-date">Dec 2019 - Present</p>
                    </div>
                    <p className="education-location">School Name | Education Location</p>
                    <ul className="education-list">
                        <li>Description of the education alsdkjf alsdkjjlkd dlskjfkj akljfdkj jfdj</li>
                        <li>Description of the education</li>
                        <li>Description of the education</li>
                        <li>Description of the education</li>
                    </ul>
                </div>
                <div className="education-card">
                    <div className="education-card-head">
                        <h2 className="education-card-head-title">Title of the Education</h2>
                        <p className="education-date">Dec 2019 - Present</p>
                    </div>
                    <p className="education-location">School Name | Education Location</p>
                    <ul className="education-list">
                        <li>Description of the education alsdkjf alsdkjjlkd dlskjfkj akljfdkj jfdj</li>
                        <li>Description of the education</li>
                        <li>Description of the education</li>
                        <li>Description of the education</li>
                    </ul>
                </div>
            </div>
            <div className="content-section">
                <h1 className="section-header">Achievements</h1>
            </div>
            <Achievements />
        </div>
    );
}

export default SkillsPage;
