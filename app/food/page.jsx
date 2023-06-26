"use client";
import React from "react";
import OneItem from "@/components/OneItem";
import TransitionEffect from "@/components/TransitionEffect";
import Modal from "@/components/Modal";

export default function Food() {
  let item = {}
  if (typeof window !== "undefined") {
     item = localStorage.getItem("rescart");
  }
  const [modal, setModal] = React.useState(false);
  const [modaltime, setModaltime] = React.useState(false);
  let newItem = JSON.parse(item) || {};
  const productarray = [
    { slug: "sfjjd", price: 100, itemname: "Tea Post", image: "/tea.avif" },
    { slug: "sfvjjd", price: 200, itemname: "black", image: "/roti.avif" },
    { slug: "snfjjd", price: 140, itemname: "black", image: "/dhosa.avif" },
    { slug: "sfjgjd", price: 250, itemname: "black", image: "/tea.avif" },
    { slug: "sfjqjd", price: 290, itemname: "black", image: "/sandwich.avif" },
    { slug: "sffbjjd", price: 430, itemname: "black", image: "/tea.avif" },
  ];
  return (
    <>
      <TransitionEffect />
      {modaltime && <Modal {...{ modal, setModal, modaltime, setModaltime }} />}
      <div className="min-h-screen" id="items">
        <div className="grid grid-cols-1 gap-3 mx-5 my-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productarray.map((itm) => {
            return (
              <OneItem
                key={itm?.slug}
                modal={modal}
                setModal={setModal}
                modaltime={modaltime}
                setModaltime={setModaltime}
                itemcon={itm?.slug in newItem ? newItem[itm?.slug].qty : 0}
                product={{
                  slug: itm?.slug,
                  price: itm?.price,
                  itemname: itm?.itemname,
                  image: itm?.image,
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
