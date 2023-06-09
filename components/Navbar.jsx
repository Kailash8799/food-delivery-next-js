"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [themes, setThemes] = useState("dark");
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
  return (
    <div className="p-3.5 border-b-[1px] dark:border-slate-800 border-slate-500">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black dark:text-white">
            Food Delivery
          </h1>
        </div>
        <div className="items-center hidden space-x-4 sm:flex">
          <h1 className="text-lg font-medium cursor-pointer">Home</h1>
          <h1 className="text-lg font-medium cursor-pointer">Home</h1>
          <h1 className="text-lg font-medium cursor-pointer">About</h1>
          <h1 className="text-lg font-medium cursor-pointer">Contact</h1>
        </div>
        <div className="flex items-center space-x-3">
          <div className="cursor-pointer">
            <FaUserCircle size={25} />
          </div>
          {themes === "light" ? (
            <div className="cursor-pointer">
              <MdDarkMode onClick={Changetheme} size={25} />
            </div>
          ) : (
            <div className="cursor-pointer">
              <MdLightMode size={25} onClick={Changetheme} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
