"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import SafeHydrate from "../SafeHydrate/page";



const Navbar = ({ isSticky }) => {
  const navBgClass = isSticky
    ? "bg-gray-900 dark:bg-gray-900 shadow-lg"
    : "bg-transparent";


    return (
        <SafeHydrate>
        
         <div
        className={`fixed left-0 right-0 z-40 flex justify-center px-0 transition-all duration-300 ${
          isSticky ? "top-0" : "top-[38px]"
        }`}
      >
        <div
          className={`w-full ${navBgClass} transition-colors duration-500 py-8`}>
            <div className="max-w-[1200px] mx-auto px-6 flex flex-row justify-between items-center relative">
          <div className="hidden lg:flex flex-row  space-x-12">
            <a
              href="/"
              className="font-medium text-base text-white dark:text-gray-300 hover:text-[#A0845F] transition duration-300"
            >
              Home <span className="text-sm">˅</span>
            </a>
            
                <div className="relative group">
                <Link
                  href="/aboutus"
                  className="text-white dark:text-gray-300 font-medium text-base hover:text-[#A0845F] transition"
                >
                  Pages <span className="text-sm">˅</span>
                </Link>

                <div
                  className="absolute left-0 top-8 opacity-0 group-hover:opacity-100 group-hover:visible invisible 
                             bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl rounded-lg w-56 py-2 
                             transition-all duration-300 ease-in-out delay-150"
                >
                  <Link href="/aboutus" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    About Us
                  </Link>
                  <Link href="/chef" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Chef
                  </Link>
                  </div>
                  </div>
              
            <div className="relative group">
                <Link
                  href="/menu"
                  className="text-white dark:text-gray-300 font-medium text-base hover:text-[#A0845F] transition"
                >
                  Menu <span className="text-sm">˅</span>
                </Link>

                <div
                  className="absolute left-0 top-8 opacity-0 group-hover:opacity-100 group-hover:visible invisible 
                             bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl rounded-lg w-48 py-2 
                             transition-all duration-300 ease-in-out delay-150"
                >
                  <Link href="/menu" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Menu Style one
                  </Link>
                  <Link href="/menu" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Menu Style two
                  </Link>
                  </div>
                  </div>
          </div>
          <div className="absolute hidden sm:block  left-1/2 transform -translate-x-1/2 flex items-center justify-center">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
              className="h-[50px] brightness-0 invert"
              alt="Restan Bistro Logo"
            />
          </div>
          <div className="hidden lg:flex flex-row space-x-12 ml-auto">
           <div className="relative group">
                <Link
                  href="/blog"
                  className="text-white dark:text-gray-300 font-medium text-base hover:text-[#A0845F] transition"
                >
                  Blog <span className="text-sm">˅</span>
                </Link>

                <div
                  className="absolute left-0 top-8 opacity-0 group-hover:opacity-100 group-hover:visible invisible 
                             bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl rounded-lg w-48 py-2 
                             transition-all duration-300 ease-in-out delay-150"
                >
                  <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Blog Standard
                  </Link>
                  <Link href="/blog2" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Blog Single
                  </Link>
                  </div>
                  </div>


                   <div className="relative group">
                <Link
                  href="/order"
                  className="text-white dark:text-gray-300 font-medium text-base hover:text-[#A0845F] transition"
                >
                  Shop <span className="text-sm">˅</span>
                </Link>

                <div
                  className="absolute left-0 top-8 opacity-0 group-hover:opacity-100 group-hover:visible invisible 
                             bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl rounded-lg w-48 py-2 
                             transition-all duration-300 ease-in-out delay-150"
                >
                  <Link href="/order" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Shop
                  </Link>
                  <Link href="/shop-single" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Shop Single
                  </Link>
                  </div>
                  </div>
            


            <a
              href="/contactus"
              className="font-medium text-base text-white dark:text-gray-300 hover:text-[#A0845F] transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
        </div>
      </div>
        </SafeHydrate>
            );
}

export default Navbar;