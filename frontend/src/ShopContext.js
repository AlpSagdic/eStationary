import React, { createContext, useState } from "react";

export const ShopContext = createContext({});

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(
    Object.fromEntries([...Array(8)].map((_, i) => [i + 1, 0]))
  );

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  return (
    <ShopContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeToCart }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
