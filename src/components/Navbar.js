import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <a href="/TANISH-RESUME.pdf" download="TANISH-RESUME.pdf">
                    Tanish Sharma.dev
                </a>
            </div>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contactme">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
