import { useState } from "react";
import "./Experience.css";

const experiences = [
    {
        id: "job1",
        company: "TekSynap",
        role: "Systems Administrator II",
        date: "November 2023 - Present",
        details: [
            "When I first joined TekSynap, I was handed the responsibility of weekly ACAS patching. What started as something I was trained on quickly became something I owned. Every week I handled updates and helped reduce critical vulnerabilities in the environment by staying consistent with plugin deployments. Over time, that effort helped cut high-risk findings by around 25%.",

            "I processed hundreds of Cross Domain Solution (CDS) requests, reviewed COR approvals, and securely transferred data between NIPR and SIPR using platforms like DoD Safe and ARL Safe. I also handled eBook media transfers and ensured everything moved through the right channels without delays or security issues.",
        
            "On the infrastructure side, I worked hands-on with vSphere and iDRAC, using procedures given to me by senior engineers. As I repeated the process, I got better and more confident deploying virtual machines and adjusting configurations. I also used BMC and iDRAC to monitor server health across Dell, VxRail, and Azure systems, and helped reduce system downtime significantly for the team and users.",
        
            "I ran regular ACAS scans, analyzed findings using SCAP tools and STIG Viewer, and documented everything clearly. I was able to speak to why vulnerabilities were open, what was inherited, and helped support RMF compliance through accurate reporting."
        ]
    },
    {
        id: "job2",
        company: "United States Army  Al Udeid AB, Qatar/Fort Bliss, TX",
        role: "Information System Security Engineer (ISSE)",
        date: "December 2022 - March 2024",
        details: [
            "I worked on classified workstations, handling imaging, driver issues, and ensuring users could connect on both NIPR and SIPR networks. During downtime, I trained other soldiers on system setup and helped improve deployment speed with small process tweaks that made a difference.",
            
            "I was responsible for creating user accounts and managing permissions, making sure CAC and token logins were set up correctly across both NIPR and SIPR environments. We handled a good amount of hands-on work like running cable, fixing VoIP lines, and moving network drops as users shifted locations.",
            
            "Before we rotated out, we put together a straightforward SOP to pass down. It wasn’t overly polished, but it covered what mattered and gave the next team a solid starting point."
        ]
    },
    {
        id: "job3",
        company: "United States Army  Fort Bliss, Texas",
        role: "COMSEC Manager",
        date: "September 2021 to November 2022",
        details: [
            "I regularly loaded encryption keys onto tactical radios using the SKL, making sure secure comms were good to go before field ops kicked off. While we waited, I used that time to walk soldiers through the process and explain why it mattered, helping them understand how proper key handling tied directly into operational success.",
            
            "Keys were rotated on a strict schedule: weekly, monthly, quarterly, and annually. I maintained detailed accountability logs for each issue and destruction, ensuring everything stayed compliant and inspection-ready.",
            
            "I performed routine spot checks and used our credential system to track and verify key handling. If a key was deleted or mishandled, I could trace it back to the individual responsible and take corrective action. I stayed aligned with brigade-level COMSEC guidance and worked directly with mission planners to ensure keys were rotated on time, keeping critical comms secured during every field exercise."
        ]
    },
    {
        id: "job4",
        company: "United States Army  Cp Walker, South Korea",
        role: "Network Security Administrator",
        date: "April 2020 to August 2021",
        details: [
            "Installed and updated Cisco Catalyst switches and helped set up TACLANE devices during field operations. I didn’t handle deep config, but I followed procedures closely and picked up valuable hands-on experience by working alongside more advanced team members.",
            
            "Managed user access and daily troubleshooting across classified systems. I was often the first stop when something went down, and I kept things moving while working with Tier 3 and Area IV support when issues got more complex.",

            "Stayed involved in system handoffs, outages, and hardware swaps to keep our gear mission-ready. When comms or access went down, I made sure it got fixed fast, even if it meant chasing down cables or walking people through workarounds."
        ]
    },
    {
        id: "job5",
        company: "United States Army  Cp Walker, South Korea",
        role: "IT Operations Manager",
        date: "March 2019 to March 2020",
        details: [
            "Reimaged and maintained over 200 classified systems, resolving both software and hardware issues quickly to avoid downtime. I became the go-to for system recovery and kept everything running clean during high-turnover periods.",
            
            "Monitored system availability with Spectrum OS and stayed on top of real-time outages. I identified who was impacted, how critical it was, and got the right teams involved fast to restore functionality.",
            
            "Coordinated directly with users and leadership during planned maintenance windows to power systems down safely, preventing data loss or equipment damage during network operations.",
            
            "Managed access badge distribution and SCIF entry logs, verifying that only cleared personnel were getting through. Accuracy mattered, and I didn’t cut corners when it came to accountability or access control."
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
