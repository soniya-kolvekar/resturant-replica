"use client";
import React, { useState, useEffect } from 'react';
import SafeHydrate from '../SafeHydrate/page.js';
const RestanFooter = ({ accentColor = '#A0845F' }) => {
    const linkClass = `hover:text-[${accentColor}] transition duration-300 cursor-pointer`;
    const titleClass = "font-['Cormorant Garamond'] font-extrabold text-2xl text-white mb-6 tracking-wide";
    const iconWrapperClass = "flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-[#A0845F] transition duration-300 rounded-md";
    const contactIconClass = `text-lg text-[${accentColor}] flex-shrink-0`; 
    const SocialIcon = ({ iconText }) => (
        <a href="#" className={iconWrapperClass}>
            <span className="text-white text-lg">{iconText}</span>
        </a>
    );
    return (
        <SafeHydrate>
        <footer className="relative w-full bg-[#161616] pt-16 mt-16 transition-colors duration-500">
            <div className="absolute top-[-30px] left-0 w-full h-[30px] bg-[#161616]">
            </div>            
            <div className="w-full bg-black border-t border-white/10">
                <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 pt-16 pb-12">                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">                       
                        <div>
                            <h3 className={titleClass}>About Us</h3>
                            <p className="text-m text-white/70 mb-6 leading-relaxed">
                                Continued at zealously necessary is Surrounded sir motionless she end literature. Gay direction neglected.
                            </p>
                            <div className="flex space-x-3">
                                <SocialIcon iconText="f" /> 
                                <SocialIcon iconText="x" /> 
                                <SocialIcon iconText="Y" />
                                <SocialIcon iconText="in" />
                            </div>
                        </div>
                        <div>
                            <h3 className={titleClass}>Explore</h3>
                            <ul className="space-y-3 text-m text-white/70">
                                <li><a href="#" className={linkClass}>Company Profile</a></li>
                                <li><a href="#" className={linkClass}>About</a></li>
                                <li><a href="#" className={linkClass}>Help Center</a></li>
                                <li><a href="#" className={linkClass}>Career</a></li>
                                <li><a href="#" className={linkClass}>Features</a></li>
                                <li><a href="#" className={linkClass}>Contact</a></li>
                            </ul>
                        </div>            
                        <div>
                            <h3 className={titleClass}>Contact Info</h3>
                            <div className="space-y-5 text-m text-white/70">                              
                                <div className="flex items-start space-x-3">
                                    <span className={contactIconClass}>📍</span>
                                    <div>
                                        <p>175 10th Street, Office 375</p>
                                        <p>Berlin, De 21562</p>
                                    </div>
                                </div>                          
                                <div className="flex items-start space-x-3">
                                    <span className={contactIconClass}>📞</span>
                                    <div>
                                        <p>+123 34598768</p>
                                        <p>+554 34598734</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <span className={contactIconClass}>✉️</span>
                                    <p>food@restan.com</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className={titleClass}>Newsletter</h3>
                            <p className="text-m text-white/70 mb-4">
                                Join our subscribers list to get the latest news and special offers.
                            </p>
                            <div className="relative border-b border-white/50 pb-1 mb-4">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-transparent text-white/80 placeholder-white/50 focus:outline-none text-sm"
                                />
                                <button className="absolute right-0 top-0 text-white/80 hover:text-white transition">
                                    →
                                </button>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-white/70">
                                <input type="checkbox" id="privacy" className="form-checkbox bg-transparent border-white/50 checked:bg-[#A0845F]" />
                                <label htmlFor="privacy" className="select-none">I agree to the Privacy Policy</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#1b1b1b] py-8">
                <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-white/60">
                   
                        <div className="flex items-center space-x-200 text-m mb-2 sm:mb-0">
   
                            <div className="w-[100px] h-[30px] flex items-center justify-start">
                                <img 
                                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" // REPLACE with actual path to your sketch logo
                                    alt="Restan Logo Sketch"
                                    className="h-full brightness-0 invert opacity-30" 
                                />
                            </div>
                            <p className="text-m">Copyright ©2025. Restan. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </SafeHydrate>
    );
};
export default RestanFooter;