"use client";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Pagewrapper from "./page-wrapper";
import Provider from "@/components/Provider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [showmenu, setshowmenu] = useState(false);
  return (
    <html lang="en">
      <head>
        <title>Food delivery app</title>
        <meta name="description" content="Created by kailash rajput" />
      </head>
      <body className="dark:bg-black" onClick={()=>{setshowmenu(false)}}>
        <Provider>
          <ThemeProvider enableSystem={true} attribute="class">
            <Pagewrapper>
              <Toaster />
              <Navbar showmenu={showmenu} setshowmenu={setshowmenu}/>
              {children}
              <Footer />
            </Pagewrapper>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
