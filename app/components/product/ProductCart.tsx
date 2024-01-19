import Image from "next/image";
import React from "react";
interface ProductCartProps {
  data: any;
}

const ProductCart: React.FC<ProductCartProps> = ({ data }) => {
  return (
    <div className="border-[1.2px] border-slate-200 bg-slate-50 rounded-sm transition hover:scale-105 text-center cursor-pointer text-sm">
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            fill
            src={data.images[0].image}
            alt={data.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductCart;
