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
                        <h2 className="education-card-head-title">Master of Business Administration (MBA), Cybersecurity Track</h2>
                        <p className="education-date">Mar 2024 - Present</p>
                    </div>
                    <p className="education-location">University of New Mexico (UNM) | Albuquerque, New Mexico (NM)</p>
                    <ul className="education-list">
                        <li>Description of the education</li>
                        <li>Description of the education</li>
                        <li>Description of the education</li>
                        <li>Description of the education</li>
                    </ul>
                </div>
                <div className="education-card">
                    <div className="education-card-head">
                        <h2 className="education-card-head-title">Master of Science in Project Management (MSPM)</h2>
                        <p className="education-date">Mar 2024 - Present</p>
                    </div>
                    <p className="education-location">University of New Mexico (UNM) | Albuquerque, New Mexico (NM)</p>
                    <ul className="education-list">
                        <li>Description of the education</li>
                        <li>Description of the education</li>
                        <li>Description of the education</li>
                        <li>Description of the education</li>
                    </ul>
                </div>
                <div className="education-card">
                    <div className="education-card-head">
                        <h2 className="education-card-head-title">Bachelor of Science in Information Technology (IT), Data Network & Security</h2>
                        <p className="education-date">Jan 2021 - Dec 2021</p>
                    </div>
                    <p className="education-location">Liberty University | Lynchburg, Virginia(VA)</p>
                    <ul className="education-list">
                        <li>Description of the education</li>
                        <li>Description of the education</li>
                        <li>Description of the education</li>
                        <li>Description of the education</li>
                    </ul>
                </div>
                <div className="education-card">
                    <div className="education-card-head">
                        <h2 className="education-card-head-title">Certificate in Advanced Cybersecurity</h2>
                        <p className="education-date">Oct 2020  - May 2022</p>
                    </div>
                    <p className="education-location">Champlain College | Burlington, Vermont (VT)</p>
                    <ul className="education-list">
                        <li>Description of the education</li>
                        <li>Description of the education</li>
                        <li>Description of the education</li>
                        <li>Description of the education</li>
                    </ul>
                </div>
                <div className="education-card">
                    <div className="education-card-head">
                        <h2 className="education-card-head-title">Certificate in Computer Forensics & Digital Investigations</h2>
                        <p className="education-date">Jan 2021  - Aug 2021</p>
                    </div>
                    <p className="education-location">Champlain College | Burlington, Vermont (VT)</p>
                    <ul className="education-list">
                        <li>Description of the education</li>
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
