"use client";
import { createContext, useState } from "react";

export const Context = createContext(null);

const Statemanagement = ({ children }) => {
  const [subtotal,setsubtotal] = useState(0)
  const addToCart = (product) => {
    let cartItem;
    if (typeof window !== "undefined") {
      cartItem = localStorage.getItem("rescart");
    }
    let { slug, price, itemname, image } = product;
    setsubtotal(subtotal+ Number(price));
    let newCart = JSON.parse(cartItem) || {};
    if (slug in newCart) {
      newCart[slug].qty = newCart[slug].qty + 1;
    } else {
      newCart[slug] = { qty: 1, price, itemname, image };
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("rescart", JSON.stringify(newCart));
    }
  };
  const dcrToCart = (slug) => {
    let cartItem;
    if (typeof window !== "undefined") {
      cartItem = localStorage.getItem("rescart");
    }
    let newCart = JSON.parse(cartItem) || {};
    if (slug in newCart) {
      if (newCart[slug].qty <= 1) {
        delete newCart[slug];
        if (typeof window !== "undefined") {
          localStorage.setItem("rescart", JSON.stringify(newCart));
        }
        return;
      }
      newCart[slug].qty = newCart[slug].qty - 1;
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("rescart", JSON.stringify(newCart));
    }
  };
  const clearCart = () => {
    let newCart = {};
    if (typeof window !== "undefined") {
      localStorage.setItem("rescart", JSON.stringify(newCart));
    }
  };
  return (
    <Context.Provider value={{ addToCart, dcrToCart, clearCart,subtotal }}>
      {children}
    </Context.Provider>
  );
};

export default Statemanagement;
