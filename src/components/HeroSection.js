import React from "react";
import "../App.css";
import "./HeroSection.css";

window.addEventListener("scroll", (e) => {
  // Dealing with Safari difference.
  // look into scrollingElement https://caniuse.com/#feat=document-scrollingelement
  let scrollTop = document.body.scrollTop
    ? document.body.scrollTop
    : document.documentElement.scrollTop;
  let newPos = scrollTop + "px";
  document.documentElement.style.setProperty("--scrollPos", newPos);
});

function HeroSection() {
  return (
    <div className="hero-container">
      <img src="images/github-projects.png" alt="Author" />
      <h2>
        Zdravo, Ja sam Nemanja <img src="images/hello.png" />
      </h2>

      <h1 aria-label="Rainbows are cool at any time.">
        <span>Duga je lepa</span>
        <br />
        <span>u svakom trenutku.</span>
      </h1>
      <p>
        <span>Frontend Developer</span> & <span>Wordpress Developer </span>
        iz Loznice.
        <br />
        Volim da radim u Frontend tehnologijama, Prilagodljivom dizajnu
        <br />i Wordpress-u.
      </p>
      <div className="hero-btns">
        <a
          href="/Nemanja_Radivojevic_Resume.pdf"
          className="resume-btn"
          download
        >
          Preuzmi Rezime
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
