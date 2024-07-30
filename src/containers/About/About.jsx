import GitHubLogo from "../../assets/images/github_logo.png";
import SocialLink from "../../components/SocialLink/SocialLink";
import "./About.css";

function About() {
  const occupationTextSign = "/>";
  const GeniusSportsURL = "https://geniussports.com/";
  const GitHubProfileURL = "https://github.com/alejandrotnaranjo";
  return (
    <div className="AboutContainer">
      <div className="AboutInfo">
        <p>Alejandro T. Naranjo,</p>
        <p>fullstack developer {occupationTextSign}</p>
        <p>web and mobile</p>
        <p>
          actually working at <a href={GeniusSportsURL}>Genius Sports</a>
        </p>
        <div>
          <SocialLink href={GitHubProfileURL} src={GitHubLogo} alt="#" />
        </div>
      </div>
      <div className="AboutText"></div>
    </div>
  );
}

export default About;
