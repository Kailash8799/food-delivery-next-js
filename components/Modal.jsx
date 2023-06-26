import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { VscChromeClose } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { useTheme } from "next-themes";

export default function Modal({
  modal,
  setModal,
  modaltime,
  setModaltime,
  prodmodaldetails,
  setprodmodaldetails,
}) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    setMounted(true);
    if (window.document) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      if (window.document) document.body.style.overflowY = "scroll";
    };
  }, []);
  if (!mounted) return;
  return (
    <div
      onClick={() => {
        setModal((modal) => !modal);
        setTimeout(() => {
          setModaltime(!modaltime);
          setprodmodaldetails({
            slug: "",
            price: 0,
            itemname: "",
            image: "",
          });
        }, 200);
      }}
      className="fixed top-0 right-0 z-50 w-screen h-screen bg-white bg-opacity-25 dark:bg-opacity-10"
    >
      <AnimatePresence>
        {modal && (
          <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full px-5">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -50,
                opacity: 0,
              }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute z-10 w-11/12 h-auto max-w-2xl max-h-[400px] text-white dark:bg-black bg-white rounded md:w-full container overflow-y-auto overflow-x-hidden"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="sticky top-0 flex items-center justify-between px-5 py-3 bg-white border-b dark:bg-black border-slate-600">
                <h1 className="text-xl font-bold text-black dark:text-white">
                  {prodmodaldetails?.itemname}
                </h1>
                <div className="cursor-pointer">
                  {theme === "dark" ? (
                    <VscChromeClose
                      size={24}
                      onClick={() => {
                        setModal((modal) => !modal);
                        setTimeout(() => {
                          setModaltime(!modaltime);
                          setprodmodaldetails({
                            slug: "",
                            price: 0,
                            itemname: "",
                            image: "",
                          });
                        }, 200);
                      }}
                    />
                  ) : (
                    <IoMdClose
                      size={28}
                      color="black"
                      onClick={() => {
                        setModal((modal) => !modal);
                        setTimeout(() => {
                          setModaltime(!modaltime);
                          setprodmodaldetails({
                            slug: "",
                            price: 0,
                            itemname: "",
                            image: "",
                          });
                        }, 200);
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="px-5 pb-4"></div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
