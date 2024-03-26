
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Develpment</h3>
          <div className="experience__content">
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>Next JS</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>TypeScript</h4>
              </div>
              <small className="text-light">Experiendced</small>
            </article>
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>Tailwind</h4>
              </div>
              <small className="text-light">Experiendced</small>
            </article>
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>Redux toolkit</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>React Query</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>Zod</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>React Hook Form</h4>
              </div>
              <small className="text-light">Experiendced</small>
            </article>
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>Figma</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
          <h3>Backend Develpment</h3>
          <div className="experience__content">
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>Node JS</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>Express JS</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>Mongo DB</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
