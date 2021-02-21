import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-media">
        <div className="social-icons">
          <a
            href="https://www.facebook.com/nemanja.radivojevic996/"
            target="_blank"
            aria-label="Facebook"
            className="social-icon-link facebook"
            title="Facebook"
          >
            <img src="images/facebook.png" />
          </a>
          <a
            href="https://www.instagram.com/_grof/"
            target="_blank"
            aria-label="Instagram"
            className="social-icon-link instagram"
            title="Instagram"
          >
            <img src="images/instagram.png" />
          </a>
          <a
            href="https://github.com/nemanja96"
            target="_blank"
            aria-label="Github"
            className="social-icon-link github"
            title="Github"
          >
            <img src="images/github.png" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
