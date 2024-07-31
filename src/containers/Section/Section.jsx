import ProjectList from "../../components/ProjectList/ProjectList";
import { PROJECTS } from "../../utils/data";
import "./Section.css";

function Section() {
  const mobileProjects = PROJECTS.filter(
    (project) => project.type === "mobile"
  );
  const webProjects = PROJECTS.filter((project) => project.type === "web");

  return (
    <div className="SectionContainer">
      <ProjectList projects={mobileProjects} title="mobile projects" />
      <ProjectList projects={webProjects} title="web projects" />
    </div>
  );
}

export default Section;
