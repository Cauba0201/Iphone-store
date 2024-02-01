import Container from "@/app/components/Container";
import FormWrap from "@/app/components/product/FormWrap";
import React from "react";
import CheckoutClient from "./CheckoutClient";

const Checkout = () => {
  return <div>
    <Container>
        <FormWrap>
            <CheckoutClient/>
        </FormWrap>
    </Container>
  </div>;
};

export default Checkout;
