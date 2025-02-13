"use client";
import { useRouter } from "next/navigation";
import { Menu } from 'lucide-react';
import { useState } from "react";

export default function Favourite() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-[#F9F6F0]">
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 md:hidden"
        onClick={toggleSidebar}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 top-16 z-50 w-56 bg-green-100 p-4 transition-transform md:relative md:translate-x-0 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="mt-4 font-poppins">
          <li className="py-2 cursor-pointer bg-[#00B207] rounded-md">
            ❤️ Favourite
          </li>
          <li
            className="py-2 cursor-pointer hover:bg-[#00B207] hover:text-white rounded-md"
            onClick={() => router.push("/account/my-order")}
          >
            🛍 My Order
          </li>
          <li
            className="py-2 cursor-pointer hover:bg-[#00B207] hover:text-white rounded-md"
            onClick={() => router.push("/account/profile")}
          >
            👤 Profile
          </li>
          <li
            className="py-2 cursor-pointer hover:bg-[#00B207] hover:text-white rounded-md"
            onClick={() => router.push("/logout")}
          >
            🚪 Log Out
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 md:p-36 bg-[#F9F6F0] font-poppins">
        <h3 className="text-4xl font-bold">Favourites</h3>
        {/* Add your favourites content here */}
      </div>
    </div>
  );
} 