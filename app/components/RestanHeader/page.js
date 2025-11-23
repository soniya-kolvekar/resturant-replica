"use client";
import React, { useState, useEffect } from "react";
import SafeHydrate from "../SafeHydrate/page";
import Link from "next/link";

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CartIcon = ({ itemCount, isScrolled }) => {
  const color = isScrolled ? "text-black dark:text-white" : "text-white";

  return (
    <div className={`relative ${color}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>

      {itemCount > 0 && (
        <span
          className={`absolute -top-1 -right-1 text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center 
          ${isScrolled ? "bg-[#A0845F] text-white" : "bg-white text-[#A0845F]"}`}
        >
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default function RestanHeader({ accentColor = "#A0845F" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = isScrolled
    ? "bg-white dark:bg-[#111] border-b border-black/10 dark:border-white/10"
    : "bg-transparent";

  const textColor = isScrolled ? "text-black dark:text-white" : "text-white";
  const logoStyle = isScrolled
    ? " brightness-0 dark:brightness-100 dark:brightness-100"
    : "brightness-100";

  const NavLinks = () => (
    <div className="flex flex-col lg:flex-row lg:space-x-8 font-semibold">

      <Link href="/" className={`${textColor} hover:text-[${accentColor}] px-3 py-2`}>
        Home <span className="text-sm">˅</span>
      </Link>

      <div className="relative group">
        <span className={`${textColor} px-3 py-2 cursor-pointer flex`}>
          Pages <span className="text-sm ml-1">˅</span>
        </span>

        <div className="absolute left-0 top-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
            bg-white dark:bg-[#222] text-black dark:text-white shadow-xl rounded-lg w-48 py-2 transition-all">
          <Link href="/aboutus" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            About Us
          </Link>
          <Link href="/chef" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            Chef
          </Link>
        </div>
      </div>

      <div className="relative group">
        <span className={`${textColor} px-3 py-2 cursor-pointer flex`}>
          Menu <span className="text-sm ml-1">˅</span>
        </span>

        <div className="absolute left-0 top-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
            bg-white dark:bg-[#222] text-black dark:text-white shadow-xl rounded-lg w-48 py-2 transition-all">
          <Link href="/menu" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            Menu Style One
          </Link>
          <Link href="/menu" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            Menu Style Two
          </Link>
        </div>
      </div>

      <div className="relative group">
        <span className={`${textColor} px-3 py-2 cursor-pointer flex`}>
          Blog <span className="text-sm ml-1">˅</span>
        </span>

        <div className="absolute left-0 top-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
            bg-white dark:bg-[#222] text-black dark:text-white shadow-xl rounded-lg w-48 py-2 transition-all">
          <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            Blog Standard
          </Link>
          <Link href="/blog2" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            Blog Single
          </Link>
        </div>
      </div>

      <div className="relative group">
        <span className={`${textColor} px-3 py-2 cursor-pointer flex`}>
          Shop <span className="text-sm ml-1">˅</span>
        </span>

        <div className="absolute left-0 top-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
            bg-white dark:bg-[#222] text-black dark:text-white shadow-xl rounded-lg w-48 py-2 transition-all">
          <Link href="/order" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            Shop
          </Link>
          <Link href="/shop-single" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            Shop Single
          </Link>
        </div>
      </div>
    </div>
  );

  const MobileMenu = () => (
    <div
      className={`lg:hidden transition-all duration-300 ${
        mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
      } overflow-hidden bg-white/90 dark:bg-black/90 rounded-md px-4 py-4 mt-3`}
    >
      <NavLinks />
      <button className={`w-full mt-4 py-3 text-white rounded-md font-bold uppercase bg-[${accentColor}]`}>
        Reservation
      </button>
    </div>
  );

  return (
    <SafeHydrate>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all ${navBg}`}>

        <div
          className={`hidden md:block w-full transition-all duration-300 
          ${isScrolled ? "opacity-0 invisible" : "opacity-100 visible"}`}
          style={{ backgroundColor: "#8B735C" }}
        >
          <div className="max-w-[1200px] mx-auto px-6 py-3 flex justify-between text-white text-sm">

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>Phone: +4733378901</span>
              </div>

              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span>Email: food@restan.com</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 cursor-pointer">
                <span className="w-5 h-5 border border-white rounded-full"></span>
                <span>English</span>
                <span>⌄</span>
              </div>

              <div className="h-4 w-px bg-white/50"></div>

              <div className="flex items-center space-x-3">
                <span>f</span>
                <span>x</span>
                <span>y</span>
                <span>in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 py-4">
          <div className="flex justify-between items-center h-16">

            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
              className={`h-10 transition-all ${isScrolled ? "h-8" : "h-10"} ${logoStyle}`}
            />

            <div className="hidden lg:flex items-center space-x-8">
              <NavLinks />
              <CartIcon itemCount={1} isScrolled={isScrolled} />
              <button className={`px-5 py-3 text-white bg-[${accentColor}] rounded-md uppercase`}>
                Reservation
              </button>
            </div>

            <div className="flex lg:hidden items-center space-x-4">
              <CartIcon itemCount={1} isScrolled={isScrolled} />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={textColor}
              >
                <MenuIcon />
              </button>
            </div>
          </div>

          <MobileMenu />
        </div>
      </header>
    </SafeHydrate>
  );
}
