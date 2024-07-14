import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header fixed-top bg-body">
      <nav className="navbar navbar-expand-lg container">
        <a href="index.html" className="navbar-brand">
          Sanjula
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => showMenu(!Toggle)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${Toggle ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={`nav-link ${activeNav === "#home" ? "active" : ""}`}
              >
                <i className="uil uil-estate"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={`nav-link ${activeNav === "#about" ? "active" : ""}`}
              >
                <i className="uil uil-user"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={`nav-link ${activeNav === "#skills" ? "active" : ""}`}
              >
                <i className="uil uil-file-alt"></i> Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={`nav-link ${activeNav === "#services" ? "active" : ""}`}
              >
                <i className="uil uil-briefcase-alt"></i> Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={`nav-link ${activeNav === "#projects" ? "active" : ""}`}
              >
                <i className="uil uil-scenery"></i> Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={`nav-link ${activeNav === "#contact" ? "active" : ""}`}
              >
                <i className="uil uil-message"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
