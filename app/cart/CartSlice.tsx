"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import React from "react";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";

const CartSlice = () => {
  const { cartProducts } = useCart();

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Your cart is empty</div>
        <div>
          <Link
            href={"/"}
            className="flex items-center gap-1 text-slate-500 mt-2"
          >
            <MdArrowBack />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Heading title="Shopping Cart" center />
      <div className="grid grid-cols-5 text-xs gap-4 mt-8 pb-2 items-center">
        <div className="col-span-2 justify-self-start">PRODUCT</div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-center">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <div key={item.id}>{item.name}</div>;
          })}
      </div>
      <div className="border-t-[1.5px] border-slate-300 py-4 flex gap-4 justify-between">
        <div className="w-[100px]">
          <Button label="Clear Cart" onClick={() => {}} small outline />
        </div>
        <div className="flex flex-col gap-1 text-sm items-start">
          <div>
            <span>Subtotal</span>
            <span>$1,000</span>
          </div>
          <p>Taxes and shipping calculate at checkout</p>
        </div>
      </div>
    </div>
  );
};

export default CartSlice;
