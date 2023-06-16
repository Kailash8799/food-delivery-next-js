import React from "react";
import { motion } from "framer-motion";

export default function TransitionEffect() {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 z-30 w-screen h-screen overflow-hidden right-full bg-gradient-to-tl from-orange-400 to-red-300"
        initial={{ x: "100%"}}
        animate={{x:"0%",y:"0%"}}
        transition={{delay:0.3,duration:0.4,ease:"easeInOut"}}
      />
      
      <motion.div
        className="fixed top-0 bottom-0 z-30 w-screen h-screen overflow-hidden right-full bg-gradient-to-tl from-pink-500 to-purple-500 "
        initial={{ x: "100%"}}
        animate={{x:"0%",y:"0%"}}
        transition={{delay:0.2,duration:0.4,ease:"easeInOut"}}
      />
      <motion.div
        className="fixed top-0 bottom-0 z-30 w-screen h-screen overflow-hidden right-full bg-gradient-to-tl from-lime-400 to-teal-500"
        initial={{ x: "100%"}}
        animate={{x:"0%",y:"0%"}}
        transition={{delay:0,duration:0.4,ease:"easeInOut"}}
      />
    </>
  );
}
