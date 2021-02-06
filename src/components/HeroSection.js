import React from "react";
import "../App.css";
import Button from "./Button";
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

      {/* <h1>Building digital<br />products, brands and<br />experience.</h1> */}
      <p>
        a <span>Product Designer</span> and <span>Visual Developer</span> in SF.
        <br />I specialize in UI/UX Design, Responsive Web Design
        <br />
        and Visual Development.
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          CONNECT WITH ME
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
