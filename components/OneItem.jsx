"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { toast } from "react-hot-toast";

export default function OneItem() {
  const [cartitem, setcartitem] = useState(0);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="cursor-pointer group"
      >
        <div className="relative flex flex-col w-full gap-2">
          <div className="relative w-full overflow-hidden aspect-square rounded-xl">
            <Image
              fill
              src="/tea.avif"
              className="w-full h-full transition hover:scale-105"
              alt=""
              srcSet=""
            />
          </div>
          <div
            className={`absolute  bg-white bottom-20 ${
              cartitem > 0
                ? `${cartitem > 9 ? "left-[38%]" : "left-[40%]"}`
                : "left-[43%]"
            } rounded-lg   dark:bg-slate-800`}
          >
            {cartitem === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
              >
                <h1
                  onClick={() => {
                    setcartitem(1);
                  }}
                  className="px-4 py-2 text-lg font-bold text-black dark:text-white"
                >
                  Add
                </h1>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
                className="flex items-center px-2 py-2 space-x-2 text-lg font-bold text-black dark:text-white"
              >
                <h1>
                  <FaMinusCircle
                    onClick={() => {
                      setcartitem(cartitem - 1);
                    }}
                    size={25}
                  />
                </h1>
                <h1>{cartitem}</h1>
                <h1>
                  <FaPlusCircle
                    size={25}
                    onClick={() => {
                      if (cartitem < 20) {
                        setcartitem(cartitem + 1);
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
              Tea Post
            </h1>
            <h1 className="text-xl font-normal text-black dark:text-white">
              ₹30 for one
            </h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
