import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useTheme } from "next-themes";
import { VscChromeClose } from "react-icons/vsc";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Context } from "./Statemanagement";

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
  const [newItem, setnewItem] = useState({});
  const [mounted, setMounted] = useState(false);
  const { clearCart } = useContext(Context);
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      let item = localStorage.getItem("rescart");
      let itm = JSON.parse(item) || {};
      setnewItem(itm);
    }
  }, []);
  if (!mounted) return;
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
              className="container fixed top-0 right-0 w-full h-screen max-w-md overflow-y-auto text-white shadow-lg bg-gradient-to-br from-slate-500 to-white dark:from-black dark:to-slate-600"
            >
              <div className="sticky top-0 z-50 flex items-center justify-between p-5 border-b border-slate-600 bg-gradient-to-br from-slate-500 to-white dark:from-black dark:to-slate-600">
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
                    <IoMdClose size={28} color="black" />
                  )}
                </div>
              </div>
              {Object.keys(newItem).length !== 0 ? (
                <div className="p-5">
                  {Object.keys(newItem).map((item) => {
                    return (
                      <div key={item} className="flex space-x-3">
                        <div className="relative flex flex-col w-1/2 gap-2 my-2 md:w-1/2">
                          <div className="relative w-full overflow-hidden aspect-square rounded-xl">
                            <Image
                              fill
                              src={newItem[item]?.image}
                              className="transition hover:scale-105"
                              alt={`image`}
                              srcSet=""
                            />
                          </div>
                        </div>
                        <div className="w-1/2 my-3">
                          <div>
                            <h1 className="text-lg font-bold text-black dark:text-white">
                              {newItem[item]?.itemname}
                            </h1>
                            <h1 className="text-lg font-bold text-black dark:text-white">
                              qty : {newItem[item]?.qty}
                            </h1>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex mt-5 space-x-3">
                    <h1
                      onClick={() => {
                        router.push("/checkout");
                        setcartshow((cartshow) => !cartshow);
                        setTimeout(() => {
                          setcartshowtime(!cartshowtime);
                        }, 200);
                      }}
                      className="px-3 py-2 font-bold text-black rounded-lg cursor-pointer dark:text-white bg-gradient-to-bl from-pink-500 to-purple-500"
                    >
                      Checkout
                    </h1>
                    <h1
                    onClick={() => {
                        clearCart()
                        router.push("/");
                        setcartshow((cartshow) => !cartshow);
                        setTimeout(() => {
                          setcartshowtime(!cartshowtime);
                        }, 200);
                      }}
                    className="px-3 py-2 font-bold text-black rounded-lg cursor-pointer dark:text-white bg-gradient-to-bl from-pink-500 to-purple-500">
                      Clear
                    </h1>
                  </div>
                </div>
              ) : (
                <div className="p-5 space-y-3">
                  <h1 className="text-xl font-bold text-black dark:text-white">
                    Cart is empty
                  </h1>
                  <h1
                    onClick={() => {
                      router.push("/food#items");
                      setcartshow((cartshow) => !cartshow);
                      setTimeout(() => {
                        setcartshowtime(!cartshowtime);
                      }, 200);
                    }}
                    className="inline-block px-3 py-2 text-lg text-black border rounded-lg cursor-pointer dark:text-white"
                  >
                    Continue to Shopping
                  </h1>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
