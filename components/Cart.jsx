import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Cart({ setcartshow }) {
  useEffect(() => {
    if (window.document) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      if (window.document) document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <div
      onClick={() => {
        setcartshow(false);
      }}
      className="fixed top-0 right-0 w-screen h-screen bg-white bg-opacity-10"
    >
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
        }}
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
        className="fixed right-0 w-screen h-screen bg-white bg-opacity-100 sm:w-1/2 dark:bg-black"
      ></motion.div>
    </div>
  );
}
