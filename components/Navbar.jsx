"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";

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
    <div>
     <h1  className="text-black dark:text-red-500">Navbar</h1>  
      <button className="text-black dark:text-red-500" onClick={Changetheme}>{themes}</button>
    </div>
  );
}
