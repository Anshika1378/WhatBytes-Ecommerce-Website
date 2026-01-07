"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

type Props = {
  product: any;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 hover:shadow-lg">
      {/* ONLY this part navigates */}
      <Link href={`/product/${product.id}`}>
        <div className="cursor-pointer">
          <img
            src={product.image}
            alt={product.title}
            className="h-40 mx-auto object-contain"
          />

          <h2 className="mt-3 font-semibold text-sm">
            {product.title}
          </h2>

          <p className="text-blue-600 font-bold">
            ₹{product.price}
          </p>
        </div>
      </Link>

      {/* Button OUTSIDE Link */}
      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-blue-600 text-white py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
