import "./App.css";
import "./ProjectsPage.css";

function ProjectsPage() {
  const projects = [
    {
      name: "Tactical Operations Leadership Exercise",
      description: "Led a intense training exercise simulating a coordinated field operation, designed to assess leadership, communication, and mission execution under pressure.",
      role: "Squad Leader",
      scope: "Planned and led a team through a simulated tactical mission. Assigned roles based on operational priorities, organized rehearsal drills, and finalized strategic checkpoints and timelines",
      goals: "Demonstrate leadership under pressure by managing team movement, ensuring operational readiness, and delivering a successful mission brief and execution.",
      teamSize: "10",
      tools: "Operational planning tools, topographic maps, sand table model (TMK), task assignment frameworks",
      outcome: "Successfully executed the mission with full team cohesion and no critical errors. Demonstrated strength in time management, delegation, and situational leadership. Received top evaluation marks for planning accuracy, briefing clarity, and operational command."
    },
    {
      name: "Node Decommissioning and Cluster Rebuild",
      description: "Assisted in a high-priority project to decommission and reconfigure ESXi nodes as part of a larger virtualization environment cleanup and rebuild effort.",
      role: "Systems Administrator",
      scope: "Supported the full removal and reintegration of VMware nodes, including iDRAC, ESXCLI, and DNS cleanup. Handled network configuration, hostname resets, and cluster readiness validation in coordination with senior staff",
      goals: "Ensure clean node retirement with no residual artifacts, and rejoin rebuilt systems to the production cluster with validated settings and zero downtime.",
      teamSize: "2",
      tools: "iDRAC, ESXCLI, VMware vSphere, DoD DNS, DoD Safe, Active Directory, Subnetting tools",
      outcome: "Completed the full lifecycle of node decommissioning and rebuilds for multiple systems with no operational downtime or configuration issues. Ensured all host records, networking interfaces, and cluster integrations were validated and compliant with DoD standards."
    },
  ];

  return (
    <div className="page-content">
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