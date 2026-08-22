import '../styles/Hero.css'
import heroImage from '../assets/isha.png'
import { BsArrowRightShort } from "react-icons/bs";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { CgMail } from "react-icons/cg";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1>
          <span className="hero-greeting">Hi, I'm</span>
          <span className="hero-name">Aishat Bakare</span>
        </h1>

        <h2>Full Stack Developer</h2>

        <p>
          I build responsive and user-friendly web <br /> applications
          with modern technologies. <br /> I love turning ideas into real products.
        </p>

        <div className="hero-buttons">
          <a href='https://github.com/BakareAisha' className="view-work-button">View My Work <BsArrowRightShort /></a>
          <a href="#AboutMe" className="contact-button">Contact Me <LiaTelegramPlane /></a>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/BakareAisha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/aisha-bakare-065593380/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <RiLinkedinFill />
          </a>

          <a
            href="mailto:bakareaisha006@email.com"
            aria-label="Email"
          >
            <CgMail />
          </a>
        </div>
      </div>

      <div className='hero-image'>
        <img src={heroImage} alt="Portrait of a woman with long pulled-back hair standing with her arms crossed and wearing black" />
        <div className="code-card">
          <div className="code-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <pre>
            <code>
              <span className="pink">const</span>{" "}
              <span className="purple">developer</span> = {"{"}
              {"\n"}
              {"  "} <span className="purple">passion</span>:{" "}
              <span className="yellow">'Building'</span>,
              {"\n"}
              {"  "} <span className="purple">skills</span>: [
              <span className="yellow">'React'</span>,{" "}
              <span className="yellow">'Node'</span>],
              {"\n"}
              {"  "} <span className="purple">goal</span>:{" "}
              <span className="yellow">'Impact'</span>
              {"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </div>

    </section>
  );
};

export default Hero;