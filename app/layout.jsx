"use client"
import "./globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Food delivery app</title>
        <meta name="description" content="Created by kailash rajput" />
      </head>
      <body>
        <ThemeProvider enableSystem={true} attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
