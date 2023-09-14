import React, { useContext } from "react";
import { ShopContext } from "../ShopContext";
import { CartItem } from "../components/CartItem";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);

  const cartItemsList = Object.entries(cartItems)
    .filter(([itemId, quantity]) => quantity > 0)
    .map(([itemId, quantity]) => (
      <CartItem key={itemId} itemId={itemId} quantity={quantity} />
    ));

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div>{cartItemsList}</div>
    </div>
  );
}
