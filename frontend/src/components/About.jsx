import '../styles/About.css'
import { FaArrowRight } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { LuClock1 } from "react-icons/lu";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-intro">
          <h1 className="about-title">About Me</h1>
          <p className="about-subtitle">Get to know me!</p>
          <div className="about-description">
            <p>
              I am a passionate Full Stack Developer who <br /> enjoys creating
              beautiful, functional, and <br />scalable web applications.
            </p>
            <p>
              I love solving problems and continuously <br /> learning new
              technologies.
            </p>
          </div>
          <Link to="/about" className="about-button">
            More About Me <FaArrowRight />
          </Link>
        </div>

        <div className="about-details">
          <p className="about-detail">
            <IoPersonOutline className="about-detail-icon" />
            <span className="about-detail-label">Name:</span>
            <span className="about-detail-value">Aishat Bakare</span>
          </p>
          <p className="about-detail">
            <CiLocationOn className="about-detail-icon" />
            <span className="about-detail-label">Location:</span>
            <span className="about-detail-value">Nigeria</span>
          </p>
          <p className="about-detail">
            <MdOutlineEmail className="about-detail-icon" />
            <span className="about-detail-label">Email:</span>
            <span className="about-detail-value">bakareaisha006@gmail.com</span>
          </p>
          <p className="about-detail">
            <LuClock1 className="about-detail-icon" />
            <span className="about-detail-label">Availability:</span>
            <span className="about-detail-value">Open to Opportunities</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;