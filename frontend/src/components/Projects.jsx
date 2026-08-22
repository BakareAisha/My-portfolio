
import '../styles/Projects.css'
import portfolio from '../assets/portfolio.png'
import travora from '../assets/travora.png'
import Blog from '../assets/blog.png'
import { FaArrowRight, FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { AiOutlineRocket } from 'react-icons/ai'

const Projects = () => {
  return (
    <section id="Projects" className="projects-section">
      <div className="projects-header">
        <div className="projects-heading-group">
          <h1 className="projects-title">Featured Projects</h1>
          <p className="projects-subtitle">Some things I've built</p>
        </div>
        <a className="view-all-projects-link" href="https://github.com/BakareAisha">
          View All Projects <FaArrowRight />
        </a>
      </div>

      <div className="projects-grid">
        <article className="project-card">
          <div className="project-image project-image-portfolio" role="img" aria-label="Portfolio website preview">
            <img src={portfolio} alt="portfolio preview" />
          </div>
          <div className="project-card-content">
            <h2 className="project-name">Portfolio Website</h2>
            <p className="project-description">
              A responsive personal portfolio website built with React, featuring a functional contact system powered by a Node.js and Express backend. Visitors can send messages and receive an automatic confirmation email.
            </p>
            <div className="project-technologies">
              <span className="technology-tag">React</span>
              <span className="technology-tag">CSS</span>
              <span className="technology-tag">Node.js</span>
              <span className="technology-tag">Express.js</span>
            </div>
          </div>
          <div className="project-links">
            <a className="project-link" href="https://aishat-portfolio.netlify.app">
              Live Demo <FiExternalLink />
            </a>
            <a className="project-link" href="https://github.com/BakareAisha/My-portfolio.git">
              GitHub <FaGithub />
            </a>
          </div>
        </article>

        <article className="project-card">
          <div className="project-image project-image-cafe" role="img" aria-label="Cafe ordering system preview">
            <img src={travora} alt="Travora preview" />
          </div>
          <div className="project-card-content">
            <h2 className="project-name">Luxury Aviation Website</h2>
            <p className="project-description">
              A responsive luxury aviation landing page built with HTML, CSS and JavaScript, featuring interactive navigation, animated statistics, scroll animations and responsive layouts.
            </p>
            <div className="project-technologies">
              <span className="technology-tag">JavaScript</span>
              <span className="technology-tag">HTML</span>
              <span className="technology-tag">CSS</span>
            </div>
          </div>
          <div className="project-links">

            <a className="project-link"
              href="https://travoratravel.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo  <FiExternalLink />
            </a>
            <a className="project-link" href="https://github.com/BakareAisha/Tavora.git">
              GitHub <FaGithub />
            </a>
          </div>
        </article>

        <article className="project-card">
          <div className="project-image project-image-checkin" role="img" aria-label="Check-in management app preview">
            <img src={Blog} alt="portfolio preview" />
          </div>
          <div className="project-card-content">
            <h2 className="project-name">Blog</h2>
            <p className="project-description">
              A responsive blog website built with HTML, CSS, and JavaScript, featuring a clean and user-friendly interface for browsing and interacting with blog posts
            </p>
            <div className="project-technologies">
              <span className="technology-tag">Html</span>
              <span className="technology-tag">Css</span>
              <span className="technology-tag">Javascript</span>
            </div>
          </div>
          <div className="project-links">
            <a className="project-link" href="#projects">
              Live Demo <FiExternalLink />
            </a>
            <a className="project-link" href="https://github.com/BakareAisha/Blog.git">
              GitHub <FaGithub />
            </a>
          </div>
        </article>
      </div>

      <aside className="projects-opportunity-card">
        <AiOutlineRocket className="opportunity-icon" />
        <div className="opportunity-content">
          <p className="opportunity-text">
            I'm currently open to new opportunities and interesting projects.
          </p>
        </div>
        <a className="opportunity-button" href="#Contact">
          Let's Work Together <FaArrowRight />
        </a>
      </aside>
    </section>
  );
};

export default Projects;