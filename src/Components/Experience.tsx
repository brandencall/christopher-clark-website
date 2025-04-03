import { useState } from "react";
import "./Experience.css";

const experiences = [
    {
        id: "job1",
        company: "TekSynap",
        role: "Systems Administrator II",
        date: "November 2023 - Present",
        details: [
            "When I first joined TekSynap, I was handed the responsibility of weekly ACAS patching. What started as something I was trained on quickly became something I owned. Every week I handled updates and helped reduce critical vulnerabilities in the environment by staying consistent with plugin deployments. Over time, that effort helped cut high-risk findings by around 25%. I also processed hundreds of Cross Domain Solution (CDS) requests, carefully reviewing COR approvals and securely moving files between NIPR and SIPR using DoD Safe or ARL Safe. Sometimes the files were too large, so I compressed and packaged them for transfer. I also handled eBook media transfers and made sure everything went where it needed to without fail. On the infrastructure side, I worked hands-on with vSphere and iDRAC, using procedures given to me by senior engineers. As I repeated the process, I got better and more confident deploying virtual machines and adjusting configurations. I also used BMC and iDRAC to monitor server health across Dell, VxRail, and Azure systems, and helped reduce system downtime significantly for our SA team. I ran regular ACAS scans, analyzed findings using SCAP tools and STIG Viewer, and documented everything clearly. I was able to speak to why vulnerabilities were open, what was inherited, and helped support RMF compliance through accurate reporting."
        ]
    },
    {
        id: "job2",
        company: "United States Army  Al Udeid AB, Qatar/Fort Bliss, TX",
        role: "Information System Security Engineer (ISSE)",
        date: "December 2022 - March 2024",
        details: [
            "As an Information System Security Engineer in the Army, I worked on classified workstations—imaging them, troubleshooting drivers, and making sure users could connect on both NIPR and SIPR networks. I trained other soldiers on how to set up systems, especially during slower days, and we came up with small ways to speed up deployment. I handled account creation and permission assignments, enabling CAC and token-based logins depending on the network. My team also ran a lot of cable and fixed physical connectivity issues like broken VoIP lines or moving drops to new locations. We wrote a basic SOP before we rotated out to help the next team hit the ground running."
        ]
    },
    {
        id: "job3",
        company: "United States Army  Fort Bliss, Texas",
        role: "COMSEC Manager",
        date: "September 2021 to November 2022",
        details: [
            "As the COMSEC Manager, I personally loaded encryption keys onto tactical radios using the SKL. I also explained the process to soldiers while we waited, answering questions about key placement and radio setup. We refreshed keys weekly, monthly, quarterly, and annually, including Firefly keys, and I kept logs to track what was issued or destroyed. I did spot checks and verified key handling using our credential system. If someone deleted a key, we could trace it back. I followed guidance from the brigade COMSEC lead and supported field exercises with timely key rotations to keep communication secure."
        ]
    },
    {
        id: "job4",
        company: "United States Army  Cp Walker, South Korea",
        role: "Network Security Administrator",
        date: "April 2020 to August 2021",
        details: [
            "In this role, I installed and updated Cisco Catalyst switches and plugged in TACLANE devices as needed. I didn’t configure them in-depth, but I followed step-by-step procedures and learned a lot watching the more experienced folks work through the process. I handled user access and troubleshooting across classified systems. If something broke, I was the first person many came to. I also worked directly with Tier 3 and Area IV teams when we needed help with more advanced networking issues."
        ]
    },
    {
        id: "job5",
        company: "United States Army  Cp Walker, South Korea",
        role: "IT Operations Manager",
        date: "March 2019 to March 2020",
        details: [
            "I managed reimaging for over 200 systems using our standard image, fixing user-side and hardware issues as they came up. I monitored outages using Spectrum OS and could see where downtime was happening, how severe it was, and who needed to be informed. When networks had to go down for maintenance, I was the one coordinating with users to make sure their systems were powered off ahead of time. I also issued access badges and helped keep track of SCIF entry to make sure only the right folks had access."
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
