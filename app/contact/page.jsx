"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [loading, setloading] = useState(false);
  const [mounted, setmounted] = useState(false);
  useEffect(() => {
    setmounted(true);
  }, []);

  const { data: session } = useSession();
  const sendMessage = async () => {
    if (!mounted) return;
    setloading(true);
    try {
      const responce = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/contact`,
        {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: session?.user?.email,
            message: message,
            secret: `${process.env.NEXT_PUBLIC_SECRET}`,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await responce.json();
      if (data.success) {
        toast.success(data.message);
        setname("");
        setemail("");
        setmessage("");
      } else {
        toast.error(data.message);
      }
      setloading(false);
    } catch (error) {
      toast.error("Some error accured");
      setloading(false);
    }
  };
  return (
    <div className="min-h-screen">
      <section className="relative text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-12 mx-auto sm:py-24 sm:flex-nowrap">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="relative items-end justify-start w-full p-10 overflow-hidden bg-gray-300 rounded-lg sm:h-[500px] lg:w-2/3 md:w-1/2 sm:mr-10 h-72"
          >
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.7046797964235!2d72.59088497499363!3d23.107904179114037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83ca44aa1c3b%3A0x743c9384d21946e!2sVGEC%20Boys%20Hostel-2!5e0!3m2!1sen!2sin!4v1686575896139!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="w-full h-full mt-6 bg-white md:w-1/2 sm:mt-0 dark:bg-black"
          >
            <div className="">
              <div className="w-full p-10 rounded shadow sm:p-4 md:p-10 bg-gradient-to-tl dark:from-slate-600 dark:to-black from-white to-slate-300">
                <p
                  tabIndex={0}
                  aria-label="Login to your account"
                  className="text-2xl font-extrabold leading-6 text-gray-400 dark:text-gray-600"
                >
                  Contact
                </p>

                <div className="flex items-center justify-between w-full py-5">
                  <hr className="w-full bg-gray-400" />
                </div>
                <div>
                  <label className="text-sm font-medium leading-none text-gray-800 dark:text-slate-300">
                    Name
                  </label>
                  <input
                    aria-label="enter name"
                    role="input"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                    className="w-full py-3 pl-3 mt-2 text-xs font-medium leading-none text-gray-800 bg-gray-200 border rounded focus:outline-none"
                  />
                </div>
                <div className="w-full mt-6">
                  <label className="text-sm font-medium leading-none text-gray-800 dark:text-slate-300">
                    Email
                  </label>
                  <input
                    aria-label="enter email adress"
                    role="input"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    className="w-full py-3 pl-3 mt-2 text-xs font-medium leading-none text-gray-800 bg-gray-200 border rounded focus:outline-none"
                  />
                </div>
                <div className="w-full mt-6">
                  <label className="text-sm font-medium leading-none text-gray-800 dark:text-slate-300">
                    Message
                  </label>
                  <div className="relative flex items-center justify-center">
                    <input
                      aria-label="enter Message"
                      role="input"
                      type="text"
                      value={message}
                      onChange={(e) => {
                        setmessage(e.target.value);
                      }}
                      className="w-full py-3 pl-3 mt-2 text-xs font-medium leading-none text-gray-800 bg-gray-200 border rounded focus:outline-none"
                    />
                  </div>
                </div>
                <div className="mt-8">
                  {loading ? (
                    <button
                      role="button"
                      aria-label="create my account"
                      className="items-center justify-center w-full py-2 text-xl font-bold leading-none text-center text-white transition-transform border rounded focus:ring-indigo-700 focus:outline-none dark:border-slate-700 bg-gradient-to-tl from-pink-500 to-blue-400 border-slate-200 hover:from-slate-500 hover:to-white"
                    >
                      <ColorRing
                        visible={true}
                        height="40"
                        width="40"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{ margin: "auto" }}
                        wrapperClass="blocks-wrapper"
                        colors={[
                          "#e15b64",
                          "#f47e60",
                          "#f8b26a",
                          "#abbd81",
                          "#849b87",
                        ]}
                      />
                    </button>
                  ) : (
                    <button
                      role="button"
                      disabled={!session}
                      onClick={sendMessage}
                      aria-label="Send message"
                      className="w-full py-4 text-xl font-bold leading-none text-white transition-transform border rounded focus:ring-indigo-700 focus:outline-none dark:border-slate-700 bg-gradient-to-tl from-pink-500 to-blue-400 border-slate-200 hover:from-slate-500 hover:to-white disabled:from-pink-300 disabled:to-blue-300"
                    >
                      Send message
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
