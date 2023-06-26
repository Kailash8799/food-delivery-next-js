import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useTheme } from "next-themes";
import { VscChromeClose } from "react-icons/vsc";

export default function Cart({
  cartshow = false,
  setcartshowtime,
  cartshowtime,
  setcartshow = () => {},
}) {
  const { theme } = useTheme();
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
        setcartshow((cartshow) => !cartshow);
        setTimeout(() => {
          setcartshowtime(!cartshowtime);
        }, 200);
      }}
      className="fixed top-0 right-0 w-screen h-screen bg-white bg-opacity-10"
    >
      <AnimatePresence>
        {cartshow && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 w-full h-screen max-w-md text-white shadow-lg bg-gradient-to-br from-slate-500 to-white dark:from-black dark:to-slate-600"
            >
              <div className="flex items-center justify-between p-5">
                <div>
                  <h1 className="text-xl font-bold text-black dark:text-white">
                    Shopping cart
                  </h1>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setcartshow((cartshow) => !cartshow);
                    setTimeout(() => {
                      setcartshowtime(!cartshowtime);
                    }, 200);
                  }}
                >
                  {theme === "dark" ? (
                    <VscChromeClose size={24} />
                    ) : (
                    <IoMdClose size={28} color="black"/>
                  )}
                </div>
              </div>
              <hr className="" />
              <div className="p-5">
                <h2 className="text-4xl leading-loose capitalize">hello!</h2>
                <p className="leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
