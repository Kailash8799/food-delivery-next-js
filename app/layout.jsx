"use client";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Pagewrapper from "./page-wrapper";
import SessionProviderComp from "@/components/SessionProviderComp";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Statemanagement from "@/components/Statemanagement";

export default function RootLayout({ children }) {
  const [showmenu, setshowmenu] = useState(false);
  return (
    <html lang="en">
      <head>
        <title>Food delivery app</title>
        <meta name="description" content="Created by kailash rajput" />
      </head>
      <body
        className="dark:bg-black"
        onClick={() => {
          setshowmenu(false);
        }}
      >
        <SessionProviderComp>
          <Statemanagement>
            <ThemeProvider enableSystem={true} attribute="class">
              <Pagewrapper>
                <Toaster />
                <Navbar showmenu={showmenu} setshowmenu={setshowmenu} />
                {children}
                <Footer />
              </Pagewrapper>
            </ThemeProvider>
          </Statemanagement>
        </SessionProviderComp>
      </body>
    </html>
  );
}
