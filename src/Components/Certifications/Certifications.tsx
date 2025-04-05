import CertificationCard from "../../Components/Certifications/CertificationCard";
import "./Certifications.css";

const certifications = [
    {
        image: "/PMP-IMG.png",
        title: "Project Management Professional (PMP)",
        pdf: "/PMP-Cert.pdf"
    },
    {
        image: "/ITIL-Foundation-IMG.png",
        title: "ITIL® v4 Foundation",
        pdf: "/ITIL-Foundation-Cert.pdf"
    },
    {
        image: "/CSM-IMG.png",
        title: "Certified Scrum Master (CSM)",
        pdf: "/CSM-Cert.pdf"
    },
    {
        image: "/CISM-IMG.png",
        title: "Certified Information Security Manager (CISM)",
        pdf: "/CISM-Cert.pdf"
    },
    {
        image: "/CISA-IMG.png",
        title: "Certified Information Systems Auditor (CISA)",
        pdf: "/CISA-Cert.pdf"
    },
    {
        image: "/CRISC-IMG.png",
        title: "Certified in Risk & Information Systems Control (CRISC)",
        pdf: "/CRISC-Cert.pdf"
    },
    {
        image: "/SecurityX-IMG.png",
        title: "SecurityX (Formerly known as CASP+)",
        pdf: "/SecurityX-Cert.pdf"
    },
    {
        image: "/CySA+-IMG.png",
        title: "Cybersecurity Analyst (CySA+)",
        pdf: "/CySA+-Cert.pdf"
    },
    {
        image: "/PenTest+-IMG.png",
        title: "PenTest+",
        pdf: "/PenTest+-Cert.pdf"
    },
    {
        image: "/Security+-IMG.png",
        title: "Security+",
        pdf: "/Security+-Cert.pdf"
    },
    {
        image: "/Linux+-IMG.png",
        title: "Linux+",
        pdf: "/Linux+-Cert.pdf"
    },
    {
        image: "/Network+-IMG.png",
        title: "Network+",
        pdf: "/Network+-Cert.pdf"
    },
    {
        image: "/A+-IMG.png",
        title: "A+",
        pdf: "/A+-Cert.pdf"
    },
    {
        image: "/Microsoft-Azure-Architect-IMG.png",
        title: "Azure Solutions Architect Expert",
        pdf: "/Microsoft-Azure-Architect-Cert.pdf"
    },
    {
        image: "/Microsoft-Azure-Admin-IMG.png",
        title: "Azure Administrator Associate",
        pdf: "/Microsoft-Azure-Admin-Cert.pdf"
    },
    {
        image: "/JNCIA-SEC-IMG.png",
        title: "Juniper Networks Certified Associate - Security (JNCIA-SEC)",
        pdf: "/JNCIA-SEC-Cert.pdf"
    },
    {
        image: "/JNCIA-DC-IMG.png",
        title: "Juniper Networks Certified Associate - Data Center (JNCIA-DC)",
        pdf: "/JNCIA-DC-Cert.pdf"
    },
    {
        image: "/CEH-IMG.png",
        title: "Certified Ethical Hacker (CEH)",
        pdf: "/CEH-Cert.pdf"
    },
    {
        image: "/CHFI-IMG.png",
        title: "Computer Hacking Forensic Investigator (CHFI)",
        pdf: "/CHFI-Cert.pdf"
    },
    {
        image: "/CTIA-IMG.png",
        title: "EC-Council Certified Threat Intelligence Analyst (CTIA)",
        pdf: "/CTIA-Cert.pdf"
    },
    {
        image: "/ECIH-IMG.png",
        title: "Certified Incident Handler (ECIH)",
        pdf: "/ECIH-Cert.pdf"
    },
    {
        image: "/Cisco-CCNP-Security-IMG.png",
        title: "Cisco Certified Network Professional Security (CCNP-S) (Expired)",
        pdf: "/Cisco-CCNP-Security-Cert.pdf"
    },
    {
        image: "/Cisco-Network-Security-Firepower-IMG.png",
        title: "Cisco Certified Network Security Firepower (Expired)",
        pdf: "/Cisco-Network-Security-Firepower-Cert.pdf"
    },
    {
        image: "/Cisco-Security-Core-IMG.png",
        title: "Cisco Certified Security Core (Expired)",
        pdf: "/Cisco-Security-Core-Cert.pdf"
    },
    {
        image: "/Cisco-CyberOps-IMG.png",
        title: "Cisco Certified Network Associate Cyber Ops (Expired)",
        pdf: "/Cisco-CyberOps-Cert.pdf"
    },
    {
        image: "/Cisco-CCNA-IMG.png",
        title: "Cisco Certified Network Associate Security (CCNA) (Expired)",
        pdf: "/Cisco-CCNA-Cert.pdf"
    },
    {
        image: "/OCA-IMG.png",
        title: "Oracle Certified Associate (OCA), Java SE 8 Programmer (Expired)",
        pdf: "/OCA-Cert.pdf"
    }
];

function Certifications() {
    return (
        <div className="certification-grid-container">
            {certifications.map((cert, index) => (
                <a className="pdf-link" href={cert.pdf} target="_blank" key={index}>
                    <div className="certification-grid-item">
                        <CertificationCard
                            image={cert.image}
                            title={cert.title}
                            size={300}
                        />
                    </div>
                </a>
            ))}
        </div>
    );
}

export default Certifications;
