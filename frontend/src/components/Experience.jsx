import '../styles/Experience.css'
import { CgToolbox } from "react-icons/cg";
import { IoMdLaptop } from "react-icons/io";
import { RiGraduationCapLine } from "react-icons/ri";


const Experience = () => {
  return(
    <section id="Experience" className="experience-section">
      <h1 className="experience-title">Experience & Education</h1>
      <p className="experience-subtitle">My Journey</p>
      <article className="experience-item">
        <CgToolbox className="experience-icon experience-icon-gradient" />
        <span className="experience-date">2024-present</span>
        <h2 className="experience-role">Full Stack Developer</h2>
        <p className="experience-description">
          Building web applications and delivering clean, efficient solutions.
        </p>
      </article>
      <article className="experience-item">
        <IoMdLaptop className="experience-icon experience-icon-pink" />
        <span className="experience-date">2025-2026</span>
        <h2 className="experience-role">Full Stack Developer Intern</h2>
        <span className="experience-organization">SQI College of ICT</span>
        <p className="experience-description">
          Learned and worked on responsive UIs with different languages and
          collaborated with other developers.
        </p>
      </article>
      <article className="experience-item">
        <RiGraduationCapLine className="experience-icon experience-icon-purple" />
        <span className="experience-date">2023-2027</span>
        <h2 className="experience-role">B.Sc.Computer Science</h2>
        <span className="experience-organization">Bowen University</span>
        <p className="experience-description">
          Studying Computer Science with a strong passion for software
          development.
        </p>
      </article>
    </section>
  );
};

export default Experience;