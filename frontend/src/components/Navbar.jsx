import '../styles/Navbar.css'
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-items">
      <div className="logo">
        Aisha<span>.</span>
      </div>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>
      </div>

      <div className={menuOpen ? "nav-links active" : "nav-links"}>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Skills">Skills</a>
        <a href="#Projects">Projects</a>
        <a href="#Experience">Experience</a>
        <a href="#Contact">Contact</a>
      </div>

      <div>
        <a href="/cv.pdf" download className="download-btn">
          Download CV <i className="bi bi-download"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;