import { useEffect, useState } from "react";
import ContactIcons from "../../Components/ContactIcons.tsx";
import "./HomePage.css";

function HomePage() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <div className={`container ${fadeIn ? "fade-in" : ""}`}>
            <div className="icon-row fade-in-up" style={{ animationDelay: '0.5s' }}>
                <ContactIcons />
            </div>

            <img
                src="/ChristopherClarkHeadShot.JPEG"
                alt="Christopher Clark"
                className="image fade-in-up"
                style={{ animationDelay: '0.4s' }}
            />

            <h2 className="name fade-in-up" style={{ animationDelay: '1.1s' }}>
                Christopher Clark
            </h2>
            <h3 className="tagline fade-in-up" style={{ animationDelay: '1.4s' }}>
                Systems Administrator | Future IT Project Manager
            </h3>

            <div className="text fade-in-up" style={{ animationDelay: '1.7s' }}>
                {/* About Me content */}
            </div>
                <p>
                My journey in IT began in July 2018 when I enlisted in the U.S. Army as a 25B, Information Technology Specialist. I didn't know where that oath would take me, but I was ready to build something bigger than myself. From my early days in Basic Training and AIT, to being stationed in South Korea, I was immediately placed in fast-paced environments that demanded problem-solving, adaptability, and accountability. By 2019, I was promoted to Private First Class and entrusted with the role of IT Operations Manager, a rare opportunity at that level. Those early experiences taught me that leadership isn't tied to rank, but to reliability.
                </p>
                <p>
                As I advanced to Sergeant in 2023, I served in several technical roles including COMSEC Manager and Information Systems Security Engineer. I've supported secure systems, managed communications access, and worked alongside teams to ensure uptime, integrity, and mission readiness.
                </p>
                <p>
                Along the way, I leaned into personal development. I failed my first two certification exams but used that as fuel. Once I passed Security+, I doubled down and earned over two dozen certifications across CompTIA, EC-Council, Cisco, ISACA, Microsoft, and more. Some were incredibly difficult, like the PMP, which required months of studying. Others pushed me into new areas of IT that I hadn't explored before. From cybersecurity to cloud architecture to risk management, I built a foundation that supports both technical execution and big-picture thinking.
                </p>
                <p>
                My education reflects that same drive. I studied cybersecurity and digital forensics at Champlain College, completed my undergraduate degree at Liberty University, and began dual graduate programs in Cybersecurity and Project Management at the University of New Mexico. It was through those experiences that I discovered how much I value project leadership. Project Management allows me to bring structure, purpose, and momentum to technical initiatives, and it's the direction I'm steering my career.
                </p>
                <p>
                I'm also enrolled in the Army National Guard's Traditional Officer Candidate School program. Across three phases, I've been tested in leadership, planning, and tactical operations. From ruck marches to briefing OPORDs as a Squad Leader, I've learned how to lead under pressure and with purpose. I'm currently deferring my commission until a Signal Officer slot opens, where I believe I can make the greatest impact.
                </p>
                <p>
                At the center of all this is a mindset I carry with me: take ownership, learn fast, support the mission, and elevate the people around you. Whether I'm solving problems at the keyboard or helping a team cross the finish line, I'm always looking for the most effective way to get the job done—and to do it well.
                </p>
            </div>
    );
}

export default HomePage;