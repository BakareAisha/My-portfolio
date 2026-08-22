import React from 'react'
import '../styles/Footer.css'
import { FaGithub } from 'react-icons/fa'
import { RiLinkedinFill } from 'react-icons/ri'
import { CgMail } from 'react-icons/cg'
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-brand">
                <h1 className="footer-logo">Aisha<span className="footer-logo-dot">.</span></h1>
                <p className="footer-tagline">Building digital experiences
                    <br />that make an impact</p>
            </div>
            <div className="footer-links">
                <h2 className="footer-heading">Quick Links</h2>
                <a className="footer-link" href="#Hero">Home</a>
                <a className="footer-link" href="#About">About</a>
                <a className="footer-link" href="#Skills">Skills</a>
                <a className="footer-link" href="#Projects">Projects</a>
                <a className="footer-link" href="#Experience">Experience</a>
                <a className="footer-link" href="#Contact">Contact</a>
            </div>
            <div className="footer-connect">
                <h2 className="footer-heading">Let's Connect</h2>
                <div className="footer-social-icons">
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
            <div className="footer-bottom">
                <p className="footer-copyright">© 2026 Aisha Bakare. All rights reserved.</p>
                <p className="footer-credit">Designed and built with <FaHeart className="footer-heart" />.</p>
            </div>
        </footer>
    )
}

export default Footer
