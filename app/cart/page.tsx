"use client";

import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";

export default function CartPage() {
  const { cart, removeFromCart, decreaseQuantity, addToCart } = useCart();

  return (
    <>
      <Header />

      <div className="p-6">
        <h1 className="text-2xl font-bold">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="mt-4">Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex gap-4 mt-4 border p-4 items-center">
              <img src={item.image} className="h-20" />
              <div className="flex-1">
                <p>{item.title}</p>
                <p>Qty: {item.quantity}</p>
                <p>₹{item.price}</p>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => addToCart(item)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  -
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
