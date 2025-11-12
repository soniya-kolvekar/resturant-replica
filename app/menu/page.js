"use client";
import React, { useState } from 'react';
import SafeHydrate from '../components/SafeHydrate/page.js';

const DATA = {
  breakfast: [
    { id: 1, title: "Chicken Alfredo", p: "Ricotta / Goat Cheese / Beetroot", img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F1.jpg&w=256&q=75", rateHalf: "$20", rateFull: "$40", extra: "Free Drinks" },
    { id: 2, title: "Fish Chips", p: "Atlantic / Chips / Salad / Tartare", img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F2.jpg&w=256&q=75", rateHalf: "$36", rateFull: "$70", extra: "Free Drinks" },
    { id: 3, title: "Ebony Fillet Steak", p: "Truffle Mash / Pepper Sauce", img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F3.jpg&w=256&q=75", rateHalf: "$44", rateFull: "$85", extra: "Free Drinks" },
    { id: 4, title: "Chicken Grill", p: "Ricotta / Goat Cheese / Beetroot", img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F4.jpg&w=256&q=75", rateHalf: "$20", rateFull: "$40", extra: "Free Drinks" },
  ],
  lunch: [
    { id: 5, title: "Brownies", p: "Ricotta / Goat Cheese / Beetroot", img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F6.jpg&w=256&q=75", rateHalf: "$34", rateFull: "$65", extra: "Extra Free Juice" },
    { id: 6, title: "Cheesecakes", p: "Atlantic / Chips / Salad / Tartare", img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F8.jpg&w=256&q=75", rateHalf: "$55", rateFull: "$100", extra: "Extra Free Juice" },
    { id: 7, title: "Muffins", p: "Truffle Mash / Pepper Sauce", img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F7.jpg&w=256&q=75", rateHalf: "$66", rateFull: "$120", extra: "Extra Free Juice" },
    { id: 8, title: "Cupcakes", p: "Ricotta / Goat Cheese / Beetroot", img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F5.jpg&w=256&q=75", rateHalf: "$20", rateFull: "$40", extra: "Extra Free Juice" },
  ],
  seafood: [
    { id: 10, title: 'Salmon Fry', p: 'Risotto / goat cheese / beetroot', rateHalf: '$40', rateFull: '$80', extra: 'Extra Free Juice', img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F9.jpg&w=256&q=75" },
    { id: 11, title: 'Pangasius or Basa', p: 'Atlantic / onion / salad / tartare', rateHalf: '$15', rateFull: '$30', extra: 'Extra Free Juice', img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F10.jpg&w=256&q=75" },
    { id: 12, title: 'Clams', p: 'Truffle / hash / pepper sauce', rateHalf: '$45', rateFull: '$90', extra: 'Extra Free Juice', img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F11.jpg&w=256&q=75" },
    { id: 13, title: 'Red Crab', p: 'Ricotta / goat cheese / beetroot', rateHalf: '$20', rateFull: '$40', extra: 'Extra Free Juice', img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F12.jpg&w=256&q=75" },
  ],
  beverage: [
    { id: 20, title: 'Wine', p: 'Goat cheese / beetroot', rateHalf: '$34', rateFull: '$65', extra: 'Extra Free Juice', img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F13.jpg&w=256&q=75" },
    { id: 21, title: 'Coffee', p: 'Atlantic / onion / salad / tartare', rateHalf: '$45', rateFull: '$90', extra: 'Extra Free Juice', img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F14.jpg&w=256&q=75" },
    { id: 22, title: 'Hot chocolate', p: 'Truffle / hash / pepper sauce', rateHalf: '$44', rateFull: '$85', extra: 'Extra Free Juice', img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F15.jpg&w=256&q=75" },
    { id: 23, title: 'Milk Shake', p: 'Ricotta / goat cheese / beetroot', rateHalf: '$20', rateFull: '$40', extra: 'Extra Free Juice', img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F16.jpg&w=256&q=75" },
  ],
  feedback: {
    quote: "Targeting consultation discover apartments. Indulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.",
    rating: 5,
    author: "Matthew J. Wyman",
    title: "The best food ever",
    role: "SENIOR CONSULTANT",
    people: [
      "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F5.jpg&w=256&q=75",
      "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=256&q=75",
      "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F7.jpg&w=256&q=75"
    ],
    mainImage: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F4.jpg&w=256&q=75"
  }
};

const FormInput = ({ label, type = 'text', defaultValue, selectOptions = [] }) => (
  <div>
    <label className="block text-sm font-medium text-gray-400">{label}</label>
    {selectOptions.length > 0 ? (
      <select 
        defaultValue={defaultValue} 
        className="mt-1 block w-full px-4 py-3 bg-[#242424] border border-gray-700 rounded-lg text-white focus:ring-amber-500 focus:border-amber-500 appearance-none text-base"
      >
        {selectOptions.map(option => (
          <option key={option} className="text-black bg-white">{option}</option>
        ))}
      </select>
    ) : (
      <div className="relative">
        <input 
          type={type} 
          defaultValue={defaultValue} 
          className="mt-1 block w-full px-4 py-3 bg-[#242424] border border-gray-700 rounded-lg text-white focus:ring-amber-500 focus:border-amber-500 text-base"
        />
        {type === 'date' && <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">📅</span>}
      </div>
    )}
  </div>
);

const MenuCard = ({ item }) => {
  const priceDisplay = (
    <div className="flex space-x-2 text-base sm:text-lg font-bold text-amber-700 dark:text-amber-500 min-w-[90px] justify-end">
      <span className="w-[45px] text-right">{item.rateHalf || item.rate}</span>
      <span className="w-[45px] text-right text-gray-500 dark:text-gray-400">{item.rateFull || (item.rate && '—')}</span>
    </div>
  );
  const renderLine = () => (
    <span className="flex-grow mx-2 h-px border-t border-dashed border-gray-300 dark:border-gray-600 self-center hidden sm:inline-block"></span>
  );
  return (
    <SafeHydrate>
    <div className="flex items-start space-x-3 mb-5 pb-3 border-b border-gray-100 dark:border-gray-800">
      <img 
        className="rounded-full h-14 w-14 sm:h-16 sm:w-16 object-cover flex-shrink-0 shadow-md" 
        src={item.img} 
        alt={item.title} 
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/64x64/333333/FFFFFF?text=FOOD"; }}
      />
      <div className="flex flex-col flex-grow">
        <div className="flex w-full items-end justify-between">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white flex-shrink-0 whitespace-nowrap">{item.title}</h3>
          {renderLine()}
          {priceDisplay}
        </div>
        <div className="flex w-full justify-between">
          <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm mt-1">{item.p}</p>
          {item.extra && <p className="text-amber-700 dark:text-amber-500 text-[10px] sm:text-xs mt-1 whitespace-nowrap hidden sm:block">{item.extra}</p>}
        </div>
      </div>
    </div>
    </SafeHydrate>
  );
};

const ImageMenuSection = ({ title, subtitle, items, imageSrc, reverse = false }) => {
  const flexOrder = reverse ? 'lg:flex-row-reverse' : 'lg:flex-row';

  return (
    <SafeHydrate>
    <div className={`max-w-6xl mx-auto py-10 sm:py-20 px-4 flex flex-col ${flexOrder} items-start justify-center`}>
      <div className={`w-full lg:w-1/3 mb-10 relative self-stretch ${reverse ? 'lg:ml-10' : 'lg:mr-10'}`}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hex-menu-label shadow-xl bg-amber-800 text-white p-6 text-center">
          <p className="text-3xl sm:text-4xl font-serif">Menu</p>
          <p className="text-xs sm:text-sm">{subtitle}</p>
        </div>
        <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden rounded-lg shadow-xl">
          <img 
            src={imageSrc} 
            alt={`${title} Display`} 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/8B4513/FFFFFF?text=Food+Display"; }}
          />
        </div>
      </div>
      <div className="w-full lg:w-2/3 relative"> 
        <div className="flex justify-end space-x-2 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 pr-3">
          <div className="w-[45px] text-right">Half</div>
          <div className="w-[45px] text-right">Full</div>
        </div>
        <div className="space-y-4">
          {items.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <style js="true">{`
        .hex-menu-label {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          width: 130px; 
          height: 130px; 
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 10;
        }
        @media (min-width: 640px) {
          .hex-menu-label {
            width: 150px;
            height: 150px;
          }
        }
      `}</style>
    </div>
    </SafeHydrate>
  );
};

const MenuSection = ({ mainTitle, subTitle, items }) => {
  return (
    <SafeHydrate>
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
      <div className="flex items-center justify-center mb-2">
        <span className="text-amber-700 dark:text-amber-500 text-xs">««««««</span>
        <h3 className="text-[10px] font-light tracking-widest text-gray-500 dark:text-gray-400 text-center uppercase mx-2">{subTitle}</h3>
        <span className="text-amber-700 dark:text-amber-500 text-xs">»»»»»»</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 text-gray-900 dark:text-white font-serif">{mainTitle}</h2>
      <div className="flex justify-end space-x-2 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 pr-3">
        <div className="w-[45px] text-right">Half</div>
        <div className="w-[45px] text-right">Full</div>
      </div>
      {items.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
    </SafeHydrate>
  );
};

const FeedbackSection = () => {
  const feedback = DATA.feedback;
  const renderStars = () => {
    return Array(feedback.rating).fill().map((_, i) => (
      <span key={i} className="text-amber-500 text-lg sm:text-xl">★</span> 
    ));
  };
  return (
    <SafeHydrate>
    <div className="max-w-7xl mx-auto py-10 sm:py-20 px-4 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="text-center mb-10 sm:mb-16">
        <div className="flex items-center justify-center mb-2">
          <span className="text-amber-700 dark:text-amber-500 text-xs">««««««</span>
          <h3 className="text-[10px] font-light tracking-widest text-gray-500 dark:text-gray-400 text-center uppercase mx-2">HAPPY CUSTOMERS</h3>
          <span className="text-amber-700 dark:text-amber-500 text-xs">»»»»»»</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white font-serif">Our Customers Feedback</h2>
      </div>
      
      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 512 512" fill="none">
          {/* CORRECTED SVG PATH CLOSURE */}
          <path d="M256 0C129.7 0 19 104.7 19 231c0 86.6 46.5 163.5 119.5 204.6C218.8 471.2 256 496 256 496s37.2-24.8 117.5-60.4C446.5 394.5 493 317.6 493 231c0-126.3-110.7-231-237-231z" fill="#D3D3D3"/>
          <path d="M256 16c-112.5 0-204 91.5-204 204 0 76.6 41 144.6 104.7 182.2C217.4 443.4 256 468 256 468s38.6-24.6 103.3-65.8C467 364.6 508 296.6 508 220c0-112.5-91.5-204-204-204z" fill="#C0C0C0"/>
          <path d="M256 16c-79.5 0-144 64.5-144 144 0 45.4 21.1 86.8 54.8 114.7C198.2 338.4 256 374 256 374s57.8-35.6 103.2-109.3C378.9 246.8 400 205.4 400 160c0-79.5-64.5-144-144-144z" fill="#B0B0B0"/>
        </svg>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12 relative z-10">
        <div className="relative mb-10 lg:mb-0 w-full max-w-xs sm:max-w-sm">
          <div className="hex-mask overflow-hidden shadow-2xl">
            <img 
              src={feedback.mainImage} 
              alt="Customer" 
              className="w-full h-full object-cover transform scale-105" 
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x350/C0C0C0/333333?text=Reviewer+Image"; }}
            />
          </div>
          {feedback.people.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`Reviewer ${index + 1}`} 
              className={`rounded-full border-4 border-white dark:border-gray-800 object-cover absolute shadow-lg transition-transform hover:scale-110
                ${index === 0 ? 'top-10 left-3/4 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16' : ''}
                ${index === 1 ? 'top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 h-14 w-14' : ''}
                ${index === 2 ? 'bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/2 h-16 w-16' : ''}
              `}
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/60x60/808080/FFFFFF?text=P"; }}
            />
          ))}
          <div className="absolute top-10 left-10 opacity-10 text-[100px] sm:text-[150px] dark:text-gray-600 text-gray-400 font-serif -z-10 hidden sm:block">🍔</div>
        </div>
        <div className="lg:w-1/2 p-4 sm:p-6 md:p-10 bg-white dark:bg-gray-900 rounded-lg shadow-2xl">
          <div className="flex items-center mb-2">
            {renderStars()}
            <span className="text-gray-500 text-xs sm:text-sm ml-4">(5/5)</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white font-serif">{feedback.title}</h3>
          <p className="text-sm sm:text-lg italic text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            &ldquo;{feedback.quote}&rdquo;
          </p>
          <hr className="border-t-2 border-amber-700 dark:border-amber-500 w-1/4 mb-4" />
          <div className='flex justify-between items-center'>
            <div>
              <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{feedback.author}</p>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-amber-700 dark:text-amber-500">{feedback.role}</p>
            </div>
            <div className="flex space-x-1">
              <span className="h-2 w-2 rounded-full bg-amber-700 dark:bg-amber-500"></span>
              <span className="h-2 w-2 rounded-full bg-gray-400"></span>
              <span className="h-2 w-2 rounded-full bg-gray-400"></span>
            </div>
          </div>
        </div>
      </div>
      <style jsx="true">{`
        .hex-mask {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          width: 280px; 
          height: 320px;
          margin: 0 auto;
        }
        @media (min-width: 640px) {
          .hex-mask {
            width: 300px;
            height: 350px;
          }
        }
      `}</style>
    </div>
    </SafeHydrate>
  );
};

const ReservationSection = () => {
  return (
    <SafeHydrate>
    <div 
      className="w-full py-10 sm:py-20 px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('https://wallpapercave.com/wp/nTwzv3B.jpg')" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 p-4 text-white mb-8 lg:mb-0">
          <p className="text-sm tracking-widest uppercase text-amber-500 mb-2">RESERVATION ••••</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Reservation Your Favorite Private Table</h2>
          <p className="text-base sm:text-lg mb-8 leading-relaxed text-gray-300">
            A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you an experience that you'll have a hard time forgetting.
          </p>
          <div className="flex space-x-6 sm:space-x-8 text-lg sm:text-xl font-semibold">
            <div className="hover:text-amber-500 cursor-pointer transition">Launch Menu<p className="text-xs sm:text-sm font-normal text-gray-400">30+ Items</p></div>
            <div className="hover:text-amber-500 cursor-pointer transition">Dinner Menu<p className="text-xs sm:text-sm font-normal text-gray-400">50+ Items</p></div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 p-6 sm:p-8 bg-[#181818] rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <form className="space-y-5 sm:space-y-6">
            <FormInput label="Phone" type="tel" defaultValue="+7333078901" />
            <FormInput label="Person" defaultValue="3 Person" selectOptions={['1 Person', '2 Person', '3 Person', '4+ Person']} />
            <FormInput label="Date" type="date" />
            <FormInput label="Time" defaultValue="12:00 PM" selectOptions={['12:00 PM', '1:00 PM', '7:00 PM', '8:00 PM']} />
            <button 
              type="submit" 
              className="w-full text-base sm:text-lg font-bold py-3 mt-6 sm:mt-8 rounded-lg bg-amber-700 text-white hover:bg-amber-800 transition duration-300 shadow-md"
            >
              Book A Table
            </button>
          </form>
        </div>
      </div>
    </div>
    </SafeHydrate>
  );
};

const Navbar = () => {
  const navItems = ['Home', 'Pages', 'Menu', 'Blog', 'Shop'];
  return (
    <SafeHydrate>
    <header className="fixed top-0 left-0 w-full z-20 bg-black shadow-md">
      <div className="h-8 sm:h-10 w-full bg-[#35250F] flex items-center justify-end px-4 sm:px-8">
        <div className="text-white text-[10px] sm:text-xs flex space-x-4">
          <span className="flex items-center mr-4">📞 +4733378901</span>
          <span className="flex items-center">📧 food@restan.com</span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4 text-white text-[10px] sm:text-sm ml-auto">
          <span className="mr-2">🇺🇸 English</span>
          <div className="flex space-x-2">
            <a href="#" className="hover:text-amber-300">F</a>
            <a href="#" className="hover:text-amber-300">T</a>
            <a href="#" className="hover:text-amber-300">I</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4 bg-black">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2z"/><path d="M12 6v6l4 2"/></svg>
            <span className="text-2xl sm:text-3xl font-serif font-extrabold text-white ml-2">RESTAN</span>
          </div>
          <nav className="hidden lg:flex space-x-8 items-center text-white text-base font-medium">
            {navItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className={`py-1 relative group transition-colors ${item === 'Menu' ? 'text-amber-500' : 'hover:text-amber-500'}`}
              >
                {item}
              </a>
            ))}
            <button className="p-2 border border-gray-500 rounded-full text-white hover:border-amber-500 transition-colors relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="20" r="1"/><circle cx="17" cy="20" r="1"/><path d="M2.5 2.5h3.0l2.6 12.4h11.2"/><path d="m19 15-1.5-6h-11"/><path d="M9 11h11"/></svg>
              <span className="absolute -top-1 -right-1 text-[10px] bg-amber-500 text-black rounded-full h-4 w-4 flex items-center justify-center font-bold">1</span>
            </button>
            <div className="text-sm border border-white p-3 hover:bg-[#35250F] hover:text-white transition duration-300 cursor-pointer rounded-lg bg-[#654321] text-white font-semibold">
              Reservation
            </div>
          </nav>
          <div className="lg:hidden text-white text-xl sm:text-2xl">
            ☰
          </div>
        </div>
      </div>
    </header>
    </SafeHydrate>
  );
};

export default function App() {
  const theme = 'light';
  
  return (
    <SafeHydrate>
    <div className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans transition-colors duration-500`}>
      <Navbar />
      
      {/* Hero Section: Fixed the vertical alignment overlap */}
      <div 
        className="bg-cover bg-center h-[450px] sm:h-[600px] w-full relative pt-[110px]" 
        style={{ backgroundImage: "url('https://preview.themeforest.net/item/restan-food-restaurant-next-js-template/full_screen_preview/59286405')" }} 
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center relative z-10">
          <h1 className="text-5xl sm:text-7xl md:text-8xl text-white font-serif font-extrabold leading-tight">
            Food Menu
          </h1>
          <p className="text-sm sm:text-lg text-gray-200 mt-4 ">Home-Food-menu</p>
        </div>
      </div>
      
      <ImageMenuSection
        title="Breakfast"
        subtitle="Breakfast"
        items={DATA.breakfast}
        imageSrc="https://th.bing.com/th/id/OIP.XFtqhIH4p9P-5mdfnCy0BAHaJQ?o=7&cb=ucfimgc2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
        reverse={false} 
      />
      <ImageMenuSection
        title="Lunch"
        subtitle="Lunch"
        items={DATA.lunch}
        imageSrc="https://i.pinimg.com/736x/10/14/f5/1014f53f156f22a6ec6fa96a9b30c029.jpg"
        reverse={true} 
      />
      <div 
        className="w-full bg-cover bg-center py-10 sm:py-20 px-4 mx-auto mt-10 sm:mt-20 flex flex-col lg:flex-row items-center overflow-hidden"
        style={{ backgroundImage: "url('https://wallpapercave.com/wp/nTwzv3B.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative z-10 w-full">
          <div className="lg:w-1/2 p-4 flex flex-col justify-center max-w-lg lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="text-4xl sm:text-6xl text-white font-serif font-semibold mb-4 sm:mb-8">30 MINUTES DELIVERY!</h2>
            <p className="text-base sm:text-xl text-white mb-8 sm:mb-12 max-w-lg lg:max-w-none">
              A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you an experience that you’ll have a hard time forgetting.
            </p>
            <button className="border-2 border-amber-900 p-3 sm:p-4 text-white text-lg sm:text-xl rounded-xl bg-amber-700 hover:bg-black hover:text-white max-w-fit cursor-pointer transition duration-300 flex items-center shadow-lg mx-auto lg:mx-0">
              🛒 Order Now
            </button>
          </div>
          <div className="flex-shrink-0 w-full lg:w-1/2 flex items-end justify-center lg:justify-end mt-8 lg:mt-0 relative">
            <img 
              className="h-72 sm:h-96 lg:h-[450px] w-auto object-contain transform translate-y-8 lg:translate-y-12" 
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F11.png&w=750&q=75" 
              alt="Delivery illustration"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F11.png&w=750&q=75"; }}
            />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto my-10 sm:my-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <MenuSection mainTitle="Sea Food" subTitle="FRESH FROM OCEAN" items={DATA.seafood} />
          <MenuSection mainTitle="Beverage" subTitle="DRINKS & WINE" items={DATA.beverage} />
        </div>
      </div>
      <FeedbackSection />
      <ReservationSection />
      <footer className="w-full bg-gray-900 dark:bg-black text-gray-400 py-6 sm:py-10 text-center">
        <p className="text-xs sm:text-base">&copy; {new Date().getFullYear()} Restan Bistro. All rights reserved.</p>
      </footer>
    </div>
    </SafeHydrate>
  );
}