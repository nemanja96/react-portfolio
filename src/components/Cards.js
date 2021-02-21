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
              src="images/project01.png"
              alt="Simple Website"
              text="Company website"
              label="Company"
              path="https://nemanja96-react-simple-website.netlify.app/"
            />
            <CardItem
              src="images/project02.png"
              alt="Web Development Agency"
              text="Company website for Web Development Agency"
              label="Company"
              path="https://nemanja96-project2.netlify.app/"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src="images/project03.png"
              alt="Portfolio"
              text="Portfolio website for Front End Developer"
              label="Portfolio"
              path="https://nemanja96-project1.netlify.app/"
            />
            <CardItem
              src="images/project04.png"
              alt="Weather App"
              text="Weather app with search bar"
              label="Weather App"
              path="https://nemanja96-react-weather-app.netlify.app/"
            />
            <CardItem
              src="images/project05.png"
              alt="Digital Clock"
              text="Beautiful Digital clock"
              label="Digital Clock"
              path="https://nemanja96-react-clock.netlify.app/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
