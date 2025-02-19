import React from "react";
import Cart from "../components/CartComponent/Cart";
import Youmayalsolike from "../components/Youmayalsolike";

const CartPage: React.FC = () => {
  return (
    <div>
      <Cart />
      <Youmayalsolike />
    </div>
  );
};

export default CartPage;
