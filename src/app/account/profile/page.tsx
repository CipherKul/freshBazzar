"use client";

import { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="flex min-h-screen bg-white-100 font-poppins">
        {/* Sidebar */}
        <div className="w-40 bg-[#E5FFE7] p-2 m-8 ">
          <h2 className="text-lg font-poppins flex justify-center">Wallet Points </h2> <h2 className="font-poppins">0</h2>
          
          <ul className="mt-4 font-poppins">
            <li className="py-2 cursor-pointer hover:bg-green-500 hover:text-white rounded-md">❤️ Favourite</li>
            <li className="py-2 cursor-pointer hover:bg-green-500 hover:text-white rounded-md">🛍 My Order</li>
            <li className="py-2 cursor-pointer bg-[#00B207] rounded-md cursor-pointer">👤 Profile</li>
            <li className="py-2 cursor-pointer hover:bg-green-500 hover:text-white rounded-md">🚪 Log Out</li>
          </ul>
        </div>

        {/* Profile Section */}
        <div className="flex-1 p-20 bg-gray-50 font-poppins">
          <h1 className="text-2xl font-bold font-poppins">Profile</h1>
          <div className="mt-6 flex flex-col items-center">
            <div className="w-40 h-40 bg-gray-400 rounded-full"></div>
          </div>

          <div className="mt-6 p-4 bg-white shadow-md rounded-md">
            <h2 className="font-semibold font-poppins">Edit Profile</h2>
            
            <div className="mt-4 space-y-2">

           
            
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                className="w-full p-2 border border-green-400 rounded-md font-poppins"
                onChange={handleChange}
                value={profile.firstName}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                className="w-full p-2 border border-green-400 rounded-md font-poppins"
                onChange={handleChange}
                value={profile.lastName}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="w-full p-2 border border-green-400 rounded-md font-poppins"
                onChange={handleChange}
                value={profile.email}
              />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                className="w-full p-2 border border-green-400 rounded-md font-poppins"
                onChange={handleChange}
                value={profile.mobile}
              />
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                className="w-full p-2 border border-green-400 rounded-md font-poppins"
                onChange={handleChange}
                value={profile.gender}
              />
            </div>
          </div>

          <div className="mt-6 p-4 bg-white shadow-md rounded-md font-poppins">
            <h2 className="font-semibold font-poppins">📍 Address</h2>
            <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-md font-poppins">+ Add New Address</button>
          </div>
          
        </div>
      
      </div>
      <div>{/* Newsletter */}
        <div className="bg-[#D9FCB4] rounded-xl mt-16 py-12">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4">Subscribe our Newsletter</h3>
              <p className="text-gray-600 mb-6">Pellentesque eu nulla sagittis, or nare ex et, sagittis metus</p>
              <div className="flex w-full max-w-md gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-600"
                />
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}