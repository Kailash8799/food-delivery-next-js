import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Cart({ cartshow = false,setcartshowtime,cartshowtime, setcartshow = () => {} }) {
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
    onClick={() =>{
      setcartshow((cartshow) => !cartshow)
      setTimeout(() => {
        setcartshowtime(!cartshowtime)
      }, 200)
      }
    }
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
            onClick={(e)=>{e.stopPropagation()}}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 w-full h-screen max-w-md p-5 text-white bg-indigo-600 shadow-lg"
          >
            <button
              onClick={() =>{
                setcartshow((cartshow) => !cartshow)
                setTimeout(() => {
                  setcartshowtime(!cartshowtime)
                }, 200)
                }
              }
              className="block w-8 h-8 mb-2 text-black bg-white rounded-full"
            >
              &times;
            </button>
            <h2 className="text-4xl leading-loose capitalize">hello!</h2>
            <p className="leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s.
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    
    </div>
  );
}
