"use client";

import { useState } from "react";
import { Heart, ShoppingBag, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const products = [
  { id: 1, name: "Kiwi", price: "₹35.00", image: "/kiwi.png" },
  { id: 2, name: "Curry Leaves", price: "₹10.00", image: "/curry_leaves.png" },
  { id: 3, name: "Black Grapes", price: "₹45.00", image: "/black_grapes.png" },
  { id: 4, name: "Broccoli", price: "₹110.00", image: "/broccoli.png" },
];

export default function FavouritePage() {
  const [activeTab, setActiveTab] = useState("favourite");
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-[#F9F6F0]">
      {/* Sidebar */}
      <div className="w-64 bg-[#D9FCB4] p-6 hidden md:block">
        <div className="mb-6 font-bold">Wallet Points: 0</div>
        <ul className="space-y-4">
          <li className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer ${activeTab === "favourite" ? "bg-green-500 text-white" : "hover:bg-green-200"}`} onClick={() => setActiveTab("favourite")}>
            <Heart size={20} /> Favourite
          </li>
          <li className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-green-200" onClick={() => router.push("/orders")}> 
            <ShoppingBag size={20} /> My Order
          </li>
          <li className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-green-200" onClick={() => router.push("/profile")}> 
            <User size={20} /> Profile
          </li>
          <li className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-green-200"> 
            <LogOut size={20} /> Log out
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-6">Favourite</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="p-4 shadow-md">
              <CardContent className="flex flex-col items-center">
                <img src={product.image} alt={product.name} className="h-32 w-32 object-cover" />
                <h3 className="mt-2 font-semibold">{product.name}</h3>
                <p className="text-lg font-bold">{product.price}</p>
                <Button className="mt-2 bg-green-500 hover:bg-green-600">Add</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
