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
        Hi, I'm Nemanja <img src="images/hello.png" />
      </h2>

      <h1 aria-label="Rainbows are cool at any time.">
        <span>Rainbows are cool</span>
        <br />
        <span>at any time.</span>
      </h1>
      <p>
        a <span>Frontend Developer</span> & <span>Wordpress Developer</span>
        based in Serbia.
        <br />I specialize in Front End Technologies, Responsive Web Design
        <br />
        and Wordpress Development.
      </p>
      <div className="hero-btns">
        <a
          href="/Nemanja_Radivojevic_Resume.pdf"
          className="resume-btn"
          download
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
