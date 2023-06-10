"use client";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Pagewrapper from "./page-wrapper";
import Provider from "@/components/Provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Food delivery app</title>
        <meta name="description" content="Created by kailash rajput" />
      </head>
      <body className="dark:bg-black">
        <ThemeProvider enableSystem={true} attribute="class">
          
            <Pagewrapper>
              <Navbar />
              {children}
            </Pagewrapper>
          
        </ThemeProvider>
      </body>
    </html>
  );
}
