import '../styles/Skills.css'
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { TbCloudStorm } from "react-icons/tb";


const Skills = () => {
  return(
    <section id="Skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <p className='skills-subtitle'>Technologies i work with</p>
      <div className="skills-grid">
      <div className="skill-item">
        <IoLogoHtml5 className="skill-icon html-icon" />
      <span>HTML</span>
      </div>
      <div className="skill-item">
        <FaCss className="skill-icon css-icon" />
        <span>Css</span>
      </div>
      <div className="skill-item">
        <IoLogoJavascript className="skill-icon javascript-icon" />
        <span>Javascript</span>
      </div>
      <div className="skill-item">
        <FaReact className="skill-icon react-icon" />
        <span>React</span>
      </div>
      <div className="skill-item">
        <FaNode className="skill-icon node-icon" />
        <span>Node.js</span>
      </div>
      <div className="skill-item">
        <SiExpress className="skill-icon express-icon" />
        <span>Express.js</span>
      </div>
      <div className="skill-item">
        <FaGitAlt className="skill-icon git-icon" />
        <span>Git</span>
      </div>
      <div className="skill-item">
        <FaGithub className="skill-icon github-icon" />
        <span>Github</span>
      </div>
      <div className="skill-item">
        <DiMongodb className="skill-icon mongodb-icon" />
        <span>Mongo DB</span>
      </div>
      <div className="skill-item">
        <FaBootstrap className="skill-icon bootstrap-icon" />
      <span>Bootstrap</span>
      </div>
      <div className="skill-item">
        <TbCloudStorm className="skill-icon api-icon" />
        <span>REST API</span>
      </div>
      </div>

    </section>
  );
};

export default Skills;