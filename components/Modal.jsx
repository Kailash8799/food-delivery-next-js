import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { VscChromeClose } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { Context } from "./Statemanagement";

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
  const { addToCart, dcrToCart } = useContext(Context);
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
            desc: "",
            cartitem: 0,
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
              className="absolute z-10 dark:shadow-lg shadow-xl shadow-slate-700 dark:shadow-slate-600 rounded-lg w-11/12 h-auto max-w-2xl max-h-[400px] text-white dark:bg-black bg-white md:w-full container overflow-y-auto overflow-x-hidden"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="sticky top-0 z-50 flex items-center justify-between px-5 py-3 bg-white border-b dark:bg-black border-slate-600">
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
                            desc: "",
                            cartitem: 0,
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
                            desc: "",
                            cartitem: 0,
                          });
                        }, 200);
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="px-5 pb-4">
                <div className="md:flex">
                  <div className="relative flex flex-col w-full gap-2 my-2 md:w-1/2">
                    <div className="relative w-full overflow-hidden aspect-square rounded-xl">
                      <Image
                        fill
                        src={prodmodaldetails?.image}
                        className="transition hover:scale-105"
                        alt={`${prodmodaldetails?.itemname} image`}
                        srcSet=""
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="w-full my-2 space-y-2 md:w-1/2 md:mx-3">
                    <h1 className="text-lg font-bold text-black dark:text-white">
                      {prodmodaldetails?.itemname}
                    </h1>
                    <h1 className="text-slate-950 text-md dark:text-slate-600">
                      {prodmodaldetails?.desc}
                    </h1>

                    <h1 className="text-xl font-normal text-black dark:text-white">
                      ₹{prodmodaldetails?.price} for one
                    </h1>
                  {/* <div className="cursor-pointer">
                      {prodmodaldetails?.cartitem === 0 ? (
                        <motion.div
                          initial={{ y: 40, x: 0 }}
                          viewport={{ once: true }}
                          whileInView={{
                            y: 0,
                            x: 0,
                            transition: { duration: 1, ease: "easeInOut" },
                          }}
                        >
                          <h1
                            onClick={() => {
                              // setcartitem(1);
                              addToCart(prodmodaldetails?.product);
                            }}
                            className="px-4 py-2 text-lg font-bold text-black dark:text-white"
                          >
                            Add
                          </h1>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ y: 40 }}
                          whileInView={{
                            y: 0,
                            transition: { duration: 1, ease: "easeInOut" },
                          }}
                          className="flex items-center px-2 py-2 space-x-2 text-lg font-bold text-black dark:text-white"
                        >
                          <h1>
                            <FaMinusCircle
                              onClick={() => {
                                // setcartitem(prodmodaldetails?.cartitem - 1);
                                dcrToCart(prodmodaldetails?.product?.slug);
                              }}
                              size={25}
                            />
                          </h1>
                          <h1>{prodmodaldetails?.cartitem}</h1>
                          <h1>
                            <FaPlusCircle
                              size={25}
                              onClick={(e) => {
                                if (prodmodaldetails?.cartitem < 20) {
                                  // setcartitem(prodmodaldetails?.cartitem + 1);
                                  addToCart(prodmodaldetails?.product);
                                } else {
                                  toast.error(
                                    "You can't add more than 20 item"
                                  );
                                }
                              }}
                            />
                          </h1>
                        </motion.div>
                      )}
                    </div> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
