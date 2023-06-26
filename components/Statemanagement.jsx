"use client";
import { createContext } from "react";

export const Context = createContext(null);

const Statemanagement = ({ children }) => {
  const addToCart = (product) => {
    let cartItem = localStorage.getItem("rescart");
    let { slug, price, itemname, image } = product;
    let newCart = JSON.parse(cartItem) || {};
    console.log(slug);
    console.log(newCart);
    if (slug in newCart) {
      newCart[slug].qty = newCart[slug].qty + 1;
    } else {
      newCart[slug] = { qty: 1, price, itemname, image };
    }
    localStorage.setItem("rescart", JSON.stringify(newCart));
  };
  const dcrToCart = (slug)=>{
    let cartItem = localStorage.getItem("rescart");
    let newCart = JSON.parse(cartItem) || {};
    if (slug in newCart) {
      if(newCart[slug].qty <= 1){
        delete newCart[slug]
        localStorage.setItem("rescart", JSON.stringify(newCart));
        return;
      }
      newCart[slug].qty = newCart[slug].qty - 1;
    }
    localStorage.setItem("rescart", JSON.stringify(newCart));
  }
  return <Context.Provider value={{addToCart,dcrToCart}}>{children}</Context.Provider>;
};

export default Statemanagement;
