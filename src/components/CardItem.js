import React from "react";
import "./Cards.css";

function CardItem(props) {
  return (
    <>
      <li className="cards_item">
        <a className="cards_item_link" href={props.path} target="_blank">
          <figure className="cards_item_pic-wrap" data-category={props.label}>
            <img src={props.src} alt={props.alt} className="cards_item_img" />
          </figure>
          <div className="cards_item_info">
            <h5 className="cards_item_text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
