"use client";
import React, { useState, useEffect } from 'react';
import RestanHeader from '../components/RestanHeader/page.js';
import RestanFooter from '../components/RestanFooter/page.js';
import SafeHydrate from '../components/SafeHydrate/page.js';

const AboutUsPage = () => {
 const accentColor = "#A0845F";

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
                    About Us
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/70">
                    <a href="#" className='style={{ color: "#fff"}}'>Home</a> &gt; about-us
                </p>
            </div>
        </div>
    );
return (
        <SafeHydrate>
        <div className="min-h-screen bg-white dark:bg-[#111111] transition-colors duration-300">
            
            <HeroSection />
            
<section className="relative w-full py-20 bg-[#f8f6f2] dark:bg-[#1a1a1a] text-center transition-colors duration-500">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    
    <h2 className="text-[1.25rem] md:text-[1.5rem] font-semibold text-[#a0845f] mb-14 tracking-wide flex items-center justify-center space-x-2">
      <span className="inline-block w-10 h-[1px] bg-[#a0845f]"></span>
      <span>OUR TRUSTED 8K HAPPY PARTNER</span>
      <span className="inline-block w-10 h-[1px] bg-[#a0845f]"></span>
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-items-center">
      <img
        src="https://restan-nextjs.vercel.app/assets/img/brand/1.png"
        alt="Partner 1"
        className="h-20 w-auto opacity-90 hover:opacity-100 transition duration-300"
      />
      <img
        src="https://restan-nextjs.vercel.app/assets/img/brand/2.png"
        alt="Partner 2"
        className="h-20 w-auto opacity-90 hover:opacity-100 transition duration-300"
      />
      <img
        src="https://restan-nextjs.vercel.app/assets/img/brand/3.png"
        alt="Partner 3"
        className="h-20 w-auto opacity-90 hover:opacity-100 transition duration-300"
      />
      <img
        src="https://restan-nextjs.vercel.app/assets/img/brand/4.png"
        alt="Partner 4"
        className="h-20 w-auto opacity-90 hover:opacity-100 transition duration-300"
      />
      <img
        src="https://restan-nextjs.vercel.app/assets/img/brand/5.png"
        alt="Partner 5"
        className="h-20 w-auto opacity-90 hover:opacity-100 transition duration-300"
      />
    </div>
  </div>
</section>

<section className="relative w-full py-24 bg-white dark:bg-[#111111] transition-colors duration-500 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative">

    <div className="relative w-full flex justify-center lg:justify-start">
      <img
        src="https://restan-nextjs.vercel.app/assets/img/about/2.jpg"
        alt="Restaurant Interior"
        className="rounded-2xl shadow-xl w-[90%] lg:w-[85%] h-[400px] sm:h-[500px] lg:h-[550px] object-cover"
      />

      <img
        src="https://restan-nextjs.vercel.app/assets/img/about/3.jpg"
        alt="Waitress Serving"
        className="absolute bottom-[-40px] right-[20px] sm:right-[60px] lg:right-[-60px] w-[50%] sm:w-[45%] lg:w-[55%] h-[200px] sm:h-[250px] lg:h-[300px] rounded-2xl shadow-2xl object-cover border-8 border-white dark:border-[#111111]"
      />
    </div>

    <div className="relative bg-[#f8f6f2] dark:bg-[#1a1a1a] rounded-2xl shadow-lg p-8 md:p-10 lg:p-12 z-10 lg:-ml-16 xl:-ml-24">
      <p className="uppercase text-[#a0845f] tracking-[3px] text-sm font-semibold mb-3">
        About Us
      </p>

      <h2 className="font-['Cormorant Garamond'] text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-snug mb-6">
        We Invite You To Visit Our Restaurant
      </h2>

      <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-8">
        A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. 
        The Patio Time Bar opens in the center of Florence. 
        The only bar inspired by the 1960s — it will give you an experience you’ll have a hard time forgetting.
      </p>

      <button className="px-6 py-3 bg-[#a0845f] text-white font-semibold rounded-md shadow-md hover:bg-[#8c7350] transition-all duration-300">
        Discover More
      </button>
    </div>
  </div>

  <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F2.png&w=3840&q=75"
    alt="Decorative fish"
    className="hidden xl:block absolute right-16 top-20 w-40 opacity-70 dark:invert"
  />
</section>

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
              style={{ backgroundColor: accentColor }}
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
        
         <RestanFooter />
         
            <div className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition duration-300 text-gray-700 dark:text-white z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span className="text-xl">↑</span>
            </div>
        </div>
        </SafeHydrate>
    );
};

export default AboutUsPage;
