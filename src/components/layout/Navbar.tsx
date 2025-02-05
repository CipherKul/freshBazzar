"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPathName = usePathname();
  const showSearch = currentPathName === "/";
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="relative w-full">
      {/* Top Bar */}
      <div className="bg-green-900 text-white text-sm py-2">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row sm:gap-6 items-center mb-2 sm:mb-0">
            <span className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:(629) 555-0129" className="hover:underline">
                (629) 555-0129
              </a>
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-2">
              <span>✉️</span>
              <a href="mailto:PRNKinfo@company.com" className="hover:underline">
                PRNKinfo@company.com
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white text-black border-b">
        <div className="max-w-[1200px] mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image src="/images/logo.png" alt="logo" width={140} height={40} className="w-auto h-8 sm:h-10" />
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-8 text-gray-500">
              <li>
                <Link href="/" className="hover:text-green-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-green-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Cart and Login/Account Button */}
            <div className="flex items-center rounded-2xl gap-2 sm:gap-4">
              <Button variant="ghost" className="p-1 sm:p-2">
                <Image
                  src="/images/cart.png"
                  alt="Shopping Cart"
                  width={80}
                  height={40}
                  className="w-12 h-6 sm:w-8 sm:h-8"
                />
              </Button>    

              {/* Show Login or Account Button */}
              {isLoggedIn ? (
                <Button className="hidden sm:flex bg-white hover:bg-white-600 text-black font-poppins rounded-full px-6">
                  Account
                </Button>
              ) : (
                <Button onClick={() => setIsLoggedIn(true)} className="hidden sm:flex bg-green-500 hover:bg-green-600 text-white rounded-full px-6">
                  Login
                </Button>
              )}

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon" className="p-1">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
                  <nav className="flex flex-col h-full">
                    <div className="py-6">
                      <Image src="/images/logo.png" alt="logo" width={120} height={30} className="w-auto h-8" />
                    </div>
                    <div className="flex flex-col space-y-4">
                      <SheetClose asChild>
                        <Link href="/" className="text-lg hover:text-green-600 transition-colors">
                          Home
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/about" className="text-lg hover:text-green-600 transition-colors">
                          About
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/blog" className="text-lg hover:text-green-600 transition-colors">
                          Blog
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/contact" className="text-lg hover:text-green-600 transition-colors">
                          Contact
                        </Link>
                      </SheetClose>
                    </div>
                    <div className="mt-auto pb-6">
                      {isLoggedIn ? (
                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full">
                          Account
                        </Button>
                      ) : (
                        <Button onClick={() => setIsLoggedIn(true)} className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full">
                          Login
                        </Button>
                      )}
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      {showSearch && (
        <div className="w-full bg-[rgba(217,252,180,0.99)] py-3 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="relative w-full max-w-2xl mx-auto">
              <Input
                type="search"
                placeholder="Search..."
                className="w-full bg-white rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

