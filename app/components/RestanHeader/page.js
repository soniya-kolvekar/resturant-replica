"use client";
import React, { useState, useEffect } from 'react';
import SafeHydrate from '../SafeHydrate/page';
import Link from "next/link";


const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);
const CartIcon = ({ itemCount, isScrolled }) => {
    
    const iconColor = isScrolled ? 'text-black dark:text-white' : 'text-white dark:text-white';
    
    return (
        <SafeHydrate>
        <div className={`relative ${iconColor}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {itemCount > 0 && (
                <span className={`absolute -top-1 -right-1 text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center 
                                 ${isScrolled ? 'bg-[#A0845F] text-white' : 'bg-white text-[#A0845F]'}`}>
                    {itemCount}
                </span>
            )}
        </div>
        </SafeHydrate>
    );
};


const RestanHeader = ({ accentColor = '#A0845F' }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isDark = !isScrolled;

    const navClasses = `
        fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-md 
        ${isDark 
            ? 'bg-transparent dark:bg-transparent' 
            : 'bg-white dark:bg-[#111111] border-b border-gray-200 dark:border-white/10'
        }
    `;

  
    const textColorClass = isScrolled ? 'text-black dark:text-white' : 'text-white dark:text-white';
    const logoFilter = isScrolled ? 'filter brightness-0 dark:brightness-100 invert-0 dark:invert' : 'filter brightness-100 invert-0'; 

    const linkClass = `px-3 py-2 text-sm font-medium transition duration-200 hover:text-[${accentColor}]`;
    const buttonClass = `px-5 py-3 text-sm font-bold uppercase rounded-md transition duration-300 shadow-lg`;
    
  const TopCtaBar = ({ accentColor, isScrolled }) => (
    
    <div
  className={`py-3 text-white text-sm ${isScrolled ? 'hidden' : 'block'}`}
  style={{ backgroundColor: '#8B735C' }}
    >
       
        <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center">
            
          
            <div className="flex items-center space-x-6"> 
                
              
                <div className="flex items-center space-x-1">
                   
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Phone: +4733378901</span>
                </div>

              
                <div className="flex items-center space-x-1">
                  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Email: food@restan.com</span>
                </div>
            </div>

   
            <div className="flex items-center space-x-4"> 
                
                <div className="flex items-center space-x-1 cursor-pointer">
     
                    <span className="w-5 h-5 rounded-full overflow-hidden inline-block border border-white">
                                            </span>
                    <span>English</span>
                    <span className="ml-1 text-lg">∨</span> 
                </div>

                <div className="h-6 w-px bg-white/50"></div> 

                
                <div className="flex items-center space-x-3"> 
                    <a href="#" className="hover:text-gray-300">f</a>
                    <a href="#" className="hover:text-gray-300">x</a>
                    <a href="#" className="hover:text-gray-300">y</a>
                    <a href="#" className="hover:text-gray-300">in</a>
                </div>
            </div>
        </div>
    </div>
);


    const NavLinks = () => (
    <nav
        className={`flex flex-col lg:flex-row lg:items-center text-m font-bold 
        space-y-2 lg:space-y-0 lg:space-x-8 
        ${isMobileMenuOpen ? 'p-4 lg:p-0' : 'hidden lg:flex'}`}
    >

        <Link href="/" className={`${linkClass} ${textColorClass}`}>
            Home <span className="text-sm">˅</span>
        </Link>

        <div className="relative group">
            <Link href="/aboutus" className={`${linkClass} ${textColorClass}`}>
                Pages <span className="text-sm">˅</span>
            </Link>

            <div
                className="absolute left-0 top-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl rounded-lg w-56 py-2
                transition-all duration-300 ease-in-out"
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
            <Link href="/menu" className={`${linkClass} ${textColorClass}`}>
                Menu <span className="text-sm">˅</span>
            </Link>

            <div
                className="absolute left-0 top-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl rounded-lg w-48 py-2
                transition-all duration-300 ease-in-out"
            >
                <Link href="/menu" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Menu Style One
                </Link>
                <Link href="/menu" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Menu Style Two
                </Link>
            </div>
        </div>

        <div className="relative group">
            <Link href="/blog" className={`${linkClass} ${textColorClass}`}>
                Blog <span className="text-sm">˅</span>
            </Link>

            <div
                className="absolute left-0 top-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl rounded-lg w-48 py-2
                transition-all duration-300 ease-in-out"
            >
                <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Blog Standard
                </Link>
                <Link href="/blog2" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Blog Single
                </Link>
            </div>
        </div>

        <Link href="/order" className={`${linkClass} ${textColorClass}`}>
            Shop <span className="text-sm">˅</span>
        </Link>

        <Link href="/contactus" className={`${linkClass} ${textColorClass}`}>
            Contact Us
        </Link>
    </nav>
);


    return (
        <SafeHydrate>
        <header className={navClasses}>
            
            <TopCtaBar />

            <div className="max-w-[1200px] mx-auto px-4 py-4">
                <div className="flex justify-between items-center h-16">
                    
                   
                    <div className="flex items-center space-x-3">

                        <img 
                            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" 
                            alt="Restan Logo" 
                            className={`h-10 transition duration-300 ${isScrolled ? 'h-8' : 'h-10'} ${logoFilter}`}
                        />
                    
                    </div>


                    <div className="hidden lg:flex items-center space-x-8">
                        <NavLinks />

                        <a href="/order" className={`relative transition duration-300 hover:scale-105`}>
                             <CartIcon itemCount={1} isScrolled={isScrolled} />
                        </a>

                        <button className={`${buttonClass} text-white bg-[${accentColor}] hover:bg-opacity-90`}>
                            Reservation
                        </button>
                    </div>

                    <div className="lg:hidden flex items-center space-x-4">

                        <a href="/order" className={`relative transition duration-300 hover:scale-105`}>
                             <CartIcon itemCount={1} isScrolled={isScrolled} />
                        </a>

                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`${textColorClass} hover:text-[${accentColor}] p-2 rounded-md`}
                            aria-label="Toggle Menu"
                        >
                            <MenuIcon />
                        </button>
                    </div>
                </div>

                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden ${isScrolled ? 'bg-white dark:bg-[#111111]' : 'bg-black/90 dark:bg-black/90'} mt-2 rounded-md shadow-xl`}>
                    <NavLinks />
                    <div className="p-4 pt-0">
                        <button className={`w-full ${buttonClass} text-white bg-[${accentColor}] mt-2`}>
                            Reservation
                        </button>
                    </div>
                </div>
            </div>
        </header>
        </SafeHydrate>
    );
};

export default RestanHeader;
