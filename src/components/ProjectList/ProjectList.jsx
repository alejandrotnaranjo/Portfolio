import ProjectItem from "../../components/ProjectItem/ProjectItem";
import "./ProjectList.css";

function ProjectList({ projects, title }) {
  return (
    <div className="ProjectSectionContainer">
      <p id="projectSectionTitle">{title}</p>
      <p id="sectionDetailText">click the item to see a preview</p>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          projectTitle={project.title}
          projectDate={project.date}
          projectDescription={project.description}
          projectVideoURL={project.videoURL}
          projectRepositoryURL={project.repositoryURL}
        />
      ))}
    </div>
  );
}

export default ProjectList;
