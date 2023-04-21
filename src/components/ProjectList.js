import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {
          /* render ProjectItem components here */
          projects.map((project) => (
            <ProjectItem key={project.id} technologies={project.technologies} about = {project.about} name = {project.name}>
              {/* {project.name} {project.technologies} {project.about} */}
            </ProjectItem>
          ))
        }
      </div>
    </div>
  );
}

export default ProjectList;
