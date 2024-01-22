import { Container } from "@mui/material";
import React from "react";
import CartSlice from "./CartSlice";

const Cart = () => {
  return (
    <div className="pt-8">
      <Container>
        <CartSlice />
      </Container>
    </div>
  );
};

export default Cart;
