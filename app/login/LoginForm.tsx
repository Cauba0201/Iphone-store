"use client";

import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { AiOutlineGoogle } from "react-icons/ai";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { SafeUser } from "@/types";

interface LoginFormProps {
  currentUser: SafeUser | null;
}

const LoginForm: React.FC<LoginFormProps> = ({currentUser}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  useEffect(() => {
    if(currentUser){
      router.push('/cart')
      router.refresh()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Login successful");
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  if(currentUser){
    return <p className="text-center">Logged in. Redicecting...</p>
  }

  return (
    <>
      <Heading title="Sign in to An'Store" />
      <Button
        label="Continue with Google"
        outline
        icon={AiOutlineGoogle}
        onClick={() => {signIn('google')}}
      />
      <hr className="bg-slate-300 w-full h-px" />

      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button
        label={isLoading ? "Loading" : "Login"}
        onClick={handleSubmit(onsubmit)}
      />
      <p className="text-sm">
        Do not have an account?
        <Link className="underline" href={"/register"}>
          Sign up
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
