import Experience from "../../Components/Experience.tsx";
import "./BackgroundPage.css"; // You'll create this file next

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

                {/* Copy all your education cards here from SkillsPage.jsx */}
                {/* Start Copy from here ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */}
                <div className="education-card">
                    <div className="education-card-head">
                        <h2 className="education-card-head-title">Master of Business Administration (MBA), Cybersecurity Track</h2>
                        <p className="education-date">Mar 2024 - Present</p>
                    </div>
                    <p className="education-location">University of New Mexico (UNM) | Albuquerque, New Mexico (NM)</p>
                    <ul className="education-list">
                        <li>Developing leadership, strategic, and decision-making skills through courses in operations, economics, accounting, and marketing.</li>
                        <li>Studying cybersecurity concepts including risk management, systems security, and network administration from a business perspective.</li>
                        <li>Gaining hands-on experience with data-driven decision tools, technology commercialization, and strategic planning processes.</li>
                        <li>Pursuing a dual-degree with the MSPM program to reinforce my transition into IT project and program management.</li>
                    </ul>
                </div>

                {/* ...Copy all other education-card blocks from SkillsPage.jsx here... */}
                {/* End Copy ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */}
            </div>
        </div>
    );
}

export default BackgroundPage;
