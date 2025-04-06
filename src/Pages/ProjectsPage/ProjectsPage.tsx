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
    {
      name: "Workstation Compliance Deployment",
      description: "Reimaged over 100 incoming workstations to meet strict USAF compliance requirements, ensuring all systems were configured according to approved base procedures and distributed with required hardware accessories.",
      role: "Technical Team Lead",
      scope: "Led an 8-person deployment team to process, reimage, and distribute over 100 USAF workstations. Managed setup logistics, coordinated task flow, and served as the technical escalation point during troubleshooting. Oversaw the full system compliance lifecycle from initial imaging to peripheral provisioning.",
      goals: "Ensure every workstation was properly imaged according to USAF standards, operational upon delivery, and deployed with no configuration gaps. Provide technical leadership and real-time issue resolution to maintain deployment efficiency and system integrity.",
      teamSize: "8",
      tools: "Windows Deployment Services (WDS), DoD imaging procedures, Active Directory, peripheral inventory systems, USAF compliance checklists",
      outcome: "Successfully imaged and deployed all targeted systems with no major configuration issues. Resolved imaging anomalies and hardware discrepancies in real time. Ensured complete system compliance and functionality, contributing to unit readiness and reduced support requests post-deployment."
    },
    {
      name: "Secure Communications Loadout",
      description: "Managed encryption key distribution and configuration across over 30 tactical vehicles, ensuring SINCGARS radio systems were fully operational, secure, and compliant before field deployment.",
      role: "COMSEC Operations Lead",
      scope: "Oversaw the secure loadout and verification of Sincgars RT-1523 radios using SKL devices across a fleet of over 30 tactical vehicles, including HMMWVs, HEMTT fuelers, medical vehicles, and launcher platforms. Led a 3-person team in configuring radio frequencies, channels, and tacline parameters according to established brigade procedures. Conducted real-time issue resolution, procedural compliance checks, and on-the-ground instruction to ensure mission-critical communications readiness.",
      goals: "Deliver 100% secure communications capability prior to all field exercises by properly loading cryptographic keys, validating frequency/channel configurations, and confirming operational readiness of all radios. Train operators on COMSEC best practices and maintain compliance with key rotation schedules and accountability protocols.",
      teamSize: "3",
      tools: "SKL (Simple Key Loader), SINCGARS RT-1523, encryption key rotation schedules (weekly, monthly, quarterly, annual), credential tracking system, brigade COMSEC SOP, tacline configuration guides",
      outcome: "All radios deployed with correct cryptographic keys and validated configurations. Enabled secure, uninterrupted field communications across diverse vehicle platforms. Identified and resolved key handling errors in real time. Maintained 100% inspection-readiness through detailed logs, spot checks, and compliance enforcement."
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