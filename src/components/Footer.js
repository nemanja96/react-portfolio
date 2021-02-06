import React from "react";
import Button from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

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
          >
            <img src="images/facebook.png" />
          </a>
          <a
            href="https://www.instagram.com/_grof/"
            target="_blank"
            aria-label="Instagram"
            className="social-icon-link facebook"
          >
            <img src="images/instagram.png" />
          </a>
          <a
            href="https://www.linkedin.com/in/nemanja-radivojevic-30b5a5176/"
            target="_blank"
            aria-label="Twitter"
            className="social-icon-link facebook"
          >
            <img src="images/linkedin.png" />
          </a>
        </div>
        <div className="footer-logo">
          <Link to="/" className="social-logo">
            <img src="images/email.png" /> <span>hi@nemanja.design</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
