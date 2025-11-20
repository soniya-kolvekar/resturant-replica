"use client";
import React, { useState, useEffect } from 'react';
import RestanHeader from '../components/RestanHeader/page.js';
import RestanFooter from '../components/RestanFooter/page.js';
import SafeHydrate from '../components/SafeHydrate/page.js';
import BlogCard from "../components/BlogCard/page.js";

const blogData = [
    {
    image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=3840&q=75",
    date: "13 August, 2024",
    author: "Admin",
    title: "Picked Up A Brussel Burger Sprouts",
    description:
      "Indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.",
    link: "#",
  },
  {
    image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2-full.jpg&w=3840&q=75",
    date: "13 August, 2024",
    author: "Admin",
    title: "This prefabricated passive house highly",
    description:
      "Indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.",
    link: "#",
  },
  {
    image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=3840&q=75",
    date: "14 August, 2024",
    author: "John Baus",
    title: "Overcame breeding point concerns has.",
    description:
      "Indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.",
    link: "#",
  },
];

const BlogPage = () => {
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
                    Blog Standard
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/70">
                    <a href="#" className='style={{ color: "#fff"}}'>Home</a> &gt; blog-standard
                </p>
            </div>
        </div>
    );

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  const totalPages = Math.ceil(blogData.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogData.slice(startIndex, startIndex + postsPerPage);

  return (
    <SafeHydrate>
      <div className="min-h-screen bg-white dark:bg-[#111111] transition-colors duration-300">
        <HeroSection />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {currentPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}

          <div className="flex justify-center items-center gap-3 mt-12">
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              const isActive = currentPage === pageNumber;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition duration-300 ${
                    isActive
                      ? "bg-[#A0845F] text-white"
                      : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-[#A0845F] hover:text-white"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
        </div>

        <RestanFooter />

        <div
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition duration-300 text-gray-700 dark:text-white z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-xl">↑</span>
        </div>
      </div>
    </SafeHydrate>
  );
};

export default BlogPage;