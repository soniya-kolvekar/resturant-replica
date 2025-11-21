"use client";
import React from 'react';
import RestanHeader from '../components/RestanHeader/page.js';
import RestanFooter from '../components/RestanFooter/page.js';
import SafeHydrate from '../components/SafeHydrate/page.js';
import ChefCard from '../components/chefcard/page.js'; 

const ChefPage = () => {
  const accentColor = "#A0845F";

 
  const chefs = [
    { 
      id: 1, 
      name: "Alexander Petllo", 
      role: "Assistant Chef", 
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=640&q=75" 
    },
    { 
      id: 2, 
      name: "Mendia Juxef", 
      role: "Burger King", 
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F2.jpg&w=640&q=75" 
    },
    { 
      id: 3, 
      name: "Petro William", 
      role: "Main Chef", 
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F3.jpg&w=640&q=75" 
    },
    { 
      id: 4, 
      name: "Alexander Petllo", 
      role: "Assistant Chef",
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F8.jpg&w=1920&q=75" 
    },
    { 
      id: 5, 
      name: "Mendia Juxef", 
      role: "Burger King", 
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F9.jpg&w=1920&q=75" 
    },
    { 
      id: 6, 
      name: "Petro William", 
      role: "Main Chef", 
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F10.jpg&w=1920&q=75" 
    },
  ];

  const HeroSection = () => (
    <div className="relative w-full h-[40vh] min-h-[350px] md:h-[500px] lg:h-[600px] bg-black text-white overflow-hidden">
      <RestanHeader accentColor={accentColor} />

      <img
        src="https://restan-nextjs.vercel.app/assets/img/shape/5.jpg"
        alt="Chef Background"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"></div>

      <div className="relative w-full h-full flex flex-col items-center justify-center pt-16 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Cormorant_Garamond'] font-extrabold mb-3 md:mb-4 tracking-tight">
          Restaurant Chef
        </h2>
        <p className="text-xs sm:text-sm md:text-lg text-white/70 font-light tracking-wide">
           <a href="/" className="hover:text-[#A0845F] transition-colors">Home</a> &gt; Chef
        </p>
      </div>
    </div>
  );

  return (
    <SafeHydrate>
      <div className="min-h-screen bg-white dark:bg-[#111111] text-gray-900 dark:text-white font-sans transition-colors duration-500 w-full overflow-x-hidden">
        
        <HeroSection />

        <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          
          
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-3 md:mb-4">
               <span className="h-[1px] w-8 md:w-12 bg-[#A0845F] opacity-60"></span>
               <div className="text-[#A0845F] uppercase tracking-[0.2em] text-[10px] sm:text-xs md:text-sm font-bold flex items-center gap-2">
                  <span>⋘</span> MASTER CHEFS <span>⋙</span>
               </div>
               <span className="h-[1px] w-8 md:w-12 bg-[#A0845F] opacity-60"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Cormorant_Garamond'] font-bold text-gray-900 dark:text-white leading-tight">
              Meet Our Special Chefs
            </h2>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 md:gap-y-24 lg:gap-y-28 gap-x-6 lg:gap-x-10 place-items-center">
            {chefs.map((chef) => (
              <ChefCard 
                key={chef.id}
                name={chef.name}
                role={chef.role}
                image={chef.image}
              />
            ))}
          </div>

        </main>

        <RestanFooter />
        
       
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition duration-300 text-gray-700 dark:text-white z-50 border border-gray-200 dark:border-gray-600" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           <span className="text-lg md:text-xl">↑</span>
        </div>

      </div>
    </SafeHydrate>
  );
};

export default ChefPage;