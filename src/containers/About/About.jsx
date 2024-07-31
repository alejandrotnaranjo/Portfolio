import GitHubLogo from "../../assets/images/github_logo.png";
import Link from "../../components/Link/Link";
import LinkedInLogo from "../../assets/images/linkedin_logo.png";
import "./About.css";

function About() {
  const occupationTextSign = "/>";
  const GeniusSportsURL = "https://geniussports.com/";
  const GitHubProfileURL = "https://github.com/alejandrotnaranjo";
  const LinkedInProfileURL = "https://www.linkedin.com/in/alejandrotnaranjo/";
  return (
    <div className="AboutContainer">
      <div className="AboutInfoContainer">
        <p id="aboutInfoName">Alejandro T. Naranjo,</p>
        <p id="aboutOccupation">fullstack developer {occupationTextSign}</p>
        <p id="aboutAdditionalText">web and mobile</p>
        <p id="aboutJobInfo">
          actually working at <a href={GeniusSportsURL}>Genius Sports</a>
        </p>
        <div className="AboutLinks">
          <Link href={LinkedInProfileURL} src={LinkedInLogo} alt="#" />
          <Link href={GitHubProfileURL} src={GitHubLogo} alt="#" />
        </div>
      </div>
      <div className="AboutTextContainer">
        <p id="aboutDescriptionText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa minima
          placeat unde error voluptate minus consectetur asperiores nemo, ullam
          vel repellat. In distinctio quia vel exercitationem, hic consequuntur
          quidem consequatur.
        </p>
      </div>
    </div>
  );
}

export default About;
