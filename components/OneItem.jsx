"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { Context } from "./Statemanagement";

export default function OneItem({itemcon,product,modal,setModal,modaltime,setModaltime}) {
  const [cartitem, setcartitem] = useState(itemcon || 0);
  const {addToCart,dcrToCart} = useContext(Context)
  return (
    <div>
      <motion.div
        initial={{y:150,x:0}}
        viewport={{ once: true }}
        whileInView={{
          y: 0,x:0,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        className="cursor-pointer group"
        onClick={()=>{
          setModal(!modal)
          setModaltime(!modaltime)
        }}
      >
        <div className="relative flex flex-col w-full gap-2">
          <div className="relative w-full overflow-hidden aspect-square rounded-xl">
            <Image
              fill
              src={product?.image}
              className="w-full h-full transition hover:scale-105"
              alt={`${product?.itemname} image`}
              srcSet=""
            />
          </div>
          <div
            onClick={(e)=>{e.stopPropagation()}}
            className={`absolute  bg-white bottom-20 ${
              cartitem > 0
                ? `${cartitem > 9 ? "left-[38%]" : "left-[40%]"}`
                : "left-[43%]"
            } rounded-lg   dark:bg-slate-800`}
          >
            {cartitem === 0 ? (
              <motion.div
              initial={{y:40,x:0}}
              viewport={{ once: true }}
              whileInView={{
                y: 0,x:0,
                transition: { duration: 1, ease: "easeInOut" },
              }}
              >
                <h1
                  onClick={() => {
                    setcartitem(1);
                    addToCart(product)
                  }}
                  className="px-4 py-2 text-lg font-bold text-black dark:text-white"
                >
                  Add
                </h1>
              </motion.div>
            ) : (
              <motion.div
              initial={{y:40}}
              whileInView={{
                y: 0,
                transition: { duration: 1, ease: "easeInOut" },
              }}
                className="flex items-center px-2 py-2 space-x-2 text-lg font-bold text-black dark:text-white"
              >
                <h1>
                  <FaMinusCircle
                    onClick={() => {
                      setcartitem(cartitem - 1);
                      dcrToCart(product.slug)
                    }}
                    size={25}
                  />
                </h1>
                <h1>{cartitem}</h1>
                <h1>
                  <FaPlusCircle
                    size={25}
                    onClick={(e) => {
                      if (cartitem < 20) {
                        setcartitem(cartitem + 1);
                        addToCart(product)
                      } else {
                        toast.error("You can't add more than 20 item");
                      }
                    }}
                  />
                </h1>
              </motion.div>
            )}
          </div>
          <div className="px-2">
            <h1 className="text-xl font-semibold text-black dark:text-white">
              {product?.itemname}
            </h1>
            <h1 className="text-xl font-normal text-black dark:text-white">
              ₹{product?.price} for one
            </h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
