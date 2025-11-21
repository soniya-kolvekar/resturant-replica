"use client";
import React, { useState, useRef } from 'react';
import RestanHeader from '../components/RestanHeader/page.js';
import RestanFooter from '../components/RestanFooter/page.js';
import SafeHydrate from '../components/SafeHydrate/page.js';

const relatedProducts = [
    {
        id: 1,
        name: "Margherita Pizza",
        category: "CREAMY, BURGER",
        price: "$8.00",
        oldPrice: "$5.00",
        image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F1.png&w=1080&q=75",
        badge: "SALE"
    },
    {
        id: 2,
        name: "Grilled Flank Steak",
        category: "BEEF, STEAK",
        price: "$14.00",
        image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F3.png&w=1080&q=75"
    },
    {
        id: 3,
        name: "Barbecue Chicken",
        category: "BBQ, MEAT",
        price: "$8.00",
        image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F5.png&w=1080&q=75"
    },
    {
        id: 4,
        name: "Vegetable Roll",
        category: "FOOD, ROLL",
        price: "$25.00",
        image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F8.png&w=1080&q=75"
    },
    {
        id: 5,
        name: "Creamy Pasta",
        category: "PASTA, SPICY",
        price: "$18.00",
        oldPrice: "$22.00",
        image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F6.png&w=1080&q=75",
    },
    {
        id: 6,
        name: "Chicken Shawarma",
        category: "MEAT, WRAP",
        price: "$3.00",
        image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F7.png&w=1080&q=75"
    },
    {
        id: 7,
        name: "Submarine Sandwich",
        category: "SANDWICH",
        price: "$6.00",
        image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F4.png&w=1080&q=75"
    },
    {
        id: 8,
        name: "Seafood Pizza",
        category: "SEAFOOD, PIZZA",
        price: "$15.00",
        image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F1.png&w=1080&q=75"
    }
];
const reviews = [
    {
        id: 1,
        name: "Aleesha Brown",
        date: "April 8, 2021",
        rating: 4.5,
        comment: "Highly recommended. Will purchase more in future.",
        avatar: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=256&q=75"
    },
    {
        id: 2,
        name: "Sarah Albert",
        date: "April 8, 2021",
        rating: 5,
        comment: "Great product quality!",
        avatar: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F2.jpg&w=256&q=75"
    }
];
const StarRating = ({ rating }) => {
    return (
        <div className="flex text-[#FFB800] text-sm">
            {[...Array(5)].map((_, i) => (
                <span key={i}>{i < Math.floor(rating) ? "★" : i < rating ? "★" : "☆"}</span>
            ))}
        </div>
    );
};
const ProductCard = ({ product }) => (
    <div className="group bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-800 transition-all hover:shadow-xl h-full flex flex-col">
        <div className="relative mb-6 h-48 flex items-center justify-center overflow-hidden shrink-0">
            {product.badge && (
                <span className="absolute top-0 left-0 bg-[#A0845F] text-white text-[10px] font-bold px-3 py-1 rounded-full z-10">
                    {product.badge}
                </span>
            )}
            <img 
                src={product.image} 
                alt={product.name} 
                className="w-40 h-40 object-contain transition-transform duration-500 group-hover:scale-110" 
            />
        </div>
        <div className="flex-grow flex flex-col justify-end">
            <p className="text-xs text-gray-500 uppercase mb-2">{product.category}</p>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white font-['Cormorant_Garamond'] mb-2">
                {product.name}
            </h3>
            <div className="flex justify-center gap-3 text-[#A0845F] font-bold font-['Cormorant_Garamond'] text-lg mb-4">
                {product.oldPrice && <span className="text-gray-400 line-through">{product.oldPrice}</span>}
                <span>{product.price}</span>
            </div>
            <button className="flex items-center justify-center gap-2 mx-auto border border-[#A0845F] text-gray-900 dark:text-white px-6 py-3 rounded-full text-xs font-bold uppercase hover:bg-[#A0845F] hover:text-white transition-colors w-full sm:w-auto">
                <span>🛍️</span> ADD TO CART
            </button>
        </div>
    </div>
);
const ShopSinglePage = () => {
    const accentColor = "#A0845F";
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('review');
    const [mainImage, setMainImage] = useState("https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F1.png&w=1080&q=75");
    const sliderRef = useRef(null);

    const slideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const slideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };
    const HeroSection = () => (
  <div className="relative w-full h-[40vh] min-h-[300px] md:h-[550px] bg-black text-white overflow-hidden">
    <RestanHeader accentColor={accentColor} />
    <img
      src="https://restan-nextjs.vercel.app/assets/img/shape/5.jpg"
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover opacity-90"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"></div>
    <div className="relative w-full h-full flex flex-col items-center justify-center pt-16 px-4 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-['Cormorant_Garamond'] font-extrabold mb-2 md:mb-4 tracking-tight leading-tight">
        Shop Single
      </h2>
      <p className="text-xs sm:text-sm md:text-lg text-white/70 font-light tracking-wide">
        <a href="/" className='hover:text-[#A0845F] transition-colors'>Home</a> &gt; shop-single
      </p>
    </div>
  </div>
);
    return (
        <SafeHydrate>
            <div className="min-h-screen bg-white dark:bg-[#111111] text-gray-800 dark:text-gray-200 font-sans transition-colors duration-500">
                <HeroSection />
<main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-24">
                        <div className="w-full">
                            <div className="relative bg-[#f4f4f4] dark:bg-[#1a1a1a] rounded-xl p-8 mb-4 flex items-center justify-center h-[350px] sm:h-[500px]">
                                <span className="absolute top-6 left-6 bg-[#8d7350] text-white text-sm font-bold px-4 py-2 rounded-full">
                                    -16%
                                </span>
                                <img src={mainImage} alt="Main Product" className="max-w-full max-h-full object-contain drop-shadow-2xl animate-fade-in" />
                            </div>
                            <div className="grid grid-cols-4 gap-3 sm:gap-4">
                                {[
                                   "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F1.png&w=1080&q=75",
                                    "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F2.png&w=1080&q=75",
                                    "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F3.png&w=1080&q=75",
                                    "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F4.png&w=1080&q=75"
                                ].map((img, idx) => (
                                    <div 
                                        key={idx} 
                                        onClick={() => setMainImage(img)}
                                        className={`bg-[#f4f4f4] dark:bg-[#1a1a1a] rounded-lg p-2 cursor-pointer transition-all border-2 ${mainImage === img ? 'border-[#A0845F]' : 'border-transparent hover:border-gray-300'}`}
                                    >
                                        <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-16 sm:h-24 object-contain" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="pt-2 lg:pt-4">
                            <p className="text-gray-500 text-sm mb-2 tracking-wide">Cheese, Pizza</p>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Cormorant_Garamond'] text-gray-900 dark:text-white mb-4">
                                Margherita Pizza
                            </h1>
                            <p className="text-3xl font-bold text-[#A0845F] font-['Cormorant_Garamond'] mb-6">
                                $12.00
                            </p>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="bg-[#f4f4f4] dark:bg-[#222] text-gray-600 dark:text-gray-300 px-3 py-1 rounded text-xs font-bold flex items-center gap-1">
                                    <span className="text-[#A0845F]">✔</span> In Stock
                                </span>
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 border-b border-gray-200 dark:border-gray-800 pb-8 text-sm sm:text-base">
                                The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.
                            </p>

                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <button 
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-4 py-4 hover:bg-gray-100 dark:hover:bg-[#222] transition"
                                    >-</button>
                                    <input 
                                        type="number" 
                                        value={quantity}
                                        readOnly
                                        className="w-12 p-2 bg-transparent text-center font-bold outline-none"
                                    />
                                    <button 
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-4 py-4 hover:bg-gray-100 dark:hover:bg-[#222] transition"
                                    >+</button>
                                </div>
                                
                                <button className="bg-[#A0845F] hover:bg-[#8a6e48] text-white px-8 py-4 rounded font-bold flex items-center gap-2 transition-colors shadow-lg flex-grow sm:flex-grow-0 justify-center">
                                    🛒 Add To Cart
                                </button>
                                <button className="p-4 border border-gray-300 dark:border-gray-700 rounded hover:text-[#A0845F] hover:border-[#A0845F] transition-colors">
                                    ♡
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mb-24">
                        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 border-b border-gray-200 dark:border-gray-800 mb-10">
                            {['Description', 'Additional Information', 'Review'].map((tab) => {
                                const tabKey = tab.toLowerCase().split(' ')[0];
                                return (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tabKey)}
                                        className={`pb-4 text-base sm:text-lg font-semibold transition-all relative ${
                                            activeTab === tabKey 
                                            ? 'text-[#A0845F]' 
                                            : 'text-gray-500 hover:text-gray-800 dark:hover:text-white'
                                        }`}
                                    >
                                        {tab}
                                        {activeTab === tabKey && (
                                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#A0845F]"></span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="max-w-4xl mx-auto animate-fade-in">
                            {activeTab === 'description' && (
                                <div className="text-gray-600 dark:text-gray-400 leading-loose text-sm sm:text-base">
                                    <p className="mb-4">There is immense scope for organic production of vegetable crops in India since the agricultural sector has enormous organic resources like crop residues, livestock and other bio-products from agro industries.</p>
                                    <ul className="space-y-2 pl-4">
                                        <li>✓ Status of organic vegetable production</li>
                                        <li>✓ Feasibility of organic practices</li>
                                        <li>✓ Sustainability of organic farming</li>
                                    </ul>
                                </div>
                            )}

                            {activeTab === 'additional' && (
                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm sm:text-base">
                                    <div className="grid grid-cols-3 border-b border-gray-200 dark:border-gray-700">
                                        <div className="col-span-1 p-4 font-bold bg-gray-50 dark:bg-[#1a1a1a]">Weight</div>
                                        <div className="col-span-2 p-4 text-gray-600 dark:text-gray-400">240 Ton</div>
                                    </div>
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-1 p-4 font-bold bg-gray-50 dark:bg-[#1a1a1a]">Dimensions</div>
                                        <div className="col-span-2 p-4 text-gray-600 dark:text-gray-400">20 × 30 × 40 cm</div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'review' && (
                                <div>
                                    <h3 className="text-2xl font-bold font-['Cormorant_Garamond'] mb-8">
                                        1 review for “Fresh Red Seedless”
                                    </h3>
                                    <div className="space-y-8 mb-12">
                                        {reviews.map(review => (
                                            <div key={review.id} className="flex gap-4 sm:gap-6">
                                                <img src={review.avatar} alt={review.name} className="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover" />
                                                <div>
                                                    <StarRating rating={review.rating} />
                                                    <p className="text-xs text-gray-400 my-1">{review.date}</p>
                                                    <h4 className="text-lg font-bold mb-1">{review.name}</h4>
                                                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{review.comment}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="flex justify-between items-end mb-10">
                            <h2 className="text-3xl sm:text-4xl font-bold font-['Cormorant_Garamond']">Related Products</h2>
                            <div className="flex gap-2">
                                <button 
                                    onClick={slideLeft}
                                    className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-[#A0845F] hover:text-white hover:border-[#A0845F] transition-all"
                                >
                                    ←
                                </button>
                                <button 
                                    onClick={slideRight}
                                    className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-[#A0845F] hover:text-white hover:border-[#A0845F] transition-all"
                                >
                                    →
                                </button>
                            </div>
                        </div>
                        <div 
                            ref={sliderRef}
                            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth pb-8 hide-scrollbar"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {relatedProducts.map(product => (
                                <div key={product.id} className="min-w-[260px] sm:min-w-[300px] md:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)] snap-start h-auto">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    </div>

                </main>

                <RestanFooter />

                <div className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition duration-300 text-gray-700 dark:text-white z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="text-xl">↑</span>
                </div>
            </div>
        </SafeHydrate>
    );
};

export default ShopSinglePage;