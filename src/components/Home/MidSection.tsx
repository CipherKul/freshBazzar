import React from "react";
import Image from "next/image";

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
          <div>
            <h1
              className="text-4xl font-bold mb-4 text-[60px]"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                color: "rgba(17, 80, 29, 1)",
              }}
            >
              Check Out Our Fresh
            </h1>
          </div>
          <div>
            <h1
              className="text-4xl font-bold mb-4 text-[40px]"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                color: "rgba(17, 80, 29, 1)",
              }}
            >
              Food Collection
            </h1>
          </div>
          <div>
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
      </div>
      <section className="bg-transparent flex items-center justify-center mt-8">
        <div
          className="grid grid-areas-custom w-[80%] gap-6 p-6"
          style={{
            gridTemplateAreas: `
              "left middle-top right"
              "left middle-bottom right"
            `,
            gridTemplateColumns: "1fr 1fr 1fr", // Equal widths for left, middle, right
            gridTemplateRows: "1fr 1fr", // Equal heights for top and bottom rows
          }}
        >
          {/* Left Box */}
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            style={{ gridArea: "left" }}
          >
            <Image
              src="/images/midLeft.png" // Path to image in the public folder
              alt="Get Exclusive Discount"
              width={500} // Set appropriate width
              height={500} // Set appropriate height
              className="h-full object-cover"
            />
          </div>

          {/* Middle Top Box */}
          <div
            className="bg-grey rounded-lg shadow-lg overflow-hidden"
            style={{ gridArea: "middle-top" }}
          >
            <Image
              src="/images/midTop.png" // Path to image in the public folder
              alt="Special Products"
              width={500} // Set appropriate width
              height={250} // Set appropriate height
              className="object-cover"
            />
          </div>

          {/* Middle Bottom Box */}
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            style={{ gridArea: "middle-bottom" }}
          >
            <Image
              src="/images/midBottom.png" // Path to image in the public folder
              alt="Summer Sale"
              width={500} // Set appropriate width
              height={250} // Set appropriate height
              className="object-cover"
            />
          </div>

          {/* Right Box */}
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            style={{ gridArea: "right" }}
          >
            <Image
              src="/images/midRight.png" // Path to image in the public folder
              alt="Explore Recipes"
              width={500} // Set appropriate width
              height={500} // Set appropriate height
              className="h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MidSection;