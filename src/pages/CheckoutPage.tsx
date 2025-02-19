import React, { useState, useEffect } from "react";
import Image from "../assets/image 272.png";

const CheckoutPage = () => {
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState(0);
  const [selectedDelivery, setSelectedDelivery] = useState("Monday");
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const [isAddressExpanded, setIsAddressExpanded] = useState(true);
  const [isPaymentExpanded, setIsPaymentExpanded] = useState(false);
  const [isReviewExpanded, setIsReviewExpanded] = useState(false);

  const [addresses, setAddresses] = useState([
    {
      name: "Katlynn Reilly",
      address: "9688 Carpenter Ave. Vermilion, AB T9X 2L9",
      phone: "(616) 456-6664",
    },
    {
      name: "Rossie Powlowski",
      address: "9435 Tailwater St. Degelis, QC G5T 4N7",
      phone: "(616) 456-6664",
    },
  ]);

  const [paymentMethods, setPaymentMethods] = useState([
    {
      name: "Katlynn Reilly",
      cardNumber: "0000 0000 0000 0000",
      expiryDate: "03 / 2028",
      cvv: "***",
    },
    {
      name: "Rossie Powlowski",
      cardNumber: "0000 0000 0000 0000",
      expiryDate: "03 / 2028",
      cvv: "***",
    },
  ]);

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const totalPrice = cart.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const addNewAddress = (newAddress) => {
    const updatedAddresses = [...addresses, newAddress];
    setAddresses(updatedAddresses);
    setSelectedAddress(updatedAddresses.length - 1); // Automatically select the new address
    setIsAddressModalOpen(false);
  };

  const addNewPaymentMethod = (newPaymentMethod) => {
    const updatedPayments = [...paymentMethods, newPaymentMethod];
    setPaymentMethods(updatedPayments);
    setSelectedPayment(updatedPayments.length - 1); // Automatically select the new payment method
    setIsPaymentModalOpen(false);
  };

  const handlePlaceOrder = () => {
    if (selectedAddress !== null && selectedPayment !== null && selectedDelivery) {
      setIsOrderConfirmed(true);
    } else {
      alert("Please complete all selections before placing your order.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow p-6 bg-gray-100">
        <div className="w-4/5 max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
          {/* Address Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-2/3">
            <div>
              <h3
                className="text-lg font-semibold mb-4 cursor-pointer flex items-center justify-between"
                onClick={() => setIsAddressExpanded(!isAddressExpanded)}
              >
                1. Select A Delivery Address
                <span>{isAddressExpanded ? "-" : "+"}</span>
              </h3>
              {isAddressExpanded && (
                <div>
                  {addresses.map((address, index) => (
                    <div
                      key={index}
                      className={`border rounded-lg p-4 mb-2 flex items-start justify-between cursor-pointer ${
                        selectedAddress === index
                          ? "border-teal-500 bg-teal-100"
                          : "border-gray-300"
                      }`}
                      onClick={() => setSelectedAddress(index)}
                    >
                      <div className="flex items-start">
                        <input
                          type="radio"
                          className="mt-1 mr-3"
                          checked={selectedAddress === index}
                          onChange={() => setSelectedAddress(index)}
                        />
                        <div>
                          <p className="font-semibold">
                            {address.name} - {address.address}
                          </p>
                          <p className="text-gray-600">Phone: {address.phone}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="flex space-x-4 mt-4">
                    <button className="rounded-tl-xl rounded-tr rounded-bl rounded-br-xl bg-teal-500 text-white px-6 py-2">
                      Use This Address
                    </button>
                    <button
                      className="rounded-tl-xl rounded-tr rounded-bl rounded-br-xl border border-teal-500 text-teal-500 px-6 py-2"
                      onClick={() => setIsAddressModalOpen(true)}
                    >
                      Add New Address
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Payment Method Section */}
            <div className="mt-6">
              <h3
                className="text-lg font-semibold mb-4 cursor-pointer flex items-center justify-between"
                onClick={() => setIsPaymentExpanded(!isPaymentExpanded)}
              >
                2. Payment Method
                <span>{isPaymentExpanded ? "-" : "+"}</span>
              </h3>
              {isPaymentExpanded && (
                <div>
                  {paymentMethods.map((payment, index) => (
                    <div
                      key={index}
                      className={`border rounded-lg p-4 mb-2 flex items-start justify-between cursor-pointer ${
                        selectedPayment === index
                          ? "border-teal-500 bg-teal-100"
                          : "border-gray-300"
                      }`}
                      onClick={() => setSelectedPayment(index)}
                    >
                      <div className="flex items-start">
                        <input
                          type="radio"
                          className="mt-1 mr-3"
                          checked={selectedPayment === index}
                          onChange={() => setSelectedPayment(index)}
                        />
                        <div>
                          <p className="font-semibold">{payment.name}</p>
                          <p className="text-gray-600">
                            Card Number - {payment.cardNumber}
                          </p>
                          <p className="text-gray-600">
                            Expiry Date - {payment.expiryDate}
                          </p>
                          <p className="text-gray-600">CVV - {payment.cvv}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="flex space-x-4 mt-4">
                    <button className="rounded-tl-xl rounded-tr rounded-bl rounded-br-xl bg-teal-500 text-white px-6 py-2">
                      Use This Payment Method
                    </button>
                    <button
                      className="rounded-tl-xl rounded-tr rounded-bl rounded-br-xl border border-teal-500 text-teal-500 px-6 py-2"
                      onClick={() => setIsPaymentModalOpen(true)}
                    >
                      Add New Payment Method
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Review Items Section */}
            <div className="mt-6">
              <h3
                className="text-lg font-semibold mb-4 cursor-pointer flex items-center justify-between"
                onClick={() => setIsReviewExpanded(!isReviewExpanded)}
              >
                3. Review Items and Delivery
                <span>{isReviewExpanded ? "-" : "+"}</span>
              </h3>
              {isReviewExpanded && (
                <div>
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 mb-4">
                      <img
                        src={item.imageUrl}
                        alt="Product"
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                        <p className="text-teal-600 font-semibold">
                          ${(item.discountedPrice * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-gray-400 line-through">
                          ${item.originalPrice * item.quantity}
                          <span className="text-red-500"> ({item.discount}% Off)</span>
                        </p>
                      </div>
                    </div>
                  ))}

                  <div>
                    <h4 className="font-semibold mb-2">
                      Choose A Delivery Option
                    </h4>
                    <div className="flex flex-col gap-2">
                      <div
                        className={`p-3 border rounded-lg cursor-pointer ${
                          selectedDelivery === "Monday"
                            ? "border-teal-500 bg-teal-100"
                            : "border-gray-300"
                        }`}
                        onClick={() => setSelectedDelivery("Monday")}
                      >
                        <p>Monday - PRIORITY Delivery (Charges may apply)</p>
                      </div>
                      <div
                        className={`p-3 border rounded-lg cursor-pointer ${
                          selectedDelivery === "Wednesday"
                            ? "border-teal-500 bg-teal-100"
                            : "border-gray-300"
                        }`}
                        onClick={() => setSelectedDelivery("Wednesday")}
                      >
                        <p>Wednesday - FREE Standard Delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Price Details Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/3">
            <h3 className="text-lg font-semibold mb-2">
              Price Details ({totalQuantity} {totalQuantity > 1 ? "Items" : "Item"})
            </h3>
            <div className="flex justify-between mb-2">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
              className="rounded-tl-xl rounded-tr rounded-bl rounded-br-xl w-full bg-teal-500 text-white py-2 mt-6"
              onClick={handlePlaceOrder}
            >
              Place Order and PAY
            </button>
          </div>
        </div>
      </main>

      {/* Add Address Modal */}
      {isAddressModalOpen && (
        <AddAddressModal
          onClose={() => setIsAddressModalOpen(false)}
          onSave={addNewAddress}
        />
      )}

      {/* Add Payment Modal */}
      {isPaymentModalOpen && (
        <AddPaymentModal
          onClose={() => setIsPaymentModalOpen(false)}
          onSave={addNewPaymentMethod}
        />
      )}

      {/* Order Confirmation */}
      {isOrderConfirmed && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
            <p className="text-gray-600">
              Thank you for your purchase. Your order has been placed successfully!
            </p>
            <button
              className="rounded-tl-xl rounded-tr rounded-bl rounded-br-xl bg-teal-500 text-white px-6 py-2 mt-4"
              onClick={() => setIsOrderConfirmed(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Address Modal
const AddAddressModal = ({ onClose, onSave }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAddress = { name, address, phone };
    onSave(newAddress);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Add New Address</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="rounded-tl-xl rounded-tr rounded-bl rounded-br-xl w-full bg-teal-500 text-white py-2"
          >
            Save Address
          </button>
        </form>
      </div>
    </div>
  );
};

// Payment Modal
const AddPaymentModal = ({ onClose, onSave }) => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedCardNumber = cardNumber.match(/.{1,4}/g)?.join(" ") || "";
    const newPaymentMethod = {
      name,
      cardNumber: formattedCardNumber,
      expiryDate,
      cvv,
    };
    onSave(newPaymentMethod);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Add New Payment Method</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name on Card</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, ""))}
              className="w-full p-2 border border-gray-300 rounded"
              maxLength="16"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Expiry Date</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="MM / YYYY"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              maxLength="3"
              required
            />
          </div>
          <button
            type="submit"
            className="rounded-tl-xl rounded-tr rounded-bl rounded-br-xl w-full bg-teal-500 text-white py-2"
          >
            Save Payment Method
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;