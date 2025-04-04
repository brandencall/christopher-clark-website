import "./ProjectsPage.css";

function ProjectsPage() {
  const projects = [
    {
      name: "Tactical Operations Leadership Exercise",
      description: "Led a intense training exercise simulating a coordinated field operation, designed to assess leadership, communication, and mission execution under pressure.",
      role: "Squad Leader",
      scope: "Planned and led a team through a simulated tactical mission. Assigned roles based on operational priorities, organized rehearsal drills, and finalized strategic checkpoints and timelines.",
      goals: "Demonstrate leadership under pressure by managing team movement, ensuring operational readiness, and delivering a successful mission brief and execution.",
      teamSize: "10",
      tools: "Operational planning tools, topographic maps, sand table model (TMK), task assignment frameworks",
      outcome: "Successfully executed the mission with full team cohesion and no critical errors. Demonstrated strength in time management, delegation, and situational leadership. Received top evaluation marks for planning accuracy, briefing clarity, and operational command."
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