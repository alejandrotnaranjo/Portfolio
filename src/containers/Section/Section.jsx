import ProjectList from "../../components/ProjectList/ProjectList";
import { PROJECTS } from "../../utils/data";
import "./Section.css";
import useImageHover from "../../utils/useImageHover";

function Section() {
  // const mobileProjects = PROJECTS.filter(
  //   (project) => project.type === "mobile"
  // );
  // const webProjects = PROJECTS.filter((project) => project.type === "web");
  const { currentImage, handleMouseEnter, handleMouseLeave } = useImageHover();
  return (
    <div className="SectionContainer">
      <ProjectList
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        projects={PROJECTS.slice(0, 3)}
        title="mobile projects"
      />
      {currentImage && (
        <div>
          <img className="image" src={PROJECTS.image} alt="" />
        </div>
      )}
      <ProjectList
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        projects={PROJECTS.slice(3)}
        title="web projects"
      />
    </div>
  );
}

export default Section;
