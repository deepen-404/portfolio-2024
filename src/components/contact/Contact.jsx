import  { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wzq044a",
        "template_4oaf15j",
        form.current,
        "FSDyZ0rNnu2D4a-SM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id={"contact"}>
      <h5>Get in Touch</h5>
      <h2>Contact</h2>

      <div className={"container contact__container"}>
        <div className={"contact__options"}>
          <article className={"contact__option"}>
            <MdOutlineEmail className={"contact__option-icon"} />
            <h4>Email</h4>
            <h5 style={{ fontSize: "0.7rem" }}>deepentimalsina05@gmail.com</h5>
            <a href={"mailto:deepentimalsina05@gmail.com"} target={"_blank"}>
              Send a Message
            </a>
          </article>
          <article className={"contact__option"}>
            <RiMessengerLine className={"contact__option-icon"} />
            <h4>Messenger</h4>
            <h5>Deepen Timalsina</h5>
            <a href={"https://m.me/deepen.timalsina.1"} target={"_blank"}>
              Send a Message
            </a>
          </article>
          <article className={"contact__option"}>
            <IoLogoWhatsapp className={"contact__option-icon"} />
            <h4>Whatsapp</h4>
            <h5>+977 9849175324</h5>
            <a
              href={"https://api.whatsapp.com/send?phone=9779849175324"}
              target={"_blank"}
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type={"text"}
            name={"name"}
            placeholder={"Your Full name"}
            required
          />
          <input
            type={"email"}
            name={"email"}
            placeholder={"Your Email"}
            required
          />
          <textarea
            name={"message"}
            placeholder={"Your Message"}
            rows={"7"}
            required
          ></textarea>
          <button type={"submit"} className={"btn btn-primary"}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
