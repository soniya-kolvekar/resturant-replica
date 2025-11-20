"use client";
import React, { useState, useEffect } from 'react';
import RestanHeader from '../components/RestanHeader/page.js';
import RestanFooter from '../components/RestanFooter/page.js';
import MenuCard from '../components/MenuCard/page.js';
import SafeHydrate from '../components/SafeHydrate/page.js';



const GridIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
);
const ListIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);


const mockMenuData = [
    {
        id: 1,
        name: "Margherita Pizza",
        categories: "CHEESE, PIZZA",
        price: 12.00,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F1.png&w=1080&q=75",
        onSale: false
    },
    {
        id: 2,
        name: "Margherita Pizza",
        categories: "CREAMY, BURGER",
        price: 9.00,
        salePrice: 8.00,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F2.png&w=1080&q=75",
        onSale: true
    },
    {
        id: 3,
        name: "Grilled Flank Steak",
        categories: "BEEF, STEAK",
        price: 14.00,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F3.png&w=1080&q=75",
        onSale: false
    },
    {
        id: 4,
        name: "Barbecue Chicken",
        categories: "BBQ, MEAT",
        price: 8.00,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F5.png&w=1080&q=75",
        onSale: false
    },
    {
        id: 5,
        name: "Vegetable Roll",
        categories: "FOOD, ROLL",
        price: 25.00,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F8.png&w=1080&q=75",
        onSale: false
    },
    {
        id: 6,
        name: "Creamy Pasta",
        categories: "PASTA, SPICY",
        price: 18.00,
        salePrice: 13.00,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F6.png&w=1080&q=75",
        onSale: true
    },
    {
        id: 7,
        name: "Chicken Shawarma",
        categories: "MEAT, SHAWARMA",
        price: 3.00,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F7.png&w=1080&q=75",
        onSale: false
    },
    {
        id: 8,
        name: "Submarine Sandwich",
        categories: "SANDWICH, CHICKEN",
        price: 6.00,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F4.png&w=1080&q=75",
        onSale: false
    },
];

const OrderPage = () => {

    const accentColor = "#A0845F";
    const [menuLayout, setMenuLayout] = useState('grid');

    
    const HeroSection = () => (
        <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] bg-black text-white overflow-hidden">
            <RestanHeader accentColor={accentColor} />

            <img
                src="https://restan-nextjs.vercel.app/assets/img/shape/5.jpg"
                alt="Assortment of sushi dishes"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"></div>

            <div className="relative w-full h-full flex flex-col items-center justify-center pt-24 text-center px-4">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Cormorant Garamond'] font-extrabold mb-4">
                    Special Food
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/70">
                     <a href="#" className='style={{ color: "#fff"}}'>Home</a> &gt; shop
                </p>
            </div>
        </div>
    );

    const MenuControls = () => (
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div className="flex space-x-2">
                <button
                    onClick={() => setMenuLayout('grid')}
                    className={`p-3 rounded-lg border transition duration-150 ${
                        menuLayout === 'grid'
                            ? `bg-[${accentColor}] border-[${accentColor}] text-white`
                            : 'bg-white dark:bg-transparent border-gray-300 dark:border-white/20 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-[#222]'
                    }`}
                    aria-label="Grid View"
                >
                    <GridIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={() => setMenuLayout('list')}
                    className={`p-3 rounded-lg border transition duration-150 ${
                        menuLayout === 'list'
                            ? `bg-[${accentColor}] border-[${accentColor}] text-white`
                            : 'bg-white dark:bg-transparent border-gray-300 dark:border-white/20 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-[#222]'
                    }`}
                    aria-label="List View"
                >
                    <ListIcon className="w-5 h-5" />
                </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-700 dark:text-white/70 text-sm">
                <span className="text-center sm:text-left">Showing 1–8 of 20 results</span>
                <select className={`bg-white dark:bg-[#1b1b1b] border border-gray-300 dark:border-white/20 rounded-lg p-2 focus:ring-1 focus:ring-[${accentColor}] focus:border-[${accentColor}] transition`}>
                    <option>Sort by latest</option>
                    <option>Sort by recent</option>
                    <option>Sort by popular</option>
                    <option>Sort by relevant</option>
                </select>
            </div>
        </div>
    );

    const PaginationControls = () => (
        <div className="flex justify-center items-center space-x-2 mt-12 text-sm">
            <button className="p-3 rounded-full text-gray-700 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-[#222] transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>

            <span className={`w-9 h-9 flex items-center justify-center rounded-full font-bold transition duration-200 bg-[${accentColor}] text-white shadow-md`}>
                1
            </span>

            {[2, 3].map(page => (
                <button
                    key={page}
                    className="w-9 h-9 flex items-center justify-center rounded-full font-bold transition duration-200 bg-white dark:bg-[#1b1b1b] text-gray-700 dark:text-white border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-[#222]"
                >
                    {page}
                </button>
            ))}

            <button className="p-3 rounded-full text-gray-700 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-[#222] transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
    );

    return (
        <SafeHydrate>  
        <div className="min-h-screen bg-white dark:bg-[#111111] transition-colors duration-300">
            <HeroSection />

            <main className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <MenuControls />

                <div
                    className={
                        menuLayout === 'grid'
                            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
                            : "grid grid-cols-1 md:grid-cols-2 gap-8"
                    }
                >
                    {mockMenuData.map(item => (
                        <MenuCard
                            key={item.id}
                            item={item}
                            layout={menuLayout}
                            accentColor={accentColor}
                        />
                    ))}
                </div>

                <PaginationControls />
            </main>

            <RestanFooter />
            
            <div className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition duration-300 text-gray-700 dark:text-white z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span className="text-xl">↑</span>
            </div>
        </div>
        </SafeHydrate>  
        
    );
};

export default OrderPage;
