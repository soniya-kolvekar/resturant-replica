"use client";
import React from 'react';
import SafeHydrate from '../components/SafeHydrate/page.js';
import RestanHeader from '../components/RestanHeader/page.js';
import RestanFooter from '../components/RestanFooter/page.js';
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
const accentColor = "#A0845F";
const HeroSection = () => (
  <div className="relative w-full h-[400px] md:h-[600px] bg-black text-white overflow-hidden">
    <RestanHeader accentColor={accentColor} />
    <img
      src="https://restan-nextjs.vercel.app/assets/img/shape/5.jpg"
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover opacity-80"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30"></div>
    <div className="relative w-full h-full flex flex-col items-center justify-center pt-20 px-4 text-center">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-['Cormorant_Garamond'] font-extrabold mb-4 tracking-tight">
        Food Menu
      </h2>
      <div className="flex items-center gap-2 text-sm md:text-lg text-white/80 font-light tracking-wide">
        <a href="/" className='hover:text-[#A0845F] transition-colors'>Home</a> 
        <span>&gt;</span> 
        <span>Food Menu</span>
      </div>
    </div>
  </div>
);
const MenuCard = ({ item }) => (
  <div className="flex items-start gap-4 mb-6 pb-4 border-b border-dashed border-gray-200 dark:border-gray-800 last:border-0 w-full">
    <img
      className="rounded-full h-16 w-16 sm:h-20 sm:w-20 object-cover flex-shrink-0 shadow-md border-2 border-white dark:border-[#222]"
      src={item.img}
      alt={item.title}
    />
    <div className="flex flex-col flex-grow min-w-0">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full mb-1">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate font-['Cormorant_Garamond']">
          {item.title}
        </h3>
        <span className="hidden sm:block flex-grow mx-4 mb-1.5 h-px border-t border-dotted border-gray-400/50"></span>
        <div className="flex items-center gap-3 mt-1 sm:mt-0">
          <span className="text-base sm:text-lg font-bold text-[#A0845F]">{item.rateHalf}</span>
          <span className="text-sm sm:text-base text-gray-400 line-through decoration-gray-400/50">{item.rateFull}</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{item.p}</p>
        {item.extra && (
          <span className="inline-block bg-[#A0845F]/10 text-[#A0845F] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider w-fit">
            {item.extra}
          </span>
        )}
      </div>
    </div>
  </div>
);
const ImageMenuSection = ({ title, subtitle, items, imageSrc, reverse = false }) => (
  <div className={`max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6 flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}>
    <div className="w-full lg:w-5/12 relative flex justify-center">
      <div className="relative w-full max-w-[400px] lg:max-w-full aspect-[4/5]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-32 h-32 sm:w-40 sm:h-40 flex flex-col justify-center items-center bg-[#A0845F] text-white text-center shadow-2xl"
             style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
          <p className="text-2xl sm:text-4xl font-['Cormorant_Garamond'] font-bold leading-none">Menu</p>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] mt-1">{subtitle}</p>
        </div>
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl relative bg-gray-200 dark:bg-[#111]">
           <div className="absolute inset-0 bg-black/10 z-10"></div>
           <img src={imageSrc} alt={title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
        </div>
      </div>
    </div>
    <div className="w-full lg:w-7/12">
      <div className="flex justify-end space-x-4 text-[10px] sm:text-xs font-bold text-gray-400 dark:text-gray-500 mb-6 uppercase tracking-widest border-b border-gray-200 dark:border-gray-800 pb-2">
        <span className="w-[45px] text-right">Half</span>
        <span className="w-[45px] text-right">Full</span>
      </div>
      <div className="flex flex-col">
        {items.map(item => <MenuCard key={item.id} item={item} />)}
      </div>
    </div>
  </div>
);
const MenuSection = ({ mainTitle, subTitle, items }) => (
  <div className="p-6 sm:p-8 bg-white dark:bg-[#121212] rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 h-full">
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-2 text-[#A0845F]">
        <span className="text-lg">❖</span>
        <h3 className="text-xs font-bold tracking-[0.2em] uppercase">{subTitle}</h3>
        <span className="text-lg">❖</span>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-['Cormorant_Garamond']">{mainTitle}</h2>
    </div>
    <div className="space-y-2">
      {items.map((item) => <MenuCard key={item.id} item={item} />)}
    </div>
  </div>
);
const FeedbackSection = () => {
  const feedback = DATA.feedback;
  return (
    <div className="relative w-full py-20 lg:py-32 bg-[#fcfbf9] dark:bg-[#0b0b0b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="relative w-full flex justify-center lg:justify-start order-1">
          <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px]">
            <div className="w-full h-full overflow-hidden shadow-2xl drop-shadow-2xl" 
                 style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
              <img src={feedback.mainImage} alt="Main Customer" className="w-full h-full object-cover transform scale-110" />
            </div>
            <div className="absolute top-[5%] right-[15%] sm:right-[18%] w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[3px] border-white dark:border-[#0b0b0b] overflow-hidden shadow-lg z-20 bg-gray-200">
              <img src={feedback.people[0]} alt="User 1" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[3px] border-white dark:border-[#0b0b0b] overflow-hidden shadow-xl z-20 bg-gray-200">
              <img src={feedback.people[1]} alt="User 2" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-[5%] right-[15%] sm:right-[18%] w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[3px] border-white dark:border-[#0b0b0b] overflow-hidden shadow-lg z-20 bg-gray-200">
              <img src={feedback.people[2]} alt="User 3" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="relative z-10 order-2 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start space-x-1 text-[#FFA41C] text-lg mb-6">
            {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
            <span className="text-gray-400 text-sm ml-2 font-sans pt-1 font-medium">(5/5 Reviews)</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-['Cormorant_Garamond'] font-bold text-gray-900 dark:text-white mb-8 leading-tight">The Best Food Ever</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed italic mb-12">“{feedback.quote}”</p>
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 dark:border-gray-800 pt-8 gap-6">
            <div className="text-center lg:text-left">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white font-['Cormorant_Garamond']">{feedback.author}</h4>
              <p className="text-xs font-bold text-[#A0845F] uppercase tracking-[0.2em] mt-2">{feedback.role}</p>
            </div>
            <div className="flex space-x-3">
              <span className="w-3 h-3 rounded-full border-2 border-[#A0845F] flex items-center justify-center"><span className="w-1.5 h-1.5 rounded-full bg-[#A0845F]"></span></span>
              <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ReservationSection = () => (
  <section className="relative w-full py-20 lg:pt-28 lg:pb-20 bg-[#0a0a0a] text-white overflow-visible z-30">
    <div className="absolute inset-0 w-full h-full opacity-40" style={{ backgroundImage: "url('https://th.bing.com/th/id/R.4c44ffb3128ea2386e94675af604a8e4?rik=rh4H8KfpM7jGNg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fBlack-Background-Images.jpg&ehk=GF%2fx2TdurjLr3LDjKtvz4uUtmU48SpF%2f2z3z1mHxg0E%3d&risl=&pid=ImgRaw&r=0')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-3 text-[#A0845F] mb-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em]">Reservation</span>
          <span className="text-lg">━</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Cormorant_Garamond'] font-medium leading-tight mb-8">Reservation Your Favorite <br className="hidden lg:block"/> Private Table</h2>
        <p className="text-white-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails.</p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-10 sm:gap-16">
          <div><h4 className="text-2xl font-bold font-['Cormorant_Garamond'] text-white">Launch Menu</h4><p className="text-white-500 text-sm mt-1 font-sans">30+ items</p></div>
          <div><h4 className="text-2xl font-bold font-['Cormorant_Garamond'] text-white">Dinner Menu</h4><p className="text-white-500 text-sm mt-1 font-sans">50+ items</p></div>
        </div>
      </div>
      <div className="w-full max-w-lg mx-auto lg:ml-auto relative">
        <div className="bg-[#0b0b0b] p-8 sm:p-10 rounded-[2rem] shadow-2xl border border-white/5 relative lg:-mb-32 z-20">
          <form className="space-y-6">
            <div><label className="block text-xs text-gray-400 mb-2 ml-1">Phone</label><input type="tel" defaultValue="+4733378901" className="w-full bg-transparent border border-gray-700 rounded-lg px-5 py-4 text-white focus:border-[#A0845F] focus:ring-0 outline-none transition-colors placeholder-gray-600" /></div>
            <div>
              <label className="block text-xs text-gray-400 mb-2 ml-1">Person</label>
              <div className="relative">
                <select className="w-full bg-transparent border border-gray-700 rounded-lg px-5 py-4 text-white focus:border-[#A0845F] focus:ring-0 outline-none appearance-none cursor-pointer"><option>3 Person</option><option>2 Person</option><option>4+ Person</option></select>
                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-xs">▼</span>
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-2 ml-1">Date</label>
              <div className="relative">
                <input type="text" placeholder="Date" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} className="w-full bg-transparent border border-gray-700 rounded-lg px-5 py-4 text-white focus:border-[#A0845F] focus:ring-0 outline-none appearance-none" />
                <span className="absolute right-1 top-1 bottom-1 w-12 bg-[#A0845F] rounded-md flex items-center justify-center pointer-events-none text-white shadow-lg">📅</span>
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-2 ml-1">Time</label>
              <div className="relative">
                <select className="w-full bg-transparent border border-gray-700 rounded-lg px-5 py-4 text-white focus:border-[#A0845F] focus:ring-0 outline-none appearance-none cursor-pointer"><option>12:00 PM</option><option>07:00 PM</option></select>
                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-xs">▼</span>
              </div>
            </div>
            <button type="button" className="w-auto px-10 py-4 bg-[#A0845F] hover:bg-[#8d7350] text-white font-bold rounded-lg transition-all mt-6 shadow-lg">Book A Table</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
export default function MenuPage() {
  return (
    <SafeHydrate>
      <div className="bg-white dark:bg-[#050505] text-gray-900 dark:text-gray-100 min-h-screen font-sans transition-colors duration-500 w-full overflow-x-hidden">
       <HeroSection />
      <ImageMenuSection title="Breakfast" subtitle="Breakfast" items={DATA.breakfast} imageSrc="https://th.bing.com/th/id/OIP.XFtqhIH4p9P-5mdfnCy0BAHaJQ?o=7&cb=ucfimgc2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" reverse={false} />
        <ImageMenuSection title="Lunch" subtitle="Lunch" items={DATA.lunch} imageSrc="https://i.pinimg.com/736x/10/14/f5/1014f53f156f22a6ec6fa96a9b30c029.jpg" reverse={true} />

        <div className="relative bg-cover bg-center py-20 px-4 mt-16 mb-20 flex flex-col lg:flex-row items-center z-10" style={{ backgroundImage: "url('https://wallpapercave.com/wp/nTwzv3B.jpg')" }}>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center relative z-10">
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left mb-12 lg:mb-0">
              <h2 className="text-4xl md:text-6xl text-white font-['Cormorant_Garamond'] font-bold mb-6 leading-tight">30 MINUTES <br className="hidden sm:block"/> DELIVERY!</h2>
              <p className="text-base md:text-xl text-white/90 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.</p>
              <button className="bg-[#A0845F] text-white px-10 py-4 text-lg font-bold hover:bg-white hover:text-black transition duration-300 shadow-2xl mx-auto lg:mx-0">🛒 Order Now</button>
            </div>
            <div className="w-full lg:w-1/2 flex items-end justify-center lg:justify-end relative">
              <img 
                className="h-[300px] md:h-[400px] lg:h-[550px] w-auto object-contain drop-shadow-2xl animate-float lg:-mb-32 lg:-mr-12" 
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F11.png&w=750&q=75" 
                alt="Delivery illustration"
              />
            </div>
          </div>
        </div>
<div className="max-w-7xl mx-auto my-20 px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <MenuSection mainTitle="Sea Food" subTitle="FRESH FROM OCEAN" items={DATA.seafood} />
            <MenuSection mainTitle="Beverage" subTitle="DRINKS & WINE" items={DATA.beverage} />
          </div>
        </div>
<FeedbackSection />
        <ReservationSection />
        <div className="pt-16 lg:pt-48">
            <RestanFooter />
        </div>
      <div className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer bg-white hover:bg-[#A0845F] text-black hover:text-white transition duration-300 z-50 border border-gray-200" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-xl">↑</span>
        </div>
      </div>
    </SafeHydrate>
  );
}