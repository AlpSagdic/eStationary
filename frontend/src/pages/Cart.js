import React, { useContext } from "react";
import { ShopContext } from "../ShopContext";
import { CartItem } from "../components/CartItem";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);

  const cartItemsList = Object.entries(cartItems)
    .filter(([itemId, quantity]) => quantity > 0)
    .map(([itemId, quantity]) => (
      <CartItem
        id_={itemId}
        quantity={quantity}
        category={"Pencil"}
        price={cartItems.price}
        name={cartItems.name}
      />
    ));

  return (
    <>
      <Header
        title={"Your Cart"}
        display={"none"}
        content={
          "Scroll down to examine the products in your cart and get what you want now!"
        }
      />
      <div className="container">
        <div className="cart">
          <div>
            <h1 className="cart-title">Your Cart Items</h1>
          </div>
          <div className="container grid grid--3-cols">{cartItemsList}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
