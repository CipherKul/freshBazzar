import Image from "next/image"

const HeroSection = () => {
  return (
<<<<<<< HEAD
    <section className="relative text-center">
=======
    <section
      className="relative text-center text-white"
      
    >
>>>>>>> 0502548ebb2193fb70552f9e0c6dd37cd75d755f
      {/* Background Container */}
      <div
        className="relative w-full  min-h-[500px] sm:min-h-[500px] md:min-h-[650px]" // Increased height to accommodate lower images
        style={{
          backgroundColor: "rgba(217, 252, 180, 0.99)",
<<<<<<< HEAD
        }}
      >
        {/* Left Hero Image */}
        <div className="absolute -bottom-2 sm:-bottom-16  md:-bottom-20  left-0 w-[40%] sm:w-[45%]">
          {" "}
          {/* Adjusted bottom positioning */}
=======
          width: "100%",
          height: "40vw"
        }}
      >
        {/* Left Hero Image */}
        <div className="absolute w-[45%] z-[2] h-full mt-[30px]" style={{display:"flex",alignItems:"end"}}>
>>>>>>> 0502548ebb2193fb70552f9e0c6dd37cd75d755f
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
<<<<<<< HEAD
        <div className="absolute -bottom-12 sm:-bottom-16 md:-bottom-80 right-0 w-[40%] sm:w-[45%]">
          {" "}
          {/* Adjusted bottom positioning */}
=======
        <div className="absolute right-0 z-[2] w-[45%] h-full mt-[62px]">
>>>>>>> 0502548ebb2193fb70552f9e0c6dd37cd75d755f
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
<<<<<<< HEAD
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
=======
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
              className="title-M text-4xl font-bold mb-4 text-[40px]"
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
              className="title-L text-lg text-green-600"
              style={{
                textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
                color: 'rgba(0, 0, 0, 0.5)'
              }}
            >
              Buy from our freshly stocked veggies
            </p>
          </div>
>>>>>>> 0502548ebb2193fb70552f9e0c6dd37cd75d755f
        </div>
      </div>
    </section>
  )
}

export default HeroSection

