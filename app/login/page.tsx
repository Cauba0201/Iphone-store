import React from "react";
import Container from "../components/Container";
import FormWrap from "../components/product/FormWrap";
import LoginForm from "./LoginForm";
import { getCurrentUser } from "@/actions/getCurrentUser";

const login = async () => {
  const currentUser = await getCurrentUser()
  return (
    <Container>
      <FormWrap>
        <LoginForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  );
};

export default login;
