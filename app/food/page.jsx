"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import OneItem from "@/components/OneItem";

export default function Food() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 gap-3 mx-5 my-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <OneItem/>
        <OneItem/>
        <OneItem/>
        <OneItem/>
        <OneItem/>
        <OneItem/>
        <OneItem/>
        <OneItem/>
        <OneItem/>
      </div>
    </div>
  );
}
