import React from "react";
import Image from "next/image";


const AboutUsSection = () => {
  return (
    <div className="bg-gray-50">
      <section className="py-16 px-6">
        <h2 className="text-center text-3xl font-bold text-green-700 mb-6">
          About Us
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          Fresh Buyzar is a preferred farm fresh fruits & vegetable store in
          Delhi NCR. Buy vegetables & fruits online at best rates. We are
          providing Vegetables and Fruits Home Delivery in Noida, Ghaziabad,
          Greater Noida, Delhi, and Gurugram.
        </p>
      </section>

      {/* Delivery Information Section */}
      <section className="bg-green-100 py-16 px-6">
        <h2 className="text-center text-3xl font-bold text-green-700 mb-6">
          Delivery Information
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:justify-center lg:gap-12">
          <div className="mb-8 lg:mb-0">
            <Image
              src={'/images/delivaryboy.png'}
              alt="Delivery Illustration"
              width={320} 
              height={320} 
              className="w-80"
            />
          </div>
          <div className="text-gray-700 max-w-lg">
            <h3 className="text-lg font-bold text-green-800 mb-4">
              STAY HOME STAY SAFE.
            </h3>
            <p className="mb-6">
              Order and enjoy fresh vegetables and fruits at your doorsteps. We
              offer next-day delivery in Delhi NCR for orders made before
              midnight.
            </p>
            <h3 className="text-lg font-bold text-red-700 mb-4">
              SORRY, WE DO NOT DELIVER ON SUNDAYS.
            </h3>
            <p>
              Orders placed on Saturdays and Sundays are delivered on Monday.
            </p>
          </div>
        </div>
      </section>

   
     
    </div>
  );
};

export default AboutUsSection;