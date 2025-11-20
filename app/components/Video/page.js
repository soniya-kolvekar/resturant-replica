"use client";
import React from "react";

const OpeningHoursSection = () => {
    return (
        <div className="relative w-full py-20 bg-white dark:bg-black transition-colors duration-500 mt-20 md:mt-28">

            <div className="relative max-w-[1250px] mx-auto px-4 md:px-6">

                
                <div className="
                    absolute top-[-110] left-1/4 -translate-x-1/2 
                    text-black/10 dark:text-white/10
                    font-extrabold 
                    text-8xl md:text-[130px] 
                    font-['Cormorant Garamond']
                    z-20 pointer-events-none
                ">
                    RESTAN
                </div>

                <div className="relative w-full flex flex-col lg:flex-row lg:space-x-0">

                    <div className="relative w-full lg:w-[65%] overflow-hidden shadow-2xl">

                        <iframe
                            className="absolute inset-0 w-full h-full object-cover"
                            src="https://www.youtube.com/embed/F3zw1Gvn4Mk?autoplay=1&mute=1&controls=0&loop=1&playlist=F3zw1Gvn4Mk&rel=0&modestbranding=1&playsinline=1"
                            allow="autoplay; fullscreen; encrypted-media"
                        ></iframe>

                        <div className="pt-[70%]"></div>
                    </div>

                    <div
                        className="
                            absolute 
                            right-0 top-1/2 lg:top-[-90px] 
                            lg:-translate-y-0 
                            -translate-y-1/2
                            w-full sm:w-[600px]   
                            bg-white dark:bg-gray-800 
                            shadow-2xl p-10
                        "
                    >
                        <h3 className="font-['Cormorant Garamond'] text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                            Opening Hours
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 text-base mb-8">
                            A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails.
                            The Patio Time Bar opens in the center.
                        </p>

                        <div className="space-y-4 text-gray-800 dark:text-gray-200 text-lg">
                            <div className="flex justify-between">
                                <span>Sunday To Tuesday:</span>
                                <span>10:00 - 09:00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Wednesday To Thursday:</span>
                                <span>11:30 - 10:30</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Friday & Saturday:</span>
                                <span>10:30 - 12:00</span>
                            </div>
                        </div>

                        <hr className="my-6 border-gray-300 dark:border-gray-700" />

                        <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 flex items-center justify-center bg-[#c19b76] rounded-full text-white text-2xl shadow-md">
                                📞
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Call Anytime</p>
                                <p className="font-bold text-xl text-gray-900 dark:text-white">
                                    +964 733-378901
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default OpeningHoursSection;
