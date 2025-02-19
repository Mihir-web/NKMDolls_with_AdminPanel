import React from "react";
import truck from "../../assets/icons/truck.png";
import union from "../../assets/icons/Union.png";
import wallet from "../../assets/icons/Wallet.png";

const CartSummaryIcons: React.FC = () => {
  return (
    <div className="flex justify-evenly mt-6 mb-6 border-y-[1px] border-y-[#FFD4C0] pt-4 pb-4">
      {/* Free Shipping & Return */}
      <div className="flex flex-col items-center ">
        <img src={truck} alt="Free Shipping" className="w-8 h-8" />
        <p className="text-sm font-semibold text-gray-600 mt-2 mb-2">
          FREE SHIPPING
        </p>
        <p className="text-sm text-gray-600  mb-2">& RETURN</p>
      </div>

      {/* Easy Return & Exchange */}
      <div className="flex flex-col items-center border-x-[1px] border-x-[#FFD4C0] px-6">
        <img src={union} alt="Easy Return" className="w-8 h-8" />
        <p className="text-sm font-semibold text-gray-600 mt-2 mb-2">
          Easy Return
        </p>
        <p className="text-sm text-gray-600  mb-2">& Exchange</p>
      </div>

      {/* Secure Payment */}
      <div className="flex flex-col items-center">
        <img src={wallet} alt="Secure Payment" className="w-8 h-8" />
        <p className="text-sm font-semibold text-gray-600 mt-2  mb-2">Secure</p>
        <p className="text-sm text-gray-600 mb-2">Payment</p>
      </div>
    </div>
  );
};

export default CartSummaryIcons;
