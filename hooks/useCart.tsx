import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { product } from "@/utils/product";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-hot-toast";

type CartContextType = {
  cartTotal: number;
  cartTotalAmount: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  handleRemoveProductFromCart: (product: CartProductType) => void;
  handleCartQtyIncrease: (product: CartProductType) => void;
  handleCartQtyDecrease: (product: CartProductType) => void;
  handleClearCart: () => void;
  paymentIntent: string | null;
  handleSetPaymentIntent: (val:string | null) => void
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotal, setCartTotal] = useState(0);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>( null );
  const [paymentIntent, setPaymentIntent] = useState<string | null > (null)

  console.log("qty", cartTotal);
  console.log("amount", cartTotalAmount);

  useEffect(() => {
    const cartItems: any = localStorage.getItem("iphoneShopItems");
    const cProducts: CartProductType[] | null = JSON.parse(cartItems);
    const phoneShopPaymentIntent: any = localStorage.getItem("phoneShopPaymentIntent") //luu tru tam thoi baor maatj trong local storeage
    const paymentIntent: string | null = JSON.parse(phoneShopPaymentIntent) //

    setCartProducts(cProducts);
    setPaymentIntent(paymentIntent)
  }, []);

  useEffect(() => {
    const getTotals = () => {
      if (cartProducts) {
        const { total, qty } = cartProducts?.reduce(
          (acc, item) => {
            const itemTotal = item.price * item.quantity;

            acc.total += itemTotal;
            acc.qty += item.quantity;

            return acc;
          },
          {
            total: 0,
            qty: 0,
          }
        );
        setCartTotal(qty);
        setCartTotalAmount(total);
      }
    };
    getTotals();
  }, [cartProducts]);

  const handleAddProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;

      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }

      toast.success("Product added to cart");
      localStorage.setItem("iphoneShopItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const handleRemoveProductFromCart = useCallback(
    (product: CartProductType) => {
      if (cartProducts) {
        const filteredProducts = cartProducts.filter((item) => {
          return item.id !== product.id;
        });

        setCartProducts(filteredProducts);
        toast.success("Product remove to cart");
        localStorage.setItem(
          "iphoneShopItems",
          JSON.stringify(filteredProducts)
        );
      }
    },
    [cartProducts]
  );

  // nut an tang so luong mua item trong shopping cart

  const handleCartQtyIncrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;
      if (product.quantity === 99) {
        return toast.error("Ooops! Error");
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];

        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = ++updatedCart[existingIndex]
            .quantity;
        }
        setCartProducts(updatedCart);
        localStorage.setItem("iphoneShopItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  // nut an giam so luong item mua trong shopping cart

  const handleCartQtyDecrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;
      if (product.quantity === 1) {
        return toast.error("Ooops! Error");
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];

        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );
        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = --updatedCart[existingIndex]
            .quantity;
        }
        setCartProducts(updatedCart);
        localStorage.setItem("iphoneShopItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  //xoa toan bo item trong shopping cart

  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotal(0);
    localStorage.setItem("iphoneShopItems", JSON.stringify(null));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProducts]);


  // bam nut payment
  const handleSetPaymentIntent = useCallback(
    (val: string | null ) => {
      setPaymentIntent(val)
      localStorage.setItem("phoneShopPaymentIntent", JSON.stringify(val))
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [paymentIntent]
  )

  const value = {
    cartTotal,
    cartTotalAmount,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleClearCart,
    paymentIntent,
    handleSetPaymentIntent,
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
