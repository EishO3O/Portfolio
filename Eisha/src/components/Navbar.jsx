import { useEffect, useState } from "react";
import '../styles/Navbar.css';

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className={`navbar ${shrink ? "shrink" : ""}`}>
      <div className="logo">
        <a href="#intro">Homisan.</a>
      </div>


      {/* Desktop menu */}
      <ul>
        <li><a href="#intro">Intro</a></li>
        <li><a href="#work">Work Exp</a></li>
        <li><a href="#involvement">Involvement</a></li>
        <li><a href="#project">Featured Project</a></li>
        <li><a href="#tech">Tech Stack</a></li>
      </ul>

      {/* Hamburger */}
      <div
        className={`hamburger ${mobileOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Mobile menu */}
      <ul className={`mobile ${mobileOpen ? "active" : ""}`}>
        <li><a href="#intro" onClick={toggleMobileMenu}>Intro</a></li>
        <li><a href="#work" onClick={toggleMobileMenu}>Work Exp</a></li>
        <li><a href="#involvement" onClick={toggleMobileMenu}>Involvement</a></li>
        <li><a href="#project" onClick={toggleMobileMenu}>Featured Project</a></li>
        <li><a href="#tech" onClick={toggleMobileMenu}>Tech Stack</a></li>
      </ul>
    </nav>
  );
}
