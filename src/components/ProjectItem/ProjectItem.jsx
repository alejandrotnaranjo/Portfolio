import "./ProjectItem.css";

function ProjectItem({ projectTitle, projectDate, projectDescription }) {
  return (
    <div className="ProjectItemContainer">
      <div className="ProjectItemTop">
        <p id="projectTitle">{projectTitle}</p>
        <p id="projectDate">{projectDate}</p>
      </div>
      <div className="ProjectItemBottom">
        <p id="projectDescription">{projectDescription}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
