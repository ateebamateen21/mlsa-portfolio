/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React, { useRef } from "react";

const Header = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="px-4"
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home" onClick={() => scrollToSection(homeRef)}>
        Home
      </a>
      <a href="#about" onClick={() => scrollToSection(aboutRef)}>
        About
      </a>
      <a href="#portfolio" onClick={() => scrollToSection(portfolioRef)}>
        Portfolio
      </a>
      <a href="#footer" onClick={() => scrollToSection(footerRef)}>
        Contact
      </a>
    </div>
  );
};

export default Header;
