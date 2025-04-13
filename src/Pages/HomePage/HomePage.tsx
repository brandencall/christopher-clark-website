import { useEffect, useState } from "react";
import ContactIcons from "../../Components/ContactIcons.tsx";
import "./HomePage.css";

function HomePage() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <div className={`page-content ${fadeIn ? "fade-in" : ""}`}>
            <div className="icon-row fade-in-up" style={{ animationDelay: '0.5s' }}>
                <ContactIcons />
            </div>
            <div className="container">
    
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
                Technical Project Manager | Systems Administrator
            </h3>

            <div className="text fade-in-up" style={{ animationDelay: '1.7s' }}>
                {/* About Me content */}
                <p>
                    My path into IT started in July 2018 when I joined the U.S. Army as a 25B, Information Technology Specialist. I didn’t know exactly where it would lead, but I wanted to challenge myself and build a solid foundation for my family. From Basic Training and AIT to being stationed in South Korea, I was placed in fast-paced environments where problem-solving, adaptability, and accountability weren’t optional. In 2019, I was promoted to Private First Class and took on the role of IT Operations Manager. That kind of responsibility isn't typical for that rank, but it taught me early that leadership has more to do with being dependable than with position.
                </p>
                <p>
                    As I advanced to Sergeant in 2023, I served in several technical roles including COMSEC Manager and Information Systems Security Engineer. I've supported secure systems, managed communications access, and worked alongside teams to ensure uptime, integrity, and mission readiness.
                </p>
                <p>
                    Along the way, I leaned into personal development. I failed my first two certification exams but used that as fuel. Once I passed Security+, I doubled down and earned over two dozen certifications across CompTIA, EC-Council, Cisco, ISACA, Microsoft, and more. Some were incredibly difficult, like the PMP, which required months of studying. Others pushed me into new areas of IT that I hadn't explored before. From cybersecurity to cloud architecture to risk management, I did my best to build a foundation that supports both technical execution and big-picture thinking.
                </p>
                <p>
                    My education reflects that same drive. I studied cybersecurity and digital forensics at Champlain College, completed my undergraduate degree at Liberty University, and began dual graduate programs in Cybersecurity and Project Management at the University of New Mexico. It was through those experiences that I discovered how much I value project leadership. Project Management allows me to bring structure, purpose, and momentum to technical initiatives, and it's the direction I'm steering my career.
                </p>
                <p>
                    I'm also enrolled in the Army National Guard's Traditional Officer Candidate School program. Across three phases, I've been tested in leadership, planning, and tactical operations. From ruck marches to briefing OPORDs as a Squad Leader, I've learned how to lead under pressure and with purpose. I'm currently deferring my commission until a Signal Officer slot opens, where I believe I can make the greatest impact.
                </p>
                <p>
                    At the core of everything I do is a mindset built on ownership, quick learning, and pushing the team forward. I focus on what needs to get done, find the best way to do it, and make sure it's done right. Whether I’m solving technical issues or helping a team stay on track, I aim to finish strong and raise the standard every time.
                </p>
            </div>
        </div>
    </div>
  );
}

export default HomePage;
