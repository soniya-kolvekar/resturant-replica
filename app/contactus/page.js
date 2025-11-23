"use client";
import React, { useState, useEffect } from 'react';
import RestanHeader from '../components/RestanHeader/page.js';
import RestanFooter from '../components/RestanFooter/page.js';
import SafeHydrate from '../components/SafeHydrate/page.js';
import OpeningHoursSection from '../components/Video/page.js';

const ContactUsPage = () => {

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
                    Contact Us
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/70">
                     <a href="#" className='style={{ color: "#fff"}}'>Home</a> &gt; contact-us
                </p>
            </div>
        </div>
    );

    return (
        <SafeHydrate>  
        <div className="min-h-screen bg-white dark:bg-[#111111] transition-colors duration-300">
            
            <HeroSection />

                           
                <section className="relative w-full py-20 bg-[#f9f9f9] dark:bg-[#111111] transition-colors duration-500">
                <div className="absolute inset-0 bg-[url('https://restan-nextjs.vercel.app/assets/img/shape/map.png')] bg-no-repeat bg-center opacity-10"></div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                   
                    <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-10 text-center shadow-md hover:shadow-lg transition-all duration-300">
                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=640&q=75" alt="Phone Icon" className="w-16 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Hotline</h3>
                    <p className="text-gray-700 dark:text-gray-400 font-medium">+4733378901</p>
                    </div>

               
                    <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-10 text-center shadow-md hover:shadow-lg transition-all duration-300">
                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fplaceholder.png&w=640&q=75" alt="Map Icon" className="w-16 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Location</h3>
                    <p className="text-gray-700 dark:text-gray-400">55 Main Street, The Grand Avenue 2nd Block, New York City</p>
                    </div>

                    
                    <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-10 text-center shadow-md hover:shadow-lg transition-all duration-300">
                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Femail.png&w=640&q=75" alt="Mail Icon" className="w-16 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Official Email</h3>
                    <p className="text-gray-700 dark:text-gray-400 font-medium">info@restan.com</p>
                    </div>
                </div>
                </section>

                <section className="relative w-full py-20 bg-white dark:bg-[#111111] transition-colors duration-500">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-[#a0845f] font-semibold uppercase tracking-[4px] mb-2">
                    Keep In Touch
                    </p>
                    <h2 className="font-['Cormorant Garamond'] text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-12">
                    Send us a Message
                    </h2>

                    <form className="bg-[#fafafa] dark:bg-[#1b1b1b] rounded-2xl shadow-xl p-10 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[#a0845f]"
                        />
                        <input
                        type="email"
                        placeholder="Email*"
                        className="w-full bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[#a0845f]"
                        />
                        <input
                        type="text"
                        placeholder="Phone"
                        className="w-full bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[#a0845f]"
                        />
                    </div>

                    <textarea
                        rows="6"
                        placeholder="Your Message *"
                        className="w-full bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[#a0845f]"
                    ></textarea>

                    <button
                        type="submit"
                        className="flex items-center justify-center space-x-2 bg-[#a0845f] hover:bg-[#8c7350] text-white px-6 py-3 rounded-md text-lg font-semibold mx-auto transition-all duration-300"
                    >
                        <span>📨</span>
                        <span>Get In Touch</span>
                    </button>
                    </form>
                </div>
                </section>


                <section className="w-full h-[500px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8946017303873!2d-74.00601558459459!3d40.71277597933069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316d44aaf3%3A0xadb5e4f4988b2e8d!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1706023938745!5m2!1sen!2sus"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </section>


            <OpeningHoursSection/>

          <RestanFooter />
 
            <div className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition duration-300 text-gray-700 dark:text-white z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span className="text-xl">↑</span>
            </div>
        </div>
        </SafeHydrate>  
    );
};

export default ContactUsPage;

