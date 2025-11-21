"use client";
import React from 'react';
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

      <footer className="relative  bg-white pt-50  pb-0 transition-colors duration-500">

        <div className="w-full bg-white  ">

          <div className="
                relative z-10 
                max-w-[1200px] mx-auto px-4 md:px-6 
                
                 bg-[#141414] border border-white/10 
                
                 -mt-32 
                shadow-2xl
                ">

            <div className="
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
              gap-x-12 gap-y-10 
              py-16 px-6 md:px-10
            ">
              <div>
                <h3 className={titleClass}>About Us</h3>
                <p className="text-m text-white/70 mb-6 leading-relaxed">
                  Continued at zealously necessary is Surrounded sir motionless she end
                  literature. Gay direction neglected.
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

<div className="w-full bg-[#0e0e0e] py-8">
              <div className="max-w-[1200px] h-[150px] mx-auto px-4 md:px-6 flex justify-between items-center">

            <div className="flex items-center space-x-4">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
                className="h-[60px] brightness-0 invert "
              />
            </div>
                          <p className="text-white/70 text-m ">© Copyright 2025. Restan. All Rights Reserved</p>

          </div>
        </div>

      </footer>
    </SafeHydrate>
  );
};

export default RestanFooter;
