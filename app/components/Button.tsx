"use client";

import { Icon } from "@mui/material";
import React from "react";
import { IconType } from "react-icons";

interface ButtonTypeProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  custom?: string;
  icon?: IconType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonTypeProps> = ({
  label,
  disabled,
  outline,
  small,
  custom,
  icon: Icon,
  onClick,
}) => {
  return (
    <button
    onClick={onClick}
      disabled={disabled}
      className={` disabled: cursor-pointer disabled:opacity-70 rounded-md hover:opacity-80 w-full flex items-center justify-center gap-2 ${
        outline ? "bg-white" : "bg-slate-700"
      }
      ${outline ? "text-slate-700" : "text-white"}
      ${small ? "text-sm font-light" : "text-md font-semibold"}
      ${small ? "py-1 px-2 borde-[1px]" : "py-3 px-4 border-2"}
      ${custom ? custom : ""}`}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
