import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const MidSection = () => {
  return (
    <>
      <div className="text-center flex justify-center mt-28">
        <div>
          <div className="mb-4">
            <button
              style={{ backgroundColor: "rgba(217, 252, 180, 0.99)", color: "black" }}
              className="bg-gray-500 text-white p-2 pl-4 pr-4 rounded-3xl"
            >
              Our Store
            </button>
          </div>
          <h1
            className="text-4xl font-bold mb-4 text-[60px]"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              color: "rgba(17, 80, 29, 1)",
            }}
          >
            Check Out Our Fresh
          </h1>
          <h1
            className="text-4xl font-bold mb-4 text-[40px]"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              color: "rgba(17, 80, 29, 1)",
            }}
          >
            Food Collection
          </h1>
          <p
            className="text-lg text-green-600"
            style={{
              textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
              color: "rgba(0, 0, 0, 0.5)",
            }}
          >
            Buy from our freshly stocked veggies
          </p>
        </div>
      </div>

      <section className="bg-transparent flex items-center justify-center mt-8">
        <div
          className="grid w-[80%] gap-6 p-6"
          style={{
            display: "grid",
            gridTemplateAreas: `
              "left middle-top right"
              "left middle-bottom right"
            `,
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr",
          }}
        >
          {/* Left Box (L1) */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden" style={{ gridArea: "left" }}>
            <Image
              src="/images/R1.png"
              alt="Get Exclusive Discount"
              width={500}
              height={500}
              className="h-full object-cover"
            />
            <div className="absolute bottom-12 left-4">
              <div className="bg-[#AFAFAF] text-green-900 px-3 py-2 text-sm font-semibold rounded-xl w-fit">
                <button>Upto 50% Off</button>
              </div>
              <h3 className="text-white text-3xl font-extrabold mt-2 leading-tight">Get Exclusive Discount</h3>
              <p className="text-white text-sm">Discounts Up to 50% on exotic foods</p>
            </div>
          </div>

          {/* Middle Top Box */}
          <div className="relative bg-grey rounded-lg shadow-lg overflow-hidden" style={{ gridArea: "middle-top" }}>
            <Image
              src="/images/U1.png"
              alt="Special Products"
              width={500}
              height={250}
              className="object-cover"
            />
            
            <div className="absolute bottom-28 left-4">
            <div className=" text-black px-2 py-1 text-sm font-poppins rounded-xl w-fit">
            SUMMER SALE
            </div> 
            <h3 className="text-black text-3xl font-bold font-poppins  leading-tight">75% OFF</h3>
            <p className="text-black font-poppins text-sm">Only Frruits & Vegetable</p>
              <div className=" text-[#00B207] px-3 py-2 text-sm font-poppins  font-semibold rounded-xl w-fit">
                <button>Shop Now →</button>
              </div>
            </div>
          </div>

          {/* Middle Bottom Box */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden" style={{ gridArea: "middle-bottom" }}>
            <Image
              src="/images/D1.png"
              alt="Summer Sale"
              width={500}
              height={250}
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-full flex flex-col items-center justify-center text-center">
            <div className=" text-white px-2 py-1 text-sm font-poppins rounded-xl">
            Best Deal
            </div> 
            <h3 className="text-white text-2xl font-bold font-poppins  leading-tight">Special Product</h3>
            <h3 className="text-white text-2xl font-bold font-poppins  leading-tight">Deal of the Month</h3>
              <div className=" text-[#00B207] px-3 py-2 text-sm font-poppins  font-semibold rounded-xl w-fit">
                <button>Shop Now →</button>
              </div>
            </div>
          </div>

          {/* Right Box (R1) */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden" style={{ gridArea: "right" }}>
            <Image
              src="/images/L1.png"
              alt="Explore Recipes"
              width={500}
              height={500}
              className="h-full object-cover"
            />
            <div className="absolute bottom-24 left-6">
              <div className="bg-green-200 text-green-900 px-3 py-2 text-sm font-semibold rounded-xl w-fit">
                <button>Show Now!</button>
              </div>
              <h3 className="text-white text-3xl font-extrabold mt-2 leading-tight">Summer</h3>
              <h3 className="text-white text-3xl font-extrabold leading-tight">Sale</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MidSection;
