"use client";

import Filters from "@/components/Filters";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6">Loading...</p>;

  return (
   <>
   <Header />
    <div className="flex">
      <Filters />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
         <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
    <Footer />
  </>
  );
}
