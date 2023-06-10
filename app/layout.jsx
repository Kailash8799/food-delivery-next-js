"use client";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Provider from "@/components/provider";
import Navbar from "@/components/Navbar";
import Pagewrapper from "./page-wrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Food delivery app</title>
        <meta name="description" content="Created by kailash rajput" />
      </head>
      <body className="dark:bg-black">
        <ThemeProvider enableSystem={true} attribute="class">
          <Provider>
            <Pagewrapper>
              <Navbar />
              {children}
            </Pagewrapper>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
