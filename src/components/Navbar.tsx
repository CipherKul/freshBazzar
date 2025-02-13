"use client"

import Link from "next/link"
import { ShoppingCart, Menu as MenuIcon } from "lucide-react"
import { AccountMenu } from "@/components/AccountMenu"
import Image from "next/image"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left side - Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png" // Make sure you have your logo in public folder
            alt="Fresh Bazzar"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Middle - Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-green-600">
            Home
          </Link>
          <Link href="/shop" className="text-gray-700 hover:text-green-600">
            Shop
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-green-600">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-600">
            Contact
          </Link>
        </div>

        {/* Right side - Cart & Account */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ShoppingCart className="h-6 w-6 text-gray-700" />
          </button>
          <AccountMenu />
        </div>
      </div>
    </nav>
  )
} 