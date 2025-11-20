"use client";
import React, { useState, useEffect } from 'react';
import RestanFooter from './components/RestanFooter/page.js'
import SafeHydrate from './components/SafeHydrate/page.js';
import Link from "next/link";
import OpeningHoursSection from './components/Video/page.js';

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
            <a
              href="/order"
              className="font-medium text-base text-white dark:text-gray-300 hover:text-[#A0845F] transition duration-300"
            >
              Shop <span className="text-sm">˅</span>
            </a>
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
const BookingForm = () => {
    
        const brownAccent = 'bg-[#A0845F] hover:bg-[#8D7654] text-white';
 

   
    const inputClass = `w-full p-4 border rounded-lg focus:ring-[#A0845F] focus:border-[#A0845F] 
                        dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                        border-gray-300 text-gray-800 placeholder-gray-500 dark:placeholder-gray-400 dark:text-white`;
     const accentColor = '#A0845F';
                        
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowConfirmation(true);

        
        
        
    };

    const ConfirmationModal = () => (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl text-center w-80">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white text-3xl mb-4 ${brownAccent}`}>
                    ✓
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Booking Confirmed!</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Thank you for booking a table with Restan Bistro. We look forward to seeing you.
                </p>
                <button
                    onClick={() => setShowConfirmation(false)}
                    className={`py-2 px-6 font-bold rounded-lg transition duration-300 bg-[#A0845F] hover:bg-[#8D7654] text-white`}
                >
                    Close
                </button>
            </div>
        </div>
    );

     return (
        <SafeHydrate>       <>
            <div className={`bg-white dark:bg-gray-800 shadow-2xl shadow-gray-400/50 dark:shadow-gray-700/50 p-8 rounded-4xl w-full h-full`}>
                <div className="flex flex-col items-center justify-center -translate-y-12">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-bold text-white mb-[-30px] shadow-xl`} style={{ backgroundColor: accentColor }}>
                      <span>🍴</span>
                    </div>
                </div>

                <h2 className="font-extrabold text-3xl text-gray-900 dark:text-white mb-8 text-center -mt-2">Book a table</h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    
                    <input type="tel" placeholder="Phone" className={inputClass} required />
                    <select className={inputClass + ' appearance-none'}>
                        <option>3 Person</option>
                        <option>2 Person</option>
                        <option>4 Person</option>
                    </select>
                    <div className="relative">
                        <input type="date" placeholder="Date" className={inputClass + ' appearance-none'} required />
                        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">📅</span>
                    </div>
                    <select className={inputClass + ' appearance-none'}>
                        <option>12:00 PM</option>
                        <option>6:00 PM</option>
                        <option>7:00 PM</option>
                    </select>

                   
                    <button 
                        type="submit" 
                        className={`w-full py-4 mt-6 font-bold text-lg rounded-xl transition duration-300 bg-[#A0845F] hover:bg-[#8D7654] text-white`}
                    >
                        Book A Table
                    </button>
                </form>
            </div>
            {showConfirmation && <ConfirmationModal />}
        </>
        </SafeHydrate> 
    );
};



const DishCard = ({ dish, accentColor, showAddConfirmation }) => {
    

    return (
        <SafeHydrate>
                  <div className={`rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg dark:shadow-black/50 transition duration-300 hover:shadow-xl`}>
            
            <div className="w-full h-64 overflow-hidden">
                <img 
                    src={dish.img} 
                    alt={dish.name} 
                    className="w-full h-full object-cover" 
                />
            </div>
            
            
            <div className="p-5 text-center flex flex-col items-center">
                
                
                <div className="flex justify-center items-center space-x-3 mb-2">
                    <span className="text-sm font-semibold" style={{ color: accentColor }}>
                        ★ {dish.rating.score} ({dish.rating.reviews}K)
                    </span>
                    <span className="text-sm line-through text-gray-400">${dish.price.toFixed(2)}</span>
                    <span className="text-xl font-bold" style={{ color: accentColor }}>
                        ${dish.discountedPrice.toFixed(2)}
                    </span>
                </div>

                
                <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-3`}>
                    {dish.name}
                </h3>
                
                
                <p className={`text-xs text-gray-600 dark:text-gray-40s0 mb-4`}>
                    {dish.ingredients.join(' • ')}
                </p>

                <button
                    onClick={() => showAddConfirmation(dish.name)}
                    className="w-full max-w-[200px] py-2 px-4 rounded-full font-bold text-sm border-2 transition duration-300 hover:bg-opacity-90"
                    style={{ borderColor: accentColor, color: accentColor }}
                >
                    <span className="flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        Add to Cart
                    </span>
                </button>
            </div>
        </div>
        </SafeHydrate>  
    );
};


const AddToCartModal = ({ dishName, accentColor, closeModal }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md text-center">
            <div className="text-4xl mb-4" style={{ color: accentColor }}>
                🛒
            </div>
            <h3 className="font-extrabold text-2xl text-gray-900 dark:text-white mb-2">
                Item Added!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
                **{dishName}** has been successfully added to your cart.
            </p>
            <button
                onClick={closeModal}
                className="w-full py-3 font-bold text-lg rounded-lg transition duration-300 text-white"
                style={{ backgroundColor: accentColor }}
            >
                Continue Shopping
            </button>
        </div>
    </div>
);



const OurSpecialsMenu = ({ accentColor, accentTextColor }) => {
    
    const [addedDish, setAddedDish] = useState(null);
    const [activeTab, setActiveTab] = useState('main dishes');
    
    
    const dishes = {
        'main dishes': [
            { name: "Braised Chicken Legs", rating: { score: 4.9, reviews: 5.7 }, price: 35, discountedPrice: 34, ingredients: ["4 Chicken Legs", "Chili Sauce", "Soft Drinks"], img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75" },
            { name: "Bone Steak", rating: { score: 4.2, reviews: 3.1 }, price: 25, discountedPrice: 18, ingredients: ["Beef Bone", "Mashed Potatoes", "Wine"], img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F2.jpg&w=1920&q=75" },
            { name: "Fish Tacos with Chipotle Crema", rating: { score: 4.8, reviews: 6.7 }, price: 18, discountedPrice: 12, ingredients: ["White Fish", "Cabbage Slaw", "Crema"], img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F3.jpg&w=1920&q=75" },
            { name: "Broken Lasagna & Parmesan", rating: { score: 5.0, reviews: 3.5 }, price: 38, discountedPrice: 22, ingredients: ["Lasagna Noodle", "Bolognese Sauce", "Cheese"], img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F4.jpg&w=1920&q=75" },
            { name: "Seared Scallops with Butter", rating: { score: 4.6, reviews: 5.7 }, price: 35, discountedPrice: 34, ingredients: ["Scallops", "Asparagus", "Mashed Cauliflower"], img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F5.jpg&w=1920&q=75" },
            { name: "Double-Stack Mushroom", rating: { score: 4.8, reviews: 5.5 }, price: 48, discountedPrice: 36, ingredients: ["Portobello", "Truffle Oil", "Bun"], img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F6.jpg&w=1920&q=75" },
        ],
        'desserts': [
            { name: "Lava Cake", rating: { score: 4.7, reviews: 2.1 }, price: 12, discountedPrice: 9, ingredients: ["Chocolate", "Ice Cream", "Raspberry"], img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F8.jpg&w=1920&q=75" },
        ],
        'sea food': [
            { name: "Grilled Salmon", rating: { score: 4.9, reviews: 5.0 }, price: 30, discountedPrice: 25, ingredients: ["Salmon", "Lemon", "Dill"], img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F13.jpg&w=1920&q=75" },
        ],
        'beverage': [
            { name: "Craft Cocktail", rating: { score: 4.5, reviews: 1.5 }, price: 15, discountedPrice: 10, ingredients: ["Gin", "Tonic", "Lime"], img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F23.jpg&w=1920&q=75" },
        ]
    };

    const handleAddConfirmation = (dishName) => {
        setAddedDish(dishName);
    };
    
    const tabs = ['MAIN DISHES', 'DESSERTS', 'SEA FOOD', 'BEVERAGE'];

    return (
        <SafeHydrate>  
        <div className="relative w-full py-20 bg-white dark:bg-black transition-colors duration-500">
            {addedDish && <AddToCartModal dishName={addedDish} accentColor={accentColor} closeModal={() => setAddedDish(null)} />}

            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6">
                
                
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-4 mb-3">
                        <span className="h-0.5 w-16" style={{ backgroundColor: accentColor }}></span>
                        <p className={`font-semibold text-sm uppercase tracking-widest`} style={{ color: accentColor }}>
                            FOOD MENU
                        </p>
                        <span className="h-0.5 w-16" style={{ backgroundColor: accentColor }}></span>
                    </div>
                    <h2 className={`font-['Cormorant Garamond'] font-extrabold text-4xl sm:text-5xl text-gray-900 dark:text-white`}>
                        Our Specials Menu
                    </h2>
                </div>

                
                <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-16">
                    {tabs.map(tab => {
                        const isActive = activeTab === tab.toLowerCase();
                        const activeClasses = isActive 
                            ? `bg-[#A0845F] text-white` 
                            : `bg-transparent text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700`;
                        
                        return (
                            <button 
                                key={tab}
                                onClick={() => setActiveTab(tab.toLowerCase())}
                                className={`py-3 px-6 rounded-full font-bold text-sm uppercase transition duration-300 ${activeClasses}`}
                            >
                                {tab}
                            </button>
                        );
                    })}
                </div>

               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                   
                    {dishes[activeTab] && dishes[activeTab].map((dish, index) => (
                        <DishCard 
                            key={index} 
                            dish={dish} 
                            accentColor={accentColor} 
                            showAddConfirmation={handleAddConfirmation}
                        />
                    ))}
                </div>

            </div>
        </div>
        </SafeHydrate>  
    );
};


export default function RestanBistroLanding() {
    const [isSticky, setIsSticky] = useState(false); 
    const [isHovering, setIsHovering] = useState(false);
   
    useEffect(() => {
        const handleScroll = () => {
            
            setIsSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const accentColor = '#A0845F'; 
    const accentTextColor = 'text-[#A0845F]';
    
    const brownAccentClass = 'bg-[#A0845F] hover:bg-[#8D7654] text-white'; 
    const brownTextClass = 'text-[#A0845F]';

    return (
        <SafeHydrate>  
       
        <div className="relative min-h-screen w-full font-['Inter'] bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-500">
            
           
            <div className="relative min-h-screen w-full font-['Inter'] bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-500">
                
                
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <img 
                        src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?w=360" 
                        alt="Restan Bistro Interior" 
                        className="w-full h-full object-cover object-center"
                    />
                   
                    <div className="absolute inset-0 bg-black/60"></div> 
                </div>
                
                <div
                    className={`hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center w-full py-2 text-m border-b border-white/20 transition-opacity duration-300 ${
                    isSticky ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
                >
                    <div className="max-w-[1200px] w-full flex justify-between px-6 text-white/80 items-center">
                    <div className="flex space-x-6">
                        <span>📞 Phone: +4733378901</span>
                        <span>✉️ Email: food@restan.com</span>
                    </div>
                    <span className="hidden sm:block">
                        📍 175 10th Street, Office 375 Berlin, De 21562
                    </span>
                    </div>
                </div>

                
                <Navbar isSticky={isSticky} />

                
                <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh)] px-4 text-center pt-[150px]"> 
                    <h1 className="text-white font-['Cormorant Garamond'] font-extrabold text-5xl sm:text-7xl md:text-8xl leading-none tracking-tight mb-16">
                        Best Restaurant
                    </h1>
                    
                   
                    <div className="relative w-50 h-50 mx-auto rounded-full border-2 border-white/50 flex items-center justify-center text-white text-lg font-bold">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-m font-light uppercase tracking-wide absolute top-8">SINCE</span>
                            <span className="text-4xl font-extrabold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">1865</span>
                            <div className="text-m font-light uppercase tracking-wide absolute bottom-8 flex items-center">
                                BEST <span className="text-base mx-1 text-white">-</span> FOODS 
                            </div>
                            <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-2xl rotate-90 leading-none">
                                &#8599; 
                            </div>
                        </div>
                    </div>
                </div>

                    
                <div className="relative z-20 w-full max-w-[1200px] mx-auto hidden lg:block">
                    <div className="absolute left-[-15px] bottom-[-480px] w-[380px]">
                        <BookingForm />
                    </div>
                </div>
                  
            </div>
            

            <div className="relative z-20 w-full flex justify-center py-10 bg-white dark:bg-gray-950 lg:hidden">
                <div className="w-11/12 max-w-[380px]">
                    <BookingForm />
                </div>
            </div>

            
            <div className="relative w-full py-20 bg-white dark:bg-gray-950">
                <div className="max-w-[1200px] mx-auto px-6">
                    
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
                        
                     
                        <div className="hidden lg:block lg:col-span-1 h-1"></div> 

                        
                        <div className="lg:col-span-2 mt-0">
                            <div className="flex justify-between items-center mb-10">
                                <h2 className="font-extrabold text-4xl text-gray-900 dark:text-white">
                                    🔥 Our Popular category
                                </h2>
                                
                                <div className="flex space-x-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer transition duration-300 bg-[#A0845F] hover:bg-[#8D7654]`}>
                                        <span className="text-xl">←</span>
                                    </div>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer transition duration-300 bg-[#A0845F] hover:bg-[#8D7654]`}>
                                        <span className="text-xl">→</span>
                                    </div>
                                </div>
                            </div>

                           
                            <div className="flex overflow-x-auto space-x-6 pb-4">
                                
                                
                                <div className="flex-shrink-0 w-64 h-80 relative rounded-2xl overflow-hidden shadow-lg group">
                                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F27.jpg&w=1920&q=75" alt="Salmon Fry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="text-sm font-semibold text-[#A0845F]">Sea Food</p>
                                        <h3 className="font-bold text-2xl">Salmon Fry</h3>
                                    </div>
                                </div>
                                
                                
                                <div className="flex-shrink-0 w-64 h-80 relative rounded-2xl overflow-hidden shadow-lg group">
                                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F28.jpg&w=1920&q=75" alt="Hot Chocolate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="text-sm font-semibold text-[#A0845F]">Beverage</p>
                                        <h3 className="font-bold text-2xl">Hot chocolate</h3>
                                    </div>
                                </div>
                                
                               
                                <div className="flex-shrink-0 w-64 h-80 relative rounded-2xl overflow-hidden shadow-lg group">
                                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F25.jpg&w=1920&q=75" alt="Chicken Alfredo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="text-sm font-semibold text-[#A0845F]">Main Dishes</p>
                                        <h3 className="font-bold text-2xl">Chicken Alfredo</h3>
                                    </div>
                                </div>

                                <div className="flex-shrink-0 w-64 h-80 relative rounded-2xl overflow-hidden shadow-lg group">
                                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F26.jpg&w=1920&q=75" alt="Chicken Alfredo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="text-sm font-semibold text-[#A0845F]">Desserts</p>
                                        <h3 className="font-bold text-2xl">Cheese Cake</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div> 
                </div> 
            </div> 
            
           
            <div className={`flex justify-center w-full py-15 bg-white dark:bg-black`}>
                 <div className="w-full max-w-[1200px] px-6 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-0">
                    
                   
                    <div className="relative group flex flex-col items-start p-8 transition duration-300">
                        
                        <div className={`w-24 h-24 mb-6 rounded-full flex items-center justify-center text-4xl`}>
                             <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=640&q=75" alt="Ramen Icon" className="w-23 h-23"/>
                        </div>
                        <h3 className="font-extrabold text-2xl text-gray-900 dark:text-white mb-3">
                            Quality Foods
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                            Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.
                        </p>
                        
                        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700 transform skew-y-6"></div>
                        
                        <div className="absolute top-0 left-0 right-0 h-px bg-gray-300 dark:bg-gray-700 lg:hidden"></div>
                    </div>

                   
                    <div className="relative group flex flex-col items-start p-8 transition duration-300 border-t-2 border-b-2 border-gray-300 dark:border-gray-700 lg:border-none">
                       
                        <div className={`w-24 h-24 mb-6 rounded-full flex items-center justify-center text-4xl`}>
                             <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=640&q=75" alt="Delivery Truck Icon" className="w-23 h-23"/>
                        </div>
                        <h3 className="font-extrabold text-2xl text-gray-900 dark:text-white mb-3">
                            Fast Delivery
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                            Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.
                        </p>
                        
                        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700 transform skew-y-6"></div>
                        
                        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700 transform -skew-y-6"></div>
                    </div>

                    
                    <div className="relative group flex flex-col items-start p-8 transition duration-300">
                       
                        <div className={`w-24 h-24 mb-6 rounded-full flex items-center justify-center text-4xl`}>
                             <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F15.png&w=640&q=75" alt="Pizza Icon" className="w-23 h-23"/>
                        </div>
                        <h3 className="font-extrabold text-2xl text-gray-900 dark:text-white mb-3">
                            Delicious Recipes
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                            Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.
                        </p>
                         
                        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700 transform -skew-y-6"></div>
                        
                        <div className="absolute top-0 left-0 right-0 h-px bg-gray-300 dark:bg-gray-700 lg:hidden"></div>
                         
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300 dark:bg-gray-700 lg:hidden"></div>
                    </div>

                 </div>
            </div>
            
            
         <div
  className="relative w-full py-30 lg:py-25 transition-colors duration-500 rounded-[30px] overflow-hidden"
  style={{
   backgroundImage: "url('https://restan-nextjs.vercel.app/assets/img/shape/4.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  }}
>
  <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6">
    <div className="relative flex flex-col lg:flex-row justify-between items-center py-16 lg:min-h-[500px]">
      <div className="relative order-2 lg:order-1 w-full lg:w-2/5 flex justify-center lg:justify-start z-10 p-4 lg:p-0">

        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=1080&q=75"
          alt="Main Steak Dish"
          className="w-[260px] sm:w-[300px] md:w-[340px] lg:w-[320px] h-[260px] sm:h-[300px] md:h-[340px] lg:h-[320px] object-cover rounded-full border-4 border-black/10 shadow-2xl"
        />

        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F1.png&w=1080&q=75"
          alt="Salmon Salad"
          className="absolute top-[-40px] left-[10px] sm:left-[-30px] lg:left-[-130px] w-20 sm:w-24 lg:w-35 h-20 sm:h-24 lg:h-35 object-cover rounded-full border-2 border-white shadow-lg"
        />

        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F12.png&w=1080&q=75"
          alt="Burrata Cheese"
          className="absolute bottom-[-40px] left-[20px] sm:left-[-20px] lg:left-[-130px] w-20 sm:w-24 lg:w-35 h-20 sm:h-24 lg:h-35 object-cover rounded-full border-2 border-white shadow-lg"
        />

        <div className="absolute top-[30%] left-[52%] sm:top-[35%] sm:left-[55%] lg:top-[0%] lg:left-[25%] transform -translate-x-1/2 -translate-y-1/2 w-28 sm:w-32 lg:w-33 h-28 sm:h-32 lg:h-33 flex flex-col items-center justify-center rounded-full border-4 border-dotted border-[#A0845F] bg-white/80 text-gray-900 shadow-xl backdrop-blur-sm">
          <p className="text-xs sm:text-sm uppercase font-light">Save</p>
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            55%
          </h4>
        </div>
      </div>

      <div className="relative order-1 lg:order-2 w-full lg:w-3/5 p-4 lg:p-0 z-10 text-center lg:text-left dark:text-black">
        <p className="text-xl sm:text-base font-bold mb-2 text-gray-900">
          TODAY SPECIAL OFFER
        </p>
        <h2 className="font-['Cormorant Garamond'] font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-black mb-4 leading-tight">
          Explore Irresistible Promotions!
        </h2>
        <p className="text-gray-700 dark:text-gray-500 text-sm sm:text-base md:text-lg mb-8 max-w-xl ">
          Contrasted dissimilar get joy you instrument out reasonably. Again
          keeps at no meant stuff. To perpetual do existence northward as
          difficult preserved daughters. Continued at up to zealously necessary.
        </p>

        <a
          href="./order"
          className="inline-block py-3 px-8 sm:py-4 sm:px-10 font-bold text-sm sm:text-base lg:text-lg rounded-full text-white shadow-md hover:shadow-lg dark:text-black transition duration-300"
          style={{ backgroundColor: "#A0845F" }}
        >
          Order Today
        </a>
      </div>
    </div>
  </div>
</div>

             
            <OurSpecialsMenu accentColor={accentColor} accentTextColor={accentTextColor} />

          
<div className="relative w-full py-20 lg:py-0 bg-white dark:bg-black transition-colors duration-500">
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="relative flex flex-col lg:flex-row items-center justify-between py-16 lg:min-h-[500px] rounded-[30px] overflow-hidden" 
             style={{ backgroundColor: '#1E1E1E' }}>
            
            <div
                    className="relative order-2 lg:order-1 w-full lg:w-2/5 flex justify-center items-center h-[400px] lg:h-[500px] bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=2048&q=75')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                    >
                    <div className="absolute inset-0 bg-black/60"></div> 
                    </div>


            
            <div className="relative order-1 lg:order-2 w-full lg:w-3/5 p-4 lg:p-16 z-10 text-center lg:text-left text-white">
                <h2 className="font-['Cormorant Garamond'] font-extrabold text-4xl sm:text-5xl tracking-tight mb-6 leading-tight">
                    Are you Ready to Start <br /> your online Order?
                </h2>
                <p className="text-gray-300 text-base lg:text-lg mb-10 max-w-xl">
                    Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now
                </p>

               
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                    
                    
                    <a 
                        href="/appstore"
                        className={`inline-flex items-center justify-center py-3 px-6 font-bold text-lg rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto`}
                    >
                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11h-2V9h-2v2h-2v2h2v2h2v-2h2z"></path><path d="M7 11h-2v2h2zm10 0h-2v2h2zm-2 4h-2v2h2zm-8 0h-2v2h2z"></path><path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 16H5V5h14v14z"></path></svg>
                        App Store
                    </a>

                    <a 
                        href="/playstore"
                        className={`inline-flex items-center justify-center py-3 px-6 font-bold text-lg rounded-full text-white transition duration-300 shadow-md hover:shadow-lg w-full sm:w-auto`}
                        style={{ backgroundColor: accentColor }}
                    >
                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"></path></svg>
                        Play Store
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>


           
<OpeningHoursSection/>



<div className="mt-20 w-full text-center px-4 md:px-6 py-16 bg-[#f5f1eb] dark:bg-[#1a1a1a] rounded-3xl transition-colors duration-500">

  
  <div className="mb-14">
    <div className="flex items-center justify-center space-x-4 mb-3">
      <div className="h-[1px] w-10 bg-[#c19b76]"></div>
      <p className="text-[#c19b76] uppercase tracking-[3px] font-semibold text-sm">
        Master Chefs
      </p>
      <div className="h-[1px] w-10 bg-[#c19b76]"></div>
    </div>
    <h2 className="text-3xl md:text-4xl font-['Cormorant Garamond'] font-extrabold text-gray-900 dark:text-white">
      Meet Our Special Chefs
    </h2>
  </div>

 
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 justify-items-center">

    
    <div className="relative flex flex-col items-center group cursor-pointer transition-transform duration-500 hover:scale-[1.03]">
      <div className="relative rounded-full border-[3px] border-[#c19b76]/50 p-3 w-[260px] h-[260px] overflow-hidden shadow-lg transition-all duration-500 group-hover:border-[#c19b76] group-hover:shadow-[0_0_25px_rgba(193,155,118,0.4)]">
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSUClCdBGlkWJDP4_XwQ5P5oFSxR_RjpuF8pWs13cO0ZYGiHsQy"
          alt="Alexander Petllo"
          className="rounded-full w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-4">
          <a href="#" className="bg-white dark:bg-[#c19b76] text-black dark:text-white p-2 rounded-full hover:bg-[#c19b76] hover:text-white dark:hover:bg-white dark:hover:text-black transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="bg-white dark:bg-[#c19b76] text-black dark:text-white p-2 rounded-full hover:bg-[#c19b76] hover:text-white dark:hover:bg-white dark:hover:text-black transition">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="absolute bottom-[-28px] bg-[#c19b76] text-white px-10 py-3 rounded-md w-[85%] font-semibold shadow-md transition-all duration-500 group-hover:bg-[#b58963]">
        <h3 className="font-['Cormorant Garamond'] text-lg font-bold">Alexander Petllo</h3>
        <p className="text-xs tracking-wider">ASSISTANT CHEF</p>
      </div>
    </div>

   
    <div className="relative flex flex-col items-center group cursor-pointer transition-transform duration-500 hover:scale-[1.03]">
      <div className="relative rounded-full border-[3px] border-[#c19b76]/50 p-3 w-[260px] h-[260px] overflow-hidden shadow-lg transition-all duration-500 group-hover:border-[#c19b76] group-hover:shadow-[0_0_25px_rgba(193,155,118,0.4)]">
        <img
          src="https://media.istockphoto.com/id/1165683221/photo/chef-presents-something-on-a-black-background.jpg?s=612x612&w=0&k=20&c=G3_9EIg-nt-ZKh48hlvRMYWhizVU3uQuUcoNuhOVLKM="
          alt="Mendia Juxef"
          className="rounded-full w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-4">
          <a href="#" className="bg-white dark:bg-[#c19b76] text-black dark:text-white p-2 rounded-full hover:bg-[#c19b76] hover:text-white dark:hover:bg-white dark:hover:text-black transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="bg-white dark:bg-[#c19b76] text-black dark:text-white p-2 rounded-full hover:bg-[#c19b76] hover:text-white dark:hover:bg-white dark:hover:text-black transition">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="absolute bottom-[-28px] bg-[#c19b76] text-white px-10 py-3 rounded-md w-[85%] font-semibold shadow-md transition-all duration-500 group-hover:bg-[#b58963]">
        <h3 className="font-['Cormorant Garamond'] text-lg font-bold">Mendia Juxef</h3>
        <p className="text-xs tracking-wider">BURGER KING</p>
      </div>
    </div>

    
    <div className="relative flex flex-col items-center group cursor-pointer transition-transform duration-500 hover:scale-[1.03]">
      <div className="relative rounded-full border-[3px] border-[#c19b76]/50 p-3 w-[260px] h-[260px] overflow-hidden shadow-lg transition-all duration-500 group-hover:border-[#c19b76] group-hover:shadow-[0_0_25px_rgba(193,155,118,0.4)]">
        <img
          src="https://media.istockphoto.com/id/2163894521/photo/handsome-indian-asian-young-female-or-woman-chef-or-professional-cook-in-white-coat-and-hat.webp?a=1&b=1&s=612x612&w=0&k=20&c=TE0mIVn7B6YpMQvfF-VXqnmq-YS5o4b4vIQ1gSM-_oE="
          alt="Petro William"
          className="rounded-full w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-4">
          <a href="#" className="bg-white dark:bg-[#c19b76] text-black dark:text-white p-2 rounded-full hover:bg-[#c19b76] hover:text-white dark:hover:bg-white dark:hover:text-black transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="bg-white dark:bg-[#c19b76] text-black dark:text-white p-2 rounded-full hover:bg-[#c19b76] hover:text-white dark:hover:bg-white dark:hover:text-black transition">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="absolute bottom-[-28px] bg-[#c19b76] text-white px-10 py-3 rounded-md w-[85%] font-semibold shadow-md transition-all duration-500 group-hover:bg-[#b58963]">
        <h3 className="font-['Cormorant Garamond'] text-lg font-bold">Petro William</h3>
        <p className="text-xs tracking-wider">MAIN CHEF</p>
      </div>
    </div>

  </div>
</div>



<div className="mt-24 w-full bg-white dark:bg-black py-16 px-4 md:px-6">
  <div className="max-w-6xl mx-auto">

    
    <div className="text-center mb-12">
      <div className="flex items-center justify-center space-x-4 mb-3">
        <div className="h-[1px] w-10 bg-[#c19b76]" />
        <p className="text-[#c19b76] uppercase tracking-[3px] font-semibold text-sm">News & Blog</p>
        <div className="h-[1px] w-10 bg-[#c19b76]" />
      </div>
      <h2 className="text-3xl md:text-4xl font-['Cormorant Garamond'] font-extrabold text-gray-900 dark:text-white">
        Our Latest News & Blog
      </h2>
    </div>

   
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

      
      <div className="relative w-full">
       
        <div className="relative w-full h-[420px] md:h-[480px] rounded-md overflow-hidden shadow-lg">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75"
            alt="Picked up a Brussels burger"
            className="w-full h-full object-cover"
          />

         
          <div className="absolute top-82 right-6 z-30">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#c19b76] text-white rounded-sm flex flex-col items-center justify-center shadow-md">
              <span className="text-lg md:text-2xl font-extrabold leading-none">24</span>
              <span className="text-[10px] md:text-xs uppercase tracking-wider">Dec</span>
            </div>
          </div>
        </div>

      
        <div className="relative -mt-20 left-10 md:-mt-24">
          <div className="mx-4 md:mx-0 md:w-[85%] bg-white dark:bg-[#141414] rounded-md shadow-2xl p-6 md:p-8">
            <p className="text-[#c19b76] text-sm font-medium mb-2">BY MD SOHAG • BURGER, FOOD</p>
            <h3 className="text-xl md:text-2xl font-['Cormorant Garamond'] font-bold mb-4 text-gray-900 dark:text-white">
              Picked up a Brussels burger Sprouts with ham
            </h3>
            <a href="#" className="text-[#c19b76] font-semibold uppercase text-sm tracking-wider">
              Read More →
            </a>
          </div>
        </div>
      </div>

      
      <div className="relative w-full">
        
        <div className="relative w-full h-[420px] md:h-[480px] rounded-md overflow-hidden shadow-lg">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75"
            alt="This prefabricated passive house"
            className="w-full h-full object-cover"
          />

          
          <div className="absolute top-82 right-6 z-30">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#c19b76] text-white rounded-sm flex flex-col items-center justify-center shadow-md">
              <span className="text-lg md:text-2xl font-extrabold leading-none">18</span>
              <span className="text-[10px] md:text-xs uppercase tracking-wider">Nov</span>
            </div>
          </div>
        </div>

        
        <div className="relative -mt-20 left-10 md:-mt-24">
          <div className="mx-4 md:mx-0 md:w-[85%] bg-white dark:bg-[#141414] rounded-md shadow-2xl p-6 md:p-8">
            <p className="text-[#c19b76] text-sm font-medium mb-2">BY MD SOHAG • BURGER, FOOD</p>
            <h3 className="text-xl md:text-2xl font-['Cormorant Garamond'] font-bold mb-4 text-gray-900 dark:text-white">
              This prefabricated passive house is highly sustainable
            </h3>
            <a href="#" className="text-[#c19b76] font-semibold uppercase text-sm tracking-wider">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
           
            <RestanFooter/>
           
            <div className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition duration-300 text-gray-700 dark:text-white z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span className="text-xl">↑</span>
            </div>
        </div>
        </SafeHydrate>  
    );
}
