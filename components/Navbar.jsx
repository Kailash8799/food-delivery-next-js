"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [themes, setThemes] = useState("dark");
  const [showmenu, setshowmenu] = useState(false);
  const [isLogin, setisLogin] = useState(false);
  const Changetheme = () => {
    const currenttheme = theme === "system" ? systemTheme : theme;
    if (currenttheme === "dark") {
      localStorage.setItem("thememode", "light");
      setTheme("light");
      setThemes("light");
    } else {
      localStorage.setItem("thememode", "dark");
      setTheme("dark");
      setThemes("dark");
    }
  };
  const showmenuUser = () => {
    setshowmenu(!showmenu);
  };

  return (
    <>
      <div className="p-3.5 z-40 border-b-[1px] dark:border-slate-800 border-slate-300">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold text-black dark:text-white">
              Food Delivery
            </h1>
          </div>
          <div className="items-center hidden space-x-4 sm:flex">
            <Link href={"/"}>
              <h1 className="text-lg font-medium cursor-pointer">Home</h1>
            </Link>
            <Link href={"/"}>
              <h1 className="text-lg font-medium cursor-pointer">Home</h1>
            </Link>
            <Link href={"/"}>
              <h1 className="text-lg font-medium cursor-pointer">About</h1>
            </Link>
            <Link href={"/"}>
              <h1 className="text-lg font-medium cursor-pointer">Contact</h1>
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            {themes === "light" ? (
              <div className="cursor-pointer">
                <MdDarkMode onClick={Changetheme} size={25} />
              </div>
            ) : (
              <div className="cursor-pointer">
                <MdLightMode size={25} onClick={Changetheme} />
              </div>
            )}
            <div className="relative cursor-pointer ">
              <FaUserCircle size={25} onClick={showmenuUser} />
            </div>
          </div>
        </div>
      </div>
      {showmenu && !isLogin && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
        >
          <div className="absolute p-2 z-50 w-32 h-32 items-center transition-transform delay-500 bg-white border-t-[1px] border-slate-200 shadow-md opacity-100 dark:border-slate-700 right-4 rounded-xl dark:bg-black shadow-slate-600 space-y-3">
            <Link href={"/signin"}>
              <h1
                onClick={() => {
                  setshowmenu(false);
                }}
                className="text-lg font-bold text-black cursor-pointer dark:text-white"
              >
                Login
              </h1>
            </Link>
            <Link href={"/signup"}>
              <h1
                onClick={() => {
                  setshowmenu(false);
                }}
                className="text-lg font-bold text-black cursor-pointer dark:text-white"
              >
                Signup
              </h1>
            </Link>
          </div>
        </motion.div>
      )}
      {showmenu && isLogin && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
        >
          <div className="absolute p-2 z-50 w-32 h-40 transition-transform delay-500 bg-white border-t-[1px] border-slate-200 shadow-md opacity-100 dark:border-slate-700 right-4 rounded-xl dark:bg-black shadow-slate-600 space-y-3">
            <h1 className="text-lg font-bold text-black dark:text-white">
              Profile
            </h1>
            <h1 className="text-lg font-bold text-black dark:text-white">
              Orders
            </h1>
          </div>
        </motion.div>
      )}
    </>
  );
}
