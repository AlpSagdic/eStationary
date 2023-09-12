import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="item">
      <img src={props.img} alt="Item for stationary" />
      <div className="item-content">
        <div className="item-name">
          <span className="name">{props.class}</span>
        </div>
        <ul className="item-attributes">
          <li className="item-attribute">{"Only " + props.price + "$"}</li>
          <li className="item-attribute">{props.name}</li>
          <Link className="btn--item">
            Add Cart <ion-icon name="add-circle-outline"></ion-icon>
          </Link>
          <Link className="btn--item buy">
            Buy <ion-icon name="cart-outline"></ion-icon>
          </Link>
        </ul>
      </div>
    </div>
  );
}
