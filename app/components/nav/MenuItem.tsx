import React from "react";

interface MenuItemProps {
  children: React.ReactNode;
  onclick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({children, onclick}) => {
  return <div className="px-4 py-3 hover:bg-neutral-100 transition" onClick={onclick}>{children}</div>;
};

export default MenuItem;
