import React, { useEffect } from 'react'
import { AnimatePresence, motion } from "framer-motion";

export default function Modal({ modal, setModal,modaltime,setModaltime }) {
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
      setModal((modal) => !modal)
      setTimeout(() => {
        setModaltime(!modaltime)
      }, 200)
      }
    }
      className="fixed top-0 right-0 z-50 w-screen h-screen bg-white bg-opacity-25 dark:bg-opacity-10"
    >
      
    <AnimatePresence>
      {modal && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full px-5">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1
            }}
            exit={{
              y: -50,
              opacity: 0
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="absolute z-10 w-full h-auto max-w-md p-5 text-white bg-indigo-600 rounded"
            onClick={(e)=>{e.stopPropagation()}}
          >
            <button
              onClick={() =>{
                setModal((modal) => !modal)
                setTimeout(() => {
                  setModaltime(!modaltime)
                }, 200)
                }
              }
              className="absolute top-0 right-0 block w-8 h-8 mb-2 -mt-4 -mr-4 text-indigo-600 bg-white border border-indigo-600 rounded-full"
            >
              &times;
            </button>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    </div>
  );
}
