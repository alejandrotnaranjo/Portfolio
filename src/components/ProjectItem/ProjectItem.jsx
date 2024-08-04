import "./ProjectItem.css";
import { useState } from "react";
import Modal from "react-modal";

function ProjectItem({
  projectTitle,
  projectDate,
  projectDescription,
  projectVideoURL,
  projectRepositoryURL,
}) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button className="ProjectItemContainer" onClick={() => setVisible(true)}>
        <div className="ProjectItemTop">
          <p id="projectTitle">{projectTitle}</p>
          <p id="projectDate">{projectDate}</p>
        </div>
        <div className="ProjectItemBottom">
          <p id="projectDescription">{projectDescription}</p>
        </div>
      </button>
      <Modal
        style={modalStyles}
        onRequestClose={() => setVisible(false)}
        isOpen={visible}
      >
        <video
          loop
          className="VideoContainer"
          autoPlay
          src={projectVideoURL}
          playsInline={true}
        />
        <button className="ModalCloseButton" onClick={() => setVisible(false)}>
          &times;
        </button>
        <a
          className="RepositoryURL"
          target="_blank"
          href={projectRepositoryURL}
        >
          go to source code repository
        </a>
      </Modal>
    </>
  );
}

const modalStyles = {
  overlay: {
    backgroundColor: "#000000d1",
  },
  content: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "transparent",
    border: "none",
    width: "fit-content",
  },
};

export default ProjectItem;
