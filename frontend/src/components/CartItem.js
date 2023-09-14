import React, { useContext } from "react";
import { ShopContext } from "../ShopContext";
import { Link } from "react-router-dom";
import Pencil from "../img/pencil.jpg";

export const CartItem = (props) => {
  const { addToCart, removeToCart } = useContext(ShopContext);
  return (
    <>
      <div className="cart-item">
        <img src={Pencil} alt="Item photograph" />
        <div className="item-content">
          <div className="item-name">
            <span className="name">Pencil</span>
            <span className="name" style={{ backgroundColor: "green" }}>
              Quantity: {props.quantity}
            </span>
          </div>
          <div className="cart-btn">
            <div className="grid grid--2-cols">
              <button
                onClick={() => removeToCart(props.id_)}
                className="btn btn--cart"
              >
                {" "}
                -{" "}
              </button>
              <button
                onClick={() => addToCart(props.id_)}
                className="btn btn--cart"
              >
                +
              </button>
            </div>
          </div>
          <Link className="btn--item buy" to={"/checkout"}>
            Buy<ion-icon name="cart-outline"></ion-icon>
          </Link>
        </div>
      </div>
    </>
  );
};
