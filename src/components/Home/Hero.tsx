import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="relative text-center">
      {/* Background Container */}
      <div
        className="relative w-full  min-h-[500px] sm:min-h-[500px] md:min-h-[650px]" // Increased height to accommodate lower images
        style={{
          backgroundColor: "rgba(217, 252, 180, 0.99)",
        }}
      >
        {/* Left Hero Image */}
        <div className="absolute -bottom-2 sm:-bottom-16  md:-bottom-20  left-0 w-[40%] sm:w-[45%]">
          {" "}
          {/* Adjusted bottom positioning */}
          <Image
            src="/images/heroLeft.png"
            alt="Fresh vegetables and produce"
            width={600}
            height={400}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        {/* Right Hero Image */}
        <div className="absolute -bottom-12 sm:-bottom-16 md:-bottom-80 right-0 w-[40%] sm:w-[45%]">
          {" "}
          {/* Adjusted bottom positioning */}
          <Image
            src="/images/heroRight.png"
            alt="Fresh fruits collection"
            width={600}
            height={400}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 pt-12 sm:pt-16 md:pt-20 px-4">
          <h1 className="text-[#0a4d15] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]">
            Check Out Our Fresh
          </h1>
          <h2 className="text-[#0a4d15] text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]">
            Food Collection
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-8 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.3)]">
            Buy from our freshly stocked veggies
          </p>

          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Shop now
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

