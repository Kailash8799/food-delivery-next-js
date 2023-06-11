"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [themes, setThemes] = useState("dark");
  const [showmenu, setshowmenu] = useState(false);
  const [isLogin, setisLogin] = useState(false);
  const { data: session } = useSession();
  useEffect(() => {
    if (session?.user?.email) {
      setisLogin(true);
    }
  }, [session]);
  const pathname = usePathname();
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
    <div className="sticky top-0 z-50">
      <div className="p-3.5 z-40 bg-white dark:bg-black border-b-[1px] dark:border-slate-800 border-slate-300">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold text-black dark:text-white">
              Food Delivery
            </h1>
          </div>
          <div className="items-center hidden space-x-5 lg:space-x-8 sm:flex">
            <Link href={"/"}>
              <h1
                className={`px-3 py-1 text-lg font-medium rounded-lg cursor-pointer hover:shadow-md hover:shadow-slate-600 ${
                  pathname === "/" ? "shadow-md shadow-slate-600" : ""
                }`}
              >
                Home
              </h1>
            </Link>
            <Link href={"/food"}>
              <h1
                className={`px-3 py-1 text-lg font-medium rounded-lg cursor-pointer hover:shadow-md hover:shadow-slate-600 ${
                  pathname === "/food" ? "shadow-md shadow-slate-600" : ""
                }`}
              >
                Food
              </h1>
            </Link>
            <Link href={"/about"}>
              <h1
                className={`px-3 py-1 text-lg font-medium rounded-lg cursor-pointer hover:shadow-md hover:shadow-slate-600 ${
                  pathname === "/about" ? "shadow-md shadow-slate-600" : ""
                }`}
              >
                About
              </h1>
            </Link>
            <Link href={"/contact"}>
              <h1
                className={`px-3 py-1 text-lg font-medium rounded-lg cursor-pointer hover:shadow-md hover:shadow-slate-600 ${
                  pathname === "/contact" ? "shadow-md shadow-slate-600" : ""
                }`}
              >
                Contact
              </h1>
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
          <div className="absolute p-2 z-50 w-32 h-32 items-center transition-transform delay-500 bg-white border-t-[1px] border-slate-200 shadow-md opacity-100 dark:border-slate-700 right-4 rounded-xl dark:bg-black shadow-slate-600 space-y-5">
            <Link href={"/signin"}>
              <h1
                onClick={() => {
                  setshowmenu(false);
                }}
                className="px-3 py-1 my-1 text-lg font-bold text-black rounded-lg cursor-pointer dark:text-white hover:shadow-md hover:shadow-slate-600"
              >
                Login
              </h1>
            </Link>
            <Link href={"/signup"}>
              <h1
                onClick={() => {
                  setshowmenu(false);
                }}
                className="px-3 py-1 my-1 text-lg font-bold text-black rounded-lg cursor-pointer hover:shadow-md hover:shadow-slate-600 dark:text-white "
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
          <div className="absolute p-2 z-50 w-32 h-36 items-center transition-transform delay-500 bg-white border-t-[1px] border-slate-200 shadow-md opacity-100 dark:border-slate-700 right-4 rounded-xl dark:bg-black shadow-slate-600 space-y-2">
            <Link href={"/profile"}>
              <h1
                onClick={() => {
                  setshowmenu(false);
                }}
                className="px-3 py-1 my-1 text-lg font-bold text-black rounded-lg cursor-pointer dark:text-white hover:shadow-md hover:shadow-slate-600"
              >
                Profile
              </h1>
            </Link>
            <Link href={"/orders"}>
              <h1
                onClick={() => {
                  setshowmenu(false);
                }}
                className="px-3 py-1 my-1 text-lg font-bold text-black rounded-lg cursor-pointer hover:shadow-md hover:shadow-slate-600 dark:text-white "
              >
                Orders
              </h1>
            </Link>
            <h1
              onClick={() => {
                signOut();
                setshowmenu(false)
              }}
              className="px-3 py-1 mb-2 text-lg font-bold text-black rounded-lg cursor-pointer hover:shadow-md hover:shadow-slate-600 dark:text-white "
            >
              Logout
            </h1>
          </div>
        </motion.div>
      )}
    </div>
  );
}
