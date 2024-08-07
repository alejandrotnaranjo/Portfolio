import ProjectItem from "../../components/ProjectItem/ProjectItem";
import "./ProjectList.css";

function ProjectList({
  projects,
  title,
  className,
  handleMouseEnter,
  handleMouseLeave,
}) {
  return (
    <div className="ProjectSectionContainer">
      <p id="projectSectionTitle">{title}</p>
      <p id="sectionDetailText">click the item to see a preview</p>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          onMouseEnter={() => handleMouseEnter(project.image)}
          onMouseLeave={handleMouseLeave}
          projectTitle={project.title}
          projectDate={project.date}
          projectDescription={project.description}
          projectVideoURL={project.videoURL}
          projectRepositoryURL={project.repositoryURL}
          href={project.repositoryURL}
          image={project.image}
        />
      ))}
    </div>
  );
}

export default ProjectList;
