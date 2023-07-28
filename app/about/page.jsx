"use client";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      <TransitionEffect />
      <div className="min-h-screen">
        <div className="py-10 mx-2 my-16 dark:bg-slate-800 bg-slate-300 px-9 lg:mx-28 rounded-xl">
          <div className="sm:flex">
            <div className="relative flex flex-col items-center justify-center w-full sm:w-1/2">
              <div className="relative overflow-hidden rounded-full sm:w-96 w-80 aspect-square">
                <Image
                  src={"/kailash.jpg"}
                  fill
                  className="transition-transform rounded-full hover:scale-110"
                  alt="devloper image"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2">Hey</div>
          </div>
        </div>
      </div>
    </>
  );
}
