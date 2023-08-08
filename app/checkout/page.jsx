"use client";
import TransitionEffect from "@/components/TransitionEffect";
import React, { useContext, useEffect } from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Context } from "@/components/Statemanagement";
import Image from "next/image";
import { toast } from "react-hot-toast";

const Checkout = () => {
  const [mounted, setMounted] = useState(false);
  const Router = useRouter();
  const [disable, setdisable] = useState(false);
  const [userinfo, setuserinfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
  });
  const [services, setservices] = useState({ state: "", dis: "" });
  const [checkval, setcheckval] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setMounted(true);
    let token = localStorage.getItem("token");
  }, []);
  const [newItem, setnewItem] = useState({});
  const { clearCart } = useContext(Context);
  const { addToCart, dcrToCart ,subtotal} = useContext(Context);
  console.log(subtotal);
  console.log("HEllo");
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      let item = localStorage.getItem("rescart");
      let itm = JSON.parse(item) || {};
      setnewItem(itm);
    }
  }, []);
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setuserinfo({ ...userinfo, [name]: value });
  };

  const makeOrder = async () => {
    setloading(true);
    try {
      const responce = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/makeorder`,
        {
          method: "POST",
          body: JSON.stringify({
            name: userinfo?.name,
            email: userinfo?.email,
            phone: userinfo?.phone,
            address: userinfo?.address,
            pincode: userinfo?.pincode,
            secret: `${process.env.NEXT_PUBLIC_SECRET}`,
            newItem
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await responce.json();
      console.log(data);
      if (data.success) {
        toast.success(data.message);
        setuserinfo({
          name: "",
          email: "",
          phone: "",
          address: "",
          pincode: ""
        });
        router.push("/orders");
      } else {
        toast.error(data.message);
      }
      setloading(false);
    } catch (error) {
      toast.error(error);
      setloading(false);
    }
  };
  if (!mounted) return;
  return (
    <>
      <TransitionEffect />
      <div className="container mx-auto">
        <h1 className="my-4 text-3xl font-bold text-center">Checkout</h1>
        <div className="mx-3">
          <h2 className="text-2xl font-medium ">1. Delivery Details</h2>
          <div className="flex mx-auto">
            <div className="flex-col w-1/2 px-2">
              <label
                htmlFor="name"
                className="text-lg leading-7 text-black dark:text-white"
              >
                Name
              </label>
              <input
                value={userinfo.name}
                onChange={handleChange}
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-3 py-1 text-base leading-8 text-black transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none dark:border-slate-700 dark:bg-black dark:text-white focus:border-gray-600 focus:dark:border-slate-600 focus:ring-1 focus:ring-gray-500 focus:dark:ring-slate-600"
              />
            </div>
            <div className="flex-col w-1/2 px-2">
              <label
                htmlFor="email"
                className="text-lg leading-7 text-black dark:text-white"
              >
                Email
              </label>

              <input
                value={userinfo.email}
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-3 py-1 text-base leading-8 text-black transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none dark:border-slate-700 dark:bg-black dark:text-white focus:border-gray-600 focus:dark:border-slate-600 focus:ring-1 focus:ring-gray-500 focus:dark:ring-slate-600"
              />
            </div>
          </div>
          <div className="w-full px-2 mt-5">
            <div className="relative">
              <label
                htmlFor="address"
                className="text-lg leading-7 text-black dark:text-white"
              >
                Address
              </label>
              <textarea
                value={userinfo.address}
                onChange={handleChange}
                id="address"
                name="address"
                placeholder="Enter your Address"
                className="w-full h-32 px-3 py-1 text-base leading-6 text-black transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none resize-none dark:border-slate-700 dark:bg-black dark:text-white focus:border-gray-600 focus:dark:border-slate-600 focus:bg-white focus:ring-1 focus:ring-gray-500 focus:dark:ring-slate-600"
              ></textarea>
            </div>
          </div>
          <div className="flex mx-auto mt-5">
            <div className="flex-col w-1/2 px-2">
              <label
                htmlFor="phone"
                className="text-lg leading-7 text-black dark:text-white"
              >
                Phone Number
              </label>
              <input
                value={userinfo.phone}
                onChange={handleChange}
                type="phone"
                id="phone"
                name="phone"
                placeholder="Your 10 digit phone number"
                className="w-full px-3 py-1 text-base leading-8 text-black transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none dark:border-slate-700 dark:bg-black dark:text-white focus:border-gray-600 focus:dark:border-slate-600 focus:ring-1 focus:ring-gray-500 focus:dark:ring-slate-600"
              />
            </div>
            <div className="flex-col w-1/2 px-2">
              <label
                htmlFor="pincode"
                className="text-lg leading-7 text-black dark:text-white"
              >
                Pincode
              </label>
              <input
                maxLength={6}
                onChange={handleChange}
                value={userinfo.pincode}
                type="pincode"
                id="pincode"
                name="pincode"
                placeholder="Enter your pincode"
                className="w-full px-3 py-1 text-base leading-8 text-black transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none dark:border-slate-700 dark:bg-black dark:text-white focus:border-gray-600 focus:dark:border-slate-600 focus:ring-1 focus:ring-gray-500 focus:dark:ring-slate-600"
              />
            </div>
          </div>
          <div className="flex mx-auto mt-5">
            <div className="flex-col w-1/2 px-2">
              <label
                htmlFor="state"
                className="text-lg leading-7 text-black dark:text-white"
              >
                State
              </label>
              <input
                onChange={() => {}}
                readOnly
                value={services.state}
                type="state"
                id="state"
                name="state"
                placeholder="Enter your state"
                className="w-full px-3 py-1 text-base leading-8 text-black transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none dark:border-slate-700 dark:bg-black dark:text-white focus:border-gray-600 focus:dark:border-slate-600 focus:ring-1 focus:ring-gray-500 focus:dark:ring-slate-600"
              />
            </div>
            <div className="flex-col w-1/2 px-2">
              <label
                htmlFor="district"
                className="text-lg leading-7 text-black dark:text-white"
              >
                District
              </label>
              <input
                onChange={() => {}}
                readOnly
                value={services.dis}
                type="district"
                id="district"
                name="district"
                placeholder="Enter your district"
                className="w-full px-3 py-1 text-base leading-8 text-black transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none dark:border-slate-700 dark:bg-black dark:text-white focus:border-gray-600 focus:dark:border-slate-600 focus:ring-1 focus:ring-gray-500 focus:dark:ring-slate-600"
              />
            </div>
          </div>
        </div>
        <div className="mx-3 my-5">
          <h2 className="text-2xl font-medium ">2. Review Cart Items & Pay</h2>

          <div className="w-full mt-3 bg-slate-200 dark:bg-slate-900 border dark:border-slate-800 rounded-lg sideCart">
            <div className="my-5">
              <div className="cartitems">
                {Object.keys(newItem).length !== 0 && (
                  <div className="grid justify-center grid-cols-1 gap-3 mx-5 my-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {Object.keys(newItem).map((item) => {
                      return (
                        <div
                          key={item}
                          className=" items-center max-w-sm space-x-3 min-[416px]:flex max-[416px]:justify-center"
                        >
                          <div className="relative flex flex-col w-full gap-2 my-2 text-center">
                            <div className="relative mx-auto w-32 overflow-hidden aspect-square rounded-xl">
                              <Image
                                fill
                                src={newItem[item]?.image}
                                className="w-32 h-32 transition hover:scale-105"
                                alt={`image`}
                                srcSet=""
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="w-full my-3 ">
                            <div>
                              <h1 className="text-lg max-[416px]:text-center font-bold text-black dark:text-white">
                                {newItem[item]?.itemname}
                              </h1>
                              <h1 className="text-lg max-[416px]:text-center font-bold text-black dark:text-white">
                                qty : {newItem[item]?.qty}
                              </h1>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                {Object.keys(newItem).length === 0 && "Your cart is Empty!"}
              </div>
              <div className="ml-10 text-xl font-bold mt-7">
                Subtotal : ₹{0}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-3 my-5">
          <div className="lg:flex lg:items-center">
            <div className="flex items-center mx-2 form-check lg:w-2/3">
              <input
                onClick={() => {
                  setcheckval(!checkval);
                }}
                id="myCheck"
                type="checkbox"
                value={checkval}
                className="w-4 h-4 mr-2 text-pink-600 bg-gray-100 border-gray-300 rounded dark:border-slate-700 focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 "
              />
              <div className="inline-block dark:text-gray-200 text-gray-800 form-check-label">
                I want to place a Cash on Delivery (COD) Order. I promise to pay
                the delivery partner on delivery
              </div>
            </div>
            <div className="lg:w-1/3">
              <h1 className="mt-4 mb-2 text-md">Apply Promo code</h1>
              <input
                type="text"
                id="email"
                name="number"
                placeholder="Enter code(Only prepaid)"
                className="w-40 px-3 py-1 text-base leading-8 text-black transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none dark:border-slate-700 dark:bg-black dark:text-white md:w-60 focus:border-gray-600 focus:dark:border-slate-600 focus:ring-1 focus:ring-indigo-200"
              />
              <button className="px-3 py-2 ml-4 text-white bg-pink-500 border-0 rounded md:ml-10 md:px-6 focus:outline-none hover:bg-pink-600 disabled:bg-pink-400">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className="mx-5 my-5">
          <button
            onClick={makeOrder}
            className="flex items-center px-4 py-2 text-lg text-white bg-pink-500 border-0 rounded focus:outline-none hover:bg-pink-600 disabled:bg-pink-300"
            disabled={disable}
          >
            <BsFillBagCheckFill className="text-xl" />
            <span className="pl-2"> Pay₹{0}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
