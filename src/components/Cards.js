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
              src="images/project.png"
              text="Portfolio website for Front End Developer"
              label="Portfolio"
              path="https://nemanja96.github.io/html_css_portfolio/"
            />
            <CardItem
              src="images/project1.png"
              text="Company website for Web Development Agency"
              label="Company"
              path="https://nemanja96.github.io/company/"
            />
          </ul>
          {/* <ul className="cards_items">
            <CardItem
              src="images/33.png"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/34.png"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/35.png"
              text="Ride through the Sahara Desert on a quided camel tour"
              label="Adventure"
              path="/sign-up"
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
