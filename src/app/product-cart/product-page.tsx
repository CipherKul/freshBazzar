"use client";
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Search, User, Facebook, Instagram, PhoneIcon } from "lucide-react"



interface Product {
  name: string;
  price: number;
  weight: string;
  image: string;
  description: string;
}

const product: Product = {
  name: "Green Chilli",
  price: 12.0,
  weight: "100g",
  image: "/images/green-chilli.png",
  description:
    ".",
};
const relatedProducts = [
  {
    name: "Kiwi",
    price: 35.0,
    unit: "pc",
    image: "/placeholder.svg",
  },
  {
    name: "Curry leaves",
    price: 10.0,
    unit: "Bunch",
    image: "/placeholder.svg",
  },
  {
    name: "Black grapes",
    price: 45.0,
    weight: "250g",
    image: "/placeholder.svg",
  },
  {
    name: "Broccoli",
    price: 110.0,
    weight: "250g",
    image: "/placeholder.svg",
  },
]

const ProductPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState("descriptions");
  const [searchTerm, setSearchTerm] = useState(""); // Move it inside the component

  const handleAddToCart = () => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-[#E5FFD5] min-h-screen">
     
      <div className="bg-[#D9FCB4] py-4 px-6">
        <div className="max-w-3xl mx-auto relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

        <div className="grid md:grid-cols-2 gap-10 bg-white p-6 shadow-lg" style={{backgroundColor: '#D9FCB4'}}>
          {/* Product Image */}
          <div className="flex">
            <div style={{margin:"2rem"}}>
              <div style={{width:"86px", height:"86px",backgroundColor:"white" ,marginBottom:"20px"}}>
                <Image
                  src="/images/greenchilli.png"
                  alt="Green Chilli"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover" />
             
              </div>
              <div style={{width:"86px", height:"86px",backgroundColor:"white",marginTop:"20px"}}>

                <Image
                  src="/images/greenchilli2.png"
                  alt="Green Chilli"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
           
            <Image
              src={"/images/greenchilli.png"}
              alt={product.name}
              width={300}
              height={200}
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-green-700">
              {product.name} <span className="text-sm">/{product.weight}</span>
            </h1>
            <p className="text-xl font-semibold mt-2">
              ₹{product.price.toFixed(2)} / {product.weight}
            </p>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <h4 style={{fontWeight:'700',marginTop:"1rem",marginBottom:"0.5rem"}}>Benefits</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li style={{fontSize:"13px"}}>
          <strong>Rich in Vitamin C:</strong> Green chillies are a great source of Vitamin C, which helps boost the immune system and promotes healthy skin.
        </li>
        <li style={{fontSize:"13px"}}>
          <strong>Metabolism Boost:</strong> The capsaicin in green chillies can increase metabolic rate, aiding in weight management.
        </li>
        <li style={{fontSize:"13px"}}>
          <strong>Antioxidant Properties:</strong> Green chillies contain antioxidants that help fight against free radicals and reduce the risk of chronic diseases.
        </li>
      </ul>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-12 mt-4">
            <button
              onClick={handleAddToCart}
              className="px-20 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Add
            </button>
            <div className="bg-green-600 w-[175px] flex justify-around rounded-lg">
              <button
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                className="px-3 py-2 bg-green-600 rounded text-white"
              >
                -
              </button>
              <span className="px-3 py-2 bg-green-600 rounded text-white">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-3 py-2 bg-green-600 rounded text-white"
              >
                +
              </button>
              </div>
            {/* Add to Cart Button */}
            
            </div>
          </div>
        </div>

        
        <div>

        {/* Description Tabs */}
    
        
        <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square">
            <Image
              src={"/images/greenchilli.png"}
              alt={product.name}
              width={200}
              height={100}
              className="rounded-lg w-full h-auto"
            />
            </div>
          </div>

          {/* Marketing Elements */}
          <div className="flex items-center  mt-24">
            <div className="flex items-center gap-2 bg-green-50 px-6 py-2 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <p className="text-sm font-medium text-green-900">64% Discount</p>
                <p className="text-xs text-green-600">Save your 64% money with us</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <p className="text-sm font-medium text-green-900">100% Organic</p>
                <p className="text-xs text-green-600">100% organic Vegetables</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <div className="flex gap-8 border-b border-gray-200">
            <button
              className={`pb-4 ${activeTab === "descriptions" ? "border-b-2 border-green-600 text-green-600" : ""}`}
              onClick={() => setActiveTab("descriptions")}
            >
              Descriptions
            </button>
            <button
              className={`pb-4 ${activeTab === "additional" ? "border-b-2 border-green-600 text-green-600" : ""}`}
              onClick={() => setActiveTab("additional")}
            >
              Additional Information
            </button>
            <button
              className={`pb-4 ${activeTab === "how" ? "border-b-2 border-green-600 text-green-600" : ""}`}
              onClick={() => setActiveTab("how")}
            >
              How it works
            </button>
          </div>

          <div className="py-6">
            {activeTab === "descriptions" && (
              <div className="space-y-6">
                <p>{product.description}</p>
                <div>
                  <h4 className="font-bold mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Rich in vitamins A and C</li>
                    <li>
                      Contains capsaicin, which has potential health benefits such as pain relief and improved
                      metabolism
                    </li>
                    <li>Adds depth of flavour and heat to dishes</li>
                    <li>Versatile ingredient used in various cuisines worldwide</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Usage:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Enhance the flavour of curries, stir-fries, salsas, and sauces</li>
                    <li>Slice or dice for garnishing salads, tacos, and other dishes</li>
                    <li>Infuse olive oil for a spicy kick in dressings and marinades</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

        {/* Related Products */}
        <div className="py-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              Continue shopping
              <span className="text-green-600">→</span>
            </h3>
          </div>
          <div
           className="bg-grey rounded-2xl p=4 hover-shadow-lg transition grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 relative">
                <button className="absolute right-4 top-4 text-green-600">
                  <Heart className="w-5 h-5" />
                </button>
                <div
                 style={{ border: "2-px solid rgb(34 197 93)" }}
    className="bg-white rounded-2xl p-4 hover:shadow-lg transition">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-xl"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.weight || item.unit}</p>
                  </div>
                  <button className="text-green-600">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
                <p className="font-bold mb-4">₹{item.price.toFixed(2)}</p>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">Add</button>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
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

      {/* Footer */}
      <footer className="bg-[#0B4619] text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-4">Quick links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Fresh vegetables
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Fresh Fruits
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Vegetables
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Dairy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-green-300">
                    FAQ & Helps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Our Information</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Privacy Policies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Subscribe now</h3>
              <div className="flex gap-2 mb-6">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 bg-[#0B4619] border border-green-600 rounded-md"
                />
                <button className="px-4 py-2 bg-green-600 rounded-md">Subscribe</button>
              </div>
              <div className="flex gap-4">
                <Link href="#">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#">
                  <PhoneIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center pt-6 border-t border-green-800">
            <p>© 2024 FreshBuyzer | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
    
   
   
    
export default ProductPage;
