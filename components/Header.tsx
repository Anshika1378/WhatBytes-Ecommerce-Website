"use client";

import { AiFillShopping } from "react-icons/ai"; 
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cart } = useCart();

  // Calculate total items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-800 text-white">
      <Link href="/" className="font-bold text-xl">
        Logo
      </Link>

      <input
        type="text"
        placeholder="Search products..."
        className="px-4 py-2 rounded text-black w-1/3"
      />

      <Link href="/cart" className="relative">
        <AiFillShopping className="text-2xl" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1">
          {totalItems}
        </span>
      </Link>
    </header>
  );
}
