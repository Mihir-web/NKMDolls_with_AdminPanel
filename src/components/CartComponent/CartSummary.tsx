import React, { useState } from "react";
import CartSummaryIcons from "./CartSummaryIcons";
import { useNavigate } from "react-router-dom";

interface CartSummaryProps {
  totalPrice: number;
  discount: number;
  onApplyCoupon: (coupon: string) => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  totalPrice,
  discount,
  onApplyCoupon,
}) => {
  const [coupon, setCoupon] = useState("");
  const navigate = useNavigate();

  // Check if user is logged in by verifying token and username
  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    return token && username; // Ensure both token and username exist
  };

  const handlePlaceOrder = () => {
    if (!isLoggedIn()) {
      // Store redirect path and prompt for login
      localStorage.setItem("redirectAfterLogin", "/checkout");
      alert("You need to log in to place your order.");
      navigate("/login");
    } else {
      navigate("/checkout");
    }
  };

  const handleCouponApply = () => {
    onApplyCoupon(coupon);
  };

  return (
    <div className="p-4 bg-white rounded-md flex flex-col">
      <h3 className="text-lg font-semibold mb-4">Applicable Coupons</h3>
      <p className="text-sm mb-4">
        Promotional coupons can be applied during payment
      </p>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Add Promo Code"
          className="p-2 border border-gray-300 rounded-md flex-grow"
        />
        <button
          onClick={handleCouponApply}
          className="bg-teal-500 ml-2 text-white px-6 py-2 rounded-tl-xl rounded-tr rounded-bl rounded-br-xl hover:bg-teal-600"
        >
          Apply
        </button>
      </div>
      <CartSummaryIcons />
      <div className="text-lg font-semibold flex flex-col">
        <div className="flex justify-between pb-6">Price Details</div>
        <div className="flex justify-between pb-6">
          <span>Total: </span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-b-[1px] border-b-[#FFD4C0] pb-6">
          <span>Discount: </span>
          <span>-${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-b-[1px] border-b-[#FFD4C0] pb-6">
          <span>Coupon Discount: </span>
          <span>-${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-b-[1px] border-b-[#FFD4C0] pb-6">
          <span>Convenience Fee (Know More)</span>
          <span>Free</span>
        </div>
        <div className="mt-2 flex justify-between pb-6">
          <span>Final Total: </span>
          <span>${(totalPrice - discount).toFixed(2)}</span>
        </div>
      </div>
      <button
        onClick={handlePlaceOrder}
        className="bg-teal-500 w-full text-white px-6 py-2 rounded-tl-xl rounded-tr rounded-bl rounded-br-xl hover:bg-teal-600"
      >
        Place Order
      </button>
    </div>
  );
};

export default CartSummary;
