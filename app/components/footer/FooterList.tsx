import React from "react";
interface FooterList{
    children: React.ReactNode
}

const FooterList: React.FC<FooterList> = ({children}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:h-1/6 mb-6 flex flex-col gap-2">
      {children}
    </div>
  );
};

export default FooterList;
