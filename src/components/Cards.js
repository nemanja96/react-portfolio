import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              src="images/project07.png"
              alt="Wordpress"
              text="Share your love for pizza"
              label="Wordpress"
              path="http://fastfooddelivery.unaux.com/"
            />
            <CardItem
              src="images/project01.png"
              alt="Simple Website"
              text="Where data and creativity come together"
              label="React"
              path="https://nemanja96-react-simple-website.netlify.app/"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src="images/project08.png"
              alt="Company"
              text="PVC i ALU stolarija"
              label="Wordpress"
              path="http://pvcstolarijalesnica.unaux.com/"
            />
            <CardItem
              src="images/project05.png"
              alt="Company website"
              text="Make your own website come true"
              label="React"
              path="https://nemanja96-react-website-t1.netlify.app/"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src="images/project02.png"
              alt="Web Development Agency"
              text="We believe in the power of great design"
              label="HTML5, CSS3, JavaScript"
              path="https://nemanja96-project2.netlify.app/"
            />
            <CardItem
              src="images/project03.png"
              alt="Portfolio"
              text="Front end developer portfolio"
              label="HTML5, CSS3, JavaScript"
              path="https://nemanja96-project1.netlify.app/"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src="images/project04.png"
              alt="Weather App"
              text="Vremenska prognoza"
              label="React"
              path="https://nemanja96-react-weather-app.netlify.app/"
            />
            <CardItem
              src="images/project06.png"
              alt="Digital Clock"
              text="Digitalni sat"
              label="React"
              path="https://nemanja96-react-clock.netlify.app/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
