"use client";

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CheckoutClient = () => {
  const { cartProducts, paymentIntent, handleSetPaymentIntent } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter()

  useEffect(() => {
    if (cartProducts) {
      setLoading(true);
      setError(false);

      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartProducts,
          payment_intent_id: paymentIntent,
        }),
      }).then((res) => {
        setLoading(false)
        if(res.status === 401){
            return router.push('/login')
        }
        return res.json()
      })
    }
  }, [cartProducts, paymentIntent]);
  return <div>Checkout</div>;
};

export default CheckoutClient;
