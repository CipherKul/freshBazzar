import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="relative text-center text-white"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 50px",
      }}
    >
      {/* Background Container */}
      <div 
        className="heroContainer relative" 
        style={{
          backgroundColor: "rgba(217, 252, 180, 0.99)",
          width: "100%",
          height: "550px"
        }}
      >
        {/* Left Hero Image */}
        <div className="absolute top-[160px] left-0 w-[45%] z-[2]">
          <Image
            src="/images/heroLeft.png"
            alt="Left Hero Image"
            width={600}
            height={400}
            className="heroLeft object-cover w-full h-auto"
            priority
          />
        </div>

        {/* Right Hero Image */}
        <div className="absolute top-[40px] right-0 w-[45%] z-[2]">
          <Image
            src="/images/heroRight.png"
            alt="Right Hero Image"
            width={600}
            height={400}
            className="heroRight object-cover w-full h-auto"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="text-center justify-center inset-0 bg-opacity-50 pt-36">
          <div>
            <h1
              className="text-4xl font-bold mb-4 text-[60px]"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                color: "rgba(17, 80, 29, 1)"
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
                color: "rgba(17, 80, 29, 1)"
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
                color: 'rgba(0, 0, 0, 0.5)'
              }}
            >
              Buy from our freshly stocked veggies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;