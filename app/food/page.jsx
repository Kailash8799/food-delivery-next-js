"use client";
import React, { useEffect, useState } from "react";
import OneItem from "@/components/OneItem";
import TransitionEffect from "@/components/TransitionEffect";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";
import { BallTriangle } from "react-loader-spinner";

export default function Food() {
  const [newItem, setnewItem] = useState({});
  const [mounted, setMounted] = useState(false);
  const [productarray, setproductarray] = useState([]);
  const [loader, setloader] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      let item = localStorage.getItem("rescart");
      let itm = JSON.parse(item) || {};
      setnewItem(itm);
    }
    (async () => {
      setloader(true);
      try {
        const responce = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/getfood`,
          {
            method: "POST",
            body: JSON.stringify({
              secret: `${process.env.NEXT_PUBLIC_SECRET}`,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const data = await responce.json();
        console.log(data);
        setproductarray(data?.product);
        setloader(false);
      } catch (error) {
        console.log(error);
        setloader(false);
      }
    })();
  }, [router]);
  const [modal, setModal] = React.useState(false);
  const [modaltime, setModaltime] = React.useState(false);
  const [prodmodaldetails, setprodmodaldetails] = useState({
    slug: "",
    price: 0,
    itemname: "",
    image: "",
    desc: "",
    cartitem: 0,
    product: {},
  });
  if (!mounted) return;
  return (
    <>
      <TransitionEffect />
      {modaltime && (
        <Modal
          {...{
            modal,
            setModal,
            modaltime,
            setModaltime,
            prodmodaldetails,
            setprodmodaldetails,
          }}
        />
      )}
      {!loader ? (
        productarray.length !== 0 ? (
          <div className="min-h-screen" id="items">
            <div className="grid grid-cols-1 gap-3 mx-5 my-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {productarray.map((itm) => {
                return (
                  <OneItem
                    key={itm?.slug}
                    modal={modal}
                    setModal={setModal}
                    modaltime={modaltime}
                    setModaltime={setModaltime}
                    prodmodaldetails={prodmodaldetails}
                    setprodmodaldetails={setprodmodaldetails}
                    itemcon={itm?.slug in newItem ? newItem[itm?.slug].qty : 0}
                    product={{
                      slug: itm?.slug,
                      price: itm?.price,
                      itemname: itm?.itemname,
                      image: itm?.image,
                      desc: itm?.desc,
                    }}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div className="min-h-screen">No item found</div>
        )
      ) : (
        <div className="items-center justify-center min-h-screen text-center">
          <div className="items-center justify-center inline-block mx-auto mt-[20%]">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              visible={true}
            />
          </div>
        </div>
      )}
    </>
  );
}
