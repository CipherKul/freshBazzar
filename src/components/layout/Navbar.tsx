"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShoppingCart } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const currentPathName= usePathname()
  const showSearch = currentPathName === '/'
  return (
    <div className="relative">
      <nav className="bg-white text-black ">
        <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center ">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Image 
              src="/images/logo.png"
              alt="logo"
              width={120}
              height={40}
              className="w-auto h-auto"
            />
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col space-y-4">
                <SheetClose asChild>
                  <Link href="/" className="text-gray-500 hover:underline">
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/about" className="text-gray-500 hover:underline">
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/blog" className="text-gray-500 hover:underline">
                    Blog
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/contact" className="text-gray-500 hover:underline">
                    Contact
                  </Link>
                </SheetClose>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full">
                  Login
                </Button>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-12 text-gray-500">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>

          {/* Cart and Login */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <ShoppingCart className="h-6 w-6 text-gray-500" />
              <span className="ml-2 text-gray-500">Cart</span>
            </div>
            <Button className="hidden md:block bg-green-500 hover:bg-green-600 text-white rounded-full px-6">
              Login
            </Button>
          </div>
        </div>
      </nav>

{/* Search Container with green bottom border */}
{showSearch && (
  <div className="w-full" style={{ backgroundColor: '#D9FCB4' }}>
    <div className="max-w-[1200px] flex justify-center mx-auto px-4 py-2">
      <div className="relative w-full md:w-[60%]">
        <Input
          type="search"
          placeholder="Search..."
          className="w-full bg-white rounded-full py-5 focus:outline-none focus:ring-2 focus:ring-green-500"
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