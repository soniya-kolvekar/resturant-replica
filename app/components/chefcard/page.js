"use client";
import React from 'react';
import Link from 'next/link';

const ChefCard = ({ name, role, image, socialLinks }) => {
  const { facebook = "https://facebook.com", youtube = "https://youtube.com" } = socialLinks || {};

  return (
    <div className="flex flex-col items-center group relative w-full max-w-[350px] mx-auto">
      <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full p-[6px] border border-gray-400/50 dark:border-gray-600 bg-white dark:bg-transparent transition-transform duration-500 group-hover:scale-105 shadow-md">
        
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover" 
          />

         
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
            
       
            <a 
              href={facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#A0845F] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a 
              href={youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#A0845F] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>

          </div>
       
          
        </div>
      </div>

      <div className="relative -mt-12 z-20 w-[95%] drop-shadow-xl filter drop-shadow-lg">
        <div 
          className="bg-[#A0845F] text-white py-5 px-8 text-center relative transition-colors duration-300 group-hover:bg-[#8d7350]"
          style={{ 
            clipPath: "polygon(0 0, 100% 0, 92% 50%, 100% 100%, 0 100%, 8% 50%)" 
          }}
        >
           <h3 className="text-2xl font-['Cormorant_Garamond'] font-bold tracking-wide mb-1">
             {name}
           </h3>
           <p className="text-[11px] uppercase tracking-[0.2em] opacity-90 font-sans">
             {role}
           </p>
        </div>
      </div>

    </div>
  );
};

export default ChefCard;