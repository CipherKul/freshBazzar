"use client";
import { useState } from "react";
import { Menu } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function Profile() {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender: "",
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex min-h-screen bg-[#F9F6F0]">
      {/* Left Sidebar - Added ml-24 for left margin */}
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-8">Profile</h1>
          
          {/* Profile Picture */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 bg-gray-300 rounded-full mb-6"></div>
            <div className="w-full border-b border-gray-200"></div>
          </div>

          {/* Edit Profile Section */}
          <div className="bg-white rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">👤 Edit Profile</h2>
              <button className="text-green-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                name="firstName"
                placeholder="Enter First name"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                value={profile.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last name"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                value={profile.lastName}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                value={profile.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile number"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                value={profile.mobile}
                onChange={handleChange}
              />
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                value={profile.gender}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Address Section */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">📍 Address</h2>
              <button className="text-green-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <button className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
              + Add New Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
