import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const Cart: React.FC = () => {
  interface CartItem {
    id: string;
    name: string;
    description: string;
    originalPrice: number;
    discountedPrice: number;
    discount: number;
    imageUrl: string;
    quantity: number;
  }

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]); // Tracks selected items
  const [discount, setDiscount] = useState(0);

  // Load cart items from local storage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  // Sync cart items with local storage
  const updateLocalStorage = (items: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(items));
    setCartItems(items);
  };

  // Handle selection change for checkboxes
  const handleSelectionChange = (id: string) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter((itemId) => itemId !== id); // Deselect if already selected
      }
      return [...prevSelectedItems, id]; // Add to selected items if not selected
    });
  };

  // Update quantity in both state and local storage
  const handleQuantityChange = (id: string, quantity: number) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    updateLocalStorage(updatedItems);
  };

  // Remove item from cart in both state and local storage
  const handleRemoveItem = (id: string) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    updateLocalStorage(updatedItems);
  };

  const handleApplyCoupon = (coupon: string) => {
    if (coupon === "SAVE10") {
      setDiscount(10); // Apply $10 discount
    } else {
      setDiscount(0); // Reset if coupon is invalid
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  // Handle bulk delete
  const handleBulkDelete = () => {
    const updatedItems = cartItems.filter(
      (item) => !selectedItems.includes(item.id)
    );
    updateLocalStorage(updatedItems);
    setSelectedItems([]); // Clear selected items after deletion
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 m-6 p-6 rounded-lg">
      {/* Cart Items Section */}
      <div className="w-full lg:w-[60%] border-r-[1px] border-r-[#FFD4C0] pr-10">
        {selectedItems.length > 0 && (
          <div className="flex justify-between items-center p-4 rounded-md mb-4">
            <div>
              <span className="text-lg font-semibold">
                {selectedItems.length} Items Selected
              </span>
            </div>
            <button
              onClick={handleBulkDelete}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        )}

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              isSelected={selectedItems.includes(item.id)}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemoveItem}
              onSelectionChange={handleSelectionChange}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        )}
      </div>

      {/* Cart Summary Section */}
      <div className="w-full lg:w-[40%] bg-white p-6 rounded-lg">
        <CartSummary
          totalPrice={totalPrice}
          discount={discount}
          onApplyCoupon={handleApplyCoupon}
        />
      </div>
    </div>
  );
};

export default Cart;
