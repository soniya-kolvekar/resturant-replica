"use client";
import React, { useState, useEffect } from 'react';

const OpeningHoursSection = () => {
  return (
<div className="relative w-full py-20 bg-white dark:bg-black transition-colors duration-500">
  <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6">
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 items-start">

     
      <div className="col-span-12 lg:col-span-8 relative rounded-[20px] overflow-hidden shadow-2xl">
        
        <div className="absolute inset-0 bg-black/50 z-10 mix-blend-multiply"></div>

       
        <iframe
          className="absolute top-[0%] left-0 w-full h-[110%] object-cover"
          src="https://www.youtube.com/embed/F3zw1Gvn4Mk?autoplay=1&mute=1&controls=0&loop=1&playlist=F3zw1Gvn4Mk&rel=0&modestbranding=1&playsinline=1"
          title="Restan Bistro Showcase"
          allow="autoplay; fullscreen; encrypted-media"
          
        ></iframe>

        
        <div className="pt-[65%]"></div>

       
        <div className="absolute inset-0 flex items-center justify-center text-white/10 font-extrabold text-8xl md:text-[150px] font-['Cormorant Garamond'] pointer-events-none z-20">
          RESTAN
        </div>
      </div>

     
      <div className="col-span-12 lg:col-span-4 relative z-10">
        <div
          className="bg-white dark:bg-gray-800 p-8 rounded-[20px] shadow-2xl shadow-gray-400/50 dark:shadow-black/70 
          mt-[-60px] lg:mt-0 lg:absolute lg:left-[-150px] lg:top-10 lg:w-[450px] 
          transition-all duration-500"
        >
          <h3 className="font-['Cormorant Garamond'] font-extrabold text-3xl text-gray-900 dark:text-white mb-6">
            Opening Hours
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-base mb-8">
            A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. 
            The Patio Time Bar opens in the center.
          </p>

          
          <div className="space-y-3 mb-8">
            <div className="flex justify-between text-gray-700 dark:text-gray-300">
              <span>Sunday To Tuesday:</span>
              <span>10:00 - 09:00</span>
            </div>
            <div className="flex justify-between text-gray-700 dark:text-gray-300">
              <span>Wednesday To Thursday:</span>
              <span>11:30 - 10:30</span>
            </div>
            <div className="flex justify-between text-gray-700 dark:text-gray-300">
              <span>Friday & Saturday:</span>
              <span>10:30 - 12:00</span>
            </div>
          </div>

         
          <div className="flex items-center space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md"
              style={{ backgroundColor: '#c19b76' }}
            >
              <span className="text-xl">📞</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Call Anytime</p>
              <p className="font-extrabold text-lg text-gray-900 dark:text-white">
                +964 733-378901
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
);
};

export default OpeningHoursSection;