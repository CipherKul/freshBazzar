"use client";

import { useState } from "react";
import { Calendar, CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function MyOrders() {
  const [orders, setOrders] = useState([
    { id: 1234, date: "11 March 2023", status: "Delivered", price: "₹62" },
    { id: 1235, date: "11 March 2023", status: "Delivered", price: "₹62" },
    { id: 1236, date: "11 March 2023", status: "Delivered", price: "₹62" },
  ]);

  return (
    <div className="flex min-h-screen bg-[#F9F6F0]">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-56 bg-green-100 p-4 md:relative">
        <ul className="mt-4 font-poppins">
          <li className="py-2 cursor-pointer hover:bg-[#00B207] hover:text-white rounded-md">❤️ Favourite</li>
          <li className="py-2 cursor-pointer bg-[#00B207] rounded-md text-white">🛍 My Order</li>
          <li className="py-2 cursor-pointer hover:bg-[#00B207] hover:text-white rounded-md">👤 Profile</li>
          <li className="py-2 cursor-pointer hover:bg-[#00B207] hover:text-white rounded-md">🚪 Log Out</li>
        </ul>
      </div>

      {/* Orders Section */}
      <div className="flex-1 p-8 font-poppins">
        <h3 className="text-3xl font-bold">My Orders</h3>
        <div className="mt-4 flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" /> {format(new Date(), "dd-MM-yyyy")}
          </Button>
          <span>To</span>
          <Button variant="outline" className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" /> {format(new Date(), "dd-MM-yyyy")}
          </Button>
        </div>

        <div className="mt-6 space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="p-4 border border-green-600 rounded-lg">
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Order: #{order.id}</span>
                <span className="text-sm">Payment: {order.date}</span>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600"></div>
                  <div>
                    <p className="font-medium">Vegetable name</p>
                    <p className="text-sm text-gray-600">Category: 500g | Qty: 1</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">{order.status}</p>
                  <p className="font-semibold">{order.price}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
