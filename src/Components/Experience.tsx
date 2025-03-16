import { useState } from "react";
import "./Experience.css";

const experiences = [
    { 
        id: "job1",
        company: "Company A",
        role: "Testing Role",
        date: "March 2024 - present", 
        details: [
            "Worked on X, Y, Z.",
            "test",
            "testing this thing again"
        ]
    },
    { 
        id: "job2",
        company: "Company B",
        role: "Testing Role",
        date: "March 2024 - present", 
        details: [
            "Worked on X, Y, Z.",
            "test",
            "testing this thing again"
        ]
    },
    {
        id: "job3",
        company: "Company C",
        role: "Testing Role",
        date: "March 2024 - present", 
        details: [
            "Worked on X, Y, Z.",
            "test",
            "testing this thing again"
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
                            <h2>{exp.role} at {exp.company}</h2>
                            <p className="content-dates">{exp.date}</p>
                            <ul>
                                {exp.details.map((detail: string, index: number) => (
                                    <li key={index}>{detail}</li>
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
