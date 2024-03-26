
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id={"about"}>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className={"container about__container"}>
        <div className={"about__me"}>
          <div className={"about__me-image"}>
            <img src={ME} alt={"About Image"} />
          </div>
        </div>
        <div className={"about__content"}>
          <div className={"about__cards"}>
            <article className={"about__card"}>
              <FaAward className={"about__icon"} />
              <h5>Experience</h5>
              <small>6+ months working</small>
            </article>
            <article className={"about__card"}>
              <FiUsers className={"about__icon"} />
              <h5>Clients</h5>
              <small>10+ Clients</small>
            </article>
            <article className={"about__card"}>
              <VscFolderLibrary className={"about__icon"} />
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>
          </div>
          <p>
            {`I’m a software developer with experience at Prologic Solutions, where I developed various web applications. My work ranges from simple websites to complex web apps, always focusing on user experience and quality. I’m skilled in multiple programming languages and always ready to learn new technologies.`}
          </p>
          <a href={"#contact"} className={"btn btn-primary"}>
           {` Let's Talk`}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
