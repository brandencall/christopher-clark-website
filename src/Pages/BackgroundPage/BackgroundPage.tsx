import CareerTimeline from "../../Components/CareerTimeline.tsx";
import Certifications from "../../Components/Certifications/Certifications.tsx";
import "./BackgroundPage.css";

function BackgroundPage() {
    return (
        <div className="page-content">
            <h1 className="section-header">Career Timeline</h1>
            <div className="career-timeline-container">
                <CareerTimeline />
            </div>

            <h1 className="section-header">Education</h1>
            <div className="education-container">
                <div className="education-card">
                    <div className="education-card-head">
                        <h2 className="education-card-head-title">
                            Master of Business Administration (MBA), Cybersecurity Track
                        </h2>
                        <p className="education-date">Mar 2024 - Present</p>
                    </div>
                    <p className="education-location">
                        University of New Mexico (UNM) | Albuquerque, New Mexico (NM)
                    </p>
                    <ul className="education-list">
                    <li>Building leadership and decision-making skills through real-world topics like operations, accounting, and strategy.</li>
                    <li>Learning cybersecurity from the business side, including risk management, secure systems, and network oversight.</li>
                    <li>Getting hands-on with tools for data-driven decisions, strategic planning, and tech commercialization.</li>
                    <li>Pairing this with the MSPM program to stay on track toward IT project and program management.</li>
                </ul>
            </div>

            <div className="education-card">
                <div className="education-card-head">
                    <h2 className="education-card-head-title">Master of Science in Project Management (MSPM)</h2>
                    <p className="education-date">Mar 2024 - Present</p>
                </div>
                <p className="education-location">University of New Mexico (UNM) | Albuquerque, New Mexico (NM)</p>
                <ul className="education-list">
                    <li>Learning how to lead technical projects by building a strong foundation in both Agile and Waterfall project management methods.</li>
                    <li>Taking courses like Innovative Product Development and Technology Program Management to understand how tech products move from concept to deployment.</li>
                    <li>Getting hands-on with analytical tools and strategies that support data-driven decisions and help manage complex projects with tighter focus and better results.</li>
                    <li>Pairing this degree with my MBA to bring together business strategy and technical project leadership in a way that fits how real IT projects actually run.</li>
                </ul>
            </div>

            <div className="education-card">
                <div className="education-card-head">
                    <h2 className="education-card-head-title">Bachelor of Science (B.Sc) in Info. Tech. (IT), Data Network & Security</h2>
                    <p className="education-date">Jan 2021 - Dec 2021</p>
                </div>
                <p className="education-location">Liberty University | Lynchburg, Virginia (VA)</p>
                <ul className="education-list">
                    <li>Built a strong foundation in core IT areas including network security, system administration, and database management.</li>
                    <li>Gained hands-on experience designing and managing Oracle databases, with a focus on organizing and retrieving data efficiently.</li>
                    <li>Studied key cybersecurity principles and practices, preparing for roles that require protecting systems and sensitive information.</li>
                    <li>Worked with Linux and explored digital forensics, sharpening my ability to understand how systems run and how to secure them.</li>
                </ul>
            </div>

            <div className="education-card">
                <div className="education-card-head">
                    <h2 className="education-card-head-title">Certificate in Advanced Cybersecurity</h2>
                    <p className="education-date">Oct 2020 - May 2022</p>
                </div>
                <p className="education-location">Champlain College | Burlington, Vermont (VT)</p>
                <ul className="education-list">
                    <li>Studied advanced cybersecurity topics like intrusion detection, ethical hacking, mobile security, and cloud defense strategies.</li>
                    <li>Used Python to automate security tasks and improve how teams respond to incidents in real-world environments.</li>
                    <li>Gained hands-on experience securing both on-prem and cloud systems against evolving threats.</li>
                    <li>Built the technical skills needed to support security operations teams through threat detection, analysis, and incident response.</li>
                </ul>
            </div>

            <div className="education-card">
                <div className="education-card-head">
                    <h2 className="education-card-head-title">Certificate in Computer Forensics & Digital Investigations</h2>
                    <p className="education-date">Jan 2021 - Aug 2021</p>
                </div>
                <p className="education-location">Champlain College | Burlington, Vermont (VT)</p>
                <ul className="education-list">
                    <li>Trained to secure, collect, and analyze digital evidence using industry-standard forensic tools and methods.</li>
                    <li>Learned how to trace user behavior and recover deleted or hidden data through file recovery, OS forensics, and anti-forensics techniques.</li>
                    <li>Studied cybercrime and legal evidence handling to ensure investigations meet chain-of-custody and admissibility standards.</li>
                    <li>Built the skills to support law enforcement and corporate teams investigating insider threats, policy violations, and cyber incidents.</li>
                </ul>
            </div>

            <div className="education-card">
                <div className="education-card-head">
                    <h2 className="education-card-head-title">Information Technology Specialist (25B AIT)</h2>
                    <p className="education-date">Oct 2018 - Mar 2019</p>
                </div>
                <p className="education-location">United States Army Signal School | Fort Eisenhower, Augusta, Georgia (GA)</p>
                <ul className="education-list">
                    <li>Completed U.S. Army Advanced Individual Training (AIT) for the 25B MOS, gaining hands-on experience with client operating systems, network security, and system administration.</li>
                    <li>Trained directly on hardware, Exchange Server, Windows Server, and wide area networks in mission-ready environments focused on uptime and reliability.</li>
                    <li>Built practical skills in routing, switching, and troubleshooting to support help desk, NOC, and field operations.</li>
                    <li>Developed a strong baseline in IT essentials, preparing to support and secure both military and enterprise systems under high-stakes conditions.</li>
                </ul>
            </div>
        </div>
            <h1 className="section-header">Certifications</h1>
            <Certifications />
        </div>
    );
}

export default BackgroundPage;