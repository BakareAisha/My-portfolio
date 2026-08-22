import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-content">
          <p className="about-small-title">Get to know me</p>

          <h1>
            About <span>Me</span>
          </h1>

          <p>
            Hi, I'm Aishat Bakare, a Full Stack Developer passionate about
            building modern, responsive, and user-friendly web applications.
          </p>

          <p>
            I enjoy turning ideas into functional digital experiences and
            continuously improving my skills by learning new technologies and
            building real-world projects.
          </p>

          <p>
            My main focus is creating clean and intuitive interfaces on the
            frontend while building reliable and efficient functionality on
            the backend.
          </p>

          <div className="about-skills">
            <div>
              <h3>Frontend</h3>
              <p>HTML, CSS, JavaScript, React</p>
            </div>

            <div>
              <h3>Backend</h3>
              <p>Node.js, Express.js, MongoDB</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;