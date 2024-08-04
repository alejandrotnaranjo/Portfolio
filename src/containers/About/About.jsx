import Link from "../../components/Link/Link";
import "./About.css";

function About() {
  const occupationTextSign = "/>";
  const GeniusSportsURL = "https://geniussports.com/";
  const ReadURL = "https://read.cv/alejandrotnaranjo";
  const LinkedInProfileURL = "https://www.linkedin.com/in/alejandrotnaranjo/";
  const GitHubProfileURL = "https://github.com/alejandrotnaranjo";
  return (
    <div className="AboutContainer">
      <p id="aboutInfoName">Alejandro T. Naranjo,</p>
      <p id="aboutOccupation">fullstack developer {occupationTextSign}</p>
      <p id="aboutAdditionalText">web and mobile</p>
      <p id="aboutJobInfo">
        actually working at{" "}
        <a target="_blank" href={GeniusSportsURL}>
          Genius Sports
        </a>
      </p>
      <div className="AboutLinks">
        <Link href={ReadURL} page="about" alt="about-link" />
        <Link href={LinkedInProfileURL} page="linkedin" alt="linkedin-link" />
        <Link href={GitHubProfileURL} page="github" alt="github-link" />
      </div>
    </div>
  );
}

export default About;
