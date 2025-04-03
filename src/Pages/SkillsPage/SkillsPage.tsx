import "./SkillsPage.css";

function SkillsPage() {
    return (
        <div className="skill-page-container">
            <div>
                <h1 className="section-header">Tools and Technologies</h1>

                <div className="skill-container">
                    <h2 className="skill-title">Project & Collaboration</h2>
                    <p className="skill-description">Microsoft Project, Microsoft Excel, Outlook, Visio, SOP Documentation, DoD Safe, ARL Safe</p>
                </div>

                <div className="skill-container">
                    <h2 className="skill-title">Cybersecurity & Compliance</h2>
                    <p className="skill-description">ACAS, SCAP, STIG Viewer, Security Scripting with Python, RMF Support, Compliance Tracking</p>
                </div>

                <div className="skill-container">
                    <h2 className="skill-title">Virtualization & Infrastructure</h2>
                    <p className="skill-description">VMware vSphere, ESXi, Dell iDRAC, BMC, VxRail</p>
                </div>

                <div className="skill-container">
                    <h2 className="skill-title">Networking & System Tools</h2>
                    <p className="skill-description">Cisco Catalyst 3850, TACLANE, Windows Server Admin, Spectrum OS, Command Line Utilities</p>
                </div>

                <div className="skill-container">
                    <h2 className="skill-title">Languages & Scripting</h2>
                    <p className="skill-description">Python, SQL (Oracle + Relational DB), HTML (basic), Bash (basic)</p>
                </div>

                <div className="skill-container">
                    <h2 className="skill-title">Operating Systems</h2>
                    <p className="skill-description">Windows 10/11, Windows Server, Linux (CentOS/Ubuntu), Android (Mobile Security)</p>
                </div>

                <div className="skill-container">
                    <h2 className="skill-title">Cloud & Emerging Tech</h2>
                    <p className="skill-description">Cloud Security Concepts, Blockchain (Intro), Spectrum Monitoring Tools</p>
                </div>

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

                <h1 className="section-header">Transferable Skills</h1>
                <p className="skill-intro-text">These are the traits I bring to every project, team, and mission—regardless of the role.</p>

                <div className="skill-container">
                    <h2 className="skill-title">Professional Strengths</h2>
                    <p className="skill-description">Problem Solving, Root Cause Analysis, Adaptability, Mentorship, Process Improvement, Communication, Attention to Detail</p>
                </div>
            </div>
        </div>
    );
}

export default SkillsPage;
