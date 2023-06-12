"use client";
import Link from "next/link";
import React from "react";
import {BsInstagram,BsTwitter} from 'react-icons/bs'

export default function Footer() {
  return (
    <div className="h-12 px-5 flex justify-between items-center bg-white dark:bg-black border-t-[1px] dark:border-slate-800 border-slate-300">
      <div className="items-center text-center ">
        <span>© 2023 Copyright by </span>
        <Link href={"/"} legacyBehavior>
          <a className="font-semibold ">Foody</a>
        </Link>
      </div>
      <div className="flex items-center space-x-2 text-center sm:space-x-7">
        <Link target="_blank" href={"https://twitter.com/Kailash8799"}><BsTwitter size={27} color="#feda75"/></Link>
        <Link target="_blank" href={"https://www.instagram.com/thekailash8799/"}><BsInstagram size={27} color="#feda75"/></Link>
      </div>
    </div>
  );
}
