"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter } from "next/navigation";
import { LoginModal } from "@/components/auth/LoginModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const showSearch = pathname === "/";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLogin = (email: string, password: string) => {
    console.log("Logging in with:", email, password);
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/?scroll=contact");
    }
  };

  const handleCartClick = () => {
    router.push('/cart');
  };

  return (
    <div className="relative w-full">
      {/* Top Bar */}
      <div className="bg-green-900 text-white text-sm py-2">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row sm:gap-6 items-center mb-2 sm:mb-0">
            <span>
              <span>📞</span>
              <a href="tel:(629) 555-0129" className="hover:underline ml-1">
                (629) 555-0129
              </a>
            </span>
            <span className="hidden sm:inline">|</span>
            <span>
              <span>✉️</span>
              <a href="mailto:info@freshbazzar.com" className="hover:underline ml-1">
                info@freshbazzar.com
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white text-black">
        <div className="max-w-[1200px] mx-auto px-4 py-1">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Fresh Bazzar"
                width={140}
                height={40}
                className="w-auto h-8 sm:h-10"
              />
            </Link>

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
                <button 
                  onClick={handleContactClick}
                  className="hover:text-green-600 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>

            {/* Cart and Login/Account */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Button 
                variant="ghost" 
                className="p-2 sm:p-3 hover:bg-green-50 flex items-center gap-2"
                onClick={handleCartClick}
              >
                <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.95479 3.50078H3.50039C3.34126 3.50078 3.18865 3.43757 3.07613 3.32505C2.9636 3.21252 2.90039 3.05991 2.90039 2.90078C2.90039 2.74165 2.9636 2.58904 3.07613 2.47652C3.18865 2.364 3.34126 2.30078 3.50039 2.30078H5.42399C5.55783 2.30082 5.68781 2.3456 5.79327 2.42801C5.89873 2.51042 5.9736 2.62572 6.00599 2.75558L8.28239 11.8756C8.3168 12.0285 8.29001 12.1888 8.20776 12.3222C8.12551 12.4556 7.99433 12.5515 7.84227 12.5895C7.6902 12.6274 7.52933 12.6043 7.39406 12.5252C7.25878 12.4461 7.15984 12.3171 7.11839 12.166L4.95479 3.50078Z" fill="currentColor"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.0951 9.50146H9.50715C9.32635 9.50146 9.14755 9.52147 8.97075 9.56147C8.34657 9.70768 7.80573 10.0952 7.46659 10.6392C7.12745 11.1832 7.01762 11.8395 7.16115 12.4643L8.10075 16.6175C8.22051 17.1513 8.51818 17.6285 8.94491 17.9709C9.37164 18.3132 9.90207 18.5003 10.4491 18.5015H18.1555C18.7024 18.5 19.2326 18.3128 19.6591 17.9705C20.0855 17.6282 20.383 17.1511 20.5027 16.6175L21.4423 12.4631C21.4823 12.2863 21.5023 12.1067 21.5023 11.9243C21.5038 11.6071 21.4426 11.2928 21.3224 10.9993C21.2022 10.7058 21.0253 10.4389 20.8018 10.2139C20.5784 9.98882 20.3127 9.81006 20.02 9.68782C19.7274 9.56558 19.4123 9.50225 19.0951 9.50146ZM9.24075 10.7315C9.32854 10.7115 9.4183 10.7014 9.50835 10.7015H19.0951C19.2781 10.7025 19.4585 10.7448 19.6228 10.8252C19.7871 10.9056 19.9312 11.0221 20.0442 11.1659C20.1572 11.3098 20.2364 11.4773 20.2757 11.6559C20.315 11.8346 20.3134 12.0199 20.2711 12.1979L19.3303 16.3523C19.2708 16.6203 19.1221 16.8602 18.9084 17.0326C18.6948 17.205 18.4289 17.2998 18.1543 17.3015H10.4491C9.88755 17.3015 9.39915 16.9079 9.27315 16.3523L8.33355 12.1979C8.26073 11.883 8.31536 11.5522 8.48554 11.2775C8.65572 11.0027 8.92642 10.8065 9.24075 10.7315Z" fill="currentColor"/>
                  <path d="M20.9008 20.6015C20.9008 21.1584 20.6795 21.6926 20.2857 22.0864C19.8919 22.4802 19.3577 22.7015 18.8008 22.7015C18.2438 22.7015 17.7097 22.4802 17.3159 22.0864C16.922 21.6926 16.7008 21.1584 16.7008 20.6015C16.7008 20.0445 16.922 19.5104 17.3159 19.1165C17.7097 18.7227 18.2438 18.5015 18.8008 18.5015C19.3577 18.5015 19.8919 18.7227 20.2857 19.1165C20.6795 19.5104 20.9008 20.0445 20.9008 20.6015ZM12.5008 20.6015C12.5008 20.8772 12.4465 21.1503 12.3409 21.4051C12.2354 21.6599 12.0807 21.8914 11.8857 22.0864C11.6907 22.2814 11.4592 22.4361 11.2044 22.5416C10.9496 22.6471 10.6766 22.7015 10.4008 22.7015C10.125 22.7015 9.85193 22.6471 9.59715 22.5416C9.34236 22.4361 9.11086 22.2814 8.91586 22.0864C8.72085 21.8914 8.56617 21.6599 8.46063 21.4051C8.3551 21.1503 8.30078 20.8772 8.30078 20.6015C8.30078 20.0445 8.52203 19.5104 8.91586 19.1165C9.30968 18.7227 9.84383 18.5015 10.4008 18.5015C10.9577 18.5015 11.4919 18.7227 11.8857 19.1165C12.2795 19.5104 12.5008 20.0445 12.5008 20.6015Z" fill="currentColor"/>
                </svg>
                <span className="hidden sm:inline">Cart</span>
              </Button>

              {isLoggedIn ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      className="hidden sm:flex bg-white hover:bg-gray-50 text-black font-medium rounded-full px-6"
                    >
                      Account
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem onClick={() => window.location.href = '/account/profile'}>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => window.location.href = '/account/my-order'}>
                      <span className="mr-2">🛍</span>
                      <span>My Orders</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => window.location.href = '/account/favourite'}>
                      <span className="mr-2">❤️</span>
                      <span>Favourites</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="text-red-600"
                      onClick={() => setIsLoggedIn(false)}
                    >
                      <span className="mr-2">🚪</span>
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button 
                  onClick={() => setShowLoginModal(true)}
                  className="hidden sm:flex bg-green-500 hover:bg-green-600 text-white rounded-full px-6"
                >
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
                      <Image 
                        src="/images/logo.png" 
                        alt="Fresh Bazzar" 
                        width={120} 
                        height={30} 
                        className="w-auto h-8" 
                      />
                    </div>
                    <div className="flex flex-col space-y-4">
                      <SheetClose asChild>
                        <Link href="/" className="text-lg hover:text-green-600">
                          Home
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/about" className="text-lg hover:text-green-600">
                          About
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/blog" className="text-lg hover:text-green-600">
                          Blog
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <button
                          onClick={handleContactClick}
                          className="text-lg hover:text-green-600"
                        >
                          Contact
                        </button>
                      </SheetClose>
                    </div>
                    <div className="mt-auto pb-6">
                      {isLoggedIn ? (
                        <Button 
                          className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full"
                          onClick={() => window.location.href = '/account'}
                        >
                          Account
                        </Button>
                      ) : (
                        <Button 
                          onClick={() => setIsLoggedIn(true)}
                          className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full"
                        >
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
        <div className="w-full bg-[rgba(217,252,180,0.99)]">
          <div className="max-w-[1200px] mx-auto px-4 py-4">
            <div className="relative w-full max-w-2xl mx-auto">
              <Input
                type="search"
                placeholder="Search for products..."
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

      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Navbar;

