/* eslint-disable jsx-a11y/alt-text */
"use client";

import {
  CartProductType,
  SelectedImgType,
} from "@/app/product/[productId]/ProductDetails";
import Image from "next/image";
import React from "react";

interface ProductImageProps {
  cartProduct: CartProductType;
  product: any;
  handleColorSelect: (value: SelectedImgType) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({
  cartProduct,
  product,
  handleColorSelect,
}) => {
  return (
    <div className="grid-cols-6 grid gap-2 h-full max-h-[500pc] min-h-[300px] sm:min-[400px]:">
      <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        {product.images.map((image: SelectedImgType) => {
          return (
            <div
              key={image.color}
              onClick={() => {
                handleColorSelect(image);
              }}
              className={`relative w-[80px] aspect-square rounded border-gray-400 ${
                cartProduct.selectedImg.color === image.color
                  ? "border-[1.5px]"
                  : "border-none"
              }`}
            >
              <Image
                fill
                src={image.image}
                alt={image.color}
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image
          fill
          src={cartProduct.selectedImg.image}
          className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
          alt={cartProduct.name}
        />
      </div>
    </div>
  );
};

export default ProductImage;
