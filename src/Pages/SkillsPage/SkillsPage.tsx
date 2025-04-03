import "./SkillsPage.css";
import Experience from "../../Components/Experience.tsx";
import Achievements from "../../Components/Achievements/Achievements.tsx";

function SkillsPage() {
    return (
        <div className="skill-page-container">
            <div>
                <h1 className="section-header">Project Management Skills</h1>
                <div className="skill-container">
                    <h2 className="skill-title">Agile Concepts & Scrum Fundamentals</h2>
                    <p className="skill-description">I completed Certified ScrumMaster® (CSM) training, which gave me a solid foundation in Agile frameworks. I understand the purpose of sprints, the value of daily stand-ups, and how iterative delivery helps teams adapt and respond to change. While I haven’t worked in a formally labeled “Agile shop,” I’ve seen these principles in action—especially when priorities shifted and we had to adjust quickly in real-world environments.</p>
                </div>
                <div className="skill-container">
                    <h2 className="skill-title">Task Ownership & Accountability</h2>
                    <p className="skill-description">Even when I wasn’t the “official” lead, I was trusted to own key tasks—like ACAS patching, server monitoring, or secure file transfers. I took initiative, repeated processes until I mastered them, and kept things running without needing someone to constantly check in. That mindset of “own it, finish it, improve it” is something I carry into every role.</p>
                </div>
                <div className="skill-container">
                    <h2 className="skill-title">Knowledge Transfer & SOP Development</h2>
                    <p className="skill-description">I’ve written turnover SOPs, walked teammates through workflows, and made sure processes didn’t get lost in rotation. I know how important documentation is—not just for compliance, but for making sure the next person is set up for success. That’s a skill that directly applies to project management handoffs and scaling knowledge across teams.</p>
                </div>
                <div className="skill-container">
                    <h2 className="skill-title">Supporting Compliance-Driven Projects</h2>
                    <p className="skill-description">I’ve worked on systems that required tight compliance—where everything from scans to documentation needed to be done right. I didn’t write the POA&Ms, but I helped generate the raw material by running STIGs, ACAS scans, and maintaining patch schedules. I learned how to support security-focused projects and keep the paper trail clean.</p>
                </div>
                <div className="skill-container">
                    <h2 className="skill-title">Workflow & Timeline Coordination</h2>
                    <p className="skill-description">In both Army and civilian roles, I’ve had to coordinate with teams to meet deployment timelines or mission deadlines. Whether it was key loading before an exercise or system reimaging before handover, I learned to keep things on track and adjust when unexpected issues popped up—something that carries over naturally into managing project timelines and deliverables.</p>
                </div>
                <div className="skill-container">
                    <h2 className="skill-title">Cross-Functional Communication</h2>
                    <p className="skill-description">I’ve had to translate technical problems to people outside of IT—like explaining why a network issue was affecting phones, or helping non-tech teammates understand how to access SIPR. Being that bridge between users and tech is a strength I plan to bring with me into project management roles.</p>
                </div>
                <div className="skill-container">
                    <h2 className="skill-title">Leadership, Collaboration & Peer Development</h2>
                    <p className="skill-description">I’ve consistently stepped up to lead by example—whether it was training junior soldiers, guiding teammates through tech workflows, or helping others troubleshoot problems step-by-step. I’ve built trust by staying calm, clear, and hands-on. That same mindset carries into how I collaborate today—supporting others, sharing what I know, and helping the team move forward together.</p>
                </div>
                <h1 className="section-header">Technical Skills</h1>
                <div className="skill-container">
                    <h2 className="skill-title">System Administration</h2>
                    <p className="skill-description">I’ve worked directly with virtual infrastructure, user management, and vulnerability scanning. Most of my hands-on experience comes from managing ESXi environments with vSphere, monitoring systems using iDRAC and BMC, and maintaining uptime by identifying issues before they became outages. I’ve also done imaging, user support, and some basic hardware troubleshooting.</p>
                </div>
                <div className="skill-container">
                    <h2 className="skill-title">Information Security Support (RMF, ACAS, STIG)</h2>
                    <p className="skill-description">While I haven't led compliance efforts, I’ve supported them through regular ACAS scans, STIG analysis using DoD STIG Viewer, and SCAP tool reviews. I understand RMF concepts and how system configurations, inherited vulnerabilities, and documentation play into achieving and maintaining ATO.</p>
                </div>
                <div className="skill-container">
                    <h2 className="skill-title">Secure Communications (COMSEC)</h2>
                    <p className="skill-description">As a COMSEC Manager, I regularly loaded encryption keys using SKL and understood key handling procedures like issuing, destroying, and tracking access. I helped fellow soldiers understand the “why” behind our process and supported field exercises by rotating keys on a strict schedule.</p>
                </div>
                <div className="skill-container">
                    <h2 className="skill-title">IT Operations & Support</h2>
                    <p className="skill-description">I’ve reimaged and supported over 200 classified systems, working with users to troubleshoot common issues—from software errors to misconfigurations and network outages. I also worked with Tier 3 and federal support teams when issues were beyond our scope, learning how to escalate and communicate clearly across teams.</p>
                </div>
                <div className="skill-container">
                    <h2 className="skill-title">Networking (Basic Switching & Connectivity)</h2>
                    <p className="skill-description">I’ve physically installed and updated Cisco Catalyst 3850 switches and helped with TACLANE setup during field operations. I didn’t handle deep configuration, but I followed detailed instructions, supported upgrades, and worked closely with senior network engineers during troubleshooting.</p>
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
                        <li>Developing leadership, strategic, and decision-making skills through courses in operations, economics, accounting, and marketing.</li>
                        <li>Studying cybersecurity concepts including risk management, systems security, and network administration from a business perspective.</li>
                        <li>Gaining hands-on experience with data-driven decision tools, technology commercialization, and strategic planning processes.</li>
                        <li>Pursuing a dual-degree with the MSPM program to reinforce my transition into IT project and program management.</li>
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
                    <p className="education-location">Liberty University | Lynchburg, Virginia(VA)</p>
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
                        <p className="education-date">Oct 2020  - May 2022</p>
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
                        <p className="education-date">Jan 2021  - Aug 2021</p>
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
                        <h2 className="education-card-head-title">Certificate in Computer Forensics & Digital Investigations</h2>
                        <p className="education-date">Jan 2021  - Aug 2021</p>
                    </div>
                    <p className="education-location">United States Army Signal School | Fort Eisenhower, Augusta, Georgia(GA)</p>
                    <ul className="education-list">
                        <li>Completed U.S. Army Advanced Individual Training (AIT) for the 25B MOS, developing foundational skills in client operating systems, network security, and system administration.</li>
                        <li>Received hands-on training in hardware, Exchange Server, Windows Server, and wide area networks—learning to install, operate, and maintain critical IT infrastructure under mission-focused conditions.</li>
                        <li>Gained practical experience with routing, switching, and troubleshooting techniques applicable to help desk, NOC, and field support environments.</li>
                        <li>Built a strong understanding of information technology essentials, preparing to support and secure military and enterprise-level systems in high-availability environments.</li>
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
