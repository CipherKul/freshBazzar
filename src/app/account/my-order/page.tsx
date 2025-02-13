"use client";
import { useState } from "react";
import { Menu, Calendar as CalendarIcon } from 'lucide-react';
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Removed the problematic import for Calendar
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar"

// Sample order data - you can replace this with your actual data
const orders = [
  {
    orderId: "#1234",
    paymentDate: "11 march 2023",
    items: [
      {
        name: "Vegitable name",
        category: "Category",
        quantity: 1,
        weight: "500g",
        status: "Delivered",
        price: 62
      }
    ]
  },
  // Add more orders as needed
];

export default function MyOrder() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  return (
    <div className="flex min-h-screen bg-[#F9F6F0]">
      {/* Left Sidebar */}
      <div className="w-64 bg-[#E6F2E7] min-h-screen p-6 hidden md:block ml-24">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span>💰</span>
            <span>Wallet Points: 0</span>
          </div>
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:text-green-600"
            onClick={() => router.push("/account/favourite")}
          >
            <span>❤️</span>
            <span>Favourite</span>
          </div>
          <div className="flex items-center space-x-2 bg-green-500 text-white p-2 rounded-md">
            <span>🛍</span>
            <span>My Order</span>
          </div>
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:text-green-600"
            onClick={() => router.push("/account/profile")}
          >
            <span>👤</span>
            <span>Profile</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-green-600">
            <span>🚪</span>
            <span>Log Out</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 md:hidden bg-green-500 rounded-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-6 w-6 text-white" />
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#E6F2E7] transform transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-2">
            <span>💰</span>
            <span>Wallet Points: 0</span>
          </div>
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:text-green-600"
            onClick={() => router.push("/account/favourite")}
          >
            <span>❤️</span>
            <span>Favourite</span>
          </div>
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:text-green-600"
            onClick={() => router.push("/account/my-order")}
          >
            <span>🛍</span>
            <span>My Order</span>
          </div>
          <div className="flex items-center space-x-2 bg-green-500 text-white p-2 rounded-md">
            <span>👤</span>
            <span>Profile</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-green-600">
            <span>🚪</span>
            <span>Log Out</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 md:pl-16">
        <div className="max-w-5xl mx-auto">
          {/* Header with Date Range */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">My Orders</h1>
            <div className="flex items-center gap-4 text-sm">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[180px] justify-start text-left font-normal",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : <span>Pick start date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                  />
                </PopoverContent>
              </Popover>
              <span>To</span>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[180px] justify-start text-left font-normal",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : <span>Pick end date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Orders List */}
          <div className="space-y-4">
            {orders.map((order, index) => (
              <Card key={index} className="p-6 border border-green-100 rounded-xl bg-white hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                  <div className="text-sm">
                    <span className="text-gray-500">Order: </span>
                    <span className="font-medium text-gray-900">{order.orderId}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Payment: </span>
                    <span className="font-medium text-gray-900">{order.paymentDate}</span>
                  </div>
                </div>

                {order.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-green-500 rounded-xl"></div>
                      <div>
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.category}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                          <span>{item.weight}</span>
                          <span>•</span>
                          <span>Qty: {item.quantity}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-12 ml-26 md:ml-0">
                      <div className="text-green-500 font-medium">
                        {item.status}
                      </div>
                      <div className="font-medium text-gray-900">
                        ₹{item.price}
                      </div>
                    </div>
                  </div>
                ))}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}