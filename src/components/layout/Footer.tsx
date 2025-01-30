import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-between">
       
            <div className="mb-8 lg:mb-0">
              <Image
                src="/images/logo.png" // Replace with your logo path
                alt="Fresh Buyzar Logo"
                width={128} // Set appropriate width
                height={128} // Set appropriate height
                className="w-32 mb-4"
              />
              <p className="mb-2">Ghaziabad, Uttar Pradesh, India</p>
              <p className="mb-2">contact@freshbuyzar.com</p>
              <p className="mb-2">+91 9205220284</p>
              <button className="bg-white text-green-700 px-4 py-2 rounded hover:bg-green-50 transition">
                Get it on Google Play
              </button>
            </div>

            {/* Quick Links */}
            <div className="mb-8 lg:mb-0">
              <h3 className="font-bold text-xl mb-4">Quick links</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Fresh Vegetable
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Fresh Fruits
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Vegetables
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Dairy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <h3 className="font-bold text-xl mb-4">Subscribe now</h3>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-l bg-white text-green-800 focus:outline-none"
                />
                <button className="bg-green-800 text-white px-4 py-2 rounded-r hover:bg-green-900 transition">
                  Subscribe
                </button>
              </form>
              <div className="flex gap-4 mt-6">
                <a href="#" className="hover:underline">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="hover:underline">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:underline">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 text-sm">
            © 2025 FreshBuyzar | All Rights Reserved
          </div>
        </div>
      </footer>
  )
}
