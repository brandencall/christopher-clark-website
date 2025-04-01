import { useState } from "react";
import "./Experience.css";

const experiences = [
    {
        id: "job1",
        company: "TekSynap",
        role: "Systems Administrator II",
        date: "November 2023 - Present",
        details: [
            "Executed the acquisition and deployment of critical security updates and plugins, executing weekly update cycles for ACAS systems and improving system defense across corporate IT architecture by 40%.",
            "Assessed 500+ Cross Domain Solutions (CDS) requests annually, ensuring secure file transfers and exact data documentation, achieving an impeccable record of data integrity and secrecy.",
            "Managed deployment of VxRail and Azure-based virtualized infrastructure on NIPR/SIPR networks, integrating vSphere and WAC/iDrac for enhanced RBAC security, reducing manual intervention by 60% and increasing system integrity by 32%.",
            "Led the implementation of advanced system administration protocols, ensuring 99.5% service uptime through streamlined operations. Reduced downtime by 45%, bolstered computing environment security by mitigating potential threats by 70%.",
            "Controlled the upkeep of critical servers and Storage Area Networks (SAN) across diverse networks, enhancing data accessibility and cutting downtime by 50% for the SA Group.",
            "Ensured robust infrastructure security compliance by executing detailed IA processes; arranged RMF tasks, documentation, and system accreditation, maintaining ATO for over 150 systems, reducing security incidents by 25%."
        ]
    },
    {
        id: "job2",
        company: "United States Army Al Udeid AB, Qatar",
        role: "Information System Security Engineer (ISSE)",
        date: "December 2022 - March 2024",
        details: [
            "Devised a systematic workstation build procedure, guaranteeing current systems and enhancing team efficiency of information technology teams by 45%, cutting setup times by 55%, and lowering mistakes by 65%, thereby accelerating deployment operations.",
            "Implemented a classified credential system that bolstered user access control, strictly enforcing security protocols, and leading to a 40% reduction in unauthorized access incidents within the first six months.",
            "Conducted thorough examinations of server rooms to maintain stringent standards for sensitive data equipment, guaranteeing information assurance compliance and fortifying network security, which decreased potential data breaches by 25%.",
            "Collaborated with security teams to swiftly address incidents, safeguarding mission-critical assets, reducing data breach incidents by 40%, and enhancing overall system integrity."
        ]
    },
    {
        id: "job3",
        company: "United States Army Fort Bliss, Texas",
        role: "COMSEC Manager",
        date: "September 2021 to November 2022",
        details: [
            "Orchestrated COMSEC operations and contracts, including key technology management and sensitive equipment oversight; facilitated encryption key loading training for 50+ vehicles, ensuring secure communication channels and optimal operational readiness.",
            "Catalogued and led detailed COMSEC and HRH training for 200 brigade personnel; ensured 100% compliance with security protocols, enhancing the brigade's security posture within a quarter.",
            "Implemented comprehensive security policies from the COMSEC commander, achieving 100% regulatory compliance and fortifying systems against cyber threats, leading to a 40% reduction in security incidents."
        ]
    },
    {
        id: "job4",
        company: "United States Army Cp Walker, South Korea",
        role: "Network Security Administrator",
        date: "April 2020 to August 2021",
        details: [
            "Developed and executed comprehensive user access control strategies, achieving 100% compliance with information management protocols, and halving unauthorized access incidents company wide.",
            "Directed the detection, diagnosis, and resolution of complex software and network issues; coordinated with federal government Tier 3 supervisors and Area 4 network directors, enhancing system reliability and operational efficiency by 40%.",
            "Deployed and maintained TACLANE devices and 100+ Cisco Catalyst 3850 PoE+ switches, achieving a 25% increase in network performance; spearheaded initiatives to upgrade network architecture for improved security and efficiency."
        ]
    },
    {
        id: "job5",
        company: "United States Army Cp Walker, South Korea",
        role: "IT Operations Manager",
        date: "March 2019 to March 2020",
        details: [
            "Spearheaded critical network disconnection missions, ensuring operational continuity; reduced downtime by 40% and maintained service levels, showcasing expertise in managing complex transitions with minimal disruption.",
            "Administered continuous monitoring under Spectrum OS to swiftly identify and address network disturbances, reducing downtime by 40% and ensuring rapid resolution through constant communication across the chain of command.",
            "Acted as SME for the re-imaging, debugging, and maintenance of 200 computer systems, ensuring optimal performance and reliability. Achieved a 45% improvement in service quality and continuity of critical IT projects."
        ]
    }
];

function Experience() {
    const [selectedId, setSelectedId] = useState(experiences[0].id);
    return (
        <div className="experience-page-container">
            <div className="experiecne-button-container">
                {experiences.map((exp) => (
                    <button
                        key={exp.id}
                        className={selectedId === exp.id ? "active" : ""}
                        onClick={() => setSelectedId(exp.id)}
                    >
                        {exp.company}
                    </button>
                ))}
            </div>
            <div className="content">
                {experiences.map((exp) => (
                    exp.id === selectedId && (
                        <div key={exp.id}>
                            <h2>{exp.role}</h2>
                            <p className="content-dates">{exp.date}</p>
                            <ul>
                                {exp.details.map((detail: string, index: number) => (
                                    <li className="work-experience-list" key={index}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

export default Experience;
