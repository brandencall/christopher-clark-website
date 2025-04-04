import "./ProjectsPage.css";

function ProjectsPage() {
  const projects = [
    {
      name: "Secure File Transfer Portal",
      description: "Developed a portal for cross-domain file transfers between secure networks.",
      role: "Lead Developer",
      scope: "Design and deploy a web-based tool for secure file validation and transmission",
      goals: "Reduce manual file handling by 70% and increase compliance accuracy",
      teamSize: "4",
      tools: "React, Node.js, Express, MongoDB, Docker",
      outcome: "Portal processed over 500 secure file transfers in its first 3 months with zero compliance issues."
    },
    {
      name: "ACAS Automation",
      description: "Streamlined ACAS scan scheduling and report generation.",
      role: "Systems Administrator",
      scope: "Automate plugin updates, scanning routines, and STIG report packaging",
      goals: "Cut scan cycle time in half and reduce manual input",
      teamSize: "2",
      tools: "PowerShell, Python, STIG Viewer, DoD SCAP",
      outcome: "Reduced scan-to-report time by 60% and increased scan frequency without overloading staff."
    },
    // Add more placeholder projects as needed
  ];

  return (
    <div className="projects-page-container">
      <h1 className="section-header">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2 className="project-title">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            <ul className="project-details">
              <li><strong>Role:</strong> {project.role}</li>
              <li><strong>Scope & Goals:</strong> {project.scope}. {project.goals}</li>
              <li><strong>Team Size:</strong> {project.teamSize}</li>
              <li><strong>Tools Used:</strong> {project.tools}</li>
              <li><strong>Outcome:</strong> {project.outcome}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;