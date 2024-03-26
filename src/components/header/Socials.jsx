
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
// import { ImDribbble } from "react-icons/im";
const Socials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/deepen-timalsina-6b038825b/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/deepen-404/" target="_blank">
        {" "}
        <BsGithub />
      </a>
      {/* <a href="https://dribble.com" target="_blank">
        <ImDribbble />
      </a> */}
    </div>
  );
};

export default Socials;
