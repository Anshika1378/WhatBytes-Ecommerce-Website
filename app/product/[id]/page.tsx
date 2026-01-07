"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { useCart } from "@/context/CartContext";
import { useParams } from "next/navigation";
import Footer from "@/components/Footer";

export default function ProductDetail() {
  const { id } = useParams(); // ✅ correct way
  const [product, setProduct] = useState<any>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      const res = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );
      const data = await res.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <>
      <Header />
       <main className="flex-1 mt-20">
        
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 mx-auto object-contain"
        />

        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>

          <p className="text-xl text-blue-600 font-semibold mt-2">
            ₹{product.price}
          </p>

          <p className="mt-4 text-gray-600">
            {product.description}
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Category: {product.category}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
       </main>
     <div className="mb-0 mt-11">
       <Footer />
     </div>
    </>
  );
}
