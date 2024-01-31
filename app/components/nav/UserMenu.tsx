"use client";

import React, { useCallback, useState } from "react";
import Avatar from "../product/Avatar";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";
import { SafeUser } from "@/types";

interface UserMenuProps {
  currentUser: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="relative z-30">
        <div
          onClick={toggleOpen}
          className="
          p-2 
          border-[1px] 
          border-slate-400 
          flex 
          flex-row 
          items-center 
          gap-1 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition 
          text-slate-700"
        >
          <Avatar />
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <div
            className=" 
          absolute 
          rounded-md 
          shadow-md 
          w-[170px] 
          bg-white 
          overflow-hidden 
          right-0 
          top-12 
          text-sm 
          flex 
          flex-col 
          cursor-pointer"
          >
            {currentUser ? (
              <div>
                <Link href="/orders">
                  <MenuItem onclick={toggleOpen}>Your Orders</MenuItem>
                </Link>
                <Link href="/admin">
                  <MenuItem onclick={toggleOpen}>Admin Dashboard</MenuItem>
                </Link>
                <hr />
                <MenuItem
                  onclick={() => {
                    toggleOpen();
                    signOut();
                  }}
                >
                  Logout
                </MenuItem>
              </div>
            ) : (
              <div>
                <Link href="/login">
                  <MenuItem onclick={toggleOpen}>Login</MenuItem>
                </Link>
                <Link href="/register">
                  <MenuItem onclick={toggleOpen}>Register</MenuItem>
                </Link>
              </div>
            )}
          </div> // current User neu da login thi hien your oder vaf admin page ko thi hien login vaf sign up
        )}
      </div>
      {isOpen ? <BackDrop onclick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;