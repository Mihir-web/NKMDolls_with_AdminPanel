import React from "react";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    originalPrice: number;
    discountedPrice: number;
    discount: number; // percentage discount (40% off, etc.)
    quantity: number;
    imageUrl: string;
  };
  isSelected: boolean;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  onSelectionChange: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  isSelected,
  onQuantityChange,
  onSelectionChange,
}) => {
  const handleIncrement = () => {
    onQuantityChange(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="flex items-start p-4 bg-white rounded-lg mb-4">
      {/* Image Section */}
      <div className="lg:w-[40%] relative" style={{ width: "312px" }}>
        <div
          style={{
            backgroundImage: `url(${item.imageUrl})`,
            width: "100%",
            height: "312px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "0.5rem",
          }}
        ></div>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelectionChange(item.id)}
          className="absolute top-2 left-2 accent-teal-500 w-5 h-5"
        />
      </div>

      <div className="lg:w-[60%] ml-6 flex-grow">
        <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-600 mt-2">{item.description}</p>

        {/* Quantity Section */}
        <div className="mt-4">
          <p className="m-2">Quantity</p>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDecrement}
              className="w-10 h-10 flex items-center rounded-xl justify-center shadow text-teal-500"
            >
              -
            </button>
            <span className="text-lg font-semibold">{item.quantity}</span>
            <button
              onClick={handleIncrement}
              className="w-10 h-10 flex items-center rounded-xl justify-center shadow text-teal-500"
            >
              +
            </button>
          </div>
        </div>

        {/* Pricing and Discount Section */}
        <div className="mt-4">
          <p className="text-green-600 text-lg font-semibold m-2 text-teal-500">
            ${item.discountedPrice.toFixed(2)}
          </p>
          <p className="text-sm line-through text-gray-500 m-1">
            ${item.originalPrice.toFixed(2)}
          </p>
          <p className="text-sm text-red-600 font-semibold m-1">
            ({item.discount}% OFF)
          </p>
        </div>
        <p className="text-sm text-gray-500 mt-1">Inclusive of all taxes</p>
      </div>
    </div>
  );
};

export default CartItem;
