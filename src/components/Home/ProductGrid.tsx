"use client"
import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, Heart } from "lucide-react";

// Images from the public folder
const img1 = "/images/kiwi1.png";
const img2 = "/images/broc1.png";
const img3 = "/images/grapes.jpg";
const img4 = "/images/banana.jpg";
const step = "/images/step.png";

const products = [
  { id: 1, name: "Kiwi", price: 35, image: img1 },
  { id: 2, name: "Broccoli", price: 110, image: img2 },
  { id: 3, name: "BlackGrapes", price: 45, image: img3 },
  { id: 4, name: "Banana", price: 25, image: img4 },
  { id: 5, name: "Kiwi", price: 35, image: img1 },
  { id: 6, name: "Broccoli", price: 110, image: img2 },
  { id: 7, name: "BlackGrapes", price: 45, image: img3 },
  { id: 8, name: "Banana", price: 25, image: img4 },
  { id: 9, name: "Kiwi", price: 35, image: img1 },
  { id: 10, name: "Broccoli", price: 110, image: img2 },
  { id: 11, name: "BlackGrapes", price: 45, image: img3 },
  { id: 12, name: "Banana", price: 25, image: img4 },
  { id: 13, name: "Kiwi", price: 35, image: img1 },
  { id: 14, name: "Broccoli", price: 110, image: img2 },
  { id: 15, name: "BlackGrapes", price: 45, image: img3 },
  { id: 16, name: "Banana", price: 25, image: img4 },
];

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div
      style={{ border: "1px solid rgb(34 197 93)" }}
      className="bg-white rounded-2xl p-4 hover:shadow-lg transition relative w-full max-w-[300px] mx-auto">

      {/* Heart Button for Favorite */}
      <button
  className="absolute top-2 right-2 text-gray-400 hover:text-green-500"
  onClick={() => setIsFavorite(!isFavorite)}
>
  <Heart className={`w-5 h-5 ${isFavorite ? "fill-green-500" : "fill-none"}`} />
</button>

      {/* Product Image */}
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="w-full h-[100px]  object-cover rounded-md"
      />

      {/* Product Details */}
      <h2 className="text-sm font-semibold mt-2 text-center truncate w-full font-poppins ">{product.name}</h2>
      <p className="text-green-600 font-poppins font-bold mt-1">
        ₹{product.price}
      </p>
      <button className="mt-2 bg-green-500 text-white rounded-xl hover:bg-green-500 w-full p-2">
        Add
      </button>    
    </div>
  );
};

export const ProductGrid = () => {
  return (
    <div className="p-4 bg-transparent flex flex-col items-center">
      {/* Header Section */}
      <div className="flex justify-between text-center whitespace-nowrap w-[80%] mb-20  ">
        <h1 className="text-3xl font-bold text-center text-[#11501D]">
          Farm Fresh
        </h1>
        <div className="w-full flex items-center justify-end pr-[2%] gap-2">
          <button className="w-auto bg-gradient-to-t from-[#2A5847] to-[#41780C] text-white max-h-[30px] text-[12px] border-[#41780C] rounded-full px-4 py-1 hover:shadow-md">
            All
          </button>
          <button className="w-auto text-[#11501D] max-h-[30px] text-[12px] border-[#41780C] rounded-full px-4 py-1 hover:shadow-md">
            Exotic Vegetable
          </button>
          <button className="w-auto text-[#11501D] max-h-[30px] text-[12px] border-[#41780C] rounded-full px-4 py-1 hover:shadow-md">
            Exotic Fruit
          </button>
          <ChevronRight className="text-[#11501D] w-3 h-3" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[80%] px-2">

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
