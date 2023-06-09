"use client";

import { motion, AnimatePresence } from "framer-motion";
export default function Pagewrapper({ children }) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{delay:0.1}}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
