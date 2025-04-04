import Experience from "../../Components/Experience.tsx";
import Achievements from "../../Components/Achievements/Achievements.tsx";
import "./BackgroundPage.css";

function BackgroundPage() {
    return (
        <div className="content-section">
            <h1 className="section-header">Career Timeline</h1>
            <div className="experience-container">
                <Experience />
            </div>

            <h1 className="section-header">Education</h1>

            <div className="education-card">
                <div className="education-card-head">
                    <h2 className="education-card-head-title">Master of Business Administration (MBA), Cybersecurity Track</h2>
                    <p className="education-date">Mar 2024 - Present</p>
                </div>
                <p className="education-location">University of New Mexico (UNM) | Albuquerque, New Mexico (NM)</p>
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
                    <li>Building a robust foundation in project management principles, focusing on methodologies such as Agile and Waterfall to effectively lead technology-driven projects.</li>
                    <li>Engaging in courses like Innovative Product Development and Technology Program Management to understand the lifecycle of tech products from conception to market deployment.</li>
                    <li>Developing proficiency in analytical tools and techniques essential for data-driven decision-making and strategic planning in complex project environments.</li>
                    <li>Complementing my MBA studies by integrating business acumen with technical project management expertise, creating a well-rounded approach to IT project leadership.</li>
                </ul>
            </div>

            <div className="education-card">
                <div className="education-card-head">
                    <h2 className="education-card-head-title">Bachelor of Science (B.Sc) in Info. Tech. (IT), Data Network & Security</h2>
                    <p className="education-date">Jan 2021 - Dec 2021</p>
                </div>
                <p className="education-location">Liberty University | Lynchburg, Virginia (VA)</p>
                <ul className="education-list">
                    <li>Developed a solid foundation in network security, database management, and system administration including Network Security, Database Systems, and System Administration.</li>
                    <li>Gained hands-on experience with Oracle database design and administration, enhancing skills in data organization and retrieval.</li>
                    <li>Explored information security principles and cybersecurity practices, preparing for roles that require safeguarding organizational data.</li>
                    <li>Acquired practical knowledge of Linux operating systems and digital forensics, contributing to a comprehensive understanding of system operations and security measures.</li>
                </ul>
            </div>

            <div className="education-card">
                <div className="education-card-head">
                    <h2 className="education-card-head-title">Certificate in Advanced Cybersecurity</h2>
                    <p className="education-date">Oct 2020 - May 2022</p>
                </div>
                <p className="education-location">Champlain College | Burlington, Vermont (VT)</p>
                <ul className="education-list">
                    <li>Studied advanced cybersecurity concepts including intrusion detection, ethical hacking, mobile security, and cloud computing protection.</li>
                    <li>Used Python scripting to automate security workflows and enhance response capabilities in real-world scenarios.</li>
                    <li>Built hands-on experience securing systems and networks against evolving threats across traditional and cloud environments.</li>
                    <li>Prepared to support modern security operations teams through technical proficiency in threat detection, analysis, and remediation.</li>
                </ul>
            </div>

            <div className="education-card">
                <div className="education-card-head">
                    <h2 className="education-card-head-title">Certificate in Computer Forensics & Digital Investigations</h2>
                    <p className="education-date">Jan 2021 - Aug 2021</p>
                </div>
                <p className="education-location">Champlain College | Burlington, Vermont (VT)</p>
                <ul className="education-list">
                    <li>Trained in securing, acquiring, and analyzing digital evidence using industry-standard forensic tools and processes.</li>
                    <li>Explored anti-forensics, operating system forensics, and file recovery to trace user behavior and recover hidden data.</li>
                    <li>Studied cybercrime, criminal law, and legal evidence handling to ensure forensically sound investigation practices.</li>
                    <li>Built a foundation for supporting law enforcement or corporate investigations into insider threats, policy violations, or cyber incidents.</li>
                </ul>
            </div>

            <div className="education-card">
                <div className="education-card-head">
                    <h2 className="education-card-head-title">Information Technology Specialist (25B AIT)</h2>
                    <p className="education-date">Oct 2018 - Mar 2019</p>
                </div>
                <p className="education-location">United States Army Signal School | Fort Eisenhower, Augusta, Georgia (GA)</p>
                <ul className="education-list">
                    <li>Completed U.S. Army Advanced Individual Training (AIT) for the 25B MOS, developing foundational skills in client operating systems, network security, and system administration.</li>
                    <li>Received hands-on training in hardware, Exchange Server, Windows Server, and wide area networks—learning to install, operate, and maintain critical IT infrastructure under mission-focused conditions.</li>
                    <li>Gained practical experience with routing, switching, and troubleshooting techniques applicable to help desk, NOC, and field support environments.</li>
                    <li>Built a strong understanding of information technology essentials, preparing to support and secure military and enterprise-level systems in high-availability environments.</li>
                </ul>
            </div>

            <h1 className="section-header">Certifications</h1>
            <Achievements />
        </div>
    );
}

export default BackgroundPage;