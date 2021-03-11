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
              alt="Fast Food Delivery"
              text="Wordpress"
              label="Fast Food Delivery"
              path="http://fastfooddelivery.unaux.com/"
            />
            <CardItem
              src="images/project01.png"
              alt="Simple Website"
              text="React, React Hooks, React Router"
              label="Kompanija"
              path="https://nemanja96-react-simple-website.netlify.app/"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src="images/project08.png"
              alt="Company"
              text="Wordpress"
              label="Company"
              path="http://fastfooddelivery.unaux.com/"
            />
            <CardItem
              src="images/project05.png"
              alt="Company website"
              text="React, React Hooks, React Router"
              label="Kompanija"
              path="https://nemanja96-react-website-t1.netlify.app/"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src="images/project02.png"
              alt="Web Development Agency"
              text="Vebsajt za pruzanje usluga grafickog dizajna, veb dizajna, veb razvoja i optimizaciju vebsajta"
              label="Kompanija"
              path="https://nemanja96-project2.netlify.app/"
            />
            <CardItem
              src="images/project03.png"
              alt="Portfolio"
              text="Personalni vebsajt za Front End Developer-a"
              label="Portfolio"
              path="https://nemanja96-project1.netlify.app/"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src="images/project04.png"
              alt="Weather App"
              text="Aplikacija za vreme i polje za pretragu zeljene lokacije"
              label="Aplikacija za vreme"
              path="https://nemanja96-react-weather-app.netlify.app/"
            />
            <CardItem
              src="images/project06.png"
              alt="Digital Clock"
              text="Digitalni sat koji pokazuje dane, sate, minute i sekunde"
              label="Digitalni sat"
              path="https://nemanja96-react-clock.netlify.app/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
