import ProjectItem from "../../components/ProjectItem/ProjectItem";
import "./ProjectList.css";

const ProjectList = ({ projects, title }) => (
  <div className="ProjectSectionContainer">
    <p id="projectSectionTitle">{title}</p>
    <p id="sectionDetailText">click the item to see more details</p>
    {projects.map((project) => (
      <ProjectItem
        key={project.id}
        projectTitle={project.title}
        projectDate={project.date}
        projectDescription={project.description}
      />
    ))}
  </div>
);

export default ProjectList;
