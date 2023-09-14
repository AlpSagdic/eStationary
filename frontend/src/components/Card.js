import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../ShopContext";

export default function Card(props) {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[props.id_];
  return (
    <div className="item">
      <img src={props.img} alt="Item for stationary" />
      <div className="item-content">
        <div className="item-name">
          <span className="name">{props.category}</span>
        </div>
        <ul className="item-attributes">
          <li className="item-attribute">{"Price: $" + props.price}</li>
          <li className="item-attribute">{props.name}</li>
          <Link className="btn--item" onClick={() => addToCart(props.id_)}>
            Add Cart<ion-icon name="add-circle-outline"></ion-icon>
            {cartItemAmount > 0 && <span>{"(" + cartItemAmount + ")"}</span>}
          </Link>
          <Link className="btn--item buy">
            Buy <ion-icon name="cart-outline"></ion-icon>
          </Link>
        </ul>
      </div>
    </div>
  );
}
