import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { createContext, useContext, useState } from "react";

type CartContextType = {
  cartTotal: number;
  cartProduct: CartProductType[] |null
  handleAddProductToCart: (product: CartProductType) => void
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotal, setCartTotal] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null)

  const value = {
    cartTotal,
  };
  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
