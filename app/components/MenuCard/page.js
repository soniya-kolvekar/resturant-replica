"use client";
import React from 'react';
import SafeHydrate from '../SafeHydrate/page.js';


const MenuCard = ({ item = {}, layout = 'grid', accentColor = '#A0845F' }) => {

    const { 
        id = 0, 
        name = "Unknown Dish", 
        categories = "CATEGORY", 
        price = 0.00, 
        salePrice, 
        imageUrl 
    } = item;

    const handleAddToCart = () => {
        console.log(`Adding item ${name} (ID: ${id}) to cart.`);
    };

    const PriceDisplay = () => (
        <div className="flex items-center space-x-2">
     
            <span 
                className={`font-extrabold text-lg transition-colors duration-300 ${
                    salePrice ? `text-black dark:text-[${accentColor}]` : 'text-black dark:text-white'
                }`}
                style={{ color: salePrice ? accentColor : (layout === 'grid' ? '#222' : '#000') }}
            >
                ${(salePrice || price).toFixed(2)}
            </span>
       
            {salePrice && (
                <span className="text-sm text-gray-400 dark:text-gray-500 line-through">
                    ${price.toFixed(2)}
                </span>
            )}
        </div>
    );
    
  
    const CartBagIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
    );
    
    const HeartIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current text-gray-300 hover:text-red-500 cursor-pointer transition" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-.318-.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
    );
    
    const SaleTag = () => (
        <div className={`absolute top-4 left-4 bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md ${layout === 'list' ? 'hidden' : 'block'}`}>
            SALE!
        </div>
    );

    if (layout === 'grid') {
        return (
            <SafeHydrate>
            <div className="relative bg-white dark:bg-[#1b1b1b] rounded-xl shadow-lg border border-gray-100 dark:border-white/5 overflow-hidden text-center transition duration-300 hover:shadow-2xl">
                {salePrice && <SaleTag />}
                
               
                <div className="flex justify-center items-center p-8 h-60">
                    <img 
                        src={imageUrl || "https://placehold.co/200x200/EEE/222?text=Dish"} 
                        alt={name}
                        className="max-h-full w-auto object-contain transform hover:scale-105 transition duration-500"
                    />
                </div>
              
                <div className="p-4 pt-0">
                    <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                        {categories}
                    </p>
                    <h4 className="font-['Cormorant Garamond'] font-bold text-xl text-black dark:text-white mb-2">
                        {name}
                    </h4>
                    <div className="flex justify-center mb-4">
                        <PriceDisplay />
                    </div>
                    
                    <button
                        onClick={handleAddToCart}
                        className={`inline-flex items-center justify-center space-x-2 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white hover:bg-[${accentColor}] hover:text-white dark:hover:text-white hover:border-[${accentColor}] transition duration-300 px-6 py-3 rounded-lg text-sm font-semibold uppercase`}
                    >
                        <CartBagIcon />
                        <span>Add To Cart</span>
                    </button>
                </div>
            </div>
            </SafeHydrate>
        );
    }

    return (
        <SafeHydrate>
        <div className="relative bg-white dark:bg-[#1b1b1b] rounded-xl shadow-lg border border-gray-100 dark:border-white/5 text-black dark:text-white transition duration-300 hover:shadow-xl">
            <div className="flex flex-col sm:flex-row items-center p-4">
                
                <div className="flex-shrink-0 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 pr-4 flex justify-center sm:justify-start">
                    {salePrice && <SaleTag />}
                    <img 
                        src={imageUrl || "https://placehold.co/150x150/EEE/222?text=Dish"} 
                        alt={name}
                        className="max-h-32 object-contain transform hover:scale-105 transition duration-500"
                    />
                </div>
                <div className="flex-grow pt-4 sm:pt-0">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                                {categories}
                            </p>
                            <h4 className="font-['Cormorant Garamond'] font-bold text-xl text-black dark:text-white">
                                {name}
                            </h4>
                        </div>
                        
                        <div className="sm:hidden lg:block">
                             <HeartIcon />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <PriceDisplay />
                        <button
                            onClick={handleAddToCart}
                            className={`inline-flex items-center justify-center space-x-2 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white hover:bg-[${accentColor}] hover:text-white dark:hover:text-white hover:border-[${accentColor}] transition duration-300 px-6 py-3 rounded-lg text-sm font-semibold uppercase`}
                        >
                            <CartBagIcon />
                            <span>Add To Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </SafeHydrate>
    );
};

export default MenuCard;
